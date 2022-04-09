# antdCascaderDate
[![](https://badgen.net/github/stars/heerey525/antdCascaderDate?color=green)](https://github.com/heerey525/antdCascaderDate)
[![](https://badgen.net/github/forks/heerey525/antdCascaderDate?color=orange)](https://github.com/heerey525/antdCascaderDate)

对于antd Cascader 内中国省市区数据的补充，数据来源 2020月12月中华人民共和国县以上行政区划代码 http://www.mca.gov.cn/article/sj/xzqh/2020/20201201.html

202012及之前版本, 数据缺失补充说明：

> 缺失 三沙市下辖 西沙区、南沙区
> 缺失 海南省直辖县级市
> 缺失 新疆维吾尔自治区直辖县级市
> 缺失 湖北省直辖县级市
> 缺失 河南省直辖国家产城融合示范区

## 使用方法

### NPM方式

#### 安装

```sh
# npm
npm install @heerey525/china-division-data --save
```

#### 引用

```sh
# Cascader级联数据(js): antdOptions
# 省市二级联动数据(json): provinceData、cityData
import { antdOptions, cityData, provinceData } from '@heerey525/china-division-data'
```

### CDN方式

#### 引入

```sh
<script src="https://unpkg.com/@heerey525/china-division-data@1.0.1/dist/china-division-data.min.js"></script>
# 或者
<script src="https://cdn.jsdelivr.net/npm/@heerey525/china-division-data@1.0.1/dist/china-division-data.min.js"></script>
```

#### 使用

```sh
chinaDivision.antdOptions
```

### 手动引入

你需要的文件是：

Cascader级联数据：[cities.js](https://github.com/heerey525/antdCascaderDate/blob/master/src/cities.js)
省市二级联动数据：[city](https://github.com/heerey525/antdCascaderDate/tree/master/src/city)

用法参考：[antd级联选择](https://ant.design/components/cascader-cn/)
网页展示：[网页展示](https://heerey525.github.io/antdCascaderDate/dist/)

## 运行

### 本项目

```sh
# 克隆项目
git clone https://github.com/heerey525/antdCascaderDate.git
# 进入项目目录
cd antdCascaderDate
# 安装依赖
npm install
#运行
npm start
```

### [npm包](https://github.com/heerey525/antdCascaderDate/tree/master/npm)

```sh
# 克隆项目
git clone https://github.com/heerey525/antdCascaderDate.git
# 进入npm包目录
cd antdCascaderDate/npm
# 安装依赖
npm install
#运行
npm start
```

最近发现很多人star这个项目，所以我新开一个项目将生成此数据的方法公开，https://github.com/heerey525/antdCascaderDateMethod 欢迎star
