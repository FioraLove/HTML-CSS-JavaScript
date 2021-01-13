function isRun(year){
	var result = false;
	if ((year%4 === 0 && year % 100 != 0)||year%400 === 0) {
		return true;
	}
	return result;
}