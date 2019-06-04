	function isRun(year){
		var result = false;
		if ((year%4 ===0 && year% !==0)||year%400 ===0) {
			return true;
		}
		return result;
	}
    
    functiongetDay(year,month,day){
    	var days=day;
    	for(var i=1;i<month;i++){
    		switch(i){
    			case 1:
    			case 3:
    			case 5:
    			case 7:
    			case 8:
    			case 10:
    			case 12:
    			days +=31;
    			break;
    			case 4:
    			case 6:
    			case 9:
    			case 11:
    			days +=30;
    			break;
    			case 2:
    			if(isRun(year)){
    				days +=29;
    			}
    			else{
    				days +=28
    			}
    			break;
    		}
    	}
    	return days;
    }
