const path = require('path'),
      webpack = require('webpack'),
      HTMLWebpackPlugin = require('html-webpack-plugin'),
      {CleanWebpackPlugin} = require('clean-webpack-plugin'),
      CopyPlugin = require('copy-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
      TerserWebpackPlugin = require('terser-webpack-plugin'),
      { VueLoaderPlugin } = require('vue-loader'),
      isDev = process.env.NODE_ENV === "development",
      isProd = !isDev,
      optimization = () => {
        const config = {
            splitChunks: {
                chunks: 'all'
            }
        }
    
        if (isProd) {
            config.minimizer = [
                new OptimizeCssAssetsPlugin(),
                new TerserWebpackPlugin()
            ]      
        }
    
        return config
    }

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ['@babel/polyfill','./scripts/index.js'],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: optimization(),
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'article-one.html',
            template: './article-one.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'article-two.html',
            template: './article-two.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'article-three.html',
            template: './article-three.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'article-four.html',
            template: './article-four.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'article-five.html',
            template: './article-five.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'article-six.html',
            template: './article-six.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'article-css.html',
            template: './article-css.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'article-js.html',
            template: './article-js.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'article-js-two.html',
            template: './article-js-two.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'article-web.html',
            template: './article-web.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'article-html.html',
            template: './article-html.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'article-css-two.html',
            template: './article-css-two.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'article-salary.html',
            template: './article-salary.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'thankyou.html',
            template: './thankyou.html'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
              { 
                  from: path.resolve(__dirname, 'src/favicon.ico'),
                  to: path.resolve(__dirname, 'dist') 
              }
            ],
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new VueLoaderPlugin
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'src/postcss.config.js'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'src/postcss.config.js'
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|svg|webp|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        scss: 'vue-style-loader!css-loader!sass-loader'
                    }
                }
            }
        ]
    }
}