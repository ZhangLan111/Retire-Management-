/**
 * Created by LeiTing on 2017/3/31.
 */

var BOX=[];		//计算选框点击位置
var BOX2=[];   //传入文章的id值

window.onload=function(){
	var index=false;
	InformationHanding(1);
	//复选框，删除操作
	$("#Delete").click(function(){
		Delete();
	});

//选框的样式

	$("#CheckAll").click(function(){
		var Checkbox=$(".checkbox");
		var div=$(".checkboxFive");
		if(index==false){
			for(var i=0;i<Checkbox.length;i++){
				Checkbox[i].checked=true;
				this.children[0].title="取消全选";
				this.children[0].className="fa fa-close";
				div[i].style.backgroundColor="#2C8F7B";
				div[i].style.border="1px solid #2C8F7B";
				index=true;
			}
		}else{
			for(var j=0;j<Checkbox.length;j++){
				Checkbox[j].checked=false;
				this.children[0].title="全选";
				this.children[0].className="fa fa-check";
				div[j].style.backgroundColor="#F9F8F8";
				div[j].style.border="1px solid #ddd";
				index=false;
			}
		}
	});


};



//更新页面的函数
function InformationHanding(){
	BOX2.splice(0,BOX2.length);
	var staff=document.getElementById("staff");
	staff.innerHTML=" ";


	$.ajax({
		type:"GET",
		url:"http://119.29.53.178:8080/retirement/historyRecord/selectAllHistoryRecords.action"+"?"+"pageNum="+1,
		dataType:"json",
		contentType:"application/json;charset=UTF-8",
		success:function(DATA){
			var checkbox,Name,DealWay,i_con,time;
			for(var i=0;i<DATA.list.length;i++){
				BOX2.push(DATA.list[i].historyId);
				var temp=document.createElement("tr");
				temp.className="unread";
				checkbox=document.createElement("td");
				checkbox.className="check-mail";

				checkbox.innerHTML='<div class="checkboxFive"> ' +
					'<label><input type="checkbox" class="checkboxFiveInput  checkbox" name="" /></label>'+
					'</div>';

				DealWay=document.createElement("td");
				DealWay.innerHTML=DATA.list[i].content;
				DealWay.className="mail-subject";
				i_con=document.createElement("td");
				i_con.innerHTML='<i class="fa fa-paperclip">';
				i_con.className="";

				var str="";
				var historyTime=new Date(DATA.list[i].time);
				//当天凌晨00:00：00的毫秒数
				var nowDay= new Date(new Date().toLocaleDateString()).getTime();
				//昨天
				var yeDay=new Date(new Date().toLocaleDateString()).getTime()-24*60*60*1000;
				//两天前
				var towDay=new Date(new Date().toLocaleDateString()).getTime()-2*24*60*60*1000;

				console.log(historyTime.getTime()+"  "+nowDay);
				if(historyTime.getTime()>= nowDay){
					str="今天"+" "+historyTime.getHours()+":"+historyTime.getMinutes();
				}else if(nowDay>historyTime.getTime()&&historyTime.getTime()>=yeDay){
					str="昨天"+" "+historyTime.getHours()+":"+historyTime.getMinutes();
				}else if(yeDay>historyTime.getTime()&&historyTime.getTime()>=towDay){
					str="两天前"+" "+historyTime.getHours()+":"+historyTime.getMinutes();
				}else{
					str=historyTime.getFullYear()+"年"+historyTime.getMonth()+"月"+historyTime.getDay()+"日 "+historyTime.getHours()+":"+historyTime.getMinutes();
				}

				time=document.createElement("td");
				time.innerHTML=str;
				time.className="text-right mail-date";
				temp.appendChild(checkbox);
				temp.appendChild(DealWay);
				temp.appendChild(i_con);
				temp.appendChild(time);
				staff.appendChild(temp);

			}

			var div=$(".checkboxFive");
			var check=$(".checkboxFiveInput");

			for(var j=0;j<div.length;j++){
				div[j].onclick=function(e){
					//阻止事件冒泡
					e.preventDefault();

						if(this.children[0].children[0].checked==false){
							this.children[0].children[0].checked=true;
							this.style.backgroundColor="#2C8F7B";
							this.style.border="1px solid #2C8F7B";
						}else{
							this.children[0].children[0].checked=false;
							this.style.backgroundColor="#F9F8F8";
							this.style.border="1px solid #ddd";
						}
				}
			}


		},
		error:function(E_request){
			alert("发生错误："+E_request.status);
		}
	});
}

function Delete(){
	//清空数组里面的元素
	BOX.splice(0,BOX.length);
	var num=checkbox(0);
	console.log("选取框的位置："+BOX);
	console.log("id值，总共："+BOX2);
	var Uer_name=sessionStorage.getItem("key");

	var delete_Id=[];

	for(var i=0;i<BOX2.length;i++){
		for(var j=0;j<BOX.length;j++){
			if(BOX[j]==i){
				delete_Id.push("Id="+BOX2[i]+"&");
			}
		}

	}


	delete_Id=delete_Id.join("");
	delete_Id=delete_Id.substring(0,delete_Id.length-1);
	console.log("传递过去的id值："+delete_Id);
	if(num==0){
		alert("你没有选取任何元素！！！");
	}else{
		var mymessage=confirm("确定要删除吗？");
		if(mymessage==true)
		{
			$.ajax({
				type:"GET",
				url:"http://119.29.53.178:8080/retirement/historyRecord/deleteHistoryRecordByHistoryRecordId.action"+"?"+delete_Id+"&managerName="+Uer_name,
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
