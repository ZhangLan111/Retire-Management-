/**
 * Created by LeiTing on 2017/4/8.
 */
var cityArray = new Array();
cityArray[0] = new Array("1请选择", "-请选择-");
cityArray[1] = new Array("1新闻动态", "新闻动态");
cityArray[2] = new Array("2通知公告", "通知公告");
cityArray[3] = new Array("3组织结构", "部门简介|离退休工作党委|关工委|党支部|离退休工作处|老教授协会|高教老协老体协|片区小组");
cityArray[4] = new Array("4政策文件", "国家政策|市级政策|学校政策|处内规定|重要讲话");
cityArray[5] = new Array("5党建工作", "专项工作|行政动态|协会工作|小组工作|人员信息");
cityArray[6] = new Array("6行政管理", "专项工作|党建工作|关工委工作|教授协会工作|高教老协工作|老体协工作|党员园地|党员信息");
cityArray[7] = new Array("7特色服务", "特殊帮扶|法律咨询站点|心理咨询站点|志愿服务队");
cityArray[8] = new Array("8老年园地", "焕发风采|养生保健|作品展示");

function getCity(currProvince) {
	//当前 所选择 的 省
	var currProvince = currProvince;
	var i, j;
	//清空 城市 下拉选单
	document.all.selCity.length = 0;
	for (i = 0; i < cityArray.length; i++) {
		//得到 数组中的位置
		if (cityArray[i][0] == currProvince) {

			var tmpcityArray = cityArray[i][1].split("|");
			for (j = 0; j < tmpcityArray.length; j++) {
				//填充 下拉选单
				document.all.selCity.options[document.all.selCity.length] = new Option(tmpcityArray[j], tmpcityArray[j]);
			}
		}
	}
}
$(document).ready(function () {

	var editor = new wangEditor('div1');

	// 上传图片
	editor.config.uploadImgUrl = 'http://119.29.53.178:8080/retirement/uploadPic/fileUpLoad.action';

	// 隐藏掉插入网络图片功能。
	editor.config.hideLinkImg = true;
	// 自定义load事件
	editor.config.uploadImgFns.onload = function (resultText, xhr) {

		var obj= JSON.parse(resultText);

		// 上传图片时，已经将图片的名字存在
		var originalName = editor.uploadImgOriginalName || '';

		editor.command(null, 'insertHtml', '<img src="' + obj[0].url + '" alt="' + originalName + '" style="max-width:100%;"/>');
	};


	editor.config.uploadImgFns.ontimeout = function (xhr) {
		alert('上传超时');
	};

	editor.config.uploadImgFns.onerror = function (xhr) {
		alert('上传错误');
	};

	// 表情显示项
	editor.config.emotionsShow = 'icon';

	//自定义菜单栏
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


	$('#edit').click(function () {
		editor.undestroy();
	});

	$('#preview').click(function () {
		editor.destroy();
	});

	$("#save").click(function() {
		var html = editor.$txt.html();
		$.ajax({
			type:"POST",
			url:"http://119.29.53.178:8080/retirement/temporary/insertTeamporary.action",
			data:{"temporaryJson":"{'title':'你好','author':'hecong','content':html,'statu':1,'type':'dvd'}"},
			success:function(data){
				console.log(data);
			},
			error:function(E_request){
				alert("发生错误："+E_request.status);
			}
		})
	});
	editor.create();
});

