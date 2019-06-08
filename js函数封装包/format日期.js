	<script type="text/javascript">
		function formatDate(date){
			/*判断参数date是否是日期对象*/
		//instanceof instance 实例（对象）
		if (!(date instanceof Date)){
			console.log('date 不是日期对象')
			return;
		}
		var year =date.getFullYear(),
		month = date.getMonth()+1,
		day =date.getDate(),
		hour =date.getHours(),
		minute = date.getMinutes(),
		seccond = date.getSeconds();

		month = month<10? '0'+month:month;
		day = day<10? '0'+day:day;
		hour = hour<10? '0'+hour:hour;
		minute = minute<10? '0'+minute:minute;
		seccond = seccond<10? '0'+seccond:seccond;


		return year+'-'+month+'-'+'day'+' '+hour+':'+minute+':'+seccond;
	}
	var d = new Date();
	var dateStr=formatDate(d)
	console.log(dateStr)
</script>
