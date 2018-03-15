page({
		id: 'div1',
		nowNum: 1,
		allNum: 10,
		callBack: function(now){
			pageA = now;
			var otable=document.getElementById("otable");
			otable.innerHTML=" ";
			//var Delete,Num2,Title,Author,Time,Modifier,check,aedit;
			var title,num,author,uploadTime,all,number,oa,Url;
			num = 0;
			var n = sessionStorage.getItem('lastValueA');
			console.log(n);
			if (n == 11) {
				Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByA.action";
			}
			else if(n == 12){
				Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByB.action";
			}
			else if(n == 13){
				Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByC.action";
			}
			else if(n == 14){
				Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByD.action";
			}
			else if(n == 15){
				Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByE.action";
			}
			else if(n == 16){
				Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByF.action";
			}
			else if(n == 17){
				Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByG.action";
			}
			else if(n == 18){
				Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByH.action";
			}
			/*政策文件*/
			else if(n == 21){
				Url = "http://119.29.53.178:8080/retirement/policyDocument/selectPolicyDocumentsByA.action";
			}
			else if(n == 22){
				Url = "http://119.29.53.178:8080/retirement/policyDocument/selectPolicyDocumentsByB.action";
			}
			else if(n == 23){
				Url = "http://119.29.53.178:8080/retirement/policyDocument/selectPolicyDocumentsByC.action";
			}
			else if(n == 24){
				Url = "http://119.29.53.178:8080/retirement/policyDocument/selectPolicyDocumentsByD.action";
			}
			else if(n == 25){
				Url = "http://119.29.53.178:8080/retirement/policyDocument/selectPolicyDocumentsByE.action";
			}
			/*党建工作*/
			else if(n == 31){
				Url = "http://119.29.53.178:8080/retirement/partyBuildWork/selectPartyBuildWorksByA.action";
			}
			else if(n == 32){
				Url = "http://119.29.53.178:8080/retirement/partyBuildWork/selectPartyBuildWorksByB.action";
			}
			else if(n == 33){
				Url = "http://119.29.53.178:8080/retirement/partyBuildWork/selectPartyBuildWorksByC.action";
			}
			else if(n == 34){
				Url = "http://119.29.53.178:8080/retirement/partyBuildWork/selectPartyBuildWorksByD.action";
			}
			else if(n == 35){
				Url = "http://119.29.53.178:8080/retirement/partyBuildWork/selectPartyBuildWorksByE.action";
			}
			/*行政管理*/
			else if(n == 41){
				Url = "http://119.29.53.178:8080/retirement/administrationManage/selectAdministrationManagesByA.action";
			}

			else if(n == 42){
				Url = "http://119.29.53.178:8080/retirement/administrationManage/selectAdministrationManagesByB.action";
			}
			else if(n == 43){
				Url = "http://119.29.53.178:8080/retirement/administrationManage/selectAdministrationManagesByC.action";
			}
			else if(n == 44){
				Url = "http://119.29.53.178:8080/retirement/administrationManage/selectAdministrationManagesByD.action";
			}

			else if(n == 45){
				Url = "http://119.29.53.178:8080/retirement/administrationManage/selectAdministrationManagesByE.action";
			}
			else if(n == 56){
				Url = "http://119.29.53.178:8080/retirement/administrationManage/selectAdministrationManagesByF.action";
			}else if(n == 47){
				Url = "http://119.29.53.178:8080/retirement/administrationManage/selectAdministrationManagesByG.action";
			}
			else if(n == 48){
				Url = "http://119.29.53.178:8080/retirement/administrationManage/selectAdministrationManagesByH.action";
			}
			/*特色服务*/
			else if(n == 51){
				Url = "http://119.29.53.178:8080/retirement/specialService/selectSpecialServicesByA.action";
			}
			else if(n ==52){
				Url = "http://119.29.53.178:8080/retirement/specialService/selectSpecialServicesByB.action";
			}
			else if(n == 53){
				Url = "http://119.29.53.178:8080/retirement/specialService/selectSpecialServicesByC.action";
			}
			else if(n == 54){
				Url = "http://119.29.53.178:8080/retirement/specialService/selectSpecialServicesByD.action";
			}
			/*老年园地*/
			else if(n == 61){
				Url = "http://119.29.53.178:8080/retirement/oldGarden/selectOldGardensByA.action";
			}
			else if(n == 62){
				Url = "http://119.29.53.178:8080/retirement/oldGarden/selectOldGardensByB.action";
			}
			else if(n == 63){
				Url = "http://119.29.53.178:8080/retirement/oldGarden/selectOldGardensByC.action";
			}
			else{
				console.log('Url没了');
			}
			/*function changeURL(a){
				switch(a){
					case 11:
						Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByA.action";
						break;
					case 12: 
						Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByB.action";
						break;
					case 13: 
						Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByC.action";
						break;
					case 14: 
						Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByD.action";
						break;
					case 15: 
						Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByE.action";
						break;
					case 16: 
						Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByF.action";
						break;
					case 17: 
						Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByG.action";
						break;
					case 18: 
						Url = "http://119.29.53.178:8080/retirement/organizationStructure/selectOrganizationStructuresByH.action";
						break;
				}
		    }
		    changeURL(n);*/
		    console.log(Url);

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

		}
});