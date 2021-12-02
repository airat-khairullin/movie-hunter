// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    config: {
      apiKey: 'AIzaSyBV3GWVqZlOBnZeI6XYtc0UxcIMKo5N7Nw',
      authDomain: 'movie-hunter-firebase.firebaseapp.com',
      projectId: 'movie-hunter-firebase',
      storageBucket: 'movie-hunter-firebase.appspot.com',
      messagingSenderId: '228631920125',
      appId: '1:228631920125:web:356f7e8ff862b87da7ed94'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
