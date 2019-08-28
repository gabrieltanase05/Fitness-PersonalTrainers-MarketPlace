const path = require("path");
const entryPath = "./";
const entryFile = "main.jsx";

module.exports = {
    entry:`${entryPath}src/${entryFile}`,
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,`${entryPath}js/out.js`)
    },
    devServer: {
        contentBase: path.join(__dirname,`${entryPath}`),
        publicPath: "",
        compress: true,
        port: 3001
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};