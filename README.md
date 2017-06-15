
## Build Setup

``` 
   $ git clone "https://github.com/LY0528/vue-zhihu-daily"
   $ cd vue-zhihu-daily
   $ npm install
   $ npm run dev
 
```
## 技术栈
```
    vue/vue-cli/vue-router2/axios/mint-ui
```
## demo效果
<img src="https://github.com/LY0528/vue-zhihu-daily/raw/master/src/assets/img1.png" width="230" height="420">
<img src="https://github.com/LY0528/vue-zhihu-daily/raw/master/src/assets/img2.png" width="230" height="420">
<img src="https://github.com/LY0528/vue-zhihu-daily/raw/master/src/assets/img6.png" width="230" height="420">
<img src="https://github.com/LY0528/vue-zhihu-daily/raw/master/src/assets/img3.png" width="230" height="420">
<img src="https://github.com/LY0528/vue-zhihu-daily/raw/master/src/assets/img4.png" width="230" height="420">
<img src="https://github.com/LY0528/vue-zhihu-daily/raw/master/src/assets/img5.png" width="230" height="420">

## api

首先谢谢izzyleung提供的api，[看这里](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90#1-%E5%90%AF%E5%8A%A8%E7%95%8C%E9%9D%A2%E5%9B%BE%E5%83%8F%E8%8E%B7%E5%8F%96)

## 遇到的问题
```
1.api接口不支持jsonp跨域请求，我于是google了一番，终于发现
```
api在使用的过程中图片加载会出现403错误代码，解决的办法在[这里](http://www.cnblogs.com/dongcanliang/p/6655061.html)
