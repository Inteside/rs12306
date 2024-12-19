use reqwest;
use serde_json::Value;

#[tauri::command]
pub async fn fetch_ticket_price(
    train_date: String,
    from_station: String,
    to_station: String,
) -> Result<String, String> {
    let client = reqwest::Client::new();
    let url = format!("https://kyfw.12306.cn/otn/leftTicketPrice/query?leftTicketDTO.train_date={}&leftTicketDTO.from_station={}&leftTicketDTO.to_station={}&leftTicketDTO.ticket_type=1", train_date, from_station, to_station);
    let user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
    let res = client
        .get(url)
        .header("User-Agent", user_agent)
        .send()
        .await
        .map_err(|e| e.to_string())?;
        
    let text = res.text().await.map_err(|e| e.to_string())?;
    println!("原始响应内容: {}", text);
    let json: Value = serde_json::from_str(&text).map_err(|e| e.to_string())?;
    println!("JSON: {:?}", json);
    Ok(json.to_string())
}

#[cfg(test)]
mod tests {
    use super::*;
    #[tokio::test]
    async fn test_fetch_ticket_price() {
        let result = fetch_ticket_price("2024-12-19".to_string(), "CSQ".to_string(), "CDW".to_string()).await;
        match result {
            Ok(text) => println!("原始响应内容: {}", text),
            Err(e) => println!("错误: {}", e),
        }
    }
    
}
