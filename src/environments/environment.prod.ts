// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  appVersion: 'v8.1.8',
  USERDATA_KEY: 'authf649fc9a5f55',
  isMockEnabled: true,
  apiUrl: 'api',
  appThemeName: 'Metronic',
  appPurchaseUrl: 'https://1.envato.market/EA4JP',
  appHTMLIntegration: 'https://preview.keenthemes.com/metronic8/demo1/documentation/base/helpers/flex-layouts.html',
  appPreviewUrl: 'https://preview.keenthemes.com/metronic8/angular/demo1/',
  appPreviewAngularUrl: 'https://preview.keenthemes.com/metronic8/angular/demo1',
  appPreviewDocsUrl: 'https://preview.keenthemes.com/metronic8/angular/docs',
  appPreviewChangelogUrl: 'https://preview.keenthemes.com/metronic8/angular/docs/changelog',
  msalConfig: {
    auth: {
      clientId: 'e04491f9-895e-4724-8ff6-2a99c21921e8',
      authority: 'https://login.microsoftonline.com/9f9d6315-bfeb-44e0-a998-39eae439fbc8'
    }
  },
  apiConfig: {
    scopes: ['ENTER_SCOPE'],
    uri: 'ENTER_URI'
  },
  appDemos: {
    'demo1': {
      'title': 'Demo 1',
      'description': 'Default Dashboard',
      'published': true,
      'thumbnail': './assets/media/demos/demo1.png'
    }
  }
};
