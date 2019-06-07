
<script type="text/javascript">
	var myMath(){
		max :function(){
		var max=arguments[0]
		for (var i=1;i<arguments.length;i++){
			if (max<arguments[i]){
				max = arguments[i];
			}
		}
		rturn max	
		},
		min :function(){
			var min=arguments[0]
		for (var i=1;i<arguments.length;i++){
			if (min > arguments[i]){
				min = arguments[i];
			}
		}
		rturn min
		}
	}
	console.log(myMath.max(9,8,22,1,3))
	console.log(myMath.min(9,8,22,1,3))
</script>
