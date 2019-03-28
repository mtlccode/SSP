<%@ page language="java" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ include file="/pages/head.jsp"%>
<!DOCTYPE html>
<html>
<head>
<base href="<%=basePath%>" />
<title>照片资料管理</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="shortcut icon" href="resource/new/bootstrap/img/favicon.ico" />
<link rel="stylesheet" type="text/css" href="resource/ztree/css/zTreeStyle.css" />
<link rel="stylesheet" type="text/css" href="resource/new/css/dataSort.css" />
<link rel="stylesheet" type="text/css"  href="resource/css/addStyle.css" />
<link rel="stylesheet" type="text/css" href="resource/new/css/iconfont/iconfont.css"/>
<script type="text/javascript"
	src="resource/ztree/jquery.ztree-2.6.min.js"></script>

<style type="text/css">
	/* #sort_table td{
		border:1px solid #ccc;
	}
	.sort_input{
		width: 180px;
	} */
	.container-fluid {
    padding-right: 10px;
    padding-left: 10px;
}
.topnav li:last-child{
	border-bottom:none;
}
</style>

<style type="text/css">

.bottom_btn{
height:20px;
}


</style>


</head>

<body onkeydown="keyDown(event);">
	
	

	<ul class="breadcrumb" id="roleSearchBox" style="list-style:none;">
		<li id="titleName1" style="color: #369BD7;">
			当前页面：基础参数&nbsp;&gt;
			<span> 
				<a href="javascript:void(0)"> 
					照片资料管理
				</a>
			</span>
		</li>
	</ul>	
	
	<!-- 页头结束 -->
	
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
					<ul class="topnav1">
						<li class="border-bottom">
							<span id="span" style="padding-left:20px;">[+] </span>
								<a href="javascript:void(0);" flag="2" id="TPFL" tier="" title="" isend="" 
								onclick="parentload(this)">&nbsp; 图片分类</a>
							
							<ul id="topnav1" class="topnav">
								
							</ul>
						</li>						
					</ul>
				</li>
				
			</ul>
		</div>
	<!-- 左边菜单 end-->	
	
	<!-- 右边内容 start-->	
		<div class="span9">
		   <div>
			
			<ul class="breadcrumb" id="">
				<li id="titleName1" style="color: #369BD7;">
					<span> 
						<a href="javascript:void(0)"> 
							图片资料管理
						</a>
					</span>
					<span> 
						<a href="javascript:void(0)" id="zhbjmc"> 
							
						</a>
					</span>
				</li>
				<li style="float: right;display: none" id="abj">
					<a style="margin-top:-3px;" title="新增图片" class="btn btn-primary" onclick="appRegisterImg();" href="javascript:void(0);">
					<i class="icon-plus-sign icon-white"></i> 新增图片</a>
				</li>&nbsp;
				<li style="float: right;margin-right: 5px;" id="azhbj">
					<a style="margin-top:-3px;" title="新增图片分类" class="btn btn-primary" onclick="appRegister();" href="javascript:void(0);">
					<i class="icon-plus-sign icon-white"></i> 新增图片分类</a>
				</li>
				<li id="ss" style="float:right;margin-right: 5px;">
					<input id="input_search" type="text" style="width:200px;color:#ccc;" value="关键字搜索"
					onfocus="if(this.value == '关键字搜索') this.value = ''" onblur="if(this.value =='')  this.value = '关键字搜索'">
					<a style="margin-top:-10px;" class="btn" onclick="searchWord();" href="javascript:void(0);">
					<i class="icon-search"></i> 检索</a>
				</li>
			</ul>
		
		</div>
	
	
	<div id="uigrld"></div>
	<!-- 分页div -->
	<div id="pageDiv" style = "display:none"></div>
	
	<!-- 右边内容 end-->	
	</div>
</div>
</div>
	
		<!-- 新增图片分类弹出框内容 -->	
		<div id="example" class="modal hide fade in windowBoxBig" style="display: none;width: 740px;height: 440px;left: 700px">
			<div class="modal-header">
				<a class="close" data-dismiss="modal">×</a> 		
				<h3 id="secondTitle">新增图片分类</h3>
			</div>
			
			<div class="modal-body">
			<!-- 隐藏结果内容 -->
			  <div id="hideConBox" style="display1:none;">
				
				
				 <div class="container-fluid">
					 <div class="row-fluid tooltip-demo" style="margin-left:-5px;">
					  
					     <form id="uploadForm" action=""  method="post" enctype="multipart/form-data">
					      <!--右边内容-->
					     <div class="span12">
					     	<div class="box-content">
					     	
					     	<input type="hidden" id="squ" name="squ"/>
					    
							<table  class="table table-bordered">
								  
								  		<tr>
								  		<td>图片分类名称：</td>
								  		<td><input type="text" placeholder="请输入图片分类名称..." id="flmc" name="flmc"/></td>
								  		</tr>
								  		
								  		<tr>
								  		<td>图片分类代码：</td>
								  		<td><input type="text" placeholder="请输入图片分类代码..." id="fldm" name="fldm"/></td>
								  	
								  		</tr>								  		
								  					
					 		</table> 
					     </div>
					   </div>
					</form>   
					</div>
				</div>
			 </div>
		  <!-- 隐藏结果内容 -->		
								
		<!-- 弹出框内容 -->						
			</div>
			
			<div class="bottomBtnBox">
				<a title="确定" href="javaScript:void(0);" class="btn btn-success"  id="appBtn" style="margin:14px 0;">
					<i class="icon-ok icon-white"></i> 确定
				</a> 
				<a title="取消" href="javaScript:void(0);" class="btn" data-dismiss="modal" id="closeWin" style="margin:14px;"> 
					<i class="icon-remove"></i> 取消
				</a>
			</div>
						
		</div>
		


	<!-- 新增图片弹出框内容-->	
	<div id="userDiv" class="modal hide fade in windowBoxMiddle" style="display:none;">

		<div class="modal-header">
			<a class="close" data-dismiss="modal">×</a>
			<h3 id="userTitleName">添加图片</h3>
		</div>
		
		<div class="modal-body" style="margin-top:-13px;">
		  <div class="container-fluid">
		  
			  <form class="form-horizontal" method="post" action=""  id="imgForm" enctype="multipart/form-data">
				 <div class="row-fluid">
				
				     <div class="span10">
				     	<div class="box-content">
							
								<fieldset>
								<!-- 图片分类Id -->
								<input type="hidden" name="TPFLsqu" id="TPFLsqu" value=""/>
								<!-- 图片id -->
								<input type="hidden" name="TPsqu" id="TPsqu" value=""/>
								
								  <div class="control-group">
									<label class="control-label" for="focusedInput">图片名字：</label>
									<div class="controls">
									  <input class="input-xlarge focused" id="TPNAME" name = "tpName" type="text" value="" style = "width:213px">
									</div>
								  </div>
						
								  <div class="control-group">
									<label class="control-label" for="focusedInput">图片说明：</label>
									<div class="controls">
									  <textarea  name = "tpsm" id = "TPSM" cols ="30" rows ="3" placeholder ="请在这里输入说明"></textarea>
									</div>
								  </div>
								  
								   <div class="control-group">
									<label class="control-label" for="focusedInput">图片：</label>
									<div class="controls" style="overflow: hidden;">

										<div id="preview">
	    									<img id="imghead" border=0 src="resource/images/1208160.png" width="120" height="120" />
										</div>
										
										<div >
											<input class="input-xlarge focused" id="photo" type="file" name="file" accept="image/gif,image/jpeg,image/jpg,image/png" onchange="previewImage(this)"
											style = "margin-left: 25px;margin-top: 10px;">
											<input type="hidden" name="image" id="image" value=""/><!-- 图片名字 -->
										</div>
									</div>

										
								  </div>
								  
								  <input type="reset" id="clearForm" name="reset" style="display:none;"/>
								  
								</fieldset>
							
						</div>
				     </div>
				  </div>
			  </form>  
		   </div>
				
			<div class="bottomBtnBox">
				<a title="确定" class="btn btn-success" id="imgBtn" style="margin:14px 0;">
					<i class="icon-ok icon-white"></i> 确定
				</a>
				<a title="取消" class="btn" id="closeUserBox" data-dismiss="modal" style="margin:14px;">
					<i class="icon-remove"></i> 取消
				</a>
			</div>
			
		</div>
	</div> 
	

	
	
<script type="text/javascript">
	function previewImage(file){
	    var MAXWIDTH = 120;
	    var MAXHEIGHT = 120;
	    var div = document.getElementById('preview');
	    
	    if (file.files && file.files[0]) {
	        div.innerHTML = '<img id=imghead>';
	        var img = document.getElementById('imghead');
	        
	        img.onload = function () {
	            var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
	            img.width = rect.width;
	            img.height = rect.height;
	            
	        }
	        var reader = new FileReader();
	        reader.onload = function (evt) {
	            img.src = evt.target.result;
	        }
	        reader.readAsDataURL(file.files[0]);
	    }else{  //兼容IE
	        var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
	        file.select();
	        var src = document.selection.createRange().text;
	        div.innerHTML = '<img id=imghead>';
	        var img = document.getElementById('imghead');
	        img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
	        var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
	        status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
	        div.innerHTML = "<div id=divhead style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
	    }
	}

	function clacImgZoomParam( maxWidth, maxHeight, width, height ){
	    var param = {top:0, left:0, width:width, height:height};
	    if( width>maxWidth || height>maxHeight ){
	        rateWidth = width / maxWidth;
	        rateHeight = height / maxHeight;
	        if( rateWidth > rateHeight ){
	            param.width =  maxWidth;
	            param.height = Math.round(height / rateWidth);
	        }else{
	            param.width = Math.round(width / rateHeight);
	            param.height = maxHeight;
	        }
	    }
	    param.left = Math.round((maxWidth - param.width) / 2);
	    param.top = Math.round((maxHeight - param.height) / 2);
	    return param;
	}
</script>
	
	<script type="text/javascript" src="resource/js/goodsHouse/imgManage.js"></script>
	<script type="text/javascript" src="resource/js/scriptbreaker-multiple-accordion-1.js"></script>

</body>

</html>
                       