

什么事JSONP

普通的ajax的get有什么问题？ 跨域的问题，如果我们当前页面的host和请求的目标url的host不一致，
浏览器会禁止我们用xhr (xmlHttpRequest)，进行访问请求。
这时候我们注意到script标签的src属性允许跨域请求
如果我们在请求时候，告诉服务器，我可以使用callback函数接收服务器返回的数据，服务器就可以返回这样一个js文件：

callback({
       数据内容
})

那么，我们如何自制一个jsonp访问的服务

1.创建一个script标签
2.把地址传进去： 原地址+ "? &+callback=fn  "
3.创建一个fn函数，用于接收返回的数据
    a. 把数据传给想要的人
    b. 把我们创建的script标签删掉


项目的结构：
1. Model层完成
2. 我们有两个路由：
    a. 电影列表
        i. template
        ii. controller
    b. 电影的详细信息
        i. template
        ii. controller

