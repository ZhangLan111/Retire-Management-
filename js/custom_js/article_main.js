/**
 * Created by LeiTing on 2017/3/22.
 */
var URL="http://119.29.53.178:8080/retirement/news//selectAllNewss.action?pageNum=1";
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

		var mySelect=document.getElementById("mySelect");

		//下拉框
		mySelect.onchange=function() {
			var index = this.selectedIndex;
			var val = this.options[index].value;
			val = parseInt(val);    //switch只接受数字类型的变量
			changeURL(val);

			InformationHanding(1);
		};

		//复选框，删除操作
		var num=0;
		$("#Delete").click(function(){
			//清空数组里面的元素
			BOX.splice(0,BOX.length);
			num=checkbox(0);

			if(num==0){
				alert("你没有选取任何元素！！！");
			}else{
				alert(BOX);
				var mymessage=confirm("确定要删除吗？");
				var Data={
					"pageNum":"nowNum"
				};
				 if(mymessage==true)
				 {
					 $.ajax({
						 type:"POST",
						 url:URL,
						 data:Data,
						 dataType:"json",
						 contentType:"application/json;charset=utf-8",
						 success:function(data){
							 alert("删除成功！！！");

						 },
						 error:function(E_request){
							 alert("发生错误："+E_request.status);
						 }
					 });
				 }
				 else
				 {
					return false;
				 }
			}
		})
	};

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

	//改变操作的地址
	function changeURL(n){
		switch(n) {
			case 1:
				URL = "http://119.29.53.178:8080/retirement/news//selectAllNewss.action?pageNum=1";
				break;
			case 2:
				URL = "js/custom_js/test1.json";
				break;
			case 3:
				URL = "js/custom_js/test2.json";
				break;
			case 4:
				URL = "js/custom_js/test1.json";
				break;
			case 5:
				URL = "js/custom_js/test2.json";
				break;
			case 6:
				URL = "js/custom_js/test.json";
				break;
			case 7:
				URL = "js/custom_js/test1.json";
				break;
			case 8:
				URL = "js/custom_js/test2.json";
				break;
		}

	}

	/**
	 *自动居中函数
	 */
	function autoCenter(el){
		var fatherW = el.parentNode.clientWidth;  //获取网页可视区域的宽高
		var elW=el.offsetWidth;      //获取元素的实际高度和宽度
		el.style.left =(fatherW - elW) /2 + 'px';      //居中
	}


	//更新页面的函数
	function InformationHanding(nowNum){

		var staff=document.getElementById("staff");
		staff.innerHTML=" ";
		var Delete,Number,Title,Author,Time,Modifier;
		$.ajax({
			type:"POST",
			url:URL,
			data:"",
			dataType:"json",
			success:function(DATA){
				console.log(DATA);
				for(var i=0;i<10;i++){
					temp=document.createElement('tr');
					Delete=document.createElement('td');
					Delete.innerHTML='<label><input type="checkbox" value="" class="checkbox"></label>';
/*news_id news_title news_content publish_author publish_time browse_count
 */
					Number=document.createElement('td');
					Number.innerHTML=DATA[i].browseCount;
					Title=document.createElement('td');
					Title.innerHTML=DATA[i].newsTitle;
					Author=document.createElement('td');
					Author.innerHTML=DATA[i].publishAuthor;
					Time=document.createElement('td');
					Time.innerHTML=DATA[i].publish_time;
					Modifier=document.createElement('td');
					Modifier.innerHTML=DATA[i].browse_count;


					temp.appendChild(Number);
					temp.appendChild(Title);
					temp.appendChild(Author);
					temp.appendChild(Time);
					temp.appendChild(Modifier);
					temp.appendChild(Delete);
					staff.appendChild(temp);
				}
			},
			error:function(E_request){
				alert("发生错误："+E_request.status);
			}
		});
	}