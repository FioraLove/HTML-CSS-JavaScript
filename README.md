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
