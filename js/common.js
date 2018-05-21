//价格
function clearNoNum(obj) {
    obj.value = obj.value.replace(/[^\d.]/g, "");//清除“数字”和“.”以外的字符
    obj.value = obj.value.replace(/^\./g, "");//验证第一个字符是数字而不是.
    obj.value = obj.value.replace(/\.{2,}/g, ".");//只保留第一个. 清除多余的.
    //保证.只出现一次，而不能出现两次以上  
    obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    //只能输入两个小数  
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');
}
//两时间差   分钟
function CompareDate(d1,d2)
{
	var chaunj = new Date(d1.replace(/-/g,"\/"));
	var dangq = new Date(d2.replace(/-/g,"\/"));
	var dax = (chaunj - dangq)/60000;
  	return dax;
}

/*
 * 转换时间戳为日期字符串
 */

function getLocalTime(nS,qB) { 
			 	var rdate = new Date(parseInt(nS));
			    var $_year = rdate.getFullYear();
			    var $_month = parseInt(rdate.getMonth())+1;
			    $_month =  $_month < 10 ? '0' + $_month : '' + $_month;
			    var $_day = rdate.getDate();
			    $_day =  $_day < 10 ? '0' + $_day : '' + $_day;
			    var $_hour = rdate.getHours();
			    $_hour =  $_hour < 10 ? '0' + $_hour : '' + $_hour;
			    var $_min = rdate.getMinutes();
			    $_min =  $_min < 10 ? '0' + $_min : '' + $_min;
			    var $_sec = rdate.getSeconds();
			    $_sec =  $_sec < 10 ? '0' + $_sec : '' + $_sec;
			    
			    var $_f_date =  $_year +"-"+$_month+"-"+$_day+" "+$_hour+":"+$_min+":"+$_sec;
			    var $_f_date2 =  $_year +"-"+$_month+"-"+$_day+" "+$_hour+":"+$_min;
			    var $_f_date3 =  $_year +"-"+$_month+"-"+$_day;
			    var $_f_date4 =  $_hour+":"+$_min;
			    var $_f_date5 = $_month+"月"+$_day+"日"+" "+$_hour+":"+$_min;
			    
			  //  var $_f_date2 =  $_year +"年"+$_month+"月"+$_day+"日";
			 //   alert($_f_date);
			 
			 	var showT = qB == 't1'?$_f_date2:qB == 't2'?$_f_date3:qB == 't3'?$_f_date4:qB == 't4'?$_f_date5:$_f_date;
			    return showT;
			}

function isToday(str){
    var d = new Date();
    var y = d.getFullYear(); // 2014

    var m = d.getMonth() + 1; // 7,月份从0开始的，注意

    var d = d.getDate(); // 9

    var date_str = y + '-' + m + '-' + d;
    return str == date_str; 
}