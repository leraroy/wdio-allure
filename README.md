# wdio-allure

This repo contains tests written with WebdriverIO for "telnyx.com" website.

To manage project customized config files are used so user is able to run project without making any change in the code

Configuration files for different project browsers are located here:

[Chrome](https://github.com/leraroy/wdio-allure/blob/master/conf/wdio.chrome.conf.js) <br>
[Microsoft Edge](https://github.com/leraroy/wdio-allure/blob/master/conf/wdio.edge.conf.js) <br>
[Firefox](https://github.com/leraroy/wdio-allure/blob/master/conf/wdio.firefox.conf.js) <br>


## Setup

### Install software and check out the project

- Download and install Node.JS ( at least 16.X )
- Install Visual Studio Code
- Clone and checkout the github project 
- Go to the terminal and execute "npm install" command

### How to run the tests on windows
Go to the terminal and run any of the following commands:
 <ol>
   <li>Run the "npm run test" command for run test on the chrome, firefox, edge browsers</li>  
   <li>Run the "npm run test:firefox" command for run test on the firefox browser</li>  
   <li>Run the "npm run test:chrome" command for run test on the chrome browser</li>
   <li>Run the "npm run test:edge" command for run test on the edge browser</li>  
   <li>Run the "npm run test:main" command for run main test on the chrome, firefox, edge browsers</li>  
  </ol>

