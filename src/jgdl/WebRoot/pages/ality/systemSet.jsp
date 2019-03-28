<%@ page language="java" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ include file="/pages/head.jsp"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>菜单配置</title>
	<link rel="stylesheet" type="text/css" href="resource/ztree/css/zTreeStyle.css" />
	<link rel="stylesheet" type="text/css" href="resource/new/css/iconfont/iconfont.css" />
	<link rel="stylesheet" type="text/css" href="pages/ality/css/set.css" />
	<link rel="stylesheet" type="text/css"  href="resource/css/addStyle.css" />
	<script type="text/javascript" src="resource/ztree/jquery.ztree-2.6.min.js"></script>
	
	<script type="text/javascript">
		/* $(document).ready(function() {
			$(".topnav li").click(function(){
	            $(this).siblings().removeClass("add-style1");
	            $(this).children().find("a").addClass("add-style1");
	        })
	    }); */
	    
	  /*   $('.parNav li .topnav li').bind("click",function(){
             if ($(this).children().find("a").hasClass("add-style1"))
                 $(".parNav li .topnav li a").removeClass("add-style1");
             //console.log("$(this)");
             else {
                 $(this).children().find("a").addClass("add-style1");
             }
         }) */
         
         $(function(){
		    $(".topnav li").change(function(){
		        $(this).children().addClass("add-style1").siblings().removeClass("add-style1");
		    });
		});
		
	</script>
	
	<style>
	.add-style1{
		background-color: #f5f5f5;
	}
	.container-fluid {
	    padding-right: 10px;
	    padding-left: 10px;
	}
	.topnav li:last-child{
		border-bottom:none;
	}
	</style>
</head>

<body onkeydown="keyDown(event);">
	
	<ul class="breadcrumb" id="roleSearchBox" style="list-style:none;">
		<li id="titleName1" style="color: #369BD7;">
			当前页面：系统管理&nbsp;&gt;
			<span> 
				<a href="javascript:void(0)"> 
					菜单配置
				</a>
			</span>
		</li>
	</ul>
	
	<!--查询父级菜单所有参数放入list  -->
	<c:forEach items="${list}" var="t" varStatus="status">
		<c:if test="${status.index == 0 }">
			<input type="hidden" name="mainSqu" id="mainSqu" value="${t.SQU }"><!-- 获取功能编号squ作为下一级菜单的父级菜单编号 -->
		</c:if>
	</c:forEach>
	
	<input type="hidden" id="typeId">
	<input type="hidden" id="doType">
	<input type="hidden" id="doSqu" />
	<input type="hidden" id="level" value="1">
	<input type="hidden" id="root" value="<%=basePath%>">

	<!--  app box start -->
	<%-- <div style="margin-left: 10px;width:300px;float:left;min-height:500px;">
		<div class="well nav-collapse sidebar-nav" style="min-height:500px;">
			<ul class="nav nav-tabs nav-stacked main-menu">
				<li class="nav-header hidden-tablet"><a class="ajax-link"
					href="javascript:void(0);" flag="1" id="0" tier="0" title="功能目录"
					isend="1" onclick="parentload(this);"><font size="2">功能目录</font></a>
				</li>
				<li>
					<ul class="topnav">
						<c:forEach items="${list}" var="t" varStatus="status">
							<li style="margin-left:-10px;"><a href="javascript:void(0);"
								flag="1" id="${t.SQU}" tier='${t.TIER}' title='${t.NAME}'
								isEnd="${t.ISEND}" onclick="parentload(this);">
								<i class="${t.ICON}"></i>&nbsp;${t.NAME}</a>
								<ul class="topnav"></ul>
							</li>
						</c:forEach>
					</ul>
				</li>
			</ul>
		</div>
	</div> --%>
  <div class="container-fluid">
	<div class="row-fluid">
	<!-- 左边菜单 start-->
		<div class="leftSideBar span3">
			<ul style="width:100%;" class="parNav">
				<li class="nav-header hidden-tablet border-bottom">
					<a class="ajax-link" style="padding-left:10px;"
						href="javascript:void(0);" flag="1" id="0" tier="0" title="功能目录"
						isend="1" onclick="parentload(this);"><b>功能目录</b>
					</a>
				</li>
				<li>
					<ul class="topnav">
						<c:forEach items="${list}" var="t" varStatus="status">
							<li class="border-bottom">
								<a href="javascript:void(0);"
									flag="1" id="${t.SQU}" tier='${t.TIER}' title='${t.NAME}'
									isEnd="${t.ISEND}" onclick="parentload(this);">
									&nbsp;${t.NAME}
								</a>
								<ul class="topnav"></ul>
							</li>
						</c:forEach>
					</ul>
				</li>
			</ul>
		</div>
	<!-- 左边菜单 end-->	
	
	<!-- 右边内容 start-->	
		<div class="span9">
			<ul class="breadcrumb" style="list-style:none;">
				<li id="titleName" style="color: #369BD7;"></li>
					<span id="home" > 
						<a id="head_title" href="javascript:void(0)"> 
							<c:forEach items="${list}" var="l" varStatus="i" begin="0" end="0">${l.NAME} </c:forEach>
						</a>
					</span>
				<li style="float: right;">
					<a style="margin-top:-3px;" title="新增" class="btn btn-primary" onclick="appRegister();" href="javascript:void(0);">
					<i class="icon-plus-sign icon-white"></i> 新增</a>
				</li>
				<li id="ss" style="float:right;margin-right: 5px;">
					<input id="input_search" type="text" style="width:200px;color:#ccc;" value="关键字搜索"
					onfocus="if(this.value == '关键字搜索') this.value = ''" onblur="if(this.value =='')  this.value = '关键字搜索'">
					<a style="margin-top:-10px;" class="btn " onclick="searchWord();" href="javascript:void(0);">
					<i class="icon-search"></i> 检索</a>
				</li>
			</ul>
			
			<div id="ality_content">
				<table class="table table-striped table-bordered bootstrap-datatable datatable">
					<thead>
						<th width="200">功能描述</th> 
						<th width="300">类型</th> 
						<th width="300">状态</th> 
						<th width="300">操作</th>
					</thead>
					<tbody id="box_body">
					
					</tbody>
				</table>
			</div>
			
			<div id="reqGrid"></div>
			
			<div id="pageDiv"></div>
			
		</div>
	<!-- 右边内容 end-->		
	</div>
</div>
	<!-- end app box -->

	<%--<div class="box" style="margin-left:360px;margin-top:0px;width:auto;margin-right:30px;">
		 <div>
			<ul class="breadcrumb" style="list-style:none;line-height: 27px;">
			<li id="titleName" style="color: #369BD7;"></li>
				<span id="home" style="padding-top: 10px;"> 
					<a id="head_title" href="javascript:void(0)"> 
						<c:forEach items="${list}" var="l" varStatus="i" begin="0" end="0">${l.NAME} </c:forEach>
					</a>
				</span>
				<li style="height: 30px;"></li>
				<li style="float: right;margin-top: 5px;">
					<a style="margin-top:-3px;" title="新增" class="btn btn-primary" onclick="appRegister();" href="javascript:void(0);">
					<i class="icon-plus-sign icon-white"></i> 新增</a>
				</li>
				<li id="ss" style="float:right;margin-right: 5px;margin-top: 5px;">
					<input id="input_search" type="text" style="width:200px;color:#ccc;" value="关键字搜索"
					onfocus="if(this.value == '关键字搜索') this.value = ''" onblur="if(this.value =='')  this.value = '关键字搜索'">
					<a style="margin-top:-10px;" class="btn " onclick="searchWord();" href="javascript:void(0);">
					<i class="icon-search"></i> 检索</a>
				</li>
			</ul>
		</div> --%>
		<!-- <div class="box-content" id="ality_content" style="margin-top: -10px;">
			<table class="table">
				<thead>
					<th width="200">功能描述</th> <th width="300">类型</th> <th width="300">状态</th> <th width="300">操作</th>
				</thead>
				<tbody id="box_body"></tbody>
			</table>
		</div>
		<div id="reqGrid"></div>
	</div> -->
	
	

	<div class="container">
		<form action="" method="post" id="appForm" class="registerform" enctype="multipart/form-data">
			<div id="example" class="modal hide fade in" style="display: none;width: 660px;height: 425px;">
				<div class="modal-header">
					<a class="close" data-dismiss="modal">×</a> <h3 id="htmlTitle"></h3>
				</div>
				<div class="modal-body" >
					<input type="hidden" id="alitySqu" name="ality.squ"> 
					<input type="hidden" id="main_Squ" name="ality.mainSqu">

					<div style="border: 1px solid #ccc;padding: 5px; width: 522px; margin: 30px auto 30px auto;">
						<table class="bo_ta">
							<tr>
								<td style="width: 52px;height:38px;">名称:</td>
								<td style="width: 200px;">
									<input style="position: absolute;top: 99px;height: 28px;left: 134px;width: 181px; border: none;"
									datatype="*2-40" nullmsg="请输入功能名称！" errormsg="请输入2-40个字符！"
									type="text" id="alityName" name="ality.name"></td>
								<td style="width: 52px;height:38px;">地址:</td>
								<td style="width: 200px;"><input
									style="position: absolute;right: 72px; top: 100px;height: 27px;width: 189px;border:none;"
									datatype="*2-40" nullmsg="请输入功能地址！" errormsg="请输入2-40个字符！"
									type="text" id="entryUrl" name="ality.entryUrl"></td>
							</tr>
							<tr>
								<td style="width: 52px;height:38px;">DIV标识:</td>
								<td><input style="height: 26px;position: absolute;left: 132px;top: 142px;width: 184px;border: none;"
									datatype="*2-40" nullmsg="请输入功能唯一标识！" errormsg="请输入2-40个字符！"
									type="text" id="divID" name="ality.divID"></td>
								<td style="width: 52px;height:38px;">状态:</td>
								<td>
									<select id="state" name="ality.isHidden" style="position: absolute;
										top: 140px;height: 36px;right: 71px;width: 198px;border: none;">
										<option value="0">显示</option>
										<option value="1">隐藏</option>
									</select>
								</td>
							</tr>
							<tr>
								<td style="width: 60px;height:38px;">排序编号:</td>
								<td><input style="height: 26px;position: absolute;top: 182px;left: 133px;width: 183px;border: none; text-align: center;"
									type="text" readonly="readonly" id="dispOrder" name="ality.dispOrder"></td>
								<td id="td_tag" style="width: 58px;height:38px;">所属项:</td>
								<td id="td_sgin">
									<select id="placeItem" name="ality.main" style="position: absolute;top: 180px;
									height: 35px;right: 72px;width: 195px;border: none;">
									</select>
								</td>
							</tr>
						</table>
					</div>
					
					<span id="msg"></span>
				</div>
				
				<div class="bottomBtnBox">
					<a title="确定" href="javaScript:void(0);" class="btn btn-success" onclick="$('#appForm').submit();" id="appBtn" style="margin:14px 0;">
						<i class="icon-ok icon-white"></i> 确定
					</a> 
					<a title="取消" href="javaScript:void(0);" class="btn" data-dismiss="modal" id="closeWin" style="margin:14px;"> 
						<i class="icon-remove"></i> 取消
					</a>
				</div>
				
			</div>
		</form>
	</div>
	
	
	
	<!-- 功能请求表单 -->
	<div class="container">
		<form action="" method="post" id="doForm" class="doregisterform">
			<div id="doexample" class="modal hide fade in" style="display: none;width: 570px;height: 321px;">
				<div class="modal-header">
					<a class="close" data-dismiss="modal">×</a> <h3 id="doTitle"></h3>
				</div>
				<div class="modal-body">
					<div style="border:1px solid #ccc;margin: 20px auto;width:269px;padding:5px;">
						<input type="hidden" name="pSqu" id="doParSqu"> 
						<input type="hidden" name="squ" id="crentSqu">
						<table class="bo_ta">
							<tr>
								<td class="bo_label">名称:</td>
								<td style="width:220px;">
									<input type="text" id="doName" name="ality.name" datatype="*2-40" nullmsg="请输入功能请求名称！"
										errormsg="请输入2-40个字符！" style="height: 26px;position: absolute;top: 88px;left: 196px;border:none;" />
								</td>
							</tr>
							<tr>
								<td class="bo_label">地址:</td>
								<td><input type="text" id="doUrl" name="ality.url" datatype="*2-40" nullmsg="请输入功能请求地址！" errormsg="请输入2-40个字符！"
									style="height: 26px;position: absolute;top: 127px;left: 196px;border:none;" />
								</td>
							</tr>
							<tr>
								<td class="bo_label">描述:</td>
								<td><input type="text" id="doDesc" name="ality.descb" datatype="*2-40" nullmsg="请输入功能请求描述！" errormsg="请输入2-40个字符！"
									style="height: 26px;position: absolute;top: 164px;left: 196px;border:none;" />
								</td>
							</tr>
						</table>
					</div>
					<span id="domsg"></span>
				</div>
				
				<div class="bottomBtnBox">
					<a title="确定" href="javaScript:void(0);" class="btn btn-success" onclick="$('#doForm').submit();" id="doBtn" style="margin:14px 0;">
						<i class="icon-ok icon-white"></i> 确定
					</a> 
					<a title="取消" href="javaScript:void(0);" class="btn" data-dismiss="modal" id="doWin" style="margin:14px;">
						<i class="icon-remove"></i> 取消
					</a>
				</div>
				
			</div>
		</form>
	</div>


	<%-- <script type="text/javascript" src='resource/js/uiGrid.js'></script> --%>
	<script type="text/javascript" src="resource/js/ality/alitySet.js"></script>
	<script type="text/javascript" src="resource/js/scriptbreaker-multiple-accordion-1.js"></script>
</body>
</html>
