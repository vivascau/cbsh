# Playground

## Infomation
This project is based on angluar/material-start [https://github.com/angular/material-start] and ng-boilerplate [https://github.com/ngbp/ngbp].

design things are from **material-start** and bulid and test things from **ngbp**. so if you want to know how to bulid and test , just visit [https://github.com/ngbp/ngbp].

## Getting Started

**Packages install**

```
npm install
```

**Packages Update**
```
npm update
```
and then

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


### Running the App during Development

`npm start`

You can install http-server globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by running:

```
cd bulid
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `bulid/` directory.

### Running e2e tests

`node_modules/protractor/bin/webdriver-manager update`

`node_modules/protractor/bin/protractor  protractor_conf.js`
