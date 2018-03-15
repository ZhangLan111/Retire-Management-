/**
 * Created by LeiTing on 2017/4/6.
 */


$(document).ready(function () {
	var cityArray = new Array();
	cityArray[0] = new Array("1请选择","-请选择-");
	cityArray[1] = new Array("1新闻动态","空");
	cityArray[2] = new Array("2通知公告","空");
	cityArray[3] = new Array("3组织结构","部门简介|离退休工作党委|关工委|党支部|离退休工作处|老教授协会|高教老协老体协|片区小组");
	cityArray[4] = new Array("4政策文件","国家政策|市级政策|学校政策|处内规定|重要讲话");
	cityArray[5] = new Array("5党建工作","专项工作|行政动态|协会工作|小组工作|人员信息");
	cityArray[6] = new Array("6行政管理","专项工作|党建工作|关工委工作|教授协会工作|高教老协工作|老体协工作|党员园地|党员信息");
	cityArray[7] = new Array("7特色服务","特殊帮扶|法律咨询站点|心理咨询站点|志愿服务队");
	cityArray[8] = new Array("8老年园地","焕发风采|养生保健|作品展示");

	function getCity(currProvince)
	{
		//当前 所选择 的 省
		var currProvince = currProvince;

		var i,j;
		//清空 城市 下拉选单
		document.all.selCity.length = 0 ;
		for (i = 0 ;i <cityArray.length;i++)
		{
			//得到 数组中的位置
			if(cityArray[i][0]==currProvince)
			{

				var tmpcityArray = cityArray[i][1].split("|");
				for(j=0;j<tmpcityArray.length;j++)
				{
					//填充 下拉选单
					document.all.selCity.options[document.all.selCity.length] = new Option(tmpcityArray[j],tmpcityArray[j]);
				}
			}
		}
	}


	// 获取元素
	var div = document.getElementById('div1');
	// 生成编辑器
	var editor = new wangEditor(div);


// 自定义load事件
	editor.config.uploadImgFns.onload = function (resultText, xhr) {
		// resultText 服务器端返回的text
		// xhr 是 xmlHttpRequest 对象，IE8、9中不支持

		// 上传图片时，已经将图片的名字存在 editor.uploadImgOriginalName
		var originalName = editor.uploadImgOriginalName || '';

		// 如果 resultText 是图片的url地址，可以这样插入图片：
		editor.command(null, 'insertHtml', '<img src="' + resultText + '" alt="' + originalName + '" style="max-width:100%;"/>');
		// 如果不想要 img 的 max-width 样式，也可以这样插入：
		// editor.command(null, 'InsertImage', resultText);
	};

	// 自定义timeout事件
	editor.config.uploadImgFns.ontimeout = function (xhr) {
		// xhr 是 xmlHttpRequest 对象，IE8、9中不支持
		alert('上传超时');
	};

	// 自定义error事件
	editor.config.uploadImgFns.onerror = function (xhr) {
		// xhr 是 xmlHttpRequest 对象，IE8、9中不支持
		alert('上传错误');
	};

	// 表情显示项
	editor.config.emotionsShow = 'value';

	editor.config.menus = $.map(wangEditor.config.menus, function(item, key) {
		if (item === 'insertcode') {
			return null;
		}
		if (item === 'video') {
			return null;
		}
		if (item === 'location'){
			return null;
		}
		if (item === 'source'){
			return null;
		}
		return item;
	});
	editor.create();


	$('#preview').click(function () {
		editor.destroy();
	});

	$('#edit').click(function () {
		// 恢复编辑器
		editor.undestroy();
		// 获取编辑器区域完整html代码

	});


	$('#save').click(function(){
		var html = editor.$txt.html();
		console.log(html);
		$.ajax({
			type:"GET",
			url:"",
			dataType:"json",
			contentType:"application/json;charset=UTF-8",
			success:function(DATA){

			},
			error:function(E_request){
				alert("发生错误："+E_request.status);
			}
		});
	})
});