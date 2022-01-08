const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    entry: {
        "china-division-data": './src/index.js',   //为了输出两个文件，我们指定两个出口
        "china-division-data.min": './src/index.js',
    },
    output: {
        filename: "[name].js",  //因为是多个文件，所以这样写
        library: "chinaDivision",  //打包出去库的名字
        libraryTarget: "umd",   //定义的规范，打包库的目标选项，包含var 、 assign 、 this 、 window 、 global 、 commonjs 、 commonjs2 、 commonjsmodule 、 amd 、 umd 、 umd2 、 jsonp这么多 umd是最通用的规范 默认值是var
        libraryExport: "default"
    },
    mode: "none", //因为自带的只能指定一种环境，所以我们直接关闭，利用插件实现
    optimization: { //这个字段很强大，我们做webpack的代码分割，摇数，tree shake等都会用到这个字段
        minimize: true, //开启插件
        minimizer: [new TerserPlugin({
            test: /\.min.js/  //提供一个正则，表示符合有min.js的就进行压缩
        })]
    }
}
