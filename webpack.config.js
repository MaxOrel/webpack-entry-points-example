const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        // entry может быть не просто строкой, а объектом.
        // Где каждый ключ - имя точки входа. Таким образом
        // можно сделать по одной точке входа на кажую страницу
        index: './src/index.js',
        about: './src/about.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // строка в filename поддерживает шаблоны, они задаются в квадратных скобках,
        // вместо которых подставляется какое-то значение.
        // Подробнее можно на сайте Вебпака почитать - https://webpack.js.org/configuration/output/
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // здесь тоже поддерживаются шаблоны в строке
            filename: '[name].bundle.css'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
    }
};
