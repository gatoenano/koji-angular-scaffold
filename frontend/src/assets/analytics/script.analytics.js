import { environment } from '../../environments/environment';


// builds the google scripts files
export function googleAnalyticsHeadScripts() {
  if (environment.google_analytics_id) {
    const head = document.getElementsByTagName('head')[0];

    const googleAnalyticsFirstScript = document.createElement('script');
    googleAnalyticsFirstScript.async = true;
    googleAnalyticsFirstScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + environment.google_analytics_id;

    const googleAnalyticsSecondScript = document.createElement('script');
    googleAnalyticsSecondScript.innerHTML = '    window.dataLayer = window.dataLayer || [];\n' +
      '    function gtag(){dataLayer.push(arguments);}\n' +
      '    gtag(\'js\', new Date());\n' +
      '\n' +
      '    gtag(\'config\', \'' + environment.google_analytics_id + '\');';

    head.insertAdjacentElement('beforeend', googleAnalyticsFirstScript);
    head.insertAdjacentElement('beforeend', googleAnalyticsSecondScript);
  }
}

// sends url as a page view
export function googleAnalytics(url) {
  gtag('config', environment.google_analytics_id, { 'page_path': url });
}

// sends url as a page view on event
export function googleAnalyticsEvent(params) {
  // sends action in order to notice that this page view comes from an event not from redirection
  // https://developers.google.com/analytics/devguides/collection/gtagjs/events?hl=es#default-event-categories-and-labels
  gtag('event', 'page_view', { 'send_to': environment.google_analytics_id, 'page_title': params.title, 'page_path': params.path });

}
