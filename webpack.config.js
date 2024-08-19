const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const path = require('path')
module.exports = {
	mode: "development",
	entry: {
		popup: path.resolve('src/popup/popup.tsx'),
	},
	plugins: [
		new CopyPlugin({
		  patterns: [
			{ from: path.resolve('src/assets/manifest.json'), to: path.resolve('dist') },
			{ from: path.resolve('src/assets/icon-48.png'), to: path.resolve('dist')}
		  ],
		}),
		new HtmlPlugin({
			title: "react_boilerplate",
			filename: "popup.html",
			chunks: "popup.html"
		})
	  ],
	module: {
		rules : [
			{
				use : "ts-loader",
				test: /\.tsx$/,
				exclude: /node_modules/
			}
		]
	}, 
	resolve:{
		extensions: ['.tsx', '.ts', '.js']	
	},
	output: {
		filename: "[name].js"
	}
}
