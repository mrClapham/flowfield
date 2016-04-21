module.exports = {
    entry: './src/js/entry.js',
    output: {
        path: __dirname + "/dist",
        filename: 'dist.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
};
