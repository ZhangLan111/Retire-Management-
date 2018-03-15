
	var num = $("#otbody").find("tr").length;
	console.log(num);
	var otd = $("<td></td>");
	$("#Add").bind('click',function(){
		console.log('3');
		$('#De_box').css('display','block');
		$('#De_box').css('opacity','1');
		WAHautoCenter(De_box);
	});

	$('#quxiao').bind('click',function(){
		console.log('1');
		$('.wrap').hide('400');
		//$('.addo').css('display','none');
	});

	//关闭函数
	$('#oclose').bind('click',function(){
		$('#De_box').css('display','none');
		$('#De_box').css('opacity','0');
	});
	
	//确定添加
	$('#sure').bind('click',function(){

		var otr  = $('<tr></tr>');
		var otd1 = $('<td>'+$('#wid').val()+'</td>');
		var otd2 = $('<td>'+$('#wpeople').val()+'</td>');
		var otd3 = $('<td>'+$('#wobject').val()+'</td>');
		var otd4 = $('<td>'+$('#wtime').val()+'</td>');
		var otd6 = $('<a>编辑<a>');
		var otd5= $('<td>'+$('#wpresent').val()+'</td>');
		var otd7 = $("<td><input type='checkbox'></input></td>");
		var condole = $('#wpeople').val();
		var object = $('#wobject').val();
		var time = $('#wtime').val();
		var giftType = $('#wpresent').val();
		var str = {'condole':condole,'object':object,'time':time,'giftType':giftType};
		var myStr = JSON.stringify(str);


		console.log(myStr);
		//向后台传数据
		$.ajax({
				url:"http://119.29.53.178:8080/retirement/condole/insertCondole.action",
				type:"POST",
				data:{'condoleJson':myStr},
				success: function(){
					location.reload();
				},
				error:function(err){
					console.log(myStr);
					alert("错误:"+err.status);
				}
			}); 
	    //location.reload();	
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
	//删除
	$('#Delete').bind('click',function(){
		if($("input[type='checkbox']").is(':checked')){
			var oif = confirm('确定删除？');
			if (oif) {
				$(":checked").parent().parent().remove(); //隐藏所有被选中的input元素 
				//向后台传数据 
				 $.ajax({
					url:"",
					type:"GET",
					dataType:"json",
					contentType:"application/json;charset=UTF-8",

					data:{condoleId:$(":checked").parent().parent().find('td').eq(0).html(),
						condole:$(":checked").parent().parent().find('td').eq(1).html(),
						object:$(":checked").parent().parent().find('td').eq(2).html(),
						time:$(":checked").parent().parent().find('td').eq(3).html(),
						giftType:$(":checked").parent().parent().find('td').eq(4).html()},
					success: function(){
						 
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


	//编辑
	$('#staff').on('click','a',function(){
		console.log('3');
		var a=$(this).parent().parent().find('td').eq(1);
		var b=$(this).parent().parent().find('td').eq(2);
		var c=$(this).parent().parent().find('td').eq(3);
		var d=$(this).parent().parent().find('td').eq(4);
		var f=$(this).parent().parent().find('td').eq(0);
		a.html("<input class='one' type='text' value='"+a.html()+"'></input>");
		b.html("<input class='two' type='text' value='"+b.html()+"'></input>");
		c.html("<input class='thr' type='text' value='"+c.html()+"'></input>");
		d.html("<input class='four' type='text' value='"+d.html()+"'></input>");
		f.html("<input class='five' type='text' value='"+f.html()+"'></input>");
		var e=$(this).parent().parent().find('td').eq(5).html("<button class='aa'>保存</button>");
		$('.aa').on('click',function(){
			console.log('5');
			$(this).parent().parent().find('td').eq(1).html($('.one').val());
			$(this).parent().parent().find('td').eq(2).html($('.two').val());
			$(this).parent().parent().find('td').eq(3).html($('.thr').val());
			$(this).parent().parent().find('td').eq(4).html($('.four').val());
			$(this).parent().parent().find('td').eq(0).html($('.five').val());
			$(this).parent().parent().find('td').eq(5).html("<a>编辑</a>");
			//向后台传数据
			$.ajax({
				url:"",
				type:"POST",
				dataType:"json",
				data:{condoleId:$(this).parent().parent().find('td').eq(0).html($('.five').val()),
					condole:$(this).parent().parent().find('td').eq(1).html($('.one').val()),
					object:$(this).parent().parent().find('td').eq(2).html($('.two').val()),
					time:$(this).parent().parent().find('td').eq(3).html($('.thr').val()),
					giftType:$(this).parent().parent().find('td').eq(4).html($('.four').val())},
				success: function(){
					 
				},
				error:function(err){
					alert("错误:"+err.status);
				}
			}); 
		});
});
	//更新ajax内容
page({
	id: 'div1',
	nowNum: 1,
	allNum: 10,
	callBack: function(now){

			var staff=document.getElementById("staff");
			staff.innerHTML=" ";
			URL='http://119.29.53.178:8080/retirement/condole/selectAllCondoles.action';

			console.log(URL);
			$.ajax({
				type:"GET",
				url:URL+'?'+'pageNum'+'='+now,
				dataType:"json",
				contentType:"aplication/json;charset=utf-8",
				success:function(data){
					var Delete,Num,Title,Author,Time,Modifier,check,aedit,temp,number;
					number=now*10 - 10;

					console.log(data);
					//console.log(condoleId);
					for(var i=0;i<2;i++){
						number++;
						temp=document.createElement('tr');
						Delete=document.createElement('td');
						//工号
						Num=document.createElement('td');
						//姓名
						Title=document.createElement('td');
						//等级
						Author=document.createElement('td');

						aedit = document.createElement('td');
						Time = document.createElement('td');
						Modifier = document.createElement('td');
						/*Num.innerHTML=data.list[i].condoleId;
						Title.innerHTML=data.list[i].condole;
						Author.innerHTML=data.list[i].object;
						Time.innerHTML=data.list[i].time;
						Modifier.innerHTML=data.list[i].giftType;*/
						/*aedit.innerHTML="<a class='oedit'>编辑</a>";
						Delete.innerHTML='<input type="checkbox" value="" class="checkbox"></input>';*/
						temp.appendChild(Delete);
						temp.appendChild(Num);
						temp.appendChild(Title);
						temp.appendChild(Author);
						temp.appendChild(Time);
						temp.appendChild(Modifier);
						temp.appendChild(aedit);
						staff.appendChild(temp);
						Num.innerHTML=number;
						Title.innerHTML=data.list[i].condole;
						Author.innerHTML=data.list[i].object;
						Time.innerHTML=data.list[i].time;
						Modifier.innerHTML=data.list[i].giftType;
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
