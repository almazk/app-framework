# App Framework - [Initial release coming soon!](https://github.com/scriptPilot/app-framework/milestone/1)
:boom: **Does all the tricky stuff for you to develop, test, build and deploy iOS and Android like web applications.**

## Features
> The power is under the hood - but for sure, we have a [Demo App](https://app-framework.scriptpilot.de/).

**Beautiful**
- All well known [iOS](http://framework7.io/kitchen-sink-ios/) and [Material](http://framework7.io/kitchen-sink-material/) user interface components as well as native transitions
- Comprehensive icon fonts like [FontAwesome](http://fontawesome.io/), [Framework7](http://framework7.io/icons/), [Ion](http://ionicons.com/) and [Material Icons](https://material.io/icons/)

**Powerful**

- Easy realization of state based, reactive user interfaces with the power of [Vue.js](https://vuejs.org/)
- After restart, pages, tabs, scroll positions, panels, popups, form data and page component data will be restored
- User registration, password reset and login processes with [Firebase Authentication](https://firebase.google.com/docs/auth/)
- [Realtime database](https://firebase.google.com/docs/database/) and [file storage](https://firebase.google.com/docs/storage/) services with Firebase
- Application hosting with [Firebase Hosting](https://firebase.google.com/docs/hosting/)
- Offline capabilty, flexible routing and multi-language support

**Timesaving**

- Creation of a lightweight and well-organized project folder, prepared to push to [GitHub](https://github.com/about)
- Development server with live reload, perfectly to use together with [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) 
- Your application is splitted up in easy to maintain [single file components](https://vuejs.org/v2/guide/single-file-components.html)
- Generation of favicons, touch icons and splash screens out of a single image file
- Integrated code checks for [correctness](http://eslint.org/) and [standard conformity](http://standardjs.com/)
- Build process with version bump and compression of all HTML, CSS, JavaScript and image files
- Deployment to [Firebase Hosting](https://firebase.google.com/docs/hosting/) or your own server without downtime and with easy rollback solution

## Documentation

> Read less, code more - please open a ticket for any open question in our [Issue List](https://github.com/scriptPilot/app-framework/issues).

### Required knowledge

- [Node.js with npm](https://docs.npmjs.com/getting-started/what-is-npm)
- [Framework7](https://framework7.io/docs/) / [Framework7-Vue](https://framework7.io/vue/)

Optional

- [Vue](https://vuejs.org/v2/guide/)
- [Firebase](https://firebase.google.com/docs/web/setup)

### Setup your development environment

- Download *[package.json](https://raw.githubusercontent.com/scriptPilot/app-framework/master/demo-app/package.json)* file to an empty folder
- Run `npm install` to setup project folder

### Develop your application

- Run `npm run dev` to start development server at localhost:8080
- Adjust configuration in *package.json* file
- Save images to *images* folder
- Edit main component in *app.vue* file
- Edit page components in *pages* folder

### Test your application

- Run `npm run check` to check files according [Standard JavaScript](http://standardjs.com/index.html)
- Run `npm run fix` to fix files as far as possible according [Standard JavaScript](http://standardjs.com/index.html)
- Use [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) to debug your application

### Build your application

- Run `npm run patch` after bugfixes and improvements
- Run `npm run minor` after adding new functionality
- Run `npm run major` after breaking backward-capability

### Deploy your application

- Run `npm run dbrules` to overwrite the Firebase database rules with the content of *databaseRules.json*
- Run `npm run deploy` to push newest build to [Firebase Hosting](https://firebase.google.com/docs/hosting/)
 - For rollback: Go to the Firebase Console > Hosting
- *or* upload the latest *www/build* folder to your own server and after that the *www/.htaccess* file
 - For rollback
  - Change the version in *.htaccess* file on your server to previous one
  - Modify the string in *build-<previous>/manifest.appcache* file on your server as you want
 
### Backup your application

- Run `npm run backup` to save the Firebase database content to *databaseBackup.json* file
- Run `npm run zip` to save your project folder without *node_modules* and *build* folders to a zip file
- Backup your project folder frequently by
 - Pushing and synchronizing your changes to GitHub
 - Copying the zip file to any external drive or cloud
