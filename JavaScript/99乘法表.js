var str =''
for (var i =1;i<10;i++){
	for (var j = i;j<10;j++){
		str += i + '*'+j+'='+i*j+'\t'
	}
	str = str+'\n'
}
console.log(str)

  
  /*打印正方形*/
var str='';  //打印正方形
for (var j =0;j<10;j++){  //外层控制输出多少行
	for(var i =0;i<10;i++){  //内层控制每一行打印多少个字符
		str =str+'*';
	}
	str = str +'\n'
}
console.log(str)  //结果相同时，只能输出一次值



/* 打印三角形*/
var str = ''
for (var i =0;i<10;i++){
	for (var j=i;j<10;j++){
		str =str+'*'
	}
str = str +'\n'	
}
console.log(str)  //每一个console。log()会自动换行