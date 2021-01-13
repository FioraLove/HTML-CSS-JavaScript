// 第一种：新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则push进数组（推荐）
function unique1(array)
{
	let result = [];
	for(let i=0; i<array.length; i++)
	{
		if(result.indexOf(array[i]) < 0) result.push(array[i]);
	}
	return result;
}
let arr = ['aa', 'bb', 'cc', '', 1, 0, '1', 1, 'bb', null, undefined, null];
console.log(unique1(arr));


// 第二种：使用了ES6种的Set和数组的解构，虽然代码最短，但是兼容性没那么好
function unique4(array)
{
	return [...new Set(array)];
}
var arr = ['aa', 'bb', 'cc', '', 1, 0, '1', 1, 'bb', null, undefined, null];
console.log(unique4(arr));