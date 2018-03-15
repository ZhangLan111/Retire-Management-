/**
 * Created by LeiTing on 2017/3/27.
 */
var URL="js/custom_js/test.json";
var BOX=[];
window.onload=function(){
	var div1=document.getElementById("div1");
	page({
		id:"div1",
		nowNum:1,
		allNum:10
	});
	InformationHanding(1);
	autoCenter(div1);


	//复选框，删除操作
	var num=0;
	$("#Delete").click(function(){
		Delete();
	});

	/*新增*/
	$("#Add").click(function(){
		$("#De_box").css({
			"display":"block",
			"opacity":"1"
		});

		WAHautoCenter(De_box);

		var MyInput=document.getElementsByClassName("MyInput");
		for(var i=0;i< MyInput.length;i++){
			MyInput[i].value=" ";
		}
	});

	/*编辑和增加~更新数据的按钮*/
	$("#Add_Button").click(function(){
		Add_up();
	});

};



//更新页面的函数
function InformationHanding(){

	var staff=document.getElementById("staff");
	staff.innerHTML=" ";
	var Delete,Number,Author,Time,Modifier,Deal,position,edit_a;
	$.ajax({
		type:"POST",
		url:URL,
		data:"",
		dataType:"json",
		contentType:"application/json;charset=utf-8",
		success:function(DATA){
			for(var i=0;i<10;i++){
				temp=document.createElement('tr');

				Number=document.createElement('td');
				Number.innerHTML=DATA[i].Number;
				Author=document.createElement('td');
				Author.innerHTML=DATA[i].Author;
				Time=document.createElement('td');
				Time.innerHTML=DATA[i].Time;
				Modifier=document.createElement('td');
				Modifier.innerHTML=DATA[i].Modifier;
				Deal=document.createElement('td');
				Deal.innerHTML="<a href='javascript:edit();' class='Edit'>编辑</a>";
				position=document.createElement('td');
				position.innerHTML=DATA[i].Modifier;
				edit_a=document.createElement('td');
				edit_a.innerHTML=DATA[i].Modifier;
				Time.innerHTML=DATA[i].Author;
				Delete=document.createElement('td');
				Delete.innerHTML='<label><input type="checkbox" value="" class="checkbox"></label>';


				temp.appendChild(Number);
				temp.appendChild(Author);
				temp.appendChild(Time);
				temp.appendChild(Modifier);
				temp.appendChild(position)
				temp.appendChild(edit_a);
				temp.appendChild(Deal);
				temp.appendChild(Delete);
				staff.appendChild(temp);
			}
			/*编辑的链接制作完成之后绑定onclick事件*/
			var edit=document.getElementsByClassName("Edit");
			var MyInput=document.getElementsByClassName("MyInput");
			for(var j=0;j<edit.length;j++){

				edit[j].onclick=function(){
					var tr=this.parentNode.parentNode;
					var	td=tr.childNodes;

					for(var i=0;i<MyInput.length;i++){
						MyInput[i].value=td[i].innerHTML;
					}
				}
			}
		},
		error:function(E_request){
			alert("发生错误："+E_request.status);
		}
	});
}