/**
 * 
 */
package monitor.common.filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import monitor.user.dao.impl.AuthorityDAOImpl;


/**
 * jsp过滤器，拦截除公共可访问的jsp页面外的其他所有jsp页面
 * @author  cl
 * @datetime  2011-4-22 上午09:44:01
 */
public class JspFilter implements Filter{
	private AuthorityDAOImpl authDAO = null;
	
	public AuthorityDAOImpl getAuthDAO() {
		return authDAO;
	}
	public void setAuthDAO(AuthorityDAOImpl authDAO) {
		this.authDAO = authDAO;
	}

	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain filterChain) throws IOException, ServletException {
		HttpServletRequest httpRequest = (HttpServletRequest)request;
		HttpServletResponse httpResponse = (HttpServletResponse)response;
		HttpSession session = httpRequest.getSession(false);

		String request_uri=httpRequest.getRequestURI();
		String ctxPath  = httpRequest.getContextPath();
		
		String currentURI=request_uri.substring(ctxPath.length()).trim();
		
		//是否是公共jsp
		if(authDAO.getPublicJspSet().contains(currentURI)){
            if (currentURI.lastIndexOf("jump.jsp")!=-1|| currentURI.lastIndexOf("login.jsp")!=-1|| session != null) {
                filterChain.doFilter(request, response);
            }  else {
                httpResponse.sendRedirect(ctxPath+"/pages/login.jsp");
            }
		}else{
			System.out.println("无权限url: "+currentURI);
			httpResponse.sendRedirect(ctxPath+"/pages/common/cannotAccessJsp.jsp");
		}
	}

	public void init(FilterConfig filterConfig) throws ServletException {
		
	}
	public void destroy() {
		
	}

}
