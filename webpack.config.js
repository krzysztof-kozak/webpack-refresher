const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",

	devtool: "inline-source-map",
	devServer: {
		host: "localhost",
		port: 8080,
		static: "./dist",
	},

	entry: {
		index: "./src/index.js",
		print: "./src/print.js",
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "Developement",
		}),
	],

	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	optimization: {
		runtimeChunk: "single",
	},
};
