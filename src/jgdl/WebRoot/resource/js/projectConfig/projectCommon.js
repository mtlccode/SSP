/* 项目基本配置公共js */


/**
 * 2018-2-6下午6:08:46
 * TODO 列表层级标识符
 */
var level = 0;

/**
 * 2018-2-7下午5:47:52
 * TODO  当前项目对象
 */
var _projectObj;

/**
 * 2018-2-7下午7:25:45
 * TODO 当前子项目对象
 */
var _childObj;

/**
 * 2018-2-8下午2:47:41
 * TODO 当前部位对象
 */
var _siteObj;

/**
 * 2018-2-8下午5:02:06
 * TODO 支架对象
 */
var _holderObj;

/**
 * 当前支架专业类型
 * 2018-5-29下午5:51:24
 * TODO
 */
var _type;

$().ready(function(){
	//默认加载项目树菜单
	loadTree("", 0, "");
	
	//项目表单验证绑定
	$("#objectForm").Validform({
		tiptype : function(msg, o, cssctl) {
			var objtip = $("#projectMsg");
			cssctl(objtip,o.type);
			objtip.text(msg);
		},
		callback : function(form) {	
			//验证后回调
			//执行自定义表单提交
			addOrUpdateProject();
			//默认提交关闭
			return false;
		}
	});
	
	//子项目表单验证
	$("#childForm").Validform({
		tiptype : function(msg, o, cssctl) {
			var objtip = $("#childMsg");
			cssctl(objtip, o.type);
			objtip.text(msg);
		},
		callback : function(form) {	
			//验证后回调
			//执行自定义表单提交
			addOrUpdateChild();
			//默认提交关闭
			return false;
		}
	});
	
	//部位表单验证
	$("#siteForm").Validform({
		tiptype : function(msg, o, cssctl) {
			var objtip = $("#siteMsg");
			cssctl(objtip, o.type);
			objtip.text(msg);
		},
		callback : function(form) {	
			//验证后回调
			//执行自定义表单提交
			addOrUpdateSite();
			//默认提交关闭
			return false;
		}
	});
	
	//部位表单验证
	$("#reportForm").Validform({
		tiptype : function(msg, o, cssctl) {
			var objtip = $("#reportMsg");
			cssctl(objtip, o.type);
			objtip.text(msg);
		},
		callback : function(form) {	
			addReport();
			return false;
		}
	});
	
	$(document).on("click",showLevelMsg);
});

/**
  * showLevelMsg:(开发工具)
  * TODO(查看当前列表等级一级id)
  * @author: 黄月
  * @dateTime: 2018-6-2 下午6:19:18
  * @param: 
  * @return: void
 */
function showLevelMsg(){
	$("#L").html(level);
	console.log(level);
	switch (level) {
	case 0:
		$("#L1SQU").html("");
		$("#L2SQU").html("");
		$("#L3SQU").html("");
		$("#L4SQU").html("");
		$("#L5SQU").html("");
		break;
	case 1:
		$("#L1SQU").html(_projectObj.project_squ);
		$("#L2SQU").html("");
		$("#L3SQU").html("");
		$("#L4SQU").html("");
		$("#L5SQU").html("");
		break;
	case 2:
		$("#L1SQU").html(_projectObj.project_squ);
		$("#L2SQU").html(_childObj.child_squ);
		$("#L3SQU").html("");
		$("#L4SQU").html("");
		$("#L5SQU").html("");
		break;
	case 3:
		$("#L1SQU").html(_projectObj.project_squ);
		$("#L2SQU").html(_childObj.child_squ);
		$("#L3SQU").html(_siteObj.site_squ);
		$("#L4SQU").html("");
		$("#L5SQU").html("");
		break;
	case 4:
		$("#L1SQU").html(_projectObj.project_squ);
		$("#L2SQU").html(_childObj.child_squ);
		$("#L3SQU").html(_siteObj.site_squ);
		$("#L4SQU").html(_type);
		$("#L5SQU").html("");
		break;
	case 5:
		$("#L1SQU").html(_projectObj.project_squ);
		$("#L2SQU").html(_childObj.child_squ);
		$("#L3SQU").html(_siteObj.site_squ);
		$("#L4SQU").html(_type);
		$("#L5SQU").html(_holderObj.dxsqu);
		break;
	default:
		break;
	}
}

/**
  * loadTree:(加载树菜单)
  * TODO(加载项目树时需要分页)
  * @author: 黄月
  * @dateTime: 2018-2-6 下午2:41:29
  * @param: index 传递当前点击对象
  * @return: void
 */
function loadTree(index, treeLevel, object) {
	//收起同级其他树菜单
	if (index != "") {
		$(index).parent().siblings().find("span").html("[+]");
		$(index).parent().siblings().find("ul").slideUp();
	} 
	
	//新增按钮导航条隐藏或者显示
	if (treeLevel == 5) {
		$('#listTitle').hide();
	} else {
		$('#listTitle').show();
	}
	
	//获取当前级数
	level = treeLevel;
	//隐藏列表
	$('.list_div').hide();
	$('.msg_div').hide();
	if (treeLevel == 0) {
		expandProjectTree();
	} else if (treeLevel == 1) {
		expandChildTree(object);
	} else if (treeLevel == 2) {
		expandSiteTree(object);
	} else if (treeLevel == 3) {
		//加载专业树菜单和所有之间列表
		expandTypeOfHolderTree(object);
	} else if (treeLevel == 4) {
		//加载专业下支架菜单和列表
		//此时传递 的object 为专业代码
		expandHolderTree(object);
	} else if (treeLevel == 5) {
		expandPartsTree(object);
	}
}

/**
  * expandProjectTree:(展开项目树菜单事件)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2018-2-7 上午9:56:58
  * @param: 
  * @return: void
 */
function expandProjectTree(){
	//调用project.js加载项目树
	loadProjectTree(1);
	$(".topnav").accordion({
		accordion : false,
		speed : 500,
		closedSign : '[+]',
		openedSign : '[-]'
	});
	//调用project.js加载项目列表
	$('.project_list').show();
	listProject("");
}

/**
  * expandChildTree:(展开子项目树事件)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2018-2-7 上午9:58:33
  * @param: 
  * @return: void
 */
function expandChildTree(object){
	//保存当前项目
	_projectObj = object;
	
	$('.child_list').show();
	//调用project.js加载项目信息
	$('.project_msg').show();
	showProjectMsg(object);
	showCountMsg(object.project_squ,"");
	
	//调用child.js加载子项目列表和树
	loadChildTreeAndList(object.project_squ);
}

/**
  * expandSiteTree:(展开部位树菜单事件)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2018-2-7 上午9:59:21
  * @param: 
  * @return: void
 */
function expandSiteTree(object){
	//保存当前子项目
	_childObj = object;
	
	$('.site_list').show();
	
	$('.project_msg').show();
	$('.child_msg').show();
	showChildMsg(object);
	showCountMsg(object.child_squ,"");
	
	//加载部位列表和树
	loadSiteTreeAndList(object.child_squ);
}

/**
 * expandTypeOfHolderTree:(展开专业菜单)
 * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
 * @author: 黄月
 * @dateTime: 2018-2-7 上午11:19:23
 * @param: @param siteObject
 * @return: void
*/
function expandTypeOfHolderTree(siteObject){
	//保存当前部位信息
	_siteObj = siteObject;
	
	//支架列表
	$('.holder_list').show();
	//项目，子项目，部位信息
	$('.project_msg').show();
	$('.child_msg').show();
	$('.site_msg').show();
	//根据部位id查询统计支架和部件数
	showCountMsg(siteObject.site_squ,"");
	//加载部位展示信息
	showSiteMsg(siteObject);
	//加载支架树和列表
	loadHolderTreeAndList(siteObject.site_squ);
}

/**
  * expandHolderTree:(展开专业下支架树菜单事件)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2018-2-7 上午11:19:23
  * @param: @param typeDM 当前专业代码
  * @return: void
 */
function expandHolderTree(typeDM){
	_type = typeDM;
	
	$('.holder_list').show();
	$('.project_msg').show();
	$('.child_msg').show();
	$('.site_msg').show();
	
	//根据专业代码和当前部位获取数据统计信息
	showCountMsg(_siteObj.site_squ, typeDM);
	//加载支架树和列表
	loadTypeOfHolderTreeAndList(_siteObj.site_squ, typeDM);
}

/**
 * expandPartsTree:(展开部件树)
 * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
 * @author: 黄月
 * @dateTime: 2018-2-8 下午5:01:03
 * @param: @param holderObject
 * @return: void
*/
function expandPartsTree(holderObject){
	//保存当前之间
	_holderObj = holderObject;
	
	$('.parts_list').show();
	$('.project_msg').show();
	$('.child_msg').show();
	$('.site_msg').show();
	$('.holder_msg').show();
	showCountMsg(holderObject.dxsqu, _type);
	//加载支架信息
	showHolderMsg(holderObject);
	//加载支架树和列表
	loadPartsTreeAndList(holderObject.dxsqu);
}

/**
  * showAddModal:(新增)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2018-2-6 下午6:07:21
  * @param: 
  * @return: void
 */
function showAddModal() {
	if (level == 0) {
		//弹出新增项目模态框
		showAddProjectModal();
	} else if (level == 1) {
		showAddChildModal();
	} else if (level == 2) {
		showAddSiteModal();
	} else if (level == 3) {
		showAddHolderModal();
	} else if (level == 4) {
		showAddHolderModal();
	}
}


/**
  * subBtnClick:(提交按钮点击传递)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2017-10-23 下午6:17:10
  * @param: 
  * @return: void
 */
function subBtnClick(str){
	$("#" + str + "SubBtn").click();
}

/**
  * showCountMsg:(展示统计数据)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2018-2-8 上午9:49:06
  * @param: 
  * @return: void
 */
function showCountMsg(squ, typeDM){
	//显示
	$('.count_msg').show();
	
	$.ajax({
		type : 'post',
		url : 'listCountMsg.do',
		timeout : 1321231232131213123,
		data : {
			squ : squ,
			level : level,
			type : typeDM
		},
		dataType :'json',
		success : function(data) {
			//拼接数据
			var html = "<div class='row-fluid'>";
			html += "<div class='sortable row-fluid ui-sortable'>";
			if (level == 1) {
				html += "<a data-rel='tooltip' class='well span3 top-block' href='javascript:void(0)' ";
				html += "data-original-title='6 new members.'>";
				html += "<span class='icon32 icon-color icon-copy'></span>";
				html += "<div>子项目</div>";
				html += "<div>"+data[0]+"</div>";
				html += "</a>";
			}
			if (level < 3) {
				html += "<a data-rel='tooltip' class='well span3 top-block' href='javascript:void(0)' ";
				html += "data-original-title='4 new pro members.'>"; 
				html += "<span class='icon32 icon-color icon-attachment'></span>";
				html += "<div>部位</div>";
				html += "<div>"+data[1]+"</div>";
				html += "</a>"; 
			}
			if (level < 5) {
				html += "<a data-rel='tooltip' class='well span3 top-block' href='javascript:void(0)' ";
				html += "data-original-title='$34 new sales.'>"; 
				html += "<span class='icon32 icon-color icon-newwin'></span>";
				html += "<div>支架</div>";
				html += "<div>"+data[2]+"</div>";
				html += "</a>";
			}
			if (level < 6) {
				html += "<a data-rel='tooltip' class='well span3 top-block' href='javascript:void(0)' ";
				html += "data-original-title='12 new messages.'>"; 
				html += "<span class='icon32 icon-color icon-inbox '></span>";
				html += "<div>部件</div>";
				html += "<div>"+data[3]+"</div>";
				html += "</a>";
			}
			html += "</div>";
			html += "</div>";
			$('.count_msg').html(html);
		},
		error : function() {
			Modal.alert({
				msg : "加载统计数据ajax错误！",
				title:"错误！",
				btnok:"确定",
				btncl:"取消"
			});
		}
	});
}

/**
  * getCountMsg:(获取统计信息)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2018-2-8 上午10:19:47
  * @param: 
  * @return: void
 */
function getCountMsg(){
	
}