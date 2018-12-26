// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  addressFeedBackForm: 'https://docs.google.com/forms/d/e/1FAIpQLSdZYe2BmeJ_DLwW1lbvu9bcLWe7_wZ3Rs5fdaw-q4g9zfys3g/viewform',
  agm: {
    api: 'AIzaSyB6EVRDfSAHTAkrx-VmXyKU7Y3qLSuD0Ag'
  },
  app: {
    title: "Toowong Ministry Maps",
    mapBase: 'http://localhost:4200/'
  },
  firebase: {
    apiKey: "AIzaSyAQ6yor3WnBT74kyErJVotz76y9x0A4f28",
   authDomain: "toowong-maps.firebaseapp.com",
   databaseURL: "https://toowong-maps.firebaseio.com",
   projectId: "toowong-maps",
   storageBucket: "toowong-maps.appspot.com",
   messagingSenderId: "1055117975996"
  },
  version: {
    current: '2.90.1',
    list: ['2.90.1','2.90','2.89.1','2.89','2.88', '2.87', '2.86','2.85', '2.84','2.83', '2.82', '2.8.1','2.8', '2.7.1', '2.7'],
    details: {
      '2.90.1': 'Fixed add address dialog issue. Handled null street address on maps.',
      '2.90': 'Added search and edit map for map updaters',
      '2.89.1': 'Remove not-at-homes on campaign mode',
      '2.89': 'Last used on chip now shows the day of the week, as well as the time.',
      '2.88': 'Added more updater features',
      '2.87': 'Fixed status issue',
      '2.86': 'Improved in-app map links, search maps are no longer limited to being visited twice, and are now processed semi-automatically. Added address queues.',
      '2.85': 'Supports language surveys when marking addresses as "Done".',
      '2.84': 'Allowed setting of ownership on started maps. Added tag for personal territories. Added notes field for map updaters.',
      '2.83': 'Added personal territory flag when assigning ownership. Added link to Google Maps from address list.',
      '2.82': 'Address list dialog now allows editing of addresses. Improved progress report.',
      '2.8.1': 'Improved progress report information.',
      '2.8': 'Added territory coverage information to the home page. Added release notes to the menu, logout button now part of the menu.',
      '2.7.1': 'Fixed map sharing feature.',
      '2.7': 'Campaign mode added. For map updaters, completed maps are now grayed out and cannot be easily started.'
    }
  }
};
