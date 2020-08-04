// packages
import * as koji from 'koji-tools';


export const environment = {
  production: true,
  koji_environment: false,
  app_base_url: FRONTEND_URL,
  app_api_service_url: BACKEND_URL,
  app_google_analytics_id: koji.config.metadata.gaCode || '',
  app_cookie_domain: '',
};
