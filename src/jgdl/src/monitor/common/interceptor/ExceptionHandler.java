package monitor.common.interceptor;


import java.lang.reflect.InvocationTargetException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import monitor.common.BaseAction;
import monitor.common.exception.BizException;
import monitor.common.exception.DaoException;
import monitor.common.exception.SysException;
import monitor.common.util.StringConvert;

import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;

/**
 * 
 * @author lxj
 * description：
 * 	  异常处理拦截器
 */
public class ExceptionHandler extends BaseAction implements Interceptor {
	private DataSource datasource = null;
	public void setDatasource(DataSource datasource) {
		this.datasource = datasource;
	}
	private static final long serialVersionUID = 1L;

	public String intercept(ActionInvocation actioninvocation) {

		String result = null; // Action的返回值
		try {
			// 运行被拦截的Action,期间如果发生异常会被catch住
			result = actioninvocation.invoke();
			return result;
		} catch (Exception e) {
			/**
			 * 处理异常
			 */
//			int errorId = -1; // 异常ID
			if (e instanceof BizException) {
				// 业务逻辑异常
				BizException be = (BizException) e;
				logException(0,be);
//				errorId = be.getErrorId() ;
			} else if (e instanceof SysException) {
				// 系统异常
				SysException se = (SysException) e;
				logException(1,se);
//				errorId = se.getErrorId() ;
			} else if(e instanceof DaoException){
				//数据库异常
				DaoException de = (DaoException)e;
				logException(2,de);
//				errorId = de.getErrorId();
			} /*else if(e instanceof RuntimeException){
				//未知的运行时异常
				errorId = 0;
			} */else{
				//未知的严重异常
//				errorId = 0;
				logException(3,e);
			}
			/**
			 * 读取文件，获取对应错误消息
			 */
			//获取request
			/*HttpServletRequest request = (HttpServletRequest) actioninvocation
					.getInvocationContext().get(StrutsStatics.HTTP_REQUEST);*/
			/**
			 * 发送错误消息到页面
			 */
			
			getRequest().setAttribute("errorMsg",e.getLocalizedMessage()==null?"":e.getMessage());
			getRequest().setAttribute("errorClass",e.getClass().toString());
			/**
			 * log4j记录日志
			 */
//			Log log = LogFactory.getLog(actioninvocation.getAction().getClass());
//			log.error(e) ;
e.printStackTrace() ;
			return "exception";
		}// ...end of catch
	}
	
	/**
	 * @description 将异常信息写入数据库
	 * @author:  cl 
	 * @param type 异常类型
	 * @param e
	 * @return void
	 */
	private void logException(int type,Exception e){
		String message = null;
		//处理InvocationTargetException情况，避免抛出class java.lang.reflect.InvocationTargetException异常
		if(e instanceof InvocationTargetException){
			System.out.println("=====InvocationTargetException=====");
			Throwable targetEx = ((InvocationTargetException)e).getTargetException();
			if(targetEx!=null){
				message = targetEx.getMessage();
			}
		}else{
			message = (e.getLocalizedMessage()==null?"":e.getMessage());
		}
		
		String stackStr = "";
		StackTraceElement[] stack = e.getStackTrace();
		for(StackTraceElement ele:stack){
			stackStr+=ele.toString()+"\n";
		}
		
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			conn = datasource.getConnection();
			
			String sql = "insert into SSP_SystemRunInfo(SQU,EXCEPTIONTYPE,EXCEPTIONCLASSNAME,EXCEPTIONMESSAGE,EXCEPTIONDETAIL,THROWDATETIME) values(SEQ_SYSTEMRUNINFO.NEXTVAL,?,?,?,?,to_date(?,'yyyy-mm-dd HH24:mi:ss'))";
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1,type);
			pstmt.setString(2,e.getClass().toString());
//			pstmt.setString(3,e.getLocalizedMessage()==null?"":e.getMessage());
			pstmt.setString(3,message);
			pstmt.setString(4,stackStr);
			pstmt.setString(5,StringConvert.getTime("yyyy-MM-dd HH:mm:ss"));
			
			pstmt.executeUpdate();
		} catch (Exception ex) {
			ex.printStackTrace();
		}finally{
			try {
				if(rs!=null){
					rs.close();
				}
				if(pstmt!=null){
					pstmt.close();
				}
				if(conn!=null){
					conn.close();
				}
			} catch (SQLException sqe) {
				sqe.printStackTrace();
			}
		}
	}
	
	public void destroy() {
		
	}

	public void init() {
		
	}

	
}
