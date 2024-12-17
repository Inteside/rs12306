use serde::{Deserialize, Serialize};
use serde_json::{Value, json};
use reqwest;

#[derive(Deserialize, Clone)]
pub struct TicketQuery {
    #[serde(rename = "leftTicketDTO.train_date")]
    pub train_date: String,
    #[serde(rename = "leftTicketDTO.from_station")]
    pub from_station: String,
    #[serde(rename = "leftTicketDTO.to_station")]
    pub to_station: String,
    pub purpose_codes: String,
}

#[tauri::command]
pub async fn fetch_grab_tickets(params: TicketQuery) -> Result<Value, String> {
    let client = reqwest::Client::new();
    
    // 构建查询字符串
    let query_string = format!(
        "leftTicketDTO.train_date={}&leftTicketDTO.from_station={}&leftTicketDTO.to_station={}&purpose_codes={}",
        params.train_date,
        params.from_station,
        params.to_station,
        params.purpose_codes
    );

    let full_url = format!("https://kyfw.12306.cn/otn/leftTicket/queryO?{}", query_string);

    let response = client
        .get(format!("https://kyfw.12306.cn/otn/leftTicket/queryO?{}", query_string))
        .header("Cookie", "JSESSIONID=1234567890;BIGipServerotn=1039139338.38945.0000")
        .header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
        .header("Connection", "keep-alive")
        .header("Accept", "*/*")
        .send()
        .await
        .map_err(|e| e.to_string())?;

    // 检查响应状态
    if !response.status().is_success() {
        return Err(format!("请求失败: {}", response.status()));
    }

    // 直接返回响应文本
    let text = response.text().await.map_err(|e| e.to_string())?;
    
    // 解析JSON并直接返回Value类型
    let json_response = serde_json::from_str::<Value>(&text)
        .map_err(|e| format!("JSON解析错误: {}", e))?;
    
    Ok(json_response)
}

// #[cfg(test)]
// mod tests {
//     use super::*;
//     use tokio::time::{sleep, Duration};

//     #[tokio::test]  
//     async fn test_periodic_ticket_query() {
//         // 创建测试查询参数
//         let query = TicketQuery {
//             train_date: "2024-03-20".to_string(),
//             from_station: "BJP".to_string(),  // 北京
//             to_station: "CSQ".to_string(),    // 长沙
//             purpose_codes: "ADULT".to_string(),
//         };

//         // 设置查询参数
//         let query_times = 5;  // 查询次数
//         let interval = Duration::from_secs(2);  // 查询间隔时间

//         println!("开始测试车票查询...");
//         println!("查询参数: 日期={}, 出发={}, 到达={}", 
//             query.train_date, query.from_station, query.to_station);

//         // 执行多次查询
//         for i in 1..=query_times {
//             println!("\n执行第 {} 次查询", i);
            
//             match fetch_grab_tickets(query.clone()).await {
//                 Ok(response) => {
//                     // 尝试解析响应数据
//                     match serde_json::from_str::<Value>(&response.to_string()) {
//                         Ok(json) => {
//                             println!("查询成功，状态码: {}", 
//                                 json["httpstatus"].as_i64().unwrap_or(-1));
                            
//                             // 检查是否有数据
//                             if let Some(data) = json["data"].as_object() {
//                                 println!("返回数据大小: {} 字节", response.to_string().len());
//                             } else {
//                                 println!("未找到有效数据");
//                             }
//                         },
//                         Err(e) => println!("JSON解析失败: {}", e)
//                     }
//                 },
//                 Err(e) => {
//                     println!("查询失败: {}", e);
//                 }
//             }

//             // 最后一次查询不需要等待
//             if i < query_times {
//                 println!("等待 {} 秒后进行下一次查询...", interval.as_secs());
//                 sleep(interval).await;
//             }
//         }

//         println!("\n测试完成！");
//     }

//     // 添加错误场景测试
//     #[tokio::test]
//     async fn test_invalid_station() {
//         let query = TicketQuery {
//             train_date: "2024-03-20".to_string(),
//             from_station: "INVALID".to_string(),  // 无效站点
//             to_station: "CSQ".to_string(),
//             purpose_codes: "ADULT".to_string(),
//         };

//         let result = fetch_grab_tickets(query).await;
//         assert!(result.is_err(), "应该返回错误，因为使用了无效的站点代码");
//     }

//     // 添加日期格式测试
//     #[tokio::test]
//     async fn test_invalid_date_format() {
//         let query = TicketQuery {
//             train_date: "2024/03/20".to_string(),  // 错误的日期格式
//             from_station: "BJP".to_string(),
//             to_station: "CSQ".to_string(),
//             purpose_codes: "ADULT".to_string(),
//         };

//         let result = fetch_grab_tickets(query).await;
//         assert!(result.is_err(), "应该返回错误，因为使用了错误的日期格式");
//     }
// }

