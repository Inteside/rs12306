use crate::utils::request;

// 二维码登录时发送
#[tauri::command]
pub async fn fetch_qr_get_tk(uamtk: String) -> Result<String, String> {
    let tk = request::get_tk_internal(uamtk).await;
    Ok(tk.unwrap())
}

// 密码登录时发送
#[tauri::command]
pub async fn fetch_pwd_get_tk(uamtk: String) -> Result<String, String> {
    let tk = request::get_tk_internal(uamtk).await;
    Ok(tk.unwrap())
}


