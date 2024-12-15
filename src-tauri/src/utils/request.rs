use reqwest;
use serde_json;

// 公用获取tk的逻辑
pub async fn get_tk_internal(uamtk: String) -> Result<String, String> {
    // 创建支持cookie的client
    let client = reqwest::Client::builder()
        .cookie_store(true)
        .build()
        .map_err(|e| e.to_string())?;

    // 创建请求头并设置必要的cookie
    let mut headers = reqwest::header::HeaderMap::new();
    headers.insert(
        "Cookie",
        format!("uamtk={}", uamtk).parse().unwrap()
    );
    headers.insert(
        reqwest::header::CONTENT_TYPE,
        "application/x-www-form-urlencoded".parse().unwrap()
    );
    headers.insert(
        reqwest::header::ORIGIN,
        "https://kyfw.12306.cn".parse().unwrap()
    );
    headers.insert(
        reqwest::header::REFERER,
        "https://kyfw.12306.cn".parse().unwrap()
    );

    // 构建请求对象
    let request = client
        .post("https://kyfw.12306.cn/passport/web/auth/uamtk")
        .headers(headers)
        .form(&[("appid", "otn")])
        .build()
        .map_err(|e| e.to_string())?;

    // 发送请求并处理响应
    let res = client.execute(request).await.map_err(|e| e.to_string())?;
    let text = res.text().await.map_err(|e| e.to_string())?;
    
    let json_value: serde_json::Value = serde_json::from_str(&text)
        .map_err(|e| format!("JSON解析错误: {}", e))?;
    
    serde_json::to_string(&json_value)
        .map_err(|e| format!("JSON格式化错误: {}", e))
}
