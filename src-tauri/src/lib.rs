// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

mod api;
mod utils;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            api::user::fetch_qr_get_tk,
            api::user::fetch_pwd_get_tk,
            api::grab_tickets::fetch_grab_tickets,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
