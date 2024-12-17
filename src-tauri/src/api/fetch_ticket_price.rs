use reqwest;
use serde_json::Value;

#[tauri::command]
pub async fn fetch_ticket_price(
    train_date: String,
    from_station: String,
    to_station: String,
) -> Result<String, String> {
    let client = reqwest::Client::new();
    let url = format!("https://kyfw.12306.cn/otn/leftTicket/query?leftTicketDTO.train_date={}&leftTicketDTO.from_station={}&leftTicketDTO.to_station={}&leftTicketDTO.ticket_type=1", train_date, from_station, to_station);
    
    let res = client
        .get(url)
        .header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
        .header("Accept", "*/*")
        .header("Accept-Language", "zh-CN,zh;q=0.9")
        .header("Connection", "keep-alive")
        .header("Cookie", "JSESSIONID=1234567890;BIGipServerotn=1039139338.38945.0000")  // 你可能需要设置实际的 Cookie
        .send()
        .await
        .map_err(|e| e.to_string())?;
        
    let headers = res.headers().clone();
    let url = res.url().clone();
    let text = res.text().await.map_err(|e| e.to_string())?;
    let json: Value = serde_json::from_str(&text).map_err(|e| e.to_string())?;
    println!("JSON: {:?}", json);

    // 打印实际请求头和携带的参数
    println!("实际请求头: {:?}", headers);
    println!("实际请求参数: {:?}", url);
    Ok(text)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn test_fetch_ticket_price() {
        let result = fetch_ticket_price("2024-12-17".to_string(), "CSQ".to_string(), "CDW".to_string()).await;
        println!("Result: {:?}", result);
    }
}
