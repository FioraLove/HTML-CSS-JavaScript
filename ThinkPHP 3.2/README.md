## ```ThinkPHP 3.2``` [ThinkPHP3.2完全开发手册](http://document.thinkphp.cn/manual_3_2.html) <br>
<img src="../PHP/images/5d53b000cb7b4.jpg" width=50% height=50%/><br>

1. url地址模式()

3. 路径：
https://localhost/WeChatApp/index.php/Home/控制器/方法
	3.1url路径模式：
	pathinfo模式：https://localhost/WeChatApp/index.php/Home/控制器/方法

	rewrite路径模式：https://localhost/WeChatApp/Home/控制器/方法(推荐)
		1.修改Apache配置：找到Apache目录下的httpd.conf文件
		2.取消LoadModule rewrite_module modules/mod_rewrites.so ,重启服务
		3.把ThinkPHP框架下的.htaccess文件拷贝到网站根目录(WeChatApp)，与index.php 同级
		
		★★★注意了：路径访问模式与文件目录位置是两个不同的概念，而rewrite模式下的真实文件位置为：
		    EntWEChATAPP/Application/Home/Controller/控制器名Controller.class.php(里面包含一系列操作或方法)

	普通模式：https://localhost/WeChatApp/index.php?m=Home&c=控制器&a=方法

	-3.2 路径模式配置(app/common/conf/config.php)
		'URL_CASE_INSENSITIVE'  =>  true:设置为true的时候表示URL地址不区分大小写，这个也是框架在部署模式下面的默认设置
		
		-'URL_MODEL'             => 2,       //URL生成模式，隐藏入口文件
			-普通模式：0  -PATHINFO模式：1  -rewrite模式：2  -兼容模式：3

4. 数据库配置
class DataController entends Controller{
	public function index(){
		//实例化数据库，连接user表
		$model = M('user');
		// 查询所有数据	
		$data = $model->select();
		// 绑定，分配数据
		$this->assign('data'); 
		// 包含页面，HTML中展示数据
		$this->display();
	}

	}

5. 函数：function.php
	1、函数位置
		a）系统函数:\EntWeChatApp\ThinkPHP\Common\functions.php
		b）运用函数:\EntWeChatApp\APP\Common\Common\functions.php
		c）模块函数:\EntWeChatApp\APP\Home\Common\functions.php
	
	2、注意 
		a）在以上文件用户都可以自定义函数
		b）自定义函数不能重名

6. 控制器自写:
	1. 声明控制器
		a)新建控制器\EntWeChatApp\APP\Home\Controller
				DemoController.class.php
		b）
			//声明命名空间
			namespace Home\Controller
			// 使用系统类
			user \Think\Controller;
			-
			//声明当前控制器并继承核心控制器
			class DemoController extend Controller{
			拓展：	// demo方法的前置操作，后置操作，运行顺序为前>中>后
-
				public function demo(){
				echo '控制器练习使用，以及方法的使用'
				}
				-
			}
		c)地址栏访问
			local/EntWeChatAPP/Home/Demo/demo=>访问demo函数

	2. 前置，后置操作
				public function demo(){
					echo '前置操作'；
				}
-
				public function demo(){
				echo '控制器练习使用，以及方法的使用'
				}
				-
				//demo方法的后置操作
				public function demo(){
					echo '后置操作'
				}
	3. 参数绑定
		3.1 启用参数绑定功能，首先确保你开启了URL_PARAMS_BIND设置：
			'URL_PARAMS_BIND' =>true, // URL变量绑定到操作方法作为参数
		
		

7. url生成
格式：
    7.1
        U(模块/控制器/操作#锚点@域名]?参数1=值1&参数2=值2...)
        ★★★ 如果不定义模块的话 就表示当前模块名称，下面是一些简单的例子：
        U('User/add') // 生成User控制器的add操作的URL地址
        U('Blog/read?id=1') // 生成Blog控制器的read操作 并且id为1的URL地址
        U('Admin/User/select') // 生成Admin模块的User控制器的select操作的URL地址
	7.2带参数的三种形式
        U('Blog/cate',array('cate_id'=>1,'status'=>1)) //数组形式
        U('Blog/cate','cate_id=1&status=1')
        U('Home/cate?cate_id=1&status=1')
         =>生成的URL都为:/当前blog控制器的模块名/Blog控制器/cate方法/cate_id/1/status/1.html
         
         thinkphp的企业微信项目的URL生成格式：<{:U('query')}>：query指代方法方法

8. ajax返回
    1.jQuery中
        $.post("{:U('url')}", { "func": "getNameAndTime" },function(data){
             alert(data.name); // John
             console.log(data.time); //  2pm
        }, "json");
        
        参数:
            $.post(url,[data],[callback],[type])
            url:发送请求地址。
            
            data:待发送 Key/value 参数。
            
            callback:发送成功时回调函数。
            
            type:返回内容格式，xml, html, script, json, text, _default
    2. 项目控制器中
        $this->ajaxReturn($arr);//直接把数组1转换成json对象

9. 跳转页面，重定向:系统的\Think\Controller类内置了两个跳转方法success和error，用于页面跳转提示，而且可以支持ajax提交

    // 操作完成3秒后跳转到 /Article/index:
    $this->success('操作完成','/Article/index',3);
    // 操作失败5秒后跳转到 /Article/error:
    $this->error('操作失败','/Article/error',5);
    
    2. 重定向：controller控制器下的方法定义重定向功能方法
        Controller类的redirect方法可以实现页面的重定向功能。redirect方法的参数用法和U函数的用法一致（参考URL生成部分
        
        //重定向到New模块的Category操作
        $this->redirect('New/category', array('cate_id' => 2), 5, '页面跳转中...');
            参数一：跳转地址
            参数二：地址参数
            参数三：时间
            参数四：提示信息
    
10. 变量的获取
    1. GET方法获取：
        以GET变量类型为例，说明下I方法的使用：
        echo I('get.id'); // 相当于 $_GET['id']
        echo I('get.name'); // 相当于 $_GET['name']支持默认值：
        
        echo I('get.id',0); // 如果不存在$_GET['id'] 则返回0，携带默认返回值
        echo I('get.name',''); // 如果不存在$_GET['name'] 则返回空字符串采用方法过滤：
        
        // 采用htmlspecialchars方法对$_GET['name'] 进行过滤，如果不存在则返回空字符串
        echo I('get.name','','htmlspecialchars'); 
        
    2. POST及其它方法获取：
        ('post.name','','htmlspecialchars'); // 采用htmlspecialchars方法对$_POST['name'] 进行过滤，如果不存在则返回空字符串
        I('session.user_id',0); // 获取$_SESSION['user_id'] 如果不存在则默认为0
        I('cookie.'); // 获取整个 $_COOKIE 数组
        I('server.REQUEST_METHOD'); // 获取 $_SERVER['REQUEST_METHOD'] 
        
11. 空控制器和空操作：防止用户地址栏恶意输入
    空控制器,空方法：
    <?php
        namespace Home\Controller;
        use Think\Controller;
        class EmptyController extends Controller{  
          
            public function index(){        
                //重定向到首页              
                $this->redirect('Index/index');    
                } 
                        
            protected function _empty(){        
                $this->redirect('Index/index');
                }
        }
    ?>

12. 操作绑定到类上
    1.设置参数'ACTION_BIND_CLASS'    =>    True

13. 方法调用:
     1.在控制器NameController.class.php下(调用同一个控制器的a方法的三种方法)
         public function a(){
                echo 'AAAA'
             }
         public function b(){
                $this->a();  // 方式一:$this->a()
                self::a();  // 方式二：b方法调用a方法
                NameController::a  // 方式三
                echo 'BBBB'
             } 
               
     2.跨控制器调用(A()方法)：比如调用index控制器下的index方法
      2.1 先声明控制器
        $model= A('Index'); 跨控制器调用，调用Index控制器
        $model= A('Admin/Index');跨模块调用，调用Index模块下的Index控制器
      2.2 开始调用方法
        $model->a();

14. 常用的函数(ThinkPHP\Common\functions.php)
    U():生成URL地址
    A()：跨模块实例化
    I()：获取参数
    C()：获取配置文件
    M()：实例化数据模型，
    D()：实例化数据模型，如果自定义模型不存在，直接使用系统模型
    
    控制器中的方法：
    $this->show():输出文本内容
    $this->display():分配页面
    $this->success():成功跳转    
    $this->error():    
    $this->assign(): 绑定数据   
    $this->redirect(): 重定向    
    $this->ajaxReturn(): Ajax返回
    
    数据库相关操作:$model = M('user')实例化数据模型
    $model->select();  //查询所有的数据项                                                                                                                                                                                                                                    
    $model->add();     //增加数据
    $model->delete();  //删除数据
    $model->find();    //读取一条数据
    $model->save();    //
    $model->execute();    //execute()执行的是插入(insert)和修改(update)的SQL语句。execute()方法将返回影响的记录数
    $model->query();    //query()执行的是查询(select)的SQL语句。
    $model->getLastSql();  //获取执行的SQL
    
15. 模型的定义:App/Home/Model下新建一个NameModel.class.php
    1.自定义数据模型:打开并新建文件夹App\Home\Model\NameViewModel.class.php
    2.书写代码：
        <?php    
            namespace Home\Model;  //声明当前的命名空间
            use Think\Model\ViewModel;  // 使用系统的视图模型
            class NameViewModel extends ViewModel{
                        
            }        
        ?>
> 拓：表前缀：方便识别字段，表名称，数据库名称
## 16. 数据库的连接

    //数据库配置信息
    'DB_TYPE'   => 'mysql', 
    // 数据库类型'
    DB_HOST'   => 'localhost', 
    // 服务器地址
    'DB_NAME'   => 'thinkphp', 
    // 数据库名
    'DB_USER'   => 'root', 
    // 用户名
    'DB_PWD'    => '123456', 
    // 密码
    'DB_PORT'   => 3306, 
    // 端口'
    DB_PREFIX' => 'think_', 
    // 数据库表前缀 
    'DB_CHARSET'=> 'utf8', 
    // 字符集
    
```执行数据库连贯操作```

    public function lian(){
    
        // a)实例化数据模型
        $model = M();  //或者$model = M('table_name');
        
        // b)查询数据
        $data=$model->filed('*')->table(''table_name')->select();  //查询所有数据
        $data=$model->filed('name,password')->table(''table_name')->select();  //在table_name中查询某些字段
        $data=$model->filed('name') as na->table(''table_name')->select();  //在table_name中查询某些字段,并设置别名
        $data=$model->filed(array('name','password',...))->table(''table_name')->select();  //在table_name中以数组array形式查询目标字段
        
        // c)查询条件where
        $data=$model->filed('*')->where('条件语句')->table(''table_name')->select();
        // c)获取执行的sql语句
        echo $model->getLastSql();
    }
    
    
