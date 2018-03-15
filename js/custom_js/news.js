
	//删除事件
	$('#delete').bind('click',function(){
		if($("input[type='checkbox']").is(':checked')){
			var oif = confirm('确定删除？');
			if (oif) {
				$(":checked").parent().parent().parent().remove(); //隐藏所有被选中的input元素 
				//向后台传数据
				 $.ajax({
					url:"",
					type:"POST",
					dataType:"json",
					data:{type:$(":checked").parent().parent().parent().find('td').eq(1).html(),content:$(":checked").parent().parent().parent().find('td').eq(2).html(),time:$(":checked").parent().parent().parent().find('td').eq(3).html()},
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
	//ajax内容
	var check,newsType,newsCon,newsTime,wrap,blank,oa1,oa2;
	function exeAjax(oURL){
		$('#nBody').html(' ');
		$.ajax({
				type:"GET",
				url:oURL,
				dataType:"json",
				contentType:"aplication/json;charset=utf-8",
				success:function(data){
					$('#tixing').html('消息提醒'+'('+ i +')')
						for(var i = 0; i < 10; i++) {
							check = $("<td class='check-mail'><input class='i-checks' type='checkbox'></input></td>");
							newsType = $("<td></td>");
							newsCon = $("<td></td>"); 
							blank = $("<td></td>");
							newsTime = $("<td class='text-right mail-date'></td>");
							wrap = $("<tr></tr>");
							wrap.append(check);
							wrap.append(newsType);
							wrap.append(newsCon);
							wrap.append(blank);
							wrap.append(newsTime);
							$('#nBody').append(wrap);
							newsCon.html(data[i].content);
							newsType.html(data[i].type);
							blank.html('');
							newsTime.html(data[i].time);
						}
						$('.i-checks').iCheck({
            checkboxClass: 'icheckbox_square-green',
            radioClass: 'iradio_square-green'
        });
				},
				error:function(E_request){
					alert("发生错误："+E_request.status);
				}
			});
	};
    
	var num = 2;
	var ourl;

	//选择路径
	function optionUrl(num){
		switch(num){
			case 1: ourl= "js/data/news.json";
			break;
			case 2: ourl= "js/data/news2.json";
			break;
			case 3:ourl= "js/data/news.json";
			break;
			case 4:ourl= "js/data/news2.json";
			break;
			case 5:ourl= "js/data/news.json";
			break;
		}
	};
	optionUrl(num);
	exeAjax(ourl);

	//向左翻页点击事件
	$('#left').bind('click',function(){
		num--;
		optionUrl(num);
		if (num>=1) {
			console.log(ourl);
			exeAjax(ourl);
		}
		else{
			alert('已是第一页');
		}
	});

//向右翻页事件
$('#right').bind('click',function(){
	num++;
	optionUrl(num);
	if (num<5) {
		exeAjax(ourl);
	}
	else{
		alert('这是最后一页');
	}
});
