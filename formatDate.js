//将参数fmt中的yyyy MM dd hh mm ss 分别替换成对应的时间
function formatDate(date,fmt){
	if (/(y+)/.test(fmt)){
		fmt = fmt.replace(RegExp.$1,(date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	let obj = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	};
	for (let i in obj){
		if (new RegExp('(' + i + ')').test(fmt)){
			let str = obj[i] + '';
			fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1) ? str : padLeftZero(str)); 
		}
	}
	return fmt;
}

function padLeftZero(str){
	return ('00' + str).substr(str.length);
}