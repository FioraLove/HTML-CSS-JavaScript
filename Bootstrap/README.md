[bootstrap官方文档](https://v3.bootcss.com/components/)<br>
<img src="../PHP/images/5d5e5c83ef06d.jpg" width=50% height=50% align="middle"/><br>
## 1.加载工具包
    to B:to B项目面向内网开发，给自身使用，比如OA系统
    to C:to 项目面向客户开发，给广大客户使用，比如电商
    1.<head>标签内导入css样式文件
    2.<body>标签底部导入jQuery与bootstrap文件包
    3.jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以jQuery必须放在前边)
    4.三端响应必须导入的文件：
        <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    
## 2. 布局容器
   -2.1 container 固定容器：.container有固定的宽度和页面居中的效果，其固定宽度是根据屏幕的大小来变化的
            
            屏幕类型	    页面宽度	container宽度
            xs(移动端)	    小于768px	等于页面宽度
            sm(平板)	    768~992px(不含)	750px
            md(中屏PC)	    992~1200px(不含)	970px
            lg(大屏PC)	    大于1200px	1170px
   -2.2 container-fluid：流式布局：作用和container一样，区别在于container-fluid宽度随着父容器变化而变化，没有固定宽度。
   -2.3 栅栏系统
   
        	超小屏幕     手机(<768px)	小屏幕平板 (≥768px)	中等屏幕桌面显示器(≥992px)	大屏幕大桌面显示器 (≥1200px)
            栅格系统行为	总是水平排列	开始是堆叠在一起的，当大于这些阈值时将变为水平排列C
      .container最大宽度	None （自动）	750px	                970px	                1170px
            类前缀	    .col-xs-	.col-sm-	            .col-md-	            .col-lg-
          列（column)数	        12(均满足黄金12分割)
          最大列（column)宽  自动	    ~62px	                ~81px	                    ~97px
            槽（gutter）宽	            30px（每列左右均有 15px）
            可嵌套	                            是
            偏移（Offsets）	                    是
            列排序	                            是
      
##### 注意：黄金十二圣宫标准写法（一定要按照此方法）
        <div class="ccontainer">  //包裹器
            <div class="row">  //row包裹
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">hello</div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">hello</div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">hello</div>
            </div>
        </div>
        
##### 知识点：
         1.一定要严格按照逻辑xs，sm，md，lg屏幕尺寸大小书写（每一个电子设备的屏幕大小固定的，其它不合格的屏幕尺寸会被覆盖掉）
         2.一定要满足黄精十二分割（相加总数为12）
         3.“行（row）”必须包含在 .container （固定宽度）或 .container-fluid （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
         4."row"一定不能修改
         5. col-lg/md/sm/xs-n :表示占n个空格，但总共只有12个空格
         5.最重要的来了：睁大眼睛
             <div class="ccontainer">  //包裹器
                <div class="row">  //row包裹
                    <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">hello</div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">hello</div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">hello</div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">hello</div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">hello</div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">hello</div>
                </div>
            </div>
        
    开始解读：1.首先黄精十二宫只有12个格子，在页面自适应情况下(即页面大小拖动时)
            2.页面大小为满足lg大屏幕PC时，其余的md,sm,xs都被覆盖，即展示2*6(一个div盒子占2个空格，一行总共最多展示6个div盒子，多了的div盒子向下移动)
            3.页面大小为满足md平板时，其余的lg,sm,xs都被覆盖，即展示4*3(一个div盒子占4个空格，一行总共最多展示3个div盒子，多了的div盒子向下一行排列)
            4.页面大小为满足sm时，其余的lg,md,xs都被覆盖，即展示6*2(一个div盒子占6个空格，一行总共最多展示2个div盒子，多了的div盒子向下一行排列)
            5.页面大小为满足xs平板时，其余的lg,sm,md都被覆盖，即展示12*1(一个div盒子占12个空格，一行总共最多展示1个div盒子，多了的div盒子向下一行排列)

## 3.响应式布局：
    class="visible-xs/sm/md/lg" 含义是：页面满足xs/sm/md/lg，才会展示        
    class="hide-xs/sm/md/lg" 含义是：页面满足xs/sm/md/lg，就会隐藏起来
