page({
		id: 'div1',
		nowNum: 1,
		allNum: 10,
		callBack: function(now){
			pageA = now;
			var otable=document.getElementById("otable");
			otable.innerHTML=" ";
			//var Delete,Num2,Title,Author,Time,Modifier,check,aedit;
			var title,num,author,uploadTime,all,number,oa;
			num = 0;

			//console.log(URL);
			$.ajax({
				type:"GET",
				url:"http://119.29.53.178:8080/retirement/news/selectAllNewss.action"+"?"+"pageNum="+1,
				dataType:"json",
				contentType:"aplication/json;charset=utf-8",
				success:function(data){
					console.log(data);
					for(var i=0;i<4;i++){
						num++;
						all=document.createElement('tr');
						//题目
						title=document.createElement('td');
						//序号
						number=document.createElement('th');
						//作者
						author=document.createElement('td');
						//时间
						Author=document.createElement('td');
						oa=document.createElement('a'); 
						uploadTime = document.createElement('td');
						
						all.appendChild(number);
						all.appendChild(title);
						all.appendChild(author);
						all.appendChild(uploadTime);
						title.appendChild(oa);
						number.innerHTML= num;
						number.scopeName = 'row';
						oa.href = 'showArticle.html';
						otable.appendChild(all);
						oa.innerHTML=data[i].title;
						author.innerHTML=data[i].author;
						uploadTime.innerHTML=data[i].uploadTime;
					}
				},
				error:function(E_request){
					alert("发生错误："+E_request.status);
				}
			});

		}
});