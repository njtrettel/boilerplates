'use strict';
const functions = require('firebase-functions');
const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;

const mainIntent = (app) => {
  app.tell('This is the main intent');
};

const respond = (app) => {
  app.tell('You said ' + app.getRawInput());
};

const indirect = (app) => {
  const inputPrompt = app.buildInputPrompt(false, 'Okay, what\'s the number?');
  app.ask(inputPrompt);
};

const direct = (app) => {
  const number = app.getArgument('number');
  app.tell('You said ' + number);
};

exports.echoApp = functions.https.onRequest((req, res) => {
  const app = new ActionsSdkApp({request: req, response: res});

  let actionMap = new Map();
  actionMap.set(app.StandardIntents.MAIN, mainIntent);
  actionMap.set(app.StandardIntents.TEXT, respond);
  actionMap.set('echo.intent.INDIRECT', indirect);
  actionMap.set('echo.intent.DIRECT', direct);
  actionMap.set(null, (app) => {app.tell('O noes')});
  app.handleRequest(actionMap);

});
