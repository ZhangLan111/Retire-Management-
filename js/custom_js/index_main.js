
    window.onload=function(){
		$.ajax({
			type:"POST",
			url:"js/custom_js/test.json",
			data:"",
			dataType:"json",
			success:function(DATA){
				staff.innerHTML=" ";
				for(var i=0;i<3;i++){
					temp=document.createElement('tr');
					num=document.createElement('td');
					num.innerHTML=DATA[i].condoleId;
					name=document.createElement('td');
					name.innerHTML=DATA[i].condole;
					age=document.createElement('td');
					age.innerHTML=DATA[i].giftType;

					temp.appendChild(num);
					temp.appendChild(name);
					temp.appendChild(age);
					staff.appendChild(temp);
				}
			},
			error:function(E_request){
				alert("发生错误："+E_request.status);
			}
		});
	//分页
	var div1=document.getElementById("div1");
		page({
			id:"div1",
			nowNum:1,
			allNum:10
		});
		InformationHanding(1);
		autoCenter(div1);
    };

	function autoCenter(el){
		var fatherW = el.parentNode.clientWidth;  //获取网页可视区域的宽高
		var elW=el.offsetWidth;      //获取元素的实际高度和宽度
		el.style.left =(fatherW - elW) /2 + 'px';      //居中

	}


	/**
	 * starnum每一页最开始的信息下标，pagenum让程序知道这是第几页
	 * 信息处理
	 */
	function InformationHanding(nowNum){
		var staff=document.getElementById("staff");
		var temp;
		var num,name,age;
		var Data={
			"pageNum":"nowNum"
		};

	}
