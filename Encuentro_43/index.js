const moment = require("moment");
const imagesLib = require("./cool-image");
const loggear = require("./loggear");

let logMessage = moment().format("YYYY/MM/DD hh:mm:ss");
let fileName = "log.txt";

logMessage += imagesLib();

loggear(fileName, logMessage);
