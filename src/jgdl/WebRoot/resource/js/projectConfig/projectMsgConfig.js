
/**
 * 2017-11-7下午6:24:19
 * TODO 全局项目id
 */
var _projectSqu = "";

$().ready(function(){
	//加载树
	loadTree(1);
	
	//数量减少
    $(".quantity-remove").live("click",function(e){  
        var elemID = $(this).parent().attr("title");  
        //var count = $("." + elemID + "inp_hide").val(); 
        var count = parseInt($(this).parent().find("." + elemID + "inp").val());
        if (count > 1) {
        	$("." + elemID + "inp").val(count - 1);  
        }
    }); 
    
    //数量增加
    $(".quantity-add").live("click", function(){  
        var elemID = $(this).parent().attr("title");  
        var count = parseInt($(this).parent().find("."+elemID+"inp").val());  
        $(this).parent().find("." + elemID + "inp").val(count + 1);  
    }); 
    
    loadGDLX_Select();

    loadAZFS_Select();
});

function editNum(index){
	//当前支架数量
	var count = $(index).parent().parent().parent().find(".hideInp").val();
	//输入框赋值
	$(index).parent().parent().parent().find(".quantity-count").val(count);
	$(index).parent().parent().parent().find(".editAddNum").show();
	$(index).parent().parent().parent().find(".buttonTeam").hide();
}

function cancelNum(index){
	$(index).parent().parent().parent().find(".editAddNum").hide();
	$(index).parent().parent().parent().find(".buttonTeam").show();
}

/**
  * deleteHolder:(删除支架)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2017-11-17 下午3:13:49
  * @param: @param row
  * @return: void
 */
function deleteHolder(row){
	Modal.confirm({msg : "确认删除当前支架?"}).on(function(e){
		if (e) {
			$.ajax({
				type : "post",
				url : "deleteHolderOfProjectBySqu.do",
				timeout : 1321231232131213123,
				data : {
					squ : row.squ,
				},
				success : function(data) {
					//加载当前支架列表
					loadHolderOfProject();
				},
				error : function() {
					Modal.alert({
						msg : '删除支架出错！',
						title : '消息提示',
						btnok : '确定',
						btncl : '取消'
					});
				}
			});
		}
	});
}

/**
  * project_link:(项目树链接，加载支架列表)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2017-11-7 上午9:45:45
  * @param: @param index
  * @return: void
 */
function project_link(index){
	//加载子项目树和列表
	
	
	//显示工程信息div
	$('#holderBox').show();
	showHolderListAndHideSubassembly();
	//获取工程信息
	showProjectMsg(index);
	
	_projectSqu = index.squ;
	//加载支架列表
	loadHolderOfProject();
}

/**
  * showProjectMsg:(获取并显示工程信息)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2017-11-7 下午6:31:31
  * @param: @param projectObject
  * @return: void
 */
function showProjectMsg(projectObject){
	$('#projectName').html("工程名称：" + projectObject.gcmc);
	var html1 = "";
	
	html1 += "<div class='span2' style='background-color: #eee;height: 50px;'>";
	html1 += "<span  class='icon32 icon-color icon-arrow-nesw' style='float: left;margin-top: 9px;margin-left: 5px;'></span>";
	html1 += "<div style='margin-left: 10px;margin-top: 10px;float: left;width: 70px;'>";
	html1 += "<b>" + projectObject.gcdz + "</b><br /><small style=''>工程地址</small></div></div>";
	
	html1 += "<div class='span2' style='background-color: #eee;height: 50px;'>";
	html1 += "<span  class='icon32 icon-green icon-home' style='float: left;margin-top: 9px;margin-left: 5px;'></span>";
	html1 += "<div style='margin-left: 10px;margin-top: 10px;float: left;width: 70px;'>";
	html1 += "<b>" + projectObject.jzlb + "</b><br /><small style=''>建筑类型</small></div></div>";
	
	html1 += "<div class='span2' style='background-color: #eee;height: 50px;'>";
	html1 += "<span  class='icon32 icon-orange icon-arrow-n-s' style='float: left;margin-top: 9px;margin-left: 5px;'></span>";
	html1 += "<div style='margin-left: 10px;margin-top: 10px;float: left;width: 70px;'>";
	html1 += "<b>" + projectObject.jzgd + "</b><br /><small style=''>建筑高度</small></div></div>";
	
	html1 += "<div class='span2' style='background-color: #eee;height: 50px;'>";
	html1 += "<span  class='icon32 icon-red icon-alert' style='float: left;margin-top: 9px;margin-left: 5px;'></span>";
	html1 += "<div style='margin-left: 10px;margin-top: 10px;float: left;width: 70px;'>";
	html1 += "<b>" + projectObject.dzlx + "</b><br /><small style=''>地震类型</small></div></div>";
	
	html1 += "<div class='span2' style='background-color: #eee;height: 50px;'>";
	html1 += "<span  class='icon32 icon-blue icon-web' style='float: left;margin-top: 9px;margin-left: 5px;'></span>";
	html1 += "<div style='margin-left: 10px;margin-top: 10px;float: left;width: 70px;'>";
	html1 += "<b>" + projectObject.dzjsd + "</b><br /><small style=''>地震加速度</small></div></div>";
	
	html1 += "<div class='span2' style='background-color: #eee;height: 50px;'>";
	html1 += "<span  class='icon32 icon-black  icon-flag' style='float: left;margin-top: 9px;margin-left: 5px;'></span>";
	html1 += "<div style='margin-left: 10px;margin-top: 10px;float: left;width: 70px;'>";
	html1 += "<b>" + projectObject.dqsfld + "</b><br /><small style=''>设防烈度</small></div></div>";
	
	$('#projectMsg').html(html1);
}

/**
  * showAddModal:(新增支架)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2017-10-24 下午6:38:39
  * @param: 
  * @return: void
 */
function showAddModal(){
	$('#holderModal').modal();
	//loadHolderList();
}

/**
  * loadHolderList:(分页加载支架信息)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2017-10-24 下午7:25:04
  * @param: 
  * @return: void
 */
function loadHolderList(){
	var gdlx = $("#gdlx_select").val();
	var azfs = $("#azfs_select").val();
	if (gdlx == null || gdlx == undefined) {
		gdlx == "";
	} 
	if (azfs == null || azfs == undefined) {
		azfs == ""
	}
	
	//搜索
	var search = $('#input_search').val();
	$("#holderAll").uiGrid({ 
		url : "getHolderList.do",
		rowNum : 5,//每页显示记录数
		columns : [ {
			field : 'zp',
			title : '照片',
			width : 60,
			formatter : function(value, rec) {
				if (rec.zp == "" || rec.zp == null) {
					return '<img src="resource/images/mrtp.png" width="60px" height="60px">';
				} else {
					return '<img src="/upload/' + rec.zp + '" onerror="javascript:this.src=\'resource/images/mrtp.png\'" width="60px" height="60px">';
				}
			}
		},{
			field : 'dxmc',
			title : '单项名称',
			width : 800,
			formatter : function(value, rec) {
				return '<p><h4>支架名:' + rec.dxmc + '&nbsp;&nbsp;<small>支架形式:'+rec.zjxs+'</small></h4></p><span><b>管道类型:</b>'
				+rec.gdlx_name+'</span>&nbsp;&nbsp;&nbsp;<span><b>安装方式:</b>'+rec.azfs_name+'</span>';
		}
		}],
		divId : "#holderAll",
		showPage : 5,//显示
		toAdd : true,
		toAddEvent : toAdd,
		jsonPager : {
			records : "rowCount",//总记录数
			currentPage : 1,//当前访问页
			total : "pageCount",//总页数
		},
		data : {
			gdlx : gdlx,
			azfs : azfs,
			search : search
		}
	});
}

/**
  * toAdd:(新增支架)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2017-10-24 下午9:11:27
  * @param: 
  * @return: void
 */
/*function toAdd(row){
	$.ajax({
		type : "post",
		url : "addHolderToProject.do",
		timeout : 1321231232131213123,
		dataType : 'text',
		data : {
			projectSqu : _projectSqu,
			holderSqu : row.dxsqu
		},
		success : function(data) {
			if (data == "success") {
				Modal.alert({
					title : "提示",
					msg : "添加成功！",
					btnok : "确定"
				});
				loadHolderOfProject();
				loadHolderList();
			} else {
				Modal.alert({
					msg : '执行添加操作异常！',
					title : '消息提示',
					btnok : '确定',
				});
			}
		},
		error : function() {
			Modal.alert({
				msg : 'ajax执行添加操作错误！',
				title : '消息提示',
				btnok : '确定',
			});
		}
	});
}*/


var records = 0;
var currentPage = 0;
var total = 0;
var pageShowPage = 5;// 显示多少个人分页标签
var pageRowNum1 = 10;// 每页显示记录数
var pager = 1;
function loadTree(pager) {
	var html = "";
	$.ajax({
		type : 'post',
		url : 'selectProjectPageInfo.do',
		dataType : 'json',
		async : false,
		timeout : 1321231232131213123,
		data : {
			rows : pageRowNum1,
			page : pager,
			searchWord : ""
		},
		success : function(data) {
			if (data.rows.length != 0) {
				aData = data.rows;
			}
			records = data.total;
			currentPage = data.pageNumber;
			total = data.pageCnt;
			pageRowNum1 = data.pageSize;
			if (data.rows.length == 0) {
				html += "<li class='border-bottom'>";
				html += "<a href='javascript:void(0);'>未查询到项目列表</a>";
				html += "</li>";
			}
			
			for ( var i = 0; i < data.rows.length; i++) {
				html += "<li class='border-bottom'>";
				html += "<a href='javascript:void(0);' onclick='project_link(" + JSON.stringify(data.rows[i]) + ");' id='" + data.rows[i].squ + "' title='" + data.rows[i].xmmc + "'>" + data.rows[i].xmmc + "</a>";
				html += "<ul class='topnav'></ul></li>";
			}
			$("#tree").html(html);
			pageDiv1(records, total, currentPage);
		},error : function() {
				Modal.alert({
					msg : '功能菜单加载出错！',
					title : '消息提示',
					btnok : '确定',
					btncl : '取消'
				});
			}
		});
}


function pageDiv1(records, total, currentPage) {
	var pageTotal = total;// 总共多少页
	var pageCurrentPage = currentPage;// 当前页
	var pageRecords = records;// 总记录数
	var countt = "";
	var outstr = "";
	pageTotal = parseInt(pageRecords / pageRowNum1);
	if (pageRecords % pageRowNum1 > 0) {
		pageTotal = pageTotal + 1;
	}
	if (pageTotal <= pageShowPage) {
		for ( var count = 1; count <= pageTotal; count++) {
			if (count < 10) {
				countt = "0" + count + "";
			} else {
				countt = "" + count + "";
			}
			if (count != pageCurrentPage) {
				outstr = outstr + "<li tag='" + count
						+ "' class='pageCk'><a href='javascript:void(0);'>"
						+ countt + "</a></li>";
			} else {
				outstr = outstr
						+ "<li class='active'><a href='javascript:void(0);'>"
						+ countt + "</a></li>";
			}
		}
	}
	if (pageTotal > pageShowPage) {
		if (parseInt((pageCurrentPage - 1) / pageShowPage) == 0) {
			outstr = outstr + "<li><a><<</a></li> ";
			for ( var count = 1; count <= pageShowPage; count++) {
				if (count < 10) {
					countt = "0" + count + "";
				} else {
					countt = "" + count + "";
				}
				if (count != pageCurrentPage) {
					outstr = outstr
							+ "<li tag='"
							+ count
							+ "' class='pageCk'><a  href='javascript:void(0);'>"
							+ countt + "</a></li>";

				} else {
					outstr = outstr
							+ "<li class='active'><a href='javascript:void(0);'>"
							+ countt + "</a></li>";
				}
			}
			outstr = outstr
					+ "<li tag='"
					+ count
					+ "' class='pagePk'><a href='javascript:void(0)'>>></a></li>";
		} else if (parseInt((pageCurrentPage - 1) / pageShowPage) == parseInt(pageTotal
				/ pageShowPage)) {
			outstr = outstr
					+ "<li tag='"
					+ (parseInt((pageCurrentPage - 1) / pageShowPage) * pageShowPage)
					+ "' class='pagePk'><a href='javascript:void(0)'><<</a></li> ";
			for ( var count = parseInt(pageTotal / pageShowPage) * pageShowPage
					+ 1; count <= pageTotal; count++) {
				if (count < 10) {
					countt = "0" + count + "";
				} else {
					countt = "" + count + "";
				}
				if (count != pageCurrentPage) {
					outstr = outstr + "<li  tag='" + count
							+ "' class='pageCk'><a href='javascript:void(0);'>"
							+ countt + "</a></li>";
				} else {
					outstr = outstr
							+ "<li class='active'><a href='javascript:void(0);'>"
							+ countt + "</a></li>";
				}
			}
			outstr = outstr + "<li><a href='javascript:void(0)'>>></a></li>";
		} else {
			outstr = outstr
					+ "<li tag='"
					+ (parseInt((pageCurrentPage - 1) / pageShowPage) * pageShowPage)
					+ "' class='pagePk'><a href='javascript:void(0)'><<</a></li> ";
			for ( var count = parseInt((pageCurrentPage - 1) / pageShowPage)
					* pageShowPage + 1; count <= parseInt((pageCurrentPage - 1)
					/ pageShowPage)
					* pageShowPage + pageShowPage; count++) {
				if (count < 10) {
					countt = "0" + count + "";
				} else {
					countt = "" + count + "";
				}
				if (count != pageCurrentPage) {
					outstr = outstr + "<li tag='" + count
							+ "' class='pageCk'><a href='javascript:void(0);'>"
							+ countt + "</a></li>";
				} else {

					outstr = outstr
							+ "<li class='active'><a href='javascript:void(0);'>"
							+ countt + "</a></li>";
				}
			}
			outstr = outstr
					+ "<li  tag='"
					+ count
					+ "' class='pageCk'><a href='javascript:void(0);'>>></a></li>";
		}
	}
	// 共"+pageTotal+"页|"+pageRecords+"条数据|第"+pageCurrentPage+"页 每页" + pageRowNum
	// +"个
	$("#pageInfo").html(
			"<div class='pagination pagination-centered'  align='right'><ul>"
					+ outstr + "<a href='javascript:void(0);'>共" + pageTotal
					+ "页/" + pageRecords + "条数据</a></li></ul></div>");
	outstr = "";
	$(".pageCk").unbind();
	$(".pageCk").bind('click', function() {
		loadTree($(this).attr("tag"));
	});
	$(".pagePk").unbind();
	$(".pagePk").bind('click', function() {
		loadTree($(this).attr("tag"));
	});
}

/**
 * loadHolderOfProject:(加载项目下的支架列表)
 * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
 * @author: 黄月
 * @dateTime: 2017-10-23 下午7:30:04
 * @param: 
 * @return: void
*/
function loadHolderOfProject() {
	$().projectGrid({
		url : 'loadHolderOfProjectPageInfo.do',
		data : {
			squ : _projectSqu,
		}
	});
}

/**
  * updateHolderNum:(执行修改支架数量)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2017-11-20 下午12:11:20
  * @param: @param index
  * @param: @param row
  * @return: void
 */
function updateHolderNum(index, row){
	var count = $(index).parent().parent().find(".quantity-count").val();
	$.ajax({
		type : "post",
		url : "updateHolderNumOfProject.do",
		timeout : 1321231232131213123,
		data : {
			num : count,
			holderSqu : row.dxsqu,
			projectSqu : _projectSqu
		},
		success : function(data) {
			//加载当前支架列表
			loadHolderOfProject();
		},
		error : function() {
			Modal.alert({
				msg : '修改支架出错！',
				title : '消息提示',
				btnok : '确定',
				btncl : '取消'
			});
		}
	});
}

/**
  * showSubassembly:(展示支架信息)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2017-12-4 上午9:38:33
  * @param: 
  * @return: void
 */
function holder_link(row){
	//显示支架信息页
	hideHolderListAndShowSubassembly();
	//加载支架信息
	showHolderMsg(row);
	//加载组件列表
	loadZJList(1, row.dxsqu);
}

/**
  * hideHolderListAndShowSubassembly:(隐藏支架列表，显示部件列表)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2017-12-4 上午9:36:16
  * @param: 
  * @return: void
 */
function hideHolderListAndShowSubassembly(){
	$('#holderListBox').hide();
	$('#holderMsgBox').show();
	$('#subassemblyListBox').show();
	$('#retBtn').show();
	$('#addBtn').hide();
}

/**
  * showHolderListAndHideSubassembly:(显示支架列表，隐藏部件列表)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2017-12-4 上午9:37:24
  * @param: 
  * @return: void
 */
function showHolderListAndHideSubassembly(){
	$('#holderListBox').show();
	$('#holderMsgBox').hide();
	$('#subassemblyListBox').hide();
	$('#retBtn').hide();
	$('#addBtn').show();
}

/**
  * showSubassemblyMsg:(显示支架明细)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2017-12-4 上午10:59:45
  * @param: 
  * @return: void
 */
function showHolderMsg(holderObject){
	$('#1stTemp').click();
	$('#kzzjDXSQU').val(holderObject.dxsqu);
	$('#kzzjDXMC').html(holderObject.dxmc);
	$('#kzzjGDLX').html(holderObject.gdlx_name);
	$('#kzzjAZFS').html(holderObject.azfs_name);
	$('#kzzjZJXS').html(holderObject.zjxs);
	$('#kzzjImg').attr("src","/upload/" + holderObject.zp);
}

/**
  * loadZJListByType:(根据类型加载组件列表)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2017-12-4 上午11:09:41
  * @param: @param activeID
  * @return: void
 */
function loadZJListByType(activeID){
	var dxsqu = $('#kzzjDXSQU').val();
	loadZJList(activeID, dxsqu);
}

/**
  * loadZJList:(加载组件列表)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2017-12-4 上午10:21:13
  * @param: 
  * @return: void
 */
function loadZJList(activeID, dxsqu){
	$("#zjList").holderGrid({
		url : "getKzzjBjList.do",
		data :{
			op:activeID,
			dxsqu:dxsqu,
			searchKey:""
		}
	});
	/*$("#zjList").uiGrid({ 
		url : "getKzzjBjList.do",
		rowNum : 5,//每页显示记录数
		columns : [ {
			field : 'CYMC',
			title : '部件名称',
			width : 300,
			formatter : function(value, rec) {
				var result = "";
				if (rec.BJLX == 0) {
					result = rec.CYMC;
				} else if (rec.BJLX == 1) {
					result = rec.DXZHMC;
				} else {
					result = "未知";
				}
				return result;
			}
		},{
			field : 'BJLX',
			title : '部件类型',
			width : 100,
			formatter : function(value, rec) {
				var result = "";
				if (rec.BJLX == 0) {
					result = "<span class='label label-success'>普通部件</span>";
				} else if (rec.BJLX == 1) {
					result = "<span class='label label-warning'>组合部件</span>";
				} else {
					result = "未知";
				}
				return result;
			}
		},{
			field : 'JLDW',
			title : '单位',
			width : 100,
			formatter : function(value, rec) {
				return "个";
			}
		},{
			field : 'SL',
			title : '数量',
			width : 100,
		},{
			field : 'CBDJ',
			title : '单价',
			width : 100,
			formatter : function(value, rec) {
				var result = "";
				if (rec.BJLX == 0) {
					result = rec.CBDJ;
				} else if (rec.BJLX == 1) {
					result = "";
				}
				return result;
			}
		},{
			field : '',
			title : '金额',
			width : 100,
			formatter : function(value, rec) {
				var result = "";
				if (rec.BJLX == 0) {
					result = rec.CBDJ * rec.SL;
				} else if (rec.BJLX == 1) {
					result = "";
				}
				return result;
			}
		}],
		divId : "#zjList",
		showPage : 10,//显示
		jsonPager : {
			records : "rowCount",//总记录数
			currentPage : 1,//当前访问页
			total : "pageCount"//总页数
		},
		data : {
			op:activeID,
			dxsqu:dxsqu,
			searchKey:""
		}
	});*/
}

function loadGDLX_Select(){
	loadGDLX_AZFS("GDLX");
}

function loadAZFS_Select(){
	loadGDLX_AZFS("AZFS");
}

function loadGDLX_AZFS(type){
	$.ajax({
		type : "post",
		url : "getSelectOfGDLX_AZFS.do",
		timeout : 1321231232131213123,
		data : {
			type : type,
		},
		success : function(data) {
			var result = JSON.parse(data);
			var html = "<option value=''>—— 全部 ——</option>";
			for ( var i = 0; i < result.length; i++) {
				html += "<option value='" + result[i].SQU + "'>" + result[i].NAME + "</option>";
			}
			if (type == "GDLX") {
				$('#gdlx_select').html(html);
			} else if (type == "AZFS") {
				$('#azfs_select').html(html);
			}
		}
	});
}

