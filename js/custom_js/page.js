//分页函数
	function page(opt){
		if (!opt.id) {return false};
		var obj = document.getElementById(opt.id);
		//alert(obj);
		var nowNum = opt.nowNum;  //1
		var allNum = opt.allNum;  //5
		
		var callBack = opt.callBack || function(){

		};
		if (nowNum>= 4 && allNum >=6) {
			var oA = document.createElement('a');
			oA.href = '#1';
			oA.innerHTML = '首页';
			obj.appendChild(oA);
		}
		if (nowNum >= 2) {
			var oA = document.createElement('a');
			oA.href = '#' + (nowNum - 1);
			oA.innerHTML = '上一页';
			
			obj.appendChild(oA);
			
		}
		if (allNum <=5) {
			for (var i = 1; i <= allNum; i++) {
				var oA = document.createElement('a');
				oA.href = "#" + i;
				if (nowNum == i) {
					oA.style.backgroundColor = '#ddd';
					oA.style.color = '#333';
					oA.innerHTML =  i ;
				}else{
					oA.innerHTML =  i ;	
				}
				obj.appendChild(oA);
			}
		}
		else{
			for (var i = 1; i <= 5; i++) {
					var oA = document.createElement('a');
					if (nowNum==1 || nowNum ==2) {
						oA.href = '#' + i;
						if (nowNum ==i) {
							oA.innerHTML = i;
						}
						else{
							oA.innerHTML =  "[" + i +"]";
							
							
						}

					}
					else if ((allNum - nowNum) == 0 || (allNum - nowNum) == 1) {
                   		oA.href = '#' + (allNum - 5 + i);
                   		if ((allNum - nowNum) == 0 && i==5) {
							oA.innerHTML = (allNum - 5 + i);
						}
						else if ((allNum - nowNum) == 0 && i == 4) {
							oA.innerHTML = (allNum - 5 + i);	
						}
						else{
							oA.innerHTML =  "[" + (allNum - 5 + i) +"]";		
						}
					}
					else{
						oA.href = "#" + (nowNum-3+i);
						if (i==3) {
							oA.innerHTML = (nowNum - 3 + i);
							
						}
						else{
							oA.innerHTML = "[" + (nowNum - 3 + i)+"]";
							
						}
				    }
				   
					obj.appendChild(oA);
				}	
		}
		if ((allNum - nowNum) >= 1) {
			var oA = document.createElement('a');
			//var oli = document.createElement('li');
			oA.href = '#' +(nowNum + 1);
			oA.innerHTML = '下一页';
			//obj.appendChild(oli);
			obj.appendChild(oA);
		}
		if ((allNum - nowNum) >= 3 && allNum >= 6) {
			var oA = document.createElement('a');
			//var oli = document.createElement('li');
			oA.href = '#' + allNum;
			oA.innerHTML = '尾页';
			//obj.appendChild(oli);
			obj.appendChild(oA);
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
						 allNum:allNum,

					 });

					 //InformationHanding(nowNum);
					 callBack(nowNum);
				 };
			};
		callBack(nowNum);
		//点击每页
		var aA = obj.getElementsByTagName('a');
 		for(var i=0;i<aA.length;i++){
			aA[i]. onclick = function(){
				var nowNum = parseInt(this.getAttribute('href').substring(1));
				obj.innerHTML = '';
				page({
					id: opt.id,
					nowNum: nowNum,
					allNum: allNum,
					callBack: callBack
				});

			};
		}
 		
	};
	//WAHautoCenter(De_box);
	//自动居中
	function WAHautoCenter(el){

		var bodyW = document.documentElement.clientWidth;  //获取网页可视区域的宽高
		var bodyH = document.documentElement.clientHeight;

		var elW=el.offsetWidth;      //获取元素的实际高度和宽度
		var elH= el.offsetHeight;
		el.style.left =(bodyW - elW) /2 + 'px';      //居中
		el.style.top = (bodyH - elH)/2 +'px';

	}
	//WAHautoCenter(De_box);
	//
//};

 