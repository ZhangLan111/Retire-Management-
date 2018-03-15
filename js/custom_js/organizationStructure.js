var title,num,author,uploadTime,all,number,oa,Url;
num = 0;
var rightTitle = document.getElementById('rightTitle');
function getValue(e){
            oa = e.getAttribute('value');
            console.log('点击后的value：'+oa);
            e.parentNode.style.background = "#BFBFC0";
            // sessionStorage.setItem('lastValueA',lastValueA);
             // return lastValueA;
        };
function clickChange(a){
    if (a == 11) {
        Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByA.action";
    }
    else if(a == 12){
        Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByB.action";
    }
    else if(a == 13){
        Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByC.action";
    }
    else if(a == 14){
        Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByD.action";
    }
    else if(a == 15){
        Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByE.action";
    }
    else if(a == 16){
        Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByF.action";
    }
    else if(a == 17){
        Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByG.action";
    }
    else if(a == 18){
        Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByH.action";
    }
    else{
        console.log('没有这个路径');
    }
}
clickChange(oa);
console.log('执行函数之后：'+oa);
$.ajax({
				type:"GET",
				/*url:"js/data/userData.json",*/
				url:Url+"?"+"pageNum"+"="+1,
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
						oa.innerHTML=data.list[i].Title;
						author.innerHTML=data.list[i].publishAuthor;
						uploadTime.innerHTML=data.list[i].publishTime;
					}
				},
				error:function(E_request){
					alert("发生错误："+E_request.status);
				}
			});