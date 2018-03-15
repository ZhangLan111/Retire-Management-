



        /*创建分页*/
		function page(opt) {
			if (!opt.id){
				return false;
			}
			var obj = document.getElementById(opt.id);
			var nowNum = opt.nowNum || 1;
			var allNum = opt.allNum || 5;


			if (nowNum >= 4 && allNum >= 6){
				var oA = document.createElement("a");
				oA.href = "#1";
				oA.innerHTML = "首页";
				obj.appendChild(oA);
			}
			if ( nowNum >= 2){
				var oA = document.createElement("a");
				oA.href = "#" + (nowNum - 1);
				oA.innerHTML = "上一页";
				obj.appendChild(oA);
			}

			if (allNum <= 5){
				for(var i = 1;i<=allNum;i++){
					var createA = document.createElement("a");
					createA.href = "#" + i;
					if (nowNum == i){
						createA.innerHTML = i;
					}else {
						createA.innerHTML = "[" + i + "]";
					}
					obj.appendChild(createA);
				}
			}else {
				for(var j = 1;j<=5;j++){
					var cA = document.createElement("a");
					if (nowNum == 1 || nowNum == 2){
						cA.href = "#" + j;
						if (nowNum == j){
							cA.innerHTML = nowNum;
						}else {
							cA.innerHTML = "[" + j + "]";
						}
					}else if ((allNum - nowNum) == 1 || nowNum == allNum){
						cA.href = "#" + (allNum - 5 + j);

						if ((allNum - nowNum) == 0 && j == 5){
							cA.innerHTML = (allNum - 5 + j);
						}else if((allNum - nowNum) == 1 && j == 4){
							cA.innerHTML = (allNum - 5 + j);
						}else{
							cA.innerHTML = "[" + (allNum - 5 + j) + "]";
						}
					}else{
						cA.href = "#" + (nowNum -3 +j);
						if (j == 3){
							cA.innerHTML = nowNum -3 +j;
						}else {
							cA.innerHTML = "[" + (nowNum -3 +j) + "]";
						}
					}

					obj.appendChild(cA);
				}
			}
			if ((allNum - nowNum) >= 1){
				var oA = document.createElement("a");
				oA.href = "#" + (nowNum + 1);
				oA.innerHTML = "下一页";
				obj.appendChild(oA);
			}
			if ((allNum - nowNum) >= 3 && allNum >= 6 ){
				var oA = document.createElement("a");
				oA.href = "#" + allNum;
				oA.innerHTML = "尾页";
				obj.appendChild(oA);
			}


			var allA = obj.getElementsByTagName("a");
			for(var k = 0; k<allA.length; k++){
				allA[k].onclick = function () {
					var nowNum = parseInt(this.getAttribute("href").substring(1));

					obj.innerHTML = "";
					page({
						id: obj.id,
						nowNum: nowNum,
						allNum: allNum
					});

					InformationHanding(nowNum);
				}
			}

			/*
			 跳转的功能
			 */
			 if(allNum>=5){
				 var Jump_dis=document.createElement('input');
				 Jump_dis.type='text';
				 Jump_dis.id='Jump_dis';
				 Jump_dis.value="";
				 Jump_dis.placeholder=nowNum+'/'+allNum;
				 Jump_dis.style='width:35px;text-align:center';
				 obj.appendChild(Jump_dis);

				 var Jump_j=document.createElement('button');
				 Jump_j.style="margin-left:10px";
				 Jump_j.type="button";
				 Jump_j.innerHTML='跳转';
				 obj.appendChild(Jump_j);

					 var obj2=obj.getElementsByTagName('button');
					 var obj3=obj.getElementsByTagName('input');
					 obj2[0].onclick=function(){
					 var nowNum= parseInt(obj3[0].value);
					 obj.innerHTML=" ";
					 page({
						 id:opt.id,
						 nowNum:nowNum,
						 allNum:allNum
					 });
					 InformationHanding(nowNum);
				 };
			 }
		}

