/**
 * Created by LeiTing on 2017/3/21.
 */

var CHECK_EMPTY=false;
var DATA=" ";
var URL="js/custom_js/test.json";

window.onload=function(){

	$("#button_login").click(function(){
		var DATA={"managerId":"1", "password":"123"};
		CheckEmpty();
		if(CHECK_EMPTY===true){
			DATA=JSON.stringify(DATA);
			$.ajax({
				type:"POST",
				url:"js/custom_js/test2.json",
				data:DATA,
				dataType:"json",
				contentType:"application/json;charset=utf-8",
				success:function(data){
					window.location.assign("https://baidu.com");
				},
				error:function(E_request){
					alert("发生错误："+E_request.status);
				}
			})
		}
	})
};


/*判断输入值是否为空*/
function CheckEmpty(){
	var radios = document.getElementsByName("inlineRadioOptions");
	var Uer_num=document.getElementById("Uer_num");
	var Uer_pwd=document.getElementById("Uer_pwd");
	var radios_check=false;

	for ( var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			radios_check = true;
			break;
		}
	}

	if(Uer_num.value==""){
		CHECK_EMPTY=false;
	}else if(Uer_pwd.value==""){
		CHECK_EMPTY=false;
	}else if(!radios_check){
		CHECK_EMPTY=false;
	}else{
		CHECK_EMPTY=true;
	}
}
