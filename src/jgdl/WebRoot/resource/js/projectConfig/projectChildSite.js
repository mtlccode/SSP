/**
 * 子单位工程编码
 */
var _prochildsqu
/**
  * editChild:(修改部位)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2018-2-7 下午6:46:53
  * @param: @param obj
  * @return: void
 */
function editSite(obj) {
	$('#siteModal').modal();
	$('#siteHtmlTitle').html("编辑部位");
	$('#siteForm')[0].reset();
	
	//赋值
	$('#site_squ').val(obj.site_squ);
	//部位名称
	$('#bwmc').val(obj.bwmc);
	//部位编号
	$('#siteNum').val(obj.siteNum);
	//安装吊高
	$('#azdg').val(obj.azdg);		
	$('#bwbg').val(obj.bwbg);		
	$('#gjlx').val(obj.gjlx);		
}
	
/**
  * delChild:(删除部位)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2018-2-7 下午6:46:38
  * @param: @param obj
  * @return: void
 */
function delSite(obj) {
	Modal.confirm({msg: "确认删除部位[ " + obj.bwmc + " ]吗？"}).on(function(e){
		if(e){
			$.ajax({
				type : 'post',
				url : 'delChildSite.do',
				timeout : 1321231232131213123,
				dataType :'json',
				data : {
					squ:obj.site_squ,
				},
				success : function(data) {
					if (data.status == "success") {
						$('#siteclBtn').click();
						//重载部位
						loadSiteTreeAndList(_childObj.child_squ);
					} else if (data.status == "hasHolder") {
						Modal.alert({
							msg : "该部位下存在支架信息，不能删除！",
							title:"！",
							btnok:"确定",
							btncl:"取消"
						});
					} else {
						Modal.alert({
							msg : "删除部位失败：" + data.result,
							title:"错误！",
							btnok:"确定",
							btncl:"取消"
						});
					}
				},
				error : function() {
					Modal.alert({
						msg : "ajax错误！",
						title:"错误！",
						btnok:"确定",
						btncl:"取消"
					});
				}
			});
		}
	});
}

/**
  * addOrUpdateChild:(新增或修改子项目)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2018-2-7 下午5:37:24
  * @param: 
  * @return: void
 */
function addOrUpdateSite(){
	var squ = $("#site_squ").val();
	if (squ != "") {
		updateChildSite();
	} else {
		addChildSite();
	}
}

/**
  * addChildProject:(新增子项目)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2018-2-7 下午5:38:02
  * @param: 
  * @return: void
 */
function addChildSite(){
	$.ajax({
		type : 'post',
		url : 'insertChildSite.do',
		timeout : 1321231232131213123,
		data : $('#siteForm').serialize() + "&child_squ=" + _childObj.child_squ,
		dataType :'json',
		success : function(data) {
			$('#siteclBtn').click();
			//重载部位
			loadSiteTreeAndList(_childObj.child_squ);
		},
		error : function() {
			Modal.alert({
				msg : "ajax错误！",
				title:"错误！",
				btnok:"确定",
				btncl:"取消"
			});
		}
	});
}

/**
  * updateChildProject:(修改子项目)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2018-2-7 下午5:51:14
  * @param: 
  * @return: void
 */
function updateChildSite() {
	$.ajax({
		type : 'post',
		url : 'updateChildSite.do',
		timeout : 1321231232131213123,
		data : $('#siteForm').serialize(),
		dataType :'json',
		success : function(data) {
			if (data.status == "success") {
				$('#siteclBtn').click();
				//重载部位
				loadSiteTreeAndList(_childObj.child_squ);
			} else {
				Modal.alert({
					msg : data.result,
					title:"异常！",
					btnok:"确定",
					btncl:"取消"
				});
			}
		},
		error : function() {
			Modal.alert({
				msg : "修改部位信息ajax错误！",
				title:"错误！",
				btnok:"确定",
				btncl:"取消"
			});
		}
	});
}

/**
  * loadSiteTreeAndList:(加载)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2018-2-6 下午5:51:58
  * @param: 
  * @return: void
 */
function loadSiteTreeAndList(child_squ){
	
	_prochildsqu = child_squ
	$.ajax({
		type : 'post',
		url : 'selectlistChildSite.do',
		timeout : 1321231232131213123,
		dataType:"json",
		async : false,
		data:{
			squ:child_squ,
		},
		success : function(data) {
			if (data.status == "success") {
				var list = data.result;
				if (list.length > 0) {
					//加载部位树菜单
					loadSiteTree(list, child_squ);
				}
				loadSiteList(list);
			} else {
				Modal.alert({
				    msg: data.result,
				    title: '消息提示',
				    btnok: '确定',
				    btncl:'取消'
				  });
			}
		},
		error : function() {
			Modal.alert({
			    msg: '部位列表加载出错',
			    title: '消息提示',
			    btnok: '确定',
			    btncl:'取消'
			  });
		}
	});
}

/**
  * loadChildList:(加载部位列表)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2018-2-6 下午4:17:56
  * @param: 
  * @return: void
 */
function loadSiteList(data) {
	//子项目列表
	var html = "<table class='table table-bordered'>";
	html += "<tr><th>部位名称</th><th>部位编号</th><th>部位标高(mm)</th><th>安装吊高(mm)</th><th>改建工程</th><th>创建时间</th><th>修改时间</th><th>操作</th></tr>";
	var leng = data.length;
	if ( leng <= 0) {
		html += "<tr><td colspan='8'>未查询到数据</td></tr>";
	} else {
		for ( var i = 0; i < leng; i++) {
			var jsonStr = JSON.stringify(data[i]);
			var reconstruction = "-";
			if (data[i].gjlx == 0) {
				reconstruction = "否";
			} else if (data[i].gjlx == 1) {
				reconstruction = "是";
			}
			html += "<tr><td>" + data[i].bwmc + "</td><td>" + data[i].siteNum + "</td><td>" + data[i].bwbg + "</td><td>" + data[i].azdg + "</td>";
			html += "<td>" + reconstruction + "</td><td>" + data[i].createDate + "</td><td>" + data[i].updateDate + "</td><td>";
			html += "&nbsp;<span><a title='编辑' href='javascript:void(0);' onclick='editSite(" + jsonStr + ");'>";
			html += "<i class='icon-edit icon-black'></i></a></span>&nbsp;";
			html += "<span><a title='删除' href='javascript:void(0);' onclick='delSite(" + jsonStr + ");'>";
			html += "<i class='icon-trash icon-black'></i></a></span></td></tr>";
		}
	}
	html += "</table>";
	$('#siteGrid').html(html);
}

/**
  * loadChildTree:(加载子项目树)
  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
  * @author: 黄月
  * @dateTime: 2018-2-6 下午4:17:30
  * @param: @param data
  * @return: void
 */
function loadSiteTree(data, child_squ){
	var html = "";
	for (var i = 0;i < data.length; i++) {
		html+=" <li class='nav-header hidden-tablet border-bottom' style='display:block; padding-left:15px;'>";
		html+=" <a href='javascript:void(0);' style='color:#3f9fd9;' class='ajax-link'  flag='1' onclick='loadTree(this, 3," + JSON.stringify(data[i]) + ")' id='" + data[i].site_squ + "'>";
		html+=" " + data[i].bwmc + "</a>";
		html+=" <ul class='topnav'>";
		html+=" </ul>";
		html+=" </li>";
	}
	$("#" + child_squ + "").parent().find("ul").html(html);
	$("#" + child_squ + "").next("ul").accordion({
			accordion:false,
			speed: 300,
			closedSign: '[+]',
			openedSign: '[-]'
		});
}

/**
 * showSiteMsg:(获取并显示子工程信息)
 * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
 * @author: 黄月
 * @dateTime: 2018-2-7 上午10:18:03
 * @param: @param childObject
 * @return: void
*/
function showSiteMsg(siteObject) {
	var reconstruction = "-";
	if (siteObject.gjlx == 0) {
		reconstruction = "否";
	} else if (siteObject.gjlx == 1) {
		reconstruction = "是";
	}
	var html = "<div class='span6' style='padding:10px;'>";
	html += "<div class='projectList'><div>部位名称：</div>" + siteObject.bwmc + "</div>";
	html += "<div class='projectList'><div>部位编号：</div>" + siteObject.siteNum + "</div>";
	html += "<div class='projectList'><div>改建工程：</div>" + reconstruction + "</div>";
	html += "</div>";
	html += "<div class='span6' style='padding:10px;'>";
	html += "<div class='projectList'><div>部位标高：</div>" + siteObject.bwbg + "mm</div>";
	html += "<div class='projectList'><div>安装吊高：</div>" + siteObject.azdg + "mm</div>";
	html += "</div>";

	$('.site_msg').find("div .row-fluid").html(html);
}

/**
 * showAddSiteModal:(新增部位模态框)
 * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项)
 * @author: 黄月
 * @dateTime: 2017-10-17 下午8:47:16
 * @param: 
 * @return: void
*/
function showAddSiteModal(){
	$('#siteHtmlTitle').html("新增部位");
	$('#siteForm')[0].reset();
	$('#site_squ').val("");
	$('#siteModal').modal();
}