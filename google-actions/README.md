# Google Actions boilerplate

### Actions

Download `gactions CLI` from [here](https://developers.google.com/actions/tools/gactions-cli) <br>
Create a project on the Google Actions Console [here](https://console.actions.google.com) <br>
To update action, run `./gactions update --action_package action.json --project YOUR-PROJECT-ID` <br>

### fulfillment

The actions talk to a server that you provide. This is using `firebase` hosting,
and handles the https request with `firebase.https.onRequest` provided by `firebase-functions`.
[Here](https://developers.google.com/actions/sdk/deploy-fulfillment) is how to deploy functions
to `firebase`. The `functions/` folder needs to have a `node.js` `package.json`.
