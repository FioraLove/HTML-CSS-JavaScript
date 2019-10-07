## Vue.js - Day1 [Vue.js官方文档](https://cn.vuejs.org/v2/guide/list.html) <br>
<img src="../PHP/images/5d5e5c81e9157.jpg" width=50% height=50%/><br>

### 什么是Vue.js

+ Vue.js 是目前最火的一个前端框架，React是最流行的一个前端框架（React除了开发网站，还可以开发手机App， Vue语法也是可以用于进行手机App开发的，需要借助于Weex）

+ Vue.js 是前端的**主流框架之一**，和Angular.js、React.js 一起，并成为前端三大主流框架！

+ Vue.js 是一套构建用户界面的框架，**只关注视图层**，它不仅易于上手，还便于与第三方库或既有项目整合。（Vue有配套的第三方类库，可以整合起来做大型项目的开发）

+ 前端的主要工作？主要负责MVC中的V这一层；主要工作就是和界面打交道，来制作前端页面效果；





### 为什么要学习流行框架
 + 企业为了提高开发效率：在企业中，时间就是效率，效率就是金钱；
  - 企业中，使用框架，能够提高开发的效率；



 + 提高开发效率的发展历程：原生JS -> Jquery之类的类库 -> 前端模板引擎 -> Angular.js / Vue.js（能够帮助我们减少不必要的DOM操作；提高渲染效率；双向数据绑定的概念【通过框架提供的指令，我们前端程序员只需要关心数据的业务逻辑，不再关心DOM是如何渲染的了】）
 + 在Vue中，一个核心的概念，就是让用户不再操作DOM元素，解放了用户的双手，让程序员可以更多的时间去关注业务逻辑；



 + 增强自己就业时候的竞争力
  - 人无我有，人有我优
  - 你平时不忙的时候，都在干嘛？

### 框架和库的区别



 + 框架：是一套完整的解决方案；对项目的侵入性较大，项目如果需要更换框架，则需要重新架构整个项目。

  - node 中的 express；

 + 库（插件）：提供某一个小功能，对项目的侵入性较小，如果某个库无法完成某些需求，可以很容易切换到其它库实现需求。
  - 1. 从Jquery 切换到 Zepto
  - 2. 从 EJS 切换到 art-template

### Node（后端）中的 MVC 与 前端中的 MVVM 之间的区别

 + MVC 是后端的分层开发概念；
 + MVVM是前端视图层的概念，主要关注于 视图层分离，也就是说：MVVM把前端的视图层，分为了 三部分 Model, View , VM ViewModel

 + 为什么有了MVC还要有MVVM
 
 Vue

## 1. v-cloak:消除插值表达式闪烁问题
	ps：小贴士
	methods:{
            showHandler(){    // 等价于showHandler:function(){}
                pass
                }

## 2. v-model 指令用来在 input、select、textarea、checkbox、radio  等表单控件元素上创建双向数据绑定，
	根据表单上的值，自动更新绑定的元素的值。

## 3. v-on(缩写为@):表示事件处理器

	   ```3.1 事件的监听：```
		<div id="app">
		  <button v-on:click="counter += 1">增加 1</button>
		  <p>这个按钮被点击了 {{ counter }} 次。</p>
		  <p>这个按钮被点击了 {{ printer(i) }} 次。</p>
		</div>
		<script>
		new Vue({
		  el: '#app',
		  data: {
			counter: 0
		  },
		  methods:{
		  printer(i){
		  return this.counter+i
		})
		</script>
		-在vue中，使用事件绑定机制，为元素指定处理函数时，如果加了小括号，就可以给函数传参数了

	   ```-3.2 可监听新定义的方法```

	  ``` -3.3 v-on 与 v-if 联合使用```
			<div class="box" v-on:click="isShow=false" v-if="isShow"></div>:点击box后，isShow赋值为false，由于数据驱动视图，box消失
			这段代码的含义是，首先会执行v-if，判断是否为true，若为true，则执行这段代码；
			若为false,当鼠标点击按钮时，监听v-on:click就开始执行，并使得isShow=false

	  ```-3.4 键盘监听事件：keydown，keyup```
		按键修饰符：
	
	@keyup.13 回车

    @keyup.enter 回车
    
    @keyup.left 左键
    
    @keyup.right 右键
    
    @keyup.up 上键
    
    @keyup.down 下键
    
    @keyup.delete 删除键
    案例：
     <div id="app">
    <!-- 按enter键 抬起触发 -->
    <input type="text" v-model="msg" @keyup.enter="fn">按键盘enter键触发{{msg}}<br>
    <input type="text" v-model="message" @keyup.13="greet(hi)">按键盘enter键触发{{message}}<br>

    <!-- 按"删除"和"退格"键 抬起触发 -->
    <input type="text" @keyup.delete="fn">按键盘"删除"和"退格"键触发<br>

    <!-- 按tab键 抬起触发 -->
    <input type="text" @keyup.tab="fn">按键盘tab键触发<br>

    <!-- 按 esc 键 抬起触发 -->
    <input type="text" @keyup.esc="fn">按键盘 esc 键触发<br>

    <!-- 按 space 键 抬起触发 -->
    <input type="text" @keyup.space="fn">按键盘 space 键触发<br>

    <!-- 按 上 下 左 右 键 抬起触发 -->
    <input type="text" @keyup.up="fn">按键盘 up 键触发<br>
    <input type="text" @keyup.down="fn">按键盘 down 键触发<br>
    <input type="text" @keyup.left="fn">按键盘 left 键触发<br>
    <input type="text" @keyup.right="fn">按键盘 right 键触发<br>


    <!-- 只要 Ctrl 被按下并点击就触发 -->
    <button @click.ctrl="fn">按ctrl键并点击触发</button>
    <!--（exact精确按下某键） 有且只有 Ctrl 被按下并点击的时候才触发 -->
    <button @click.ctrl.exact="fn">按ctrl键并点击触发</button>
    </div>
    
    <script>
        let vm = new Vue({
            el: "#app",
            data: {
                msg:'',
                message:'null',
            },
            methods: {
                fn() {
                    alert(this.msg)
                },
                greet(){
                    alert(this.message)
                }
            }
        })
    </script>   
4. v-bind：绑定属性=>class 与 style 是 HTML 元素的属性，用于设置元素的样式，我们可以用 v-bind 来设置样式属性

		实例中将 isActive 设置为 true 显示了一个绿色的 div 块，如果设置为 false 则不显示：

		4.1:绑定字符串
			<body>
			<div id="app">
				<h3 v-show="isShow" v-bind:title="title">我是一个三级标题</h3>
				<img v-bind:src="imgSrc" v-bind:title="time">
			</div>
		<script type="text/javascript" src="./vue.js"></script>
		<script type="text/javascript">
			// 指令系统 v-*
			var app = new Vue({
				el: "#app",
				data: {
					msg: "今天学习vue",
					show: true,
					isShow: true,
					title: "哈哈哈2323",
					imgSrc: './shiyuan.jpeg',
					time: `页面加载于${new Date().toLocaleString()}` //表示当前时间
				}
			})
		</script>
		</body>

		4.2 绑定HTML Class：，在vue中可以直接使用v-bind:class来给每个标签元素添加class

		4.3 数组语法：我们可以把一个数组传给v-bind:class,以应用一个 class 列表
		<div v-bind:class="[activeClass, errorClass]"></div>

		data: {
		  activeClass: 'active',
		  errorClass: 'text-danger'
		}
		　　渲染为：
		<div class="active text-danger"></div>
		　　如果你也想根据条件切换列表中的 class，可以用三元表达式：
		<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
		　　这样写将始终添加 errorClass，但是只有在 isActive 是 true时才添加 activeClass。

		　　不过，当有多个条件 class 时这样写有些繁琐。所以在数组语法中也可以使用对象语法：
		<div v-bind:class="[{ active: isActive }, errorClass]"></div>
    
    4.4 在data上定义
        data: {
            style_data: { color: 'red', 'font-size': '40px', 'font-weight': '200' }
        }
        在元素中，通过属性绑定的形式，将样式对象应用到元素中：
        <h1 :style="style_data">这是一个善良的H1</h1>


## 5. vue 获取当前时间=>time: `页面加载于${new Date().toLocaleString()}`

## 6. vue的v-show:每次不会重新进行DOM的删除和创建的操作，只是切换了元素的display:none样式

	   vue的v-if：表示判断，能够重新创建1和删除元素（如果元素涉及到频繁的切换，最好不用v-if）
	   区别：如果条件为false时，v-if直接就不会渲染这个语句，而v-show会渲染语句，只是不显示出来

## 7. v-if
   ```7.1 v-if 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。```
    
    <h1 v-if="awesome">Vue is awesome!</h1>
    也可以用 v-else 添加一个“else 块”：
    
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1> 
   ```7.2 用 key 管理可复用的元素:Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。```
   
    这么做除了使 Vue 变得非常快之外，还有其它一些好处。例如，如果你允许用户在不同的登录方式之间切换：

    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address">
    </template>
   
  7.3 所以 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 key 属性即可：

    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </template>
  -注意，<label> 元素仍然会被高效地复用，因为它们没有添加 key 属性。
  
  7.4 v-show:
  
    另一个用于根据条件展示元素的选项是 v-show 指令。用法大致一样：
    <h1 v-show="ok">Hello!</h1>
    不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。

## 8.v-for
    在 v-for 块中，我们可以访问所有父作用域的属性。v-for 还支持一个可选的第二个参数，即当前项的索引
    <ul id="example-2">
      <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
    
    var example2 = new Vue({
      el: '#example-2',
      data: {
        parentMessage: 'Parent',
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ]
      }
    })
    结果：
    Parent - 0 - Foo
    Parent - 1 - Bar
    
	   -利用v-for渲染的动态选项：
	   <select v-model="selected">
		  <option v-for="option in options" v-bind:value="option.value">
			{{ option.text }}
		  </option>
		</select>
		<span>Selected: {{ selected }}</span>
		在JavaScript中的
			new Vue({
			  el: '...',
			  data: {
				selected: 'A',
				options: [
				  { text: 'One', value: 'A' },
				  { text: 'Two', value: 'B' },
				  { text: 'Three', value: 'C' }
				]
			  }
			})

## 9.数组更新检测
#### 变异方法

    Vue 将被侦听的数组的变异方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：
    push()
    pop()
    shift()
    unshift()
    splice()
    sort()
    reverse()
    替换数组
    变异方法，顾名思义，会改变调用了这些方法的原始数组。
    相比之下，也有非变异 (non-mutating method) 方法，例如 filter()、concat() 和 slice() 。
    它们不会改变原始数组，而总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组：

## 10 事件修饰符
为了解决这个问题，Vue.js 为 v-on 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。

    .stop
    .prevent
    .capture
    .self
    .once
    .passive
    
    <!-- 阻止单击事件继续传播 -->
    <a v-on:click.stop="doThis"></a>
    
    <!-- 点击事件将只会触发一次 -->
    <a v-on:click.once="doThis"></a>
    
    <!-- 提交事件不再重载页面 -->
    <form v-on:submit.prevent="onSubmit"></form>
    
    <!-- 修饰符可以串联 -->
    <a v-on:click.stop.prevent="doThat"></a>
    
    <!-- 只有修饰符 -->
    <form v-on:submit.prevent></form>
    
    <!-- 添加事件监听器时使用事件捕获模式 -->
    <!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
    <div v-on:click.capture="doThis">...</div>
    
    <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
    <!-- 即事件不是从内部元素触发的 -->
    <div v-on:click.self="doThat">...</div>

## 键盘修饰符以及自定义的键盘修饰符
   1.通过Vue.config.keyCodes.名称 = 按键值 来自定义按键修饰符
    -Vue.config.keyCodes.f2 = 113;
    
   2.使用自定义等待按键修饰符
   <input type="text" v-model="name" @keyup.f2="add">:v-model双向绑定文本表单
   ，并监听事件处理函数keyup
   
## 11.过滤器的定义语法
    Vue.filter('过滤器名称',function(){})
    
    过滤器中的function，第一个参数，已经被规定死了，永远都是 过滤器 管道符前面传递过来的数据
    eg： Vue.filter('过滤器的名称',function(data){
                     return data+'1123'
                     }) 
 
 ## 12.自定义全局和局部的自定义指令：三个方法bind,inserted,updated
     // 自定义全局指令 v-focus，为绑定的元素自动获取焦点：
    
    // 使用  Vue.directive() 定义全局的指令  v-focus
        参数1 ： 指令的名称，注意，在定义的时候，指令的名称前面，不需要加 v- 前缀, 但是： 在调用的时候，必须 在指令名称前 加上 v- 前缀来进行调用
        参数2： 是一个对象，这个对象身上，有一些指令相关的函数，这些函数可以在特定的阶段，执行相关的操作
        
        Vue.directive('focus', {
          bind: function (el) { // 每当指令绑定到元素上的时候，会立即执行这个 bind 函数，只执行一次
            // 注意： 在每个 函数中，第一个参数，永远是 el ，表示 被绑定了指令的那个元素，这个 el 参数，是一个原生的JS对象
            // 在元素 刚绑定了指令的时候，还没有 插入到 DOM中去，这时候，调用 focus 方法没有作用
            //  因为，一个元素，只有插入DOM之后，才能获取焦点
            // el.focus()
          },
          inserted: function (el) {  // inserted 表示元素 插入到DOM中的时候，会执行 inserted 函数【触发1次】
            el.focus()
            // 和JS行为有关的操作，最好在 inserted 中去执行，放置 JS行为不生效
          },
          updated: function (el) {  // 当VNode更新的时候，会执行 updated， 可能会触发多次
          }
        })
#### 自定义一个 设置字体颜色的指令
    Vue.directive('color', {
      // 样式，只要通过指令绑定给了元素，不管这个元素有没有被插入到页面中去，这个元素肯定有了一个内联的样式
      // 将来元素肯定会显示到页面中，这时候，浏览器的渲染引擎必然会解析样式，应用给这个元素
      bind: function (el, binding) {
        // el.style.color = 'red'
        // console.log(binding.name)
        // 和样式相关的操作，一般都可以在 bind 执行
        // console.log(binding.value)
        // console.log(binding.expression)
        el.style.color = binding.value
      }
    })

## 13.组件component
    简单的Vue组件示例：
    // 定义一个名为 button-counter 的新组件
    Vue.component('button-counter', {
      data: function () {
        return {
          count: 0
        }
      },
      template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    })  

### 相关文章
1. [vue.js 1.x 文档](https://v1-cn.vuejs.org/)
2. [vue.js 2.x 文档](https://cn.vuejs.org/)
3. [String.prototype.padStart(maxLength, fillString)](http://www.css88.com/archives/7715)
4. [js 里面的键盘事件对应的键码](http://www.cnblogs.com/wuhua1/p/6686237.html)
5. [Vue.js双向绑定的实现原理](http://www.cnblogs.com/kidney/p/6052935.html)
