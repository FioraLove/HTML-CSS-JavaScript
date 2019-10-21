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
>v-text:{{}}:也就是说v-text和{{}}一样,只能输出纯文本,浏览器不会对其再进行html解析

>v-html:会将其内容看做html标签解析后输出

    eg:msg: '<a href="http://cn.vuejs.com">Vue.js</a>'
    <!--v-text:内容以纯文本形式显示-->
    <p v-text="msg"></p>
    <!--v-html:内容以Html显示-->
    <p v-html="msg"></p>
	
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

>v-for不仅能对数组进行遍历输出,还能将对象的键值进行遍历

    <ul>
        <li v-for="(item, key, index) in books[1]" :key="index">
            序号 : {{index}}  ---  键 : {{key}}=>值 : {{item}}
        </li>
    </ul>
    (item, key, index) in books[1]表示对第一行的键值对进行索引，book[i]表示0开始索引
    选取数组中的一个对象,使用v-for对其进行键值遍历
    v-for表达式在对对象进行遍历时,支持两个可选参数分别是键名和索引:
        v-for="(item, key, index) in books[1]"
    使用:key="index",使用key使元素不被复用,且为key绑定index索引值,确保唯一
    ————————————————
>v-for迭代整数

    <span v-for="i in 10">{{i}}</span>:关于整数迭代Vue1.x和2.x不一样,1.x的迭代是从0开始，而2.x的开始索引为1   


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
>9.1 push():
>9.2 [splice()方法：实现对数组进行增删改的操作](https://blog.csdn.net/qq_41646249/article/details/97133206)<br>
     [push,splice实现对数组进行增删改查的操作](https://blog.csdn.net/ABAP_Brave/article/details/81714611) 

    语法结构：splice(index,len,[item])
    1、可以用来添加/删除/替换数组内某一个或者几个值
    2、该方法会改变原始数组
     index:数组开始下标       
     len: 替换/删除的长度       
     item:替换的值，删除操作的话 item为空   
    
    
>需要注意的是,以下导致的数组变化Vue不能检测到,也不会触发视图更新

    1)通过索引直接设置的项,如:vm.books[2]={};
    2)修改数组的长度,如:vm.books.length=1;
>在v-for遍历中，都需要声明：key，那么:key的作用是什么呢？

    答：vue和react都实现了一套虚拟DOM，使我们可以不直接操作DOM元素，只操作数据便可以重新渲染页面。而隐藏在背后的原理便是其高效的Diff算法。
    vue和react的虚拟DOM的Diff算法大致相同，其核心是基于两个简单的假设：
        假设1、 两个相同的组件产生类似的DOM结构，不同的组件产生不同的DOM结构。        
        假设2、 同一层级的一组节点，他们可以通过唯一的id进行区分。 
    简单的说， :key的作用主要是为了高效的更新虚拟DOM
	
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
 >过滤器作用：双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。

>过滤器使用：过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：

    <!-- 在双花括号中 -->
    {{ message | capitalize }}
     
    <!-- 在 `v-bind` 中 -->
    <div v-bind:id="rawId | formatId"></div>
    
> 局部过滤器：Vue.filter('过滤器名称',function(){})：过滤器中的function，第一个参数，已经被规定死了，永远都是 过滤器 管道符前面传递过来的数据
        
    <body>
    <div id="app">
        <input type="text" v-model="price">    <!--v-model双向绑定-->
        <h3>{{price | currentPrice}}</h3>   <!--2.局部使用过滤器：currentPrice是过滤器的名字-->
         <h4>{{msg | reverse}}</h4>     <!--3.使用全局过滤器-->
    </div>
    <script type="text/javascript" src="./vue.js"></script>
    <script type="text/javascript">
    
        // 1.声明全局的过滤器
        Vue.filter('reverse', function (value) {
            return value.split('').reverse().join('')  // 通过空格分隔和合并
        });
         
        new Vue({
            el: '#app',
            data() {
                return {
                    price:0    // 默认是0
                }
            },
            // 局部过滤器：1.在当前组件中声明过滤器
            filters: {   // Vue实例中声明，是一个局部过滤器
                currentPrice:function (value) {
                    console.log(value);
                    return '$' + value;   // 过滤器默认在前面添加$
                }
            }
        })
    </script>
    </body>
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


## 13.组件component [组件component](https://www.cnblogs.com/fozero/p/8563939.html)
   13.1全局组件：可以被多个APP进行调用,在APP实例外创建;定义一个名为 button-counter 的新组件:组件名称若使用驼峰原则，引用组件时
       需要全部小写，并且两个单词之间用“-”连接;若不使用驼峰原则时，直接使用名称;在<script>全局组件,vue实例</script>中注册组件
   
   ```Vue.component('组件名',{ /* ..组件的模板对象.. */ })```
   
        Vue.component('buttonCounter', {
          data: function () {  // 1.组件可以有自己的data数据，组件中的data必须是一个方法，且这个方法内部必须返回一个对象才行，而实例中的data可以为一个对象
            return {
              count: 0
            }
          },
          template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
          // 2. 全局组件有template属性 
        }) 
        
13.2 局部组件:局部注册的组件 将只在父组件模板中可用
   
            // 局部组件方式一：
             var Child = {
              template: '<div>A custom component!</div>'
            }
            var vm = new Vue({
                el: '#app',
                components:{
                    'componentName:{
                        'my-component': Child
                     }
                }
            })
            // 局部组件方式二：同一个组件实例下可以创建多个组件（习惯了，就·推荐使用这个吧！！）
            <my-component></my-component>
            <my-component></my-component>
            var vm = new Vue({
                el: '#app',
                components:{
                     'componentName1':{
                         template: '<h1>hello world</h1>'
                             },
                         data:{
                             demo:'',
                         }
                     'componentName2':{
                         'template':'<h3>hello c++</h3>',
                         data:{},
                     }
                }
            })            
            
        eg：
        <script>
        // 全局组件
        Vue.component('my-component', {
            template: '<h1>A custom component!</h1>'
        })
        // 局部组件
        var Child = {
            template: '<div>A custom component!</div>'
        }
        var vm = new Vue({
            el: '#app',
            data: {
            },
            components: {
                // <my-component> 将只在父组件模板中可用
                'my-component': Child
            },
    
            methods: {
    
                },
        </script>
>双组件切换:仅适用于两个组件(v-if,v-on,component)

    <div id="app"></div>
    <a href="javacript:;" @click="flag=true">login</a>
    <a href="javacript:;"@click="flag=false">register</a>
    <login v-if="flag"></login>
    <login2 v-else="flag"></login2>

    </div>
    <script>
        // login
        Vue.component('login', {
            template: '<h2>登录</h2>'
        }),
            // register
        Vue.component('login2', {
            template: '<h2>注册</h2>'
        }),
    
        var vm = new Vue({
            el: '#app',
            data: {
                flag:true
            }
    </script>
    
>多组件的切换:利用<component :is="componentName"></component>

    <body>
      <div id="app">
        <a href="" @click.prevent="comName='login'">登录</a>
        <a href="" @click.prevent="comName='register'">注册</a>
        <a href="" @click.prevent="comName='quit'">注销</a>
    
        <!-- Vue提供了 component ,来展示对应名称的组件 -->
        <!-- component 是一个占位符, :is 属性,可以用来指定要展示的组件的名称 -->
        <component :is="comName"></component>
    
        <!-- 总结:当前学习了几个 Vue 提供的标签了??? -->
        <!-- component,  template,  transition,  transitionGroup  -->
    
      </div>
    
      <script>
        // 组件名称是 字符串
        Vue.component('login', {
          template: '<h3>登录组件</h3>'
        })
        Vue.component('register', {
          template: '<h3>注册组件</h3>'
        })
        Vue.component('quit', {
          template: '<h3>注销组件</h3>'
        })        
        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
          el: '#app',
          data: {
            comName: 'login' // 当前 component 中的 :is 绑定的组件的名称
          },
          methods: {}
        });
      </script>
    </body>
    </html>
>多组件的创建，组件之间无因果关系 

    <body>
      <div id="app">
        <counter></counter>
        <hr>
        <counter></counter>
        <hr>
        <counter></counter>
      </div>
    
      <template id="tmpl">  --其实这也是全局组件的一种创建方式，将template绑定到自身data函数中，此刻的data不同于实例中的data，此刻为一个函数
        <div>
          <input type="button" value="+1" @click="increment">
          <h3>{{count}}</h3>
        </div>
      </template>
    
      <script>
        var dataObj = { count: 0 }
        // 这是一个计数器的组件, 身上有个按钮,每当点击按钮,让 data 中的 count 值 +1
        Vue.component('counter', {
          template: '#tmpl',
          data: function () {
            // return dataObj
            return { count: 0 }
          },
          methods: {
            increment() {
              this.count++
            }
          }
        })
        // 创建 Vue 实例，得到 ViewModel
        var vm = new Vue({
          el: '#app',
          data: {},
          methods: {}
        });
      </script>
    </body>
    
    </html>
        
>父子组件通信主要是使用prop和自定义事件，父组件通过 prop 给子组件下发数据，子组件通过事件给父组件发送消息。
>父子组件的关系可以总结为 prop 向下传递，事件向上传递
       
## 生命周期（与el，data，methods，computed等等同级）
>创建阶段

    1.beforeCreate():表示实例完全被创建时，会执行它
        /ps：在beforCreate生命周期函数执行时，data和methods中的数据均未被初始化
    
    2.created():在created中，data与methods都已经被实例化了，
    
    3.beforeMount(): 表示模板已经在内存中编译好了，只是未渲染到真正要展示的页面上
    
    4.mounted():是实例创建期间最后一个生命周期函数，当执行完mounted就表示，实例已经完全创建好了，
                此时，如果没有其它操作的话，这个实例就静静地躺在内存中
>组件运行阶段：
    
    1.beforeUpdate(): 表示我们的界面还没有更新，但数据肯定被更新了 
            结论：运行beforeUpdate，页面上显示的数据还没有被更新，但数据已经更新了，页面与数据更新不同步
    
    2.updated():页面都data数据已经保持同步了，都是最新的
>销毁过程

    1.beforeDestroy：Vue示例已经从运行阶段，进入到销毁阶段，实例身上的所有data，methods以及过滤器，指令都处于可用状态，未执行真正的销毁动作
    
    2.destroyed：组件已经完全销毁了，一切data，方法，指令，过滤器均不可使用

### 14. watch方法：   
     watch: {
                orgBarChartData: {      //  监听的目标属性
                    handler(newVal,oldVal){
                        this.renderOrgBarChart();       //重设图表，这两个都是动作体
                        this.orgBarChart.resize();     //重新设置图表高宽
                    },
                    deep: true  // deep:true 
                },
            }

## 15.this，$this,$(this)在前端多语言中的易混点
    1.this在Vue中只有 this 这一个样式表示当前的视图vm对象
    2.$(this) 返回一个 jQuery 对象，你可以对它调用多个 jQuery 方法，比如用 text() 获取文本，用val() 获取值等等。
      而 this 代表当前元素，它是 JavaScript 关键词中的一个，表示上下文中的当前 DOM 元素。你不能对它调用 jQuery 方法，直到它被 $() 函数包裹，例如 $(this)
    3.在PHP中只有 $this 这一个样式，因为$表示声明变量，即$this表示的是当前变量元素
## 16.methods与computed的区别：
    computed 和 methods虽然都可以实现对数据的计算,但两者有一定的区别:

    methods:使用methods方法可以接受外部传参,使用更加灵活
    computed:
        计算属性computed的亮点在于:它能够依赖缓存
        当计算属性所依赖的数据发生改变时,才会重新触发计算属性方法执行
        所以对于较复杂或消耗效率的计算,一定要采用计算属性
        
        使用methods的方法,每次页面刷新都会触发方法的执行
        而使用计算属性,只要依赖的数据没有变化,就会直接从缓存中读取结果,不需要重新计算
        这种做法可以提升效率更可以带来更好的用户体验
        
## 17.组件通过props传参
> 1.组件不仅可以封装复用模板内容,还可以使用外部传递的参数,进而实现组件间通信这种父组件向子组件正向传递参数可以通过props实现（子组件不能直接调用父组件的值）

> 2.接受来自父组件的参数（其实也可以多值绑定）

    <div id="app">
        <my-component message="父组件通过props传递参数" msg="hello world"></my-component>  // 这里的message为绑定的props
    </div>
    
    <script type="text/javascript">
        Vue.component('my-component',{
            props: ['message','msg']，   // 声明一个props对象
            template: '<div>{{ message }} : {{msg}}</div>'  // template组件，声明模板对象
        });
    
        const vm = new Vue({
            el: '#app'
        })
    </script>

> 2.props接受动态数据
有时候组件接收的参数是来自父组件的动态数据,需要使用v-bind动态绑定props值

    <div id="app">
        <input type="text" v-model="parentInputText" placeholder="请输入...">
        <my-component :message="parentInputText"></my-component>
    </div>
    
    <script type="text/javascript">
        Vue.component('my-component',{
            props:['message'],
            template:'<div>{{ message }}</div>'
        });
    
        const vm = new Vue({
            el: '#app',
            data:{
                parentInputText:''
            }
        })
    </script>

## 18.使用ref获取DOM元素和组建引用


### 相关文章
1. [vue.js 1.x 文档](https://v1-cn.vuejs.org/)
2. [vue.js 2.x 文档](https://cn.vuejs.org/)
3. [String.prototype.padStart(maxLength, fillString)](http://www.css88.com/archives/7715)
4. [js 里面的键盘事件对应的键码](http://www.cnblogs.com/wuhua1/p/6686237.html)
5. [Vue.js双向绑定的实现原理](http://www.cnblogs.com/kidney/p/6052935.html)
