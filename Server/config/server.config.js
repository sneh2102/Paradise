const dotenv = require("dotenv");

dotenv.config();

const env = "dev";
// const fbase= process.env.FIREBASE_ACCOUNT_INFO;   // This is the firebase account info
  

const app = {
    port: parseInt(process.env.PORT) || 5000,
    firebaseAccountInfo: fbase
      
};

const config = {
    local: { app, db: { uri: process.env.LOCAL_URI } },
    dev: { app, db: { uri: process.env.DEV_URI } },
    production: { app, db: { uri: process.env.PRODUCTION_URI } }
};

module.exports = config[ env || "dev" ];
