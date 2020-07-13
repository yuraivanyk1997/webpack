const path = require("path");
module.exports = {
    mode : "development",
    entry : "./src/index.js",  //звідки вебпаку починати працювати
    output:{
        filename : "bundle.js", //всі зібрані скріпти перейдуть в файл з такою назвою
        path: path.resolve(__dirname,"dist") //і за таким шляхом
    }
}