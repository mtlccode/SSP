(function($){
	$.fn.projectGrid = function(param){
		var records2 = 0;
		var currentPage2 = 0;
		var total2 = 0;
		var pageShowPage2 = 5;// 显示多少个人分页标签
		var pageRowNum2 = 8;// 每页显示记录数
		var pagerNew = 1;
	
		var util = {
			doAjax:function(pagerNew){
				var html = "";
				$.ajax({
					type : 'post',
					url : param.url + "?page=" + pagerNew + "&rows=" + pageRowNum2,
					dataType : 'json',
					async : false,
					timeout : 1321231232131213123,
					data : param.data,
					success : function(data) {
						if (data.rows.length != 0) {
							aData = data.rows;
						}
						records2 = data.total;
						currentPage2 = data.pageNumber;
						total2 = data.pageCnt;
						pageRowNum2 = data.pageSize;
						if (data.rows.length == 0) {
							html += "<li class='border-bottom'>";
							html += "<a href='javascript:void(0);'>未查询到支架列表</a>";
							html += "</li>";
						}
						
						html += "<div class='row-fluid'>";
						for ( var i = 0; i < data.rows.length; i++) {
							html += "<div class='span3'>";
							html += "<div class='img_list'>";
							html += "<a class='lightbox'>";
							if (data.rows[i].zp == "" || data.rows[i].zp == null) {
								html += "<img src='resource/images/mrtp.png' />";
							} else {
								html += "<img src='/upload/" + data.rows[i].zp + "' onerror='javascript:this.src=\"resource/images/mrtp.png\"' />";
							}
							html += "</a>";
							html += "<div class='caption overflow_hidden'>";
							html += "<div class='span12'>";
							html += "<h4 class='text_black' title='" + data.rows[i].dxmc + "'>" + data.rows[i].dxmc + "</h4>";
							html += "<div class='text_number' title='" + data.rows[i].zjxs + "'>" + data.rows[i].zjxs + "</div>";
							html += "</div>";
							html += " </div>";
			                    
							html += "<div class='bottom_btn'>";
							html += "<div class='buttonTeam'>";
							html += "<div class='f-left' style='margin-top:7px;'>";
							html += "当前数量：<span style='color:#369BD7;' class='holder_num" + (i + 1) + "'>" + data.rows[i].sl + "</span>";
							html += "</div>";
							html += "<div class='f-right' style='margin-top:7px;'>";
							html += "<a href='javascript:void(0);' onclick='holder_link(" + JSON.stringify(data.rows[i]) + ")'><i class='icon-zoom-in icon-black'></i></a>&nbsp;&nbsp;";
							html += "<a href='javascript:void(0);' onclick='editNum(this)'><i class='icon-edit icon-black'></i></a>&nbsp;&nbsp;";
							html += "<a href='javascript:void(0);' title='删除' onclick='deleteHolder(" + JSON.stringify(data.rows[i]) + ")'><i class='icon-trash icon-black'></i></a>";
							html += "</div>";
							html += "</div>";
							html += "<div class='editAddNum' style='display: none;'>";
							html += "<div class='f-left'>";
							html += "<div class='form-group form-group-options addBottom'>";
							html += "<div title='" + (i + 1) + "' class='input-group'>";
							html += "<span class='quantity-remove btn' style='margin-top:-10px;'>";
							html += "<span class='icon icon-darkgray icon-minus'></span>";
							html += "</span>";
							html += "<input class='" + (i + 1) + "inp_hide hideInp' type='hidden' value='" + data.rows[i].sl + "' />";
							html += "<input class='" + (i + 1) + "inp form-control quantity-count' type='text' value='' style='width:30px;' name='option[]' placeholder='1' readonly/>";
							html += "<span class='quantity-add btn'  style='margin-top:-10px;'>";
							html += "<span class='icon icon-darkgray icon-plus'></span>";
							html += "</span>";
							html += "</div>";
							html += "</div>";
							html += "</div>";
							html += "<div class='f-right' style='margin-top:7px;'>";
							html += "<a href='javascript:void(0);' onclick='updateHolderNum(this, " + JSON.stringify(data.rows[i]) + ");'>确定</a>&nbsp;";
							html += "<a href='javascript:void(0);' onclick='cancelNum(this)' >取消</a>&nbsp;";
							html += "</div>";
							html += "</div>";
							html += "</div>";
			                    
							html += "</div>";
							html += "</div>";
							
							if ((i + 1) % 4 == 0) {
								html += "</div><div class='row-fluid'>";
							}
						}
						alert(html);
						$("#holderGrid").html(html + "</div>");
					},error : function() {
							Modal.alert({
								msg : '项目支架加载出错！',
								title : '消息提示',
								btnok : '确定',
								btncl : '取消'
							});
						}
					});
				this.writePage(currentPage2);
			},
			writePage:function(currentPage2){
				var pageTotal = total2;// 总共多少页
				var pageCurrentPage = currentPage2;// 当前页
				var pageRecords = records2;// 总记录数
				var countt = "";
				var outstr = "";
				pageTotal = parseInt(pageRecords / pageRowNum2);
				if (pageRecords % pageRowNum2 > 0) {
					pageTotal = pageTotal + 1;
				}
				if (pageTotal <= pageShowPage2) {
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
				if (pageTotal > pageShowPage2) {
					if (parseInt((pageCurrentPage - 1) / pageShowPage2) == 0) {
						outstr = outstr + "<li><a><<</a></li> ";
						for ( var count = 1; count <= pageShowPage2; count++) {
							if (count < 10) {
								countt = "0" + count + "";
							} else {
								countt = "" + count + "";
							}
							if (count != pageCurrentPage) {
								outstr = outstr + "<li tag='" + count
										+ "' class='pageCk'><a  href='javascript:void(0);'>"
										+ countt + "</a></li>";
							} else {
								outstr = outstr + "<li class='active'><a href='javascript:void(0);'>"
										+ countt + "</a></li>";
							}
						}
						outstr = outstr + "<li tag='" + count + "' class='pagePk'><a href='javascript:void(0)'>>></a></li>";
					} else if (parseInt((pageCurrentPage - 1) / pageShowPage2) == parseInt(pageTotal
							/ pageShowPage2)) {
						outstr = outstr
								+ "<li tag='"
								+ (parseInt((pageCurrentPage - 1) / pageShowPage2) * pageShowPage2)
								+ "' class='pagePk'><a href='javascript:void(0)'><<</a></li> ";
						for ( var count = parseInt(pageTotal / pageShowPage2) * pageShowPage2
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
								+ "<li tag='" + (parseInt((pageCurrentPage - 1) / pageShowPage2) * pageShowPage2)
								+ "' class='pagePk'><a href='javascript:void(0)'><<</a></li> ";
						for ( var count = parseInt((pageCurrentPage - 1) / pageShowPage2)
								* pageShowPage2 + 1; count <= parseInt((pageCurrentPage - 1)
								/ pageShowPage2)
								* pageShowPage2 + pageShowPage2; count++) {
							if (count < 10) {
								countt = "0" + count + "";
							} else {
								countt = "" + count + "";
							}
							if (count != pageCurrentPage) {
								outstr = outstr + "<li tag='" + count + "' class='pageCk'><a href='javascript:void(0);'>"
										+ countt + "</a></li>";
							} else {
								outstr = outstr + "<li class='active'><a href='javascript:void(0);'>"
										+ countt + "</a></li>";
							}
						}
						outstr = outstr
								+ "<li  tag='"
								+ count
								+ "' class='pageCk'><a href='javascript:void(0);'>>></a></li>";
					}
				}
				$("#pageInfo2").html(
						"<div class='pagination pagination-centered'  align='right'><ul>"
								+ outstr + "<a href='javascript:void(0);'>共" + pageTotal
								+ "页/" + pageRecords + "条数据</a></li></ul></div>");
				outstr = "";
				$(".pageCk").unbind();
				$(".pageCk").bind('click', function() {
					util.doAjax($(this).attr("tag"));
				});
				$(".pagePk").unbind();
				$(".pagePk").bind('click', function() {
					util.doAjax($(this).attr("tag"));
				});
			}
		};
		return util.doAjax(1);
		
	}
})(jQuery)