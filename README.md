# antdCascaderDate
[![](https://badgen.net/github/stars/heerey525/antdCascaderDate?color=green)](https://github.com/heerey525/antdCascaderDate)
[![](https://badgen.net/github/forks/heerey525/antdCascaderDate?color=orange)](https://github.com/heerey525/antdCascaderDate)

对于antd Cascader 内中国省市区数据的补充，数据来源 民政部全国行政区划信息查询平台 中华人民共和国县以上行政区划代码 http://xzqh.mca.gov.cn/advancedDataQueryDefaut

当前数据共 3212 条：省级单位 34 个，标准地级单位 333 个，省直辖县级单位 32 个，四个直辖市下辖区县 85 个（北京、天津、上海各 16 个，重庆 37 个），其余县级单位 2728 个。台湾省、香港特别行政区、澳门特别行政区在源数据中不展开下级单位。

2026年10月更新说明：

- 数据源换成民政部全量表后，旧版需人工补充的缺失项已自带：三沙市下辖西沙区、南沙区，海南省、新疆维吾尔自治区、湖北省直辖县级单位，河南省济源市；同时修正了旧版中西沙区、南沙区行政区划代码为空的问题
- 相较 202012 版本新增 25 个单位、减少 22 个单位：
  - 新增：330113 临平区、330114 钱塘区、350404 三元区、350405 沙县区、350604 龙海区、350605 长泰区、410307 偃师区、410308 孟津区、431181 祁阳市、450181 横州市、460302 西沙区、460303 南沙区、500157 两江新区、513402 会理市、520581 黔西市、532302 禄丰市、540481 米林市、540581 错那市、610305 凤翔区、610981 旬阳市、653228 和康县、653229 和安县、654203 沙湾市、659011 新星市、659012 白杨市
  - 减少：330103 下城区、330104 江干区、350402 梅列区、350403 三元区、350427 沙县、350625 长泰县、350681 龙海市、410306 吉利区、410322 孟津县、410381 偃师市、431121 祁阳县、450127 横县、500105 江北区、500112 渝北区、513425 会理县、520522 黔西县、532331 禄丰县、540422 米林县、540530 错那县、610322 凤翔县、610928 旬阳县、654223 沙湾县
- 重庆市的江北区（500105）、渝北区（500112）在民政部全量表中已由两江新区（500157）替代，若你的业务对这两个代码有存量依赖请注意兼容
- 已设立但源表尚未公布区划代码的岑岭县（喀什地区）、草湖市（新疆维吾尔自治区直辖）暂不在数据内，待源站补码后自动纳入

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

数据再生成方式：

```sh
cd antdCascaderDateMethod/getDate
npm install
npm run crawl // 抓取民政部全表，生成 getDate/gov.json
npm run build // 加工产物，输出 setDate/cities.js、province.json、city.json
```

将三个产物覆盖到本项目的 `src/` 与 `npm/src/` 两份目录即可。
