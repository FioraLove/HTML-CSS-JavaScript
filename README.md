# ```HTML知识点```<br>
<img src="PHP/images/5ccf9d5619ba5.jpg" height=50% width=50%/><br>

## 1.1 HTML视频Video播放
    最好的 HTML 解决方法：
    以下实例中使用了 4 种不同的视频格式。HTML 5 <video> 元素会尝试播放以 mp4、ogg 或 webm 格式中的一种来播放视频。如果均失败，则回退到 <embed> 元素。
    
#### HTML5 +<object>+<embed>mp3文件路径为相对路径
    
    <video width="320" height="240" controls>
      <source src="movie.mp4" type="video/mp4">
      <source src="movie.ogg" type="video/ogg">
      <source src="movie.webm" type="video/webm">
      <object data="movie.mp4" width="320" height="240">
        <embed src="movie.swf" width="320" height="240">
      </object>
    </video>
#### 拓展：js与DOM操作设置视频播放器的功能（视频暂停，缩小，放大）
    <div style="text-align:center"> 
      <button onclick="playPause()">播放/暂停</button> 
      <button onclick="makeBig()">放大</button>
      <button onclick="makeSmall()">缩小</button>
      <button onclick="makeNormal()">普通</button>
      <br> 
      <video id="video1" width="420">
        <source src="mov_bbb.mp4" type="video/mp4">
        <source src="mov_bbb.ogg" type="video/ogg">
        您的浏览器不支持 HTML5 video 标签。
      </video>
    </div> 

    <script> 
    var myVideo=document.getElementById("video1"); 

    function playPause()
    { 
        if (myVideo.paused) 
          myVideo.play(); 
        else 
          myVideo.pause(); 
    } 

        function makeBig()
    { 
        myVideo.width=560; 
    } 

        function makeSmall()
    { 
        myVideo.width=320; 
    } 

        function makeNormal()
    { 
        myVideo.width=420; 
    } 
    </script>
## 1.2 audio音频文件的播放设置（MP3文件为相对路径）
		<audio controls height="100" width="100">
			<source src="../static_audio/yiluxiangbei.mp3" type="audio/mpeg">
			<source src="../static_audio/yiluxiangbei.ogg" type="audio/ogg">
			<embed height="50" width="100" src="../static_audio/yiluxiangbei.mp3">
		</audio>
		
		<audio>标签的属性值有：
		autoplay：如果设置该属性，音频将自动播放，值为：autoplay；
		controls：如果设置该属性，则显示音频控件（播放/暂停按钮），值：controls；
		loop：如果设置该属性，则音频重复播放，值为：loop；
		muted：如果设置该属性，则音频输出为静音，值：muted；
		preload：规定当网页加载时，音频是否默认被加载以及如何被加载。值：auto/metadata/none；
		src：规定音频文件的地址；
### 易错易混点
##### -1.css样式的overflow-x：对边框中的溢出的内容进行隐藏
		div{
			overflow-x:hidden;
			}

##### -2. -webkit-text-size-adjust:none :禁用Webkit内核浏览器的文字大小调整功能
		故-webkit-text-size-adjust的用法如下：
		1、当样式表里font-size<12px时，中文版chrome浏览器里字体显示仍为12px，这时可以用 html{-webkit-text-size-adjust:none;}
		2、-webkit-text-size-adjust放在body上会导致页面缩放失效
		3、body会继承定义在html的样式
		4、用-webkit-text-size-adjust不要定义成可继承的或全局的
		————————————————

##### -3. display用于设置元素的外部或者内部显示类型，外部定义了在流式布局中如何展示，内部显示类型定义了元素内子元素的布局方式。


##### -4. <a href="javascript:;" @click="switchTab">银行存款</a>:
	javascript:是表示在触发默认动作时，执行一段JavaScript代码，而 javascript:; 表示什么都不执行，这样点击时就没有任何反应.
	一般在这种情况下，会给<a>绑定一个事件回调，来执行业务，如：
	document.getElementById('jsPswEdit').addEventListener('click', function(e) {
	  e.preventDefault();
	  // 当<a>触发click时，处理业务
	}, false);
##### -5 CSS中, padding: 0px 0px 0px 0px; 四个0px分别代表什么?
			padding: 0px 0px 0px 0px; 按顺序分别表示上填充、右填充、下填充、左填充为0px。
		对应着：
			padding-top:0px;
			padding-right:0px;
			padding-bottom:0px;
			padding-left:0px;

##### -5 css:background背景样式
		background-color：背景颜色
		background-image：背景图片
					-- body{
							background-image:url('相对路径URL');
							}

		background-repeat：背景样式是否重复
					--background-repeat:repeat-x;水平方向重复
					--background-repeat:repeat-y;垂直方向重复

		background-attachment：设置背景图像是否固定或者随着页面的其余部分滚动
					--：scroll 默认值，背景随着滚动而滚动
					--：fixed 固定图像，不随页面滚动而滚动

		background-position：right top left bottom (可多个组合)
		background-size: 规定背景图像的尺寸
拓：背景图片自适应窗口大小案例		

```
<!--背景图片自适应窗口大小-->
<head>
<style>
    body{
        background-image: url(./public/images/5bbd6378a1fdc.jpg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100%;
		position: relative; // 可以选择不写
    }
</style>
</head>
```

##### -6 CSS：text-align：文本对齐方式
		text-align：    left	    把文本排列到左边。默认值：由浏览器决定。
						right	把文本排列到右边。
						center	把文本排列到中间。
						justify	实现两端对齐文本效果。
						inherit	规定应该从父元素继承 text-align 属性的值。

##### -7 设置字体大小：
					方式一：1em的默认大小是16px
					方式二：px（像素）
					方式三：百分比
##### -8 设置字体大小：overflow: 显示滚动条

	visible 默认值。超出部分呈现在元素框外面
    hidden 裁剪超出部分
    scroll 一直显示滚动条，超出部分滚动可见
    auto 当超出元素框后，显示滚动条，超出部分滚动可见
    inherit 从父元素继承overflow属性
	
>和下拉框一起搞事情

        下拉框显示不出来 -> 外层设置overflow：auto
        注意：下拉框的父容器是body
##### -9.\<img>标签
    -和h系列标签/p标签还有hr标签不一样，img标签不会独占一行，如果我们手动指定了img标签显示的图片的宽度和高度，有可能会导致图片变形，那么如果又想指定宽度和高度，
    <img src="当前电脑图片的路径" width="200px" height="200px" />
   
    又不想让图片发生变形，我们可以只指定宽度或者高度其中的一个值即可

    -只要指定了宽度，系统会自动根据宽度计算出高度，只要指定了高度，系统会自动根据高度计算出宽度，并且都是等比拉伸的，也就是说不会变形：
	<img src="当前电脑图片的路径" width="200px" />
	<img src="当前电脑图片的路径" height="200px" />
##### 10.定位position

    1.position：relative相对定位
    2.position：absolute绝对定位，作用：
        14.2.1 压盖：比如一张图片覆盖另一张图片的左上角  
        
##### 11.背景相关属性

    background-repeat：repeat-x,repeat-y,no-repeat 平铺特性
    background-position: x px  y px;
                        (top,center,bottom) and (right,center,left) 两两组合
						
### ```CSS spirit css精灵```

    CSS Image Sprites. ❮ Previous Next ❯:
     An image sprite is a collection of images put into a single image. 
     A web page with many images can take a long time to load and generates multiple server requests. 
     Using image sprites will reduce the number of server requests and save bandwidth       
     
     Code sample
        .box{
          width: 46px;
          height: 44px;
          background: url(img_navsprites.gif) -x -y(这两个参数分别表示：向左，向上平移，均用负数表示); }

##### 12.HTML如何给网页添加ico图标:

    在head标签中添加：href表示ico文件的相对路径
    <link rel="Bookmark" type="image/x-icon" href="b/img/icon/favicon.ico" />
    <link rel="icon" type="image/x-icon" href="b/img/icon/favicon.ico" />
    <link rel="shortcut icon" type="image/x-icon" href="b/img/icon/favicon.ico" />
    
    shortcut icon，特指浏览器中地址栏左侧显示的图标，一般大小为16x16，后缀名为.icon；
    icon，指的是图标，格式可为PNG\GIF\JPEG，尺寸一般为16x16、24x24、36x36等。把这个图标放到网站的根目录下就可以了，页面加载时浏览器会自动检索这个图标然后把它加到标题上（当然也可以放在一个页面可以请求到的目录下）。
    Bookmark，当网站收藏到收藏夹中时，显示在前面的图标。
    ————————————————
	
##### tips
    1.HTML下的表单标签中的<input>便签的values属性：赋值初始（默认）值给 HTML 表单
##### readme文件的伪徽章样式,[参考代码](https://github.com/FioraLove/HTML-CSS-JavaScript/blob/master/html/readme%E7%9A%84%E4%BC%AA%E5%BE%BD%E7%AB%A0%E6%A0%B7%E5%BC%8F.html)
![实际样式](https://cdn.jsdelivr.net/gh/FioraLove/Images/D:/data/images20191207103058.png)
