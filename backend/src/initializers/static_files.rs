use async_trait::async_trait;
use axum::{Router as AxumRouter, routing::get_service};
use loco_rs::{
    app::{AppContext, Initializer},
    Error, Result,
};
use std::path::Path;
use tower_http::services::ServeDir;

pub struct StaticFilesInitializer;

#[async_trait]
impl Initializer for StaticFilesInitializer {
    fn name(&self) -> String {
        "static-files".to_string()
    }

    async fn after_routes(&self, router: AxumRouter, _ctx: &AppContext) -> Result<AxumRouter> {
        let static_dir = Path::new("assets/static");
        if !static_dir.exists() {
            return Err(Error::string("Static files directory not found"));
        }

        let serve_dir = get_service(ServeDir::new(static_dir));

        Ok(router.fallback_service(serve_dir))
    }
} 