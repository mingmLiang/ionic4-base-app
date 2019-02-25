// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
  production: false
};

const serverUrl = {
  restPortal: 'http://120.24.80.15:8081/rest/portal/',
  property: 'http://120.24.80.15:8081/rest/property/',
  profile: 'http://120.24.80.15:8081/rest/profile/',
  parking: 'http://120.24.80.15:8081/rest/parking/',
  serverSocket: 'http://120.24.80.15:8081/',
  portal: 'http://120.24.80.15:8081/portal/',
  pano: 'http://120.24.80.15:8081/'
};
export { environment, serverUrl };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
