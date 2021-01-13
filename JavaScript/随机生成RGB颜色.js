/*随机生成RGB颜色*/
function random(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function randomRGB(max,min){
	var color1 = random(min,max);
	var color2 = random(min,max);
	var color3 = random(min,max);
	return 'rgb('+color1+','+color2+','+color3+')'
}
console.log(randomRGB(0,255))