const fs = require("fs");

function log(file, logMessage) {
    let existFile = fs.existsSync(file);
    if (!existFile) {
        fs.writeFileSync(file, "");
    }
    fs.readFile(file, "utf8", (error, data) => {
        if (error) {
            console.log(error);
        }
        data += "\n" + logMessage;
        fs.writeFileSync(file, data);
    });
}

module.exports = log;
