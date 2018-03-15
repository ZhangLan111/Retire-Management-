/**
 * Created by LeiTing on 2017/3/27.
 */
function Delete(){
	//清空数组里面的元素
	BOX.splice(0,BOX.length);
	num=checkbox(0);

	if(num==0){
		alert("你没有选取任何元素！！！");
	}else{
		var mymessage=confirm("确定要删除吗？");
		var Data={
			"pageNum":"nowNum"
		};
		Data=JSON.stringify(Data);
		if(mymessage==true)
		{
			$.ajax({
				type:"POST",
				url:"js/custom_js/test.json",
				data:Data,
				dataType:"json",
				contentType:"application/json;charset=utf-8",
				success:function(data){
					alert("删除成功！！！");
					window.location.reload();
				},
				error:function(E_request){
					alert("发生错误："+E_request.status);
				}
			});
		}
	}
}
/*编辑和增加的函数*/
function Add_up(){
	var check=false;
	var MyInput=document.getElementsByClassName("MyInput");
	for(var i=0;i<MyInput.length;i++){
		if(MyInput[i].value==""){
			check=false;
		}else{
			check=true;
		}
	}
	if(check){
		S_data={
			"name":MyInput[0].value,
			"age":MyInput[1].value,
			"pingying":MyInput[2].value,
			"zhiwei":MyInput[3].value
		};
		S_data=JSON.stringify(S_data);
		$.ajax({
			type:"POST",
			url:"js/custom_js/test.json",
			data:S_data,
			dataType:"json",
			contentType:"application/json;charset=utf-8",
			success:function(data){
				$("#De_box").css({
					"opacity":"0"
				});
				window.location.reload();
			},
			error:function(E_request){
				alert("发生错误："+E_request.status);
			}
		});
	}else{
		alert("请将信息完善！！！");
	}
}
//屏幕 自动居中function
function WAHautoCenter(el){

	var bodyW = document.documentElement.clientWidth;  //获取网页可视区域的宽高
	var bodyH = document.documentElement.clientHeight;

	var elW=el.offsetWidth;      //获取元素的实际高度和宽度
	var elH= el.offsetHeight;
	el.style.left =(bodyW - elW) /2 + 'px';      //居中
	el.style.top = (bodyH - elH)/2 +'px';

}

//横向 自动居中函数
function autoCenter(el){
	var fatherW = el.parentNode.clientWidth;  //获取网页可视区域的宽高
	var elW=el.offsetWidth;      //获取元素的实际高度和宽度
	el.style.left =(fatherW - elW) /2 + 'px';      //居中
}

//计算选框选取数量
function checkbox(index){

	var tree=$(".checkbox");

	for(var i=0;i<tree.length;i++){
		if(tree[i].checked){
			BOX.push(i);
			index++;
		}
	}
	return index;
}

/*关闭按钮，淡出*/
function close(){
	$("#De_box").css({
		"opacity":"0"
	});
}
/*编辑，淡入*/
function edit(){
	$("#De_box").css({
		"display":"block",
		"opacity":"1"
	});
	WAHautoCenter(De_box);

}
