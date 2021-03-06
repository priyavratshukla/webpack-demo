const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  	mode: 'production', // development or production 
  	entry:{
  		app : './src/index.js'
  	},
  	devtool: 'inline-source-map', //TODO : remove when going for production 
  	devServer:{
  		contentBase: './dist',
  		hot: true
  	},
  	plugins:[
  		new CleanWebpackPlugin(['dist']),
  		new HtmlWebpackPlugin({
  			title : 'Output Management'
  		}),
  		new webpack.HotModuleReplacementPlugin()
  	],
  	output: {
    	filename: '[name].bundle.js',
    	path: path.resolve(__dirname, 'dist'),
    	publicPath: '/'
  	},
  	optimization: {
  		usedExports: true
  	},
  	module: {
	    rules: [
	       {
		        test: /\.css$/,
		        use: [
		           'style-loader',
		           'css-loader'
		        ]
	        },
	        {
	        	test: /\.(png|svg|jpg|gif)$/,
	        	use: [
	           		'file-loader'
	        	]
	       },
	       {
		        test: /\.(woff|woff2|eot|ttf|otf)$/,
		        use: [
		           'file-loader'
		        ]
	        },
	        {
		        test: /\.(csv|tsv)$/,
		        use: [
		           'csv-loader'
		        ]
	       },
	       {
		        test: /\.xml$/,
		        use: [
		           'xml-loader'
		        ]
	       }
	    ]
    }
};