const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "", // මෙතනට SESSION_ID එක දෙන්න
MONGODB: process.env.MONGODB || "", // mongodb url එක දෙන්න
};
