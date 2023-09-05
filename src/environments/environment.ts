// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appVersion: 'v8.1.8',
  USERDATA_KEY: 'authf649fc9a5f55',
  isMockEnabled: true,
  apiUrl: 'api',
  appThemeName: 'Metronic',
  appPurchaseUrl: 'https://1.envato.market/EA4JP',
  appHTMLIntegration:
    'https://preview.keenthemes.com/metronic8/demo1/documentation/base/helpers/flex-layouts.html',
  appPreviewUrl: 'https://preview.keenthemes.com/metronic8/angular/demo1/',
  appPreviewAngularUrl:
    'https://preview.keenthemes.com/metronic8/angular/demo1',
  appPreviewDocsUrl: 'https://preview.keenthemes.com/metronic8/angular/docs',
  appPreviewChangelogUrl:
    'https://preview.keenthemes.com/metronic8/angular/docs/changelog',
  msalConfig: {
    auth: {
      clientId: 'c816631c-038f-47c6-bd7c-eaf1d1dec2cc',
      authority: 'https://login.microsoftonline.com/ea5c7b73-3961-46e5-b7db-571fd585c11f'
    }
  },
  apiConfig: {
    scopes: ['User.Read', 'profile','openid', 'email'],
    uri: 'http://localhost:4200'
  },
  appDemos: {
    demo1: {
      title: 'Demo 1',
      description: 'Default Dashboard',
      published: true,
      thumbnail: './assets/media/demos/demo1.png',
    }
  }
}
