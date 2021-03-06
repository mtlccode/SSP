<%@ page language="java" pageEncoding="UTF-8"%>
<%@ include file="/pages/head.jsp" %>
<%-- <%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%> --%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<base href="<%=basePath%>">

	<title>意维高后台首页</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="resource/ztree/css/zTreeStyle.css" />
	<link rel="stylesheet" type="text/css" href="resource/new/css/iconfont/iconfont.css" />
	<link rel="stylesheet" type="text/css" href="pages/ality/css/set.css" />
	<link rel="stylesheet" type="text/css"  href="resource/css/addStyle.css" />
	<link rel="stylesheet" type="text/css"  href="resource/css/level/levelStyle.css" />
	<script type="text/javascript" src="resource/ztree/jquery.ztree-2.6.min.js"></script>
	<script>
		function searchWindow(){
			$("#searchWindowCon").show();
		};
		
	</script>
	
	<style>
	.container-fluid {
	    padding-right: 10px;
	    padding-left: 10px;
	}
	#buttonTeam{
		margin-top:6px;
	}
	.div_one{
		text-align:center;
		color:white;
		float:left;
		cursor:pointer;
		border-radius:6px;
		position: relative;
	}
	.div_one img{
		margin-top:10%;
		margin-bottom:20%;
	}
	.col-two{
		width:100%;
		height:100%;		
	}
	.colorBlue{
		background-color:#3085e6;		
	}
	.colorBlue:hover{
		opacity:0.9;
	}
	.colorGreen{
		background-color:#00bbc2;		
	}
	.colorGreen:hover{
		opacity:0.9;
	}
	.colorGreenOne{
		background-color:#00b56a;		
	}
	.colorGreenOne:hover{
		opacity:0.9;
	}
	.colorBlueOne{
		background-color:#01a4f5;		
	}
	.colorBlueOne:hover{
		opacity:0.9;
	}
	.size20{
		font-size:20px;
		letter-spacing:2px;
		margin-top:-20px;
		position:absolute;
		bottom:14px;
		left:50%;
		width:100px;
		margin-left:-50px;
	}
	.add-top{
		margin-top:24px;
	}
	.bottomConBox{
		position:absolute;
		left:0;
		bottom:0;
		width:100%;
		height:50px;
		background-color:#000;
		border-radius:0 0 6px 6px;
		opacity:0.2;
		color:white;
	}
	</style>
</head>
  
<body>
	<ul class="breadcrumb" style="list-style:none;">
		<li id="titleName" style="color: #369BD7;">
			当前页面：
			<span id="home"> 
				<a id="head_title" href="javascript:void(0)"> 
					首页
				</a>
			</span>
		</li>
		
	</ul>
	
	<div class="container-fluid">
		<div class="row-fluid">
		<!-- 左边菜单 start-->
			<div class="leftSideBar span3">
				<ul style="width:100%;" class="parNav">
					<li class="nav-header hidden-tablet border-bottom">
						<a class="ajax-link" style="padding-left:10px;"
							href="javascript:void(0);" flag="1" id="0" tier="0" title="功能目录"
							isend="1" onclick="parentload(this);"><b>目录分类</b>
						</a>
					</li>
					<li>
						<ul class="topnav">
							<li class="border-bottom">
								<span style="padding-left:10px;"> [+]</span>
								<a href="javascript:void(0);" flag="1" id="" tier='' title=''
									isEnd="" onclick="">&nbsp; 管道单吊架侧向抗震支架组合SDDZ1/65
								</a>
								<ul class="topnav">
									<li class="border-bottom">
										<span style="padding-left:20px;"> [-]</span>
										<a href="javascript:void(0);" flag="1" id="" tier="" title="" isend="" onclick="">&nbsp; 
										螺杆式膨胀锚栓</a>
									</li>
									<li class="border-bottom">
										<span style="padding-left:20px;"> [-]</span>
										<a href="javascript:void(0);" flag="1" id="" tier="" title="" isend="" onclick="">&nbsp; 
										槽钢盖</a>
									</li>
								</ul>
							</li>
							<li class="border-bottom">
								<span style="padding-left:10px;"> [+]</span>
								<a href="javascript:void(0);" flag="1" id="" tier='' title=''
									isEnd="" onclick="">&nbsp; 管道单吊架侧向抗震支架组合SDDZ2/65
								</a>
								<ul class="topnav"></ul>
							</li>
						</ul>
					 </li>
				</ul>
			</div>
		<!-- 左边菜单 end-->
		
		<!-- 右边内容 start-->	
			<div class="span9">
				<div class="row-fluid">
					<div class="span6">
						<!-- 用户管理-->
						<a href="showUserIndex.do" >
						  <div class="div_one col-two colorBlue">
							   <img src="resource/images/icons/userIcon.png" width="80px" height="80px"/>
							   <div class="bottomConBox">
							   	 
							   </div>
							   <div class="size20">用户管理</div>
						  </div> 
						  </a>
						<!-- 用户管理-->
						
						<!-- 支架模型-->
						<a href="showKzzjIndex.do" >
						  <div class="div_one col-two colorGreenOne add-top">
							   <img src="resource/images/icons/modelIcon.png" width="80px" height="80px"/>
							  
							    <div class="bottomConBox">
							   	
							   </div>
							    <div class="size20">支架模型</div>
						  </div> 
						   </a>
						<!-- 支架模型-->
					</div>
					
					<div class="span6">
						<!-- 基础参数-->
						<a href="goPartsIndex.do" >
						  <div class="div_one col-two colorGreen">			 
							   <img src="resource/images/icons/baseIcon.png" width="80px" height="80px"/>
							   
							   <div class="bottomConBox">
							   
							   </div>
							   	<div class="size20">基础参数</div>
						  </div> 
						  </a>
						<!-- 基础参数-->
						
						<!-- 项目管理-->
						<a href="toProjectBasicIndex.do" >
						  <div class="div_one col-two colorBlueOne add-top">
							   <img src="resource/images/icons/productIcon.png" width="80px" height="80px"/>
							   
							   <div class="bottomConBox">
							   	
							   </div>
							   <div class="size20">项目管理</div>
						  </div> 
						  </a>
						<!-- 项目管理-->
					</div>
				</div>
						
			</div>
		<!-- 右边内容 end-->	
				
		</div>
		
	</div>

	  
	<script type="text/javascript" src="resource/js/scriptbreaker-multiple-accordion-1.js"></script>
	<script type="text/javascript" src="resource/js/level/levelStyle.js"></script> 
	
		
	<script>
		$(document).ready(function(){  
  
			 //Add  
		    $(".quantity-add").live("click", function(){  
		        //Vars  
		        var count = 1;  
		        var newcount = 0;  
		          
		        //Wert holen + Rechnen  
		        var elemID = $(this).parent().attr("class");  
		        count = $(this).parent().find("."+elemID+"inp").val();  
		        newcount = parseInt(count) + 1;  
		          
		        //Neuen Wert setzen  
		        $(this).parent().find("."+elemID+"inp").val(newcount);  
		    });  
		  
		    //Remove  
		    $(".quantity-remove").live("click",function(e){  
		        //Vars  
		        var count = 1;  
		        var newcount = 0;  
		          
		        //Wert holen + Rechnen  
		        var elemID = $(this).parent().attr("class");  
		        count = $(this).parent().find("."+elemID+"inp").val();  
		        newcount = parseInt(count) - 1;  
		          
		        //Neuen Wert setzen  
		        $("."+elemID+"inp").val(newcount);  
		          
		    });  
		  
		}); 
		
		function editNum(index){
			$(index).parent().parent().find(".editAddNum").show();
			$(index).parent().parent().find(".buttonTeam").hide();
		}
		
		function cancelNum(index){
			$(this).parent().parent().parent().find(".editAddNum").hide();
			$(this).parent().parent().parent().find(".buttonTeam").show();
		}
	</script>
</body>
</html>