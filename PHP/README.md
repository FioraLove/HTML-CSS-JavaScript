[PHP文档](https://www.php.net/manual/zh/index.php)<br>

<img src="../PHP/images/5796bdad62afe.jpg" width=50% height=50% /><br>									   
##  ```PHP语法```

##### 1. 变量

    变量以 $ 符号开始，后面跟着变量的名称
    变量名必须以字母或者下划线字符开始
    变量名只能包含字母数字字符以及下划线（A-z、0-9 和 _ ）
    变量名不能包含空格
    变量名是区分大小写的（$y 和 $Y 是两个不同的变量）
    PHP的语句以“;”结尾，不同于Python使用缩进，PHP 中的每个代码行都必须以分号结束。分号是一种分隔符，用于把指令集区分开来

##### 2. 全局变量

	<?php
	$x=5; // 全局变量

	function myTest()
	{
	    $y=10; // 局部变量
	    echo "<p>测试函数内变量:<p>";
	    echo "变量 x 为: $x";
	    echo "<br>";
	    echo "变量 y 为: $y";
	} 

	myTest();
	?>
	myTest() 函数定义了 $x 和 $y 变量。 $x 变量在函数外声明，所以它是全局变量 ， $y 变量在函数内声明所以它是局部变量。

	当我们调用myTest()函数并输出两个变量的值, 函数将会输出局部变量 $y 的值，但是不能输出 $x 的值，因为 $x 变量在函数外定义，无法在函数内使用，如果要在一个函数中访问一个全局变量，需要使用 global 关键字
	
```★★PHP 将所有全局变量存储在一个名为 $GLOBALS[index] 的数组中。 index 保存变量的名称。这个数组可以在函数内部访问，也可以直接用来更新全局变量```

##### globals与static关键字：
    >global 关键字用于函数内访问全局变量。在函数内调用函数外定义的全局变量，我们需要在函数中的变量前加上 global 关键字
    >static 当一个函数完成时，它的所有变量通常都会被删除。然而，有时候您希望某个局部变量不要被删除。要做到这一点，请在您第一次声明变量时使用 static 关键字

##### 3. echo 与 print

	echo 和 print 区别:

	echo - 可以输出一个或多个字符串
	print - 只允许输出一个字符串，返回值总为 1
	提示：echo 输出的速度比 print 快， echo 没有返回值，print有返回值1

##### 4. 数据类型

	String（字符串）, Integer（整型）, Float（浮点型）, Boolean（布尔型）, Array（数组）, Object（对象）, NULL（空值）。
	var_dump() 方法：判断一个变量的类型与长度，并输出变量的数值，如果变量有值，则输出是变量的值，并返回数据类型

##### 5. PHP 类型比较

	松散比较：使用两个等号 == 比较，只比较值，不比较类型。
	严格比较：用三个等号 === 比较，除了比较值，也比较类型。

##### 6. PHP常量（用常量时，不能在常量名前添加$ 符号，不然会将常量转换成新的未定义变量使用，会导致报错）
>1.常量是一个简单值的标识符。该值在脚本中不能改变。
    
	一个常量由英文字母、下划线、和数字组成,但数字不能作为首字母出现。 (常量名不需要加 $ 修饰符)。注意： 常量在整个脚本中都可以使用
	常量语法格式：
	bool define ( string $name , mixed $value [, bool $case_insensitive = false ] )
	该函数有三个参数:
				name：必选参数，常量名称，即标志符。
				value：必选参数，常量的值。
				case_insensitive ：可选参数，如果设置为 TRUE，该常量则大小写不敏感。默认是大小写敏感的
				常量可以在任意地方调用，不用理会常量的位置
				eg:	<?php
					define("GREETING", "Welcome to W3School.com.cn!", true);
					echo greeting;
				?>

>2.魔术常量:PHP 向它运行的任何脚本提供了大量的预定义常量,调用方式：__name__
    
	2.1 __LINE__ :文件中的当前行号。
	2.2 __FILE__ :文件的完整路径和文件名。如果用在被包含文件中，则返回被包含的文件名
	2.3 __DIR__ : 文件所在的目录。如果用在被包括文件中，则返回被包括的文件所在的目录
	2.4 __FUNCTION__ :函数名称
	2.5 __CLASS__ :类的名称
	2.6 __METHOD__ :类的方法名
	eg:
		<?php
			class test {
				function _print() {
					echo '类名为：'  . __CLASS__ . "<br>";
					echo  '函数名为：' . __FUNCTION__ ;
					echo '文件的当前行号：'.__LINE__;
					echo '文件的完整路径：'.__FILE__;
					echo '文件所在的目录：'.__DIR__;
				}
			}
			$t = new test();
			$t->_print();
			?>

##### 7. PHP字符串变量：$txt="hello world"

	7.1 并置运算符 (.) 用于把两个字符串值连接起来
	7.2 strlen() 函数返回字符串的长度（字符数）
	7.3 strpos(字符串，查找目标值) 函数用于在字符串内查找一个字符或一段指定的文本：
				如果在字符串中找到匹配，该函数会返回第一个匹配的字符位置。如果未找到匹配，则返回 FALSE。

##### 8. PHP逻辑运算符

	and ：与
	or ： 或
	&& ： 与
	|| ： 或
	！ ： 非

##### 9. 判断变量是否存在

	当要 判断一个变量是否已经声明的时候（eg:$txt='u'） 可以使用 isset 函数(变量已声明时，返回值1)
	当要 判断一个变量是否已经赋予数据且不为空 可以用 empty 函数 
	当要 判断 一个变量 存在且不为空 先isset 函数 再用 empty 函数	

##### 10. PHP 中的$_GET 变量和$_POST变量

	① 在 PHP 中，预定义的 $_GET 变量用于收集来自 method="get" 的表单中的值。即用来获取前台通过get请求发送的数据。
	② 预定义的 $_POST 变量用于收集来自 method="post" 的表单中的值。即用来获取前台通过post发送的数据

##### 11. PHP的if-elseif-else与if-else

	if 语句 - 在条件成立时执行代码
	if...else 语句 - 在条件成立时执行一块代码，条件不成立时执行另一块代码
	if...elseif....else 语句 - 在若干条件之一成立时执行一个代码块
	switch 语句 - 在若干条件之一成立时执行一个代码
	    switch($data){
	        case data1: 
	            echo 'data';
	            break;
	        case data2:
	            echo 'data2';
	            break;
	            ....
	    }

##### 12. PHP连接MySQL

<?php 
	$servername = 'localhost';
	$username = 'username';
	$password = 'password';
	// 创建连接
	$conn = mysqli_connect($servername, $username, $password);
	 
	// 检测连接
	if (!$conn) {
	    die("Connection failed: " . mysqli_connect_error());
	}
	echo "连接成功";
?>

##### 13. ->与=> ,$this->

	->用于类实例化后的对象读取类中的属性和方法:
		class Test{
		    function add()
		    {return $this->var++;}
		    var $var = 0;
		}
		$a = new Test; //实例化对象名称
		echo $a->add();
		echo $a->var;

	=> 用于数组中，常见的用法是array（key=>values）:索引是自动分配的（索引从 0 开始）;count()函数用于返回数组的长度
		$a = array(
		  '0' => '1',
		  '2' => '4',
		);
		echo $a['0'];
		echo $a['2'];

##### 14. let命令：

	let命令的用法和var命令类似，但let命令声明的变量只在let所在的代码块内有效
		{
			let a=10;
			var b=1;
		}
		console.log(a);//Uncaught ReferenceError: a is not defined
		console.log(b);
	2.let命令不存“声明提前”现象，因此变量一定要先声明，后使用
		console.log(foo);
		console.log(bar); 
		var foo=2;//undefined
		let bar=3;//Uncaught ReferenceError: bar is not defined
	只要当前块级作用域内存在let命令，它所声明的变量就绑定了这个块级作用域，不再受外部的影响
		var tmp=123;
		if(true){
		tmp='abc';//Uncaught ReferenceError: tmp is not defined，因为块级作用域内存在let命令声明的相同变量，违反了let命令先声明后使用原则
		let tmp;
		}
	let命令不允许在同一个作用域内，重复声明同一个变量

##### 15. TP框架的M C D A

	M实例化参数是数据库的表名:使用M方法实例化$User = M('User');//和用法$User = new /Think/Model ('User');等效//执行其他的数据操作$User->select()

	D实例化的是你自己在Model文件夹下面建立的模型文件：D就是在你没有定义模型的时候，系统自动帮你定义一个模型，这样你才进行简单的数据输入或者输出
	
	C方法来读取已有额配置： 获取已经设置的参数值:C(‘参数名称’)
	$model = C('URL_MODEL');

	A方法：实例化控制器（其实是一个快捷调用方法）
		// 假设当前模块是Home模块
		$User = A('User'); 
		实例化后的URL为$User = new \Home\Controller\UserController();
		I方法（输入变量）：是ThinkPHP用于更加方便和安全的获取系统输入变量，可以用于任何地方，用法格式如下：
		I('变量类型.变量名/修饰符',['默认值'],['过滤方法或正则'],['额外数据源'])
		变量类型
		get	获取GET参数
		post	获取POST参数
		param	自动判断请求类型获取GET、POST或者PUT参数
		request	获取REQUEST 参数
		put	获取PUT 参数
		session	获取 $_SESSION 参数
		cookie	获取 $_COOKIE 参数
		server	获取 $_SERVER 参数
		globals	获取 $GLOBALS参数
		path	获取 PATHINFO模式的URL参数
		data	获取 其他类型的参数，需要配合额外数据源参数
##### 16. php数组排序

	sort() - 以升序对数组排序
	rsort() - 以降序对数组排序
	asort() - 根据值，以升序对关联数组进行排序
	ksort() - 根据键，以升序对关联数组进行排序
	arsort() - 根据值，以降序对关联数组进行排序
	krsort() - 根据键，以降序对关联数组进行排序
	eg: <?php
		$cars=array("porsche","BMW","Volvo");
		sort($cars);
		$clength=count($cars);
		for($x=0;$x<$clength;$x++)
		   {
		   echo $cars[$x];
		   echo "<br>";
		   }
		?>

>PHP多维数组

    $cars = array  类似于这样描写
      (
      array("Volvo",22,18),
      array("BMW",15,13),
      array("Saab",5,2),
      array("Land Rover",17,15)
      );
      获取行数：count($cars)
      获取列数：count($cars[0])
	  
##### 17. 全局变量：超全局变量

	$GLOBALS：
		$GLOBALS 这种全局变量用于在 PHP 脚本中的任意位置访问全局变量（从函数或方法中均可）

	$_SERVER：
		$_SERVER 这种超全局变量保存关于报头、路径和脚本位置的信息。
	$_REQUEST
		$_REQUEST 用于收集 HTML 表单提交的数据。
	$_POST
		$_POST 广泛用于收集提交 method="post" 的 HTML 表单后的表单数据。$_POST 也常用于传递变量。$_POST["name"]
	$_GET
		$_GET 也可用于收集提交 HTML 表单 (method="get") 之后的表单数据。
		$_GET 也可以收集 URL 中的发送的数据。
	$_FILES
	$_ENV
	$_COOKIE
	$_SESSION
##### 18. PHP验证表单数据

	<?php
	// 定义变量并设置为空值
	$name = $email = $gender = $comment = $website = "";

	if ($_SERVER["REQUEST_METHOD"] == "POST") {
	  $name = test_input($_POST["name"]);  
	  $email = test_input($_POST["email"]);  //$_POST["email"]获取post请求的表单name为“email”的值
	  $website = test_input($_POST["website"]);
	  $comment = test_input($_POST["comment"]);
	  $gender = test_input($_POST["gender"]);
	}
	function test_input($data) {
	  $data = trim($data);
	  $data = stripslashes($data);
	  $data = htmlspecialchars($data);
	  return $data;
	}
	在用户提交该表单时，我们还要做两件事：
	（通过 PHP trim() 函数）去除用户输入数据中不必要的字符（多余的空格、制表符、换行）
	（通过 PHP stripslashes() 函数）删除用户输入数据中的反斜杠（\）
	（htmlspecialchars()函数是使用来把一些预定义的字符转换为HTML实体，返回转换后的新字符串，原字符串不变
	?>

##### 19. 函数:任何函数都需要调用才能执行

    创建 PHP 函数，函数是通过调用函数来执行的，语法：
    <?php
    function functionName($var1,$var2,...){
        // 要执行的代码(若想使用全局变量，任然需要使用global关键字，才能使用)
    }
    ?>
    //函数的调用
    $some = functionName(($var1,$var2,...)
    
##### 20. PHP面向对象

>20.1 PHP 定义类通常语法格式如下：
    
    <?php
        class phpClass {
          var $var1; // 类中的属性
          var $var2 = "constant string";  //类中的变量需要用var来声明
          
          function myfunc ($arg1, $arg2) {  //可以称为类中的方法
             [..]
          }
          [..]
        }
    ?>
    > 4.函数定义类似 PHP 函数的定义，但函数只能通过该类及其实例化的对象访问，即

>类的简单使用：
    
> 1.类使用 class 关键字后加上类名定义。

> 2.类名后的一对大括号{}内可以定义属性和方法。
    
> 3.类的变量使用 var 来声明, 变量也可以初始化值。
    
> 4.函数定义类似 PHP 函数的定义，但函数只能通过该类及其实例化的对象访问，即
   
    eg:
    <?php
        class Site {
          /* 成员变量 */
          var $url;
          var $title;
               
          /* 成员函数 */
          function setUrl($par){
             $this->url = $par;
          }
          
          function getUrl(){
             echo $this->url . PHP_EOL;
          }
          
          function setTitle($par){
             $this->title = $par;
          }
          
          function getTitle(){
             echo $this->title . PHP_EOL;
          }
        }
    ?>   // 变量 $this 代表自身的对象;PHP_EOL 为换行符

>20.2 PHP 中创建对象:类创建后，我们可以使用 new 运算符来实例化该类的对象
 
        eg: $runoob = new Site();
            $taobao = new Site;
            $google = new Site;
        
>20.3 调用成员方法:在实例化对象后，我们可以使用“->”符号来调用属性与方法,且指定调用的方法前面不加$(即$taobao->setTitle( "淘宝" )，不存在$符号)
  
         // 调用成员函数，设置标题和URL
        $runoob->setTitle( "菜鸟教程" );
        $taobao->setTitle( "淘宝" );
        $google->setTitle( "Google 搜索" );
        
        $runoob->setUrl( 'www.runoob.com' );
        $taobao->setUrl( 'www.taobao.com' );
        $google->setUrl( 'www.google.com' );
        
        // 调用成员函数，获取标题和URL
        $runoob->getTitle();
        $taobao->getTitle();
        $google->getTitle();
        
        $runoob->getUrl();
        $taobao->getUrl();
        $google->getUrl();
        
★★构造函数：主要用来在创建对象时初始化对象， 即为对象成员变量赋初始值，在创建对象的语句中与 new 运算符一起使用。
类似于Python中的def __init__()的初始化函数，也是初始化对象函数 

    语法：
    function __construct( $par1, $par2 ) {
       $this->url = $par1;
       $this->title = $par2;
    }
    构造方法的样例:
        <?php        
        class Person{
            public $name;
            public $age;
            public function __construct($name,$age){
                // 在类中如何访问在自己的属性。$this代表当前对象
                $this->name = $name;
                $this->age = $age;
            }
        }
        // 属性以及方法的调用，使用new 创建新的实例对象
        $ming=new Person('zhangsan',18);
        $niu = new Person('xiaoniu',20);
        var_dump($ming);
        var_dump($niu)
    ?>
##### 21.继承

    PHP 使用关键字 extends 来继承一个类，PHP 不支持多继承，格式如下：
    class Child extends Parent {
       // 代码部分
    }
    继承是样例：
    <?php        
        public Person(){
            public $name='chd';
            public $age= 18;
            public function eat(){
                echo 'i love you';
            }
        }
        public Man extends Person(){
            public $age = 18;
        }
        // 属性以及方法的调用，使用new 创建新的实例对象
        $ming=new Man(); // 声明子类实例化对象
        var_dump($ming->name);  // 调用父类的属性值
        var_dump($ming->eat());  // 调用父类的方法
        var_dump($ming->age);  // 调用子类自身的属性值
    ?>

##### 访问控制

    PHP 对属性或方法的访问控制，是通过在前面添加关键字 public（公有），protected（受保护）或 private（私有）来实现的。  
    public（公有）：公有的类成员可以在任何地方被访问。
    protected（受保护）：受保护的类成员则可以被其自身以及其子类和父类访问。
    private（私有）：私有的类成员则只能被其定义所在的类访问。
## 21.[php的日期和时间](https://blog.csdn.net/ithomer/article/details/79399146)
> Date()函数：date(时间戳的格式，规定时间戳)

    时间戳的格式： d - 表示月里的某天（01-31）
                m - 表示月（01-12）
                Y - 表示年（四位数）
                1 - 表示周里的某天
                h - 带有首位零的 12 小时小时格式
                i - 带有首位零的分钟
                s - 带有首位零的秒（00 -59）
                a - 小写的午前和午后（am 或 pm）
    其他字符，比如 "/", "." 或 "-" 也可被插入字符中，以增加其他格式。
     $s_date = date('Y-m-d',strtotime('-6 days'));   //表示在获取当前时间的基础上减去六天的时间，日期格式为Y-m-d
     $e_date = date('Y-m-d'); // 表示获取当前的时间年月日
     $e_date = date('Y-m-d H:i:s'); // 表示获取当前具体的时间
     $e_date = date('Y-m-d', strtotime ("+1 day", strtotime('2017-11-11'))); // 表示将某一个字符串时间转换为目标时间格式
      
## 22.PHP连接数据库（区分于thinkPHP连接数据库）

>1.为什么要使用PDO：增加数据库连接扩展，是程序连接数据库的方法之一

    PDO是PHP5新加入的一个重大功能，我们的数据库服务器为MySQL，所有的程序代码的数据库操作全是一mysql()或者mysqli()函数来操作，
    当我们的数据库 需要更换时比如换成，SQL SERVER、PostgreSQL、MS 等，我们不可能去修改所有的程序代码！所以就要用到PDO，
    PDO很好的帮我们解决了这个问题，使用PDO操作非常方便，只需要修改数据源格式，和加载相应的驱动文件到PHP.ini即可；
    ————————————————

>`2.PDO连接数据库`[PDO(php data object)](https://blog.csdn.net/jia_1418422386/article/details/80394840)连接MySQL

```方式一：借由mysqli```
    <?php 
        $servername = 'localhost';
        $username = 'username';
        $password = 'password';
        $db_name = 'NMSL';
        // 创建连接
        $conn = mysqli($servername, $username, $password,$db_name); 
        // 检测连接
        if (!$conn) {
            die("Connection failed: " . mysqli_error());
        }
        echo "连接成功";
    ?>
``` 方式二：PDO```    
    $DSN = 'mysql:host=localhost;dbname=demo;charset=utf-8';
    $pdo = new PDO($DSN,'username','password');  // 表示已连接了数据库
    
>3.设置PDO在处理数据的过程中采用什么方式去处理
    
    setAttribute()方法是设置部分属性，主要属性有：PDO::ATTR_CASE、PDO::ATTR_ERRMODE等，我们设置的是PDO::ATTR_CASE(使用关联索引获取数据)
    
    PDO::ATTR_CASE：强制列名为指定的大小写。他的$value可为：
    
    　　PDO::CASE_LOWER：强制列名小写。
    
    　　PDO::CASE_NATURAL：保留数据库驱动返回的列名。
    
    　　PDO::CASE_UPPER：强制列名大写。
   
    PDO::ATTR_ERRMODE：错误报告。他的$value可为：
    
    　　PDO::ERRMODE_SILENT： 仅设置错误代码。
    
    　　PDO::ERRMODE_WARNING: 引发 E_WARNING 错误
    
    　　PDO::ERRMODE_EXCEPTION: 抛出 exceptions 异常。
    
    PDO::ATTR_ORACLE_NULLS （在所有驱动中都可用，不仅限于Oracle）： 转换 NULL 和空字符串。他的$value可为：
    
    　　PDO::NULL_NATURAL: 不转换。
    
    　　PDO::NULL_EMPTY_STRING： 将空字符串转换成 NULL 。
    
    　　PDO::NULL_TO_STRING: 将 NULL 转换成空字符串。

> 4.数据库操作：exec(不返回数据集，即insert，update，delete)与query(仅执行带结果返回的，即select)方法
    
    <?php
    /* 连接数据库*/
    $DSN = 'mysql:host=localhost;dbname=demo;charset=utf-8';
    $pdo = new PDO($DSN,'username','password'); 
    
    /*  删除 FRUIT 数据表中满足条件的所有行~exec方法 */
    $count = $pdo->exec("DELETE FROM fruit WHERE colour = 'red'");
    
    /* 返回被删除的行数 */
    print("Deleted $count rows.\n");
    ?> 
    

#### tips:

>1.trim('参数一','参数二')：
   
        参数一表示：待处理的字符串
        参数二表示:字符串首尾指定去除的字符串
        $text   = "\t\tThese are a few words :) ...  ";
        $trimmed = trim($text);  // 指定首尾的空字符串
        $trimmed = trim($text, " \t.");  //去除首尾特定的字符串
   >2.$data = split('分隔符',目标字符串)：参数一表示以特定的字符来分割目标字符串
   
       // 分隔符能够是斜线，点，或横线 
       $date = "04/30/1973";  
       list($month, $day, $year) = split ('[/.-]', $date); 
   
   >3.oracle的replace()函数
        
        replace(原字段，“原字段旧内容“,“原字段新内容“,)
        select replace(原字段，“原字段旧内容“,“原字段新内容“,) from table_name 
   
   > 4.[intvar](https://blog.csdn.net/zhanghao143lina/article/details/73159428) 将字符串转换为整形
   
       若字符串的首位字符不是字符串，则返回值为0 
       eg：
       intval("12ab3") 返回的是12

        intval("ab123")返回的是0
        
        intval("-1ab2")返回的是-1
        
        intval(12.3223)=12
        
        intval("100", 2) = 4     100按照2进制看就是4
        
        intval(array()) = 0
        
        intval(array(1,2)) = 1
   
