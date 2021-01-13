/**
 * 生产水印，并返回水印URL地址，已适配视网膜屏幕下字体模糊问题
 * @param {*} text 水印文字
 * @param {*} el 要设置水印的目标元素，默认 document.body
 * @param {*} config 配置项
 * @returns {String} 水印URL地址
 */
function makeWatermark(text, el, config) {
	// base64转blob
	function dataURLtoBlob(dataurl) {
		var arr = dataurl.split(','),
			mime = arr[0].match(/:(.*?);/)[1],
			bstr = atob(arr[1]),
			len = bstr.length,
			u8arr = new Uint8Array(len);
		while (len--) u8arr[len] = bstr.charCodeAt(len);
		return new Blob([u8arr], {type: mime});
	}
	const ratio = window.devicePixelRatio || 1;
	config = config || {};
	const width = config.width || 260,
		height = config.height || 200,
		font = config.font || '14px Microsoft Yahei',
		color = config.color || '#ddd',
		opacity = config.opacity || 1,
		rotate = config.rotate || -30,
		x = config.x || 0,
		y = config.y || (width - 50) * ratio;
	el = el || window.document.body;
	const canvas = document.createElement('canvas');
	canvas.width = width * ratio;
	canvas.height = height * ratio;
	const ctx = canvas.getContext('2d');
	ctx.font = font.replace(/(\d+)px/g, (m, $1) => $1 * ratio + 'px');
	ctx.fillStyle = color;
	ctx.globalAlpha = opacity;
	// ctx.translate(ctx.width / 2, ctx.height / 2);
	ctx.rotate(rotate * Math.PI / 180);
	ctx.fillText(text, x, y);
	var base64 = canvas.toDataURL('image/png');
	var blob = dataURLtoBlob(base64);
	var url = URL.createObjectURL(blob);
	el.style.backgroundImage = `url(${url})`;
	el.style.backgroundSize = `${width}px ${height}px`;
	return url;
}

// Run
makeWatermark("bad woman!");
