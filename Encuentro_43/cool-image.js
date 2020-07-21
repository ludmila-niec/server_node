const coolImages = require("cool-images");

const obtenerImg = function () {
    let images = "";
    let logImages = coolImages.many(800, 800, 4);
    logImages.forEach((img) => {
        images += "\n" + img;
    });
    return images;
};

module.exports = obtenerImg;
