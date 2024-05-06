const dotenv = require("dotenv");

dotenv.config();

const env = "dev"; // local | dev | production
const fbase={
    "type": "service_account",
    "project_id": "paradise-37930",
    "private_key_id": "c0827ece9a4ce913832a8fc89e81ade5c54524aa",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCadCWthX5BVcYK\nQTCTzYkNtBcuMsxy9tC9l/e0OzNBbkWTz9x8WTxP1d4EQZti9/s6XWge0KmAtcaG\nFRgGbC2hMsnRoBuYo7zSOdp9OAsT7hW03hKQr5Xljze9Dj2PN1M/apRTwQ8PehHN\n+CC3HaXvPGStqljAlFnV4UxeCXweQSVH/ZsAqi49Orhr/ZDPF0r/YK/wTpIhUwUR\nUhmRHpG38IrSDFPr2UF3FhTex/xW/p2EOL04dkrcVHbuwsMPzGspNlKPNLD8P3dd\nEaNG4jAwPfI+XdKIY0pOcv4SSzMgZnuN8HIiYrImPPp4MwqSdsLg6Gn0X+eBPXQA\nE9Cba+N7AgMBAAECggEAHCD+AamXsk9sN07jCW/7v16mgBfpSyCvKHBGQPEtJwPt\nsPtApPbdeI6zFeRa573Q57K+NSp8TEAOrTmnO/g0oTBuN/qoO/bJ+yFlLLvprJIG\nKv/ssqP/sSSRmqE+zdfeFeUTqWM2GnP5TSEc2CySnUzK6yPkcQIzkDOtZEzm6V1c\naFETfb/eZbX1/XMO7ZOEaqH+89fWLxc7wq7zGjlxRWdRE157GW7f/JwElNxYa8St\ng7KvhTDZywfbhOMwo8rKEiMMazxaKags/aOej4bxgI7/0BXHTmeREuOvpj8gWhkm\nWEFjaNVvOXsYTxqO/RguL75a8DpcSKuw27ecbyXJZQKBgQDQ1gRMgFBBgGO0C471\nefS6L432uZfyvd4hocMAlI2djBb3P62qyMVvJrYUcpd2cdNDYckvbfdzYdUUcsoK\nNLAOnafPsn39MK6W9wp9ooSsoSkJEbiW+te/pPPpupYoQxSNwL4mo+IDW+0xcxnx\nNugOLfojtqexujpDKS6wvAO9pQKBgQC9VfvXedr3nEMzGrvVzHGzVIRTs2uQBane\npM+3VogQPXfTJvbvk319aPG9rVdfBGK8sY7f+VpN6Nu1j2vFm4Rj51JxcJXbHvuq\ng0rNa7VroggQ3P540SSkcbwyTAtAyBM8XrAsXhCiSZzzfqD2nkqL/bigom+VtKcq\nM/uRNl2SnwKBgB0FEHXdAsoHYFN9o7EC8HoK76xQYAgQUFTWGLX07rTs6agUBjsM\nSTtH4td2kQuZh6T+aqmXm2JCPwznYqIGbkyppc8b25wabrh1vdR1iABBKOWku8Tn\nOKHd9zMMhZ80qx+DoCjYbyjOVmifuQQnABowU2kxEZ6F5WC90Uon5lEtAoGAJwzt\n9YJXjEx5e7fe1/jj1pXu+Qh/feP9JkOd5/V7+MWEylM2CTHFZzFW8sUmyR0xdDO3\nATD/1CPb9PWQx+AMjUJvuZ/7+IbKZ1/O9NFrSLjRqxC5l5ejVBt1MnaGt6TMet4Y\nvf3ktmQyb/JFJrh9LaR2CQOXuivZcpXoJAovgIcCgYEAtxHfJxUqMWK+4bNuahOt\nHMLC8SY4/Y1Q0J2U25/VC8D5Src7ZPFQBeYZyw55uZZZSPoBX0WlzM2HFSMJdDdB\nJC8brn9tvmktLneNR4PW4my3dHiJjysqG/n+Mskjlcd5nKURqr7YEtvWFSa4yksu\n6TH9Qbaeq+nNxT6SYYwXk88=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-y6gza@paradise-37930.iam.gserviceaccount.com",
    "client_id": "108871267995054091236",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-y6gza%40paradise-37930.iam.gserviceaccount.com"
  }
  

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
