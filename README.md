# HTML知识点

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

