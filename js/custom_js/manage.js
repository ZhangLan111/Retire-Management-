
	var num = $("#otbody").find("tr").length;
	URL='http://119.29.53.178:8080/retirement/manage/selectAllManager.action';
	console.log(num);
	var otd = $("<td></td>");
	var pageA,str,myStr;
	//ajax内容
page({
		id: 'div1',
		nowNum: 1,
		allNum: 10,
		callBack: function(now){
			pageA = now;
			var staff=document.getElementById("staff");
			staff.innerHTML=" ";
			//URL='http://119.29.53.178:8080/retirement/manageLogin/selectAllManager.action';

			var Delete,Num2,Title,Author,Time,Modifier,check,aedit,psd;
			console.log(URL);
			$.ajax({
				type:"GET",
				url:URL+'?'+'pageNum'+'='+now,
				dataType:"json",
				contentType:"aplication/json;charset=utf-8",
				success:function(data){
					console.log(data);
					for(var i=0;i<10;i++){
						temp=document.createElement('tr');
						Delete=document.createElement('td');
						//工号
						Num2=document.createElement('td');
						//姓名
						Title=document.createElement('td');
						//等级
						Author=document.createElement('td');
						psd = document.createElement('td');
						aedit = document.createElement('td');
						temp.appendChild(Delete);
						temp.appendChild(Num2);
						temp.appendChild(Title);
						temp.appendChild(Author);
						temp.appendChild(psd);
						temp.appendChild(aedit);
						staff.appendChild(temp);
						Num2.innerHTML=data.managerList[i].managerId;
						Title.innerHTML=data.managerList[i].managerName;
						Author.innerHTML=data.managerList[i].grade;
						psd.innerHTML=data.managerList[i].password;
						aedit.innerHTML="<a class='oedit'>编辑</a>";
						Delete.innerHTML='<input type="checkbox" value="" class="checkbox"></input>';
					}
				},
				error:function(E_request){
					alert("发生错误："+E_request.status);
				}
			});

		}
});
	//新增显示小框
	$("#Add").bind('click',function(){
		//console.log('3');
		$('#De_box').css('display','block');
		$('#De_box').css('opacity','1');
		WAHautoCenter(De_box);
	});
	//弹框取消按钮
	$('#quxiao').bind('click',function(){
		$('.wrap').hide('400');
		//$('.addo').css('display','none');
	});
	//关闭函数
	$('#oclose').bind('click',function(){
		$('#De_box').css('display','none');
		$('#De_box').css('opacity','0');
	});
	
	//弹框确定按钮点击事件
	$('#sure').bind('click',function(){
		console.log('1');
		var otr  = $('<tr></tr>');
		var otd1 = $('<td>'+$('#cid').val()+'</td>');
		var otd2 = $('<td>'+$('#cname').val()+'</td>');
		var otd3 = $('<td>'+$('#grade').val()+'</td>');
		var otd4 = $('<td>'+$('#psd').val()+'</td>');
		var otd4 = $('<a>编辑<a>');
		var otd5 = $("<td><input type='checkbox'></input></td>");
		var id = $('#cid').val();
		var name = $('#cname').val();
		var grade = $('#grade').val();
		var password = $('#psd').val();
		//要传入的内容
		 str = {'managerId':id,'managerName':name,
					'grade':grade,'password':password};
		 myStr = JSON.stringify(str);
		console.log(myStr);
		//向后台传数据
		$.ajax({
				url:"http://119.29.53.178:8080/retirement/manage/insertManager.action",
				type:"POST",
				data: {"managerJson":myStr},
				success: function(data){ 
						//console.log(data);
						console.log(myStr);
						console.log('success');
						location.reload(); 
				},
				error:function(err){
					console.log(myStr);
					console.log({'managerJson':myStr});
					alert("错误:"+err.status);
				}
			}); 
		//location.reload();

		
	});
	//console.log(str);
	
	//删除事件
	$('#Delete').bind('click',function(){
		if($("input[type='checkbox']").is(':checked')){
			var oif = confirm('确定删除？');
			if (oif) {
				var checkedList = new Array();
				$(":checked").each(function() { 
					checkedList.push($(this).parent().parent().find('td').eq(0)); 
					//$(this).parent().parent().remove(); //隐藏所有被选中的input元素
				});
				//向后台传数据
				console.log(URL+'?'+'pageNum'+'='+pageA);
				 $.ajax({
					url:"URL+'?'+'pageNum'+'='+pageA",

					type:"POST",
					dataType:"json",
					data:{managerId:$(":checked").parent().parent().find('td').eq(0).html(),
					managerName:$(":checked").parent().parent().find('td').eq(1).html(),
					grade:$(":checked").parent().parent().find('td').eq(3).html(),
						password:$(":checked").parent().parent().find('td').eq(2).html()},
					//data:{'delitems':checkedList.toString()}, 
					success: function(){
						 $(this).parent().parent().remove(); //隐藏所有被选中的input元素
					},
					error:function(err){
						alert("错误:"+err.status);
					}
				}); 
			}else{
				$(":checked").attr('checked',false);
			}
		}
		else{
			alert("您未选择任何元素");
		}
       	
	});
	//自动居中
	function WAHautoCenter(el){

		var bodyW = document.documentElement.clientWidth;  //获取网页可视区域的宽高
		var bodyH = document.documentElement.clientHeight;

		var elW=el.offsetWidth;      //获取元素的实际高度和宽度
		var elH= el.offsetHeight;
		el.style.left =(bodyW - elW) /2 + 'px';      //居中
		el.style.top = (bodyH - elH)/2 +'px';

	}

	//编辑
	$('#staff').on('click','a',function(){
		var b=$(this).parent().parent().find('td').eq(2);
		var c=$(this).parent().parent().find('td').eq(3);
		var a=$(this).parent().parent().find('td').eq(1);
		var e=$(this).parent().parent().find('td').eq(5);
		var d=$(this).parent().parent().find('td').eq(4);
		a.html("<input class='one' type='text' value='"+a.html()+"'></input>");
		b.html("<input class='two' type='text' value='"+b.html()+"'></input>");
		c.html("<input class='thr' type='text' value='"+c.html()+"'></input>");
		d.html("<input class='four' type='text' value='"+d.html()+"'></input>");
		e.html("<button class='aa'>保存</button>");
		$('.aa').on('click',function(){
			var that = this;
			/*$(this).parent().parent().find('td').eq(1).html($('.one').val());
			$(this).parent().parent().find('td').eq(2).html($('.two').val());
			$(this).parent().parent().find('td').eq(3).html($('.thr').val());
			$(this).parent().parent().find('td').eq(4).html($('.four').val());
			$(this).parent().parent().find('td').eq(5).html("<a>编辑</a>");*/
			var str = {'managerId':$(this).parent().parent().find('td').eq(1).html($('.thr').val()),
						'managerName':$(this).parent().parent().find('td').eq(2).html($('.one').val()),
						'grade':$(this).parent().parent().find('td').eq(3).html($('.four').val()),
						'password':$(this).parent().parent().find('td').eq(4).html($('.two').val())};
						alert($(that).parent().parent().find('td').eq(1).html($('.one').val()));
			//向后台传数据
			$.ajax({
					url:"http://119.29.53.178:8080/retirement/manage/updateManager.action",
					type:"POST",
					
					data:{'managerJson':JSON.stringify(str)},
					success: function(data){
						alert($(that).parent().parent().find('td').eq(1).html($('.one').val()));
						$(that).parent().parent().find('td').eq(1).html($('.one').val());
						$(that).parent().parent().find('td').eq(2).html($('.two').val());
						$(that).parent().parent().find('td').eq(3).html($('.thr').val());
						$(that).parent().parent().find('td').eq(4).html($('.four').val());
						$(that).parent().parent().find('td').eq(5).html("<a>编辑</a>");
						console.log(data);
						location.reload(); 
					},
					error:function(err){
						alert("错误:"+err.status);
					}
				}); 
			//location.reload(); 
		});
	});






	