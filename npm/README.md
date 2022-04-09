<h1 align="center">
  @heerey525/china-division-data
</h1>

> 基于[antdCascaderDate](https://github.com/heerey525/antdCascaderDate), 以npm包形式提供中国省市区数据

如有更新数据的需求，请修改`china-division-data`版本

## 使用方法

### NPM

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
### CDN

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



### 参考写法

[npm包引入使用](https://github.com/heerey525/antdCascaderDate/tree/master/src/view/npm.js)