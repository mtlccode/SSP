/*
 * @copyright:  xindongsheng Technologies Co., Ltd. Copyright 2010-9999,  All rights reserved 
 * @description:  <description> 
 * @author:  cl 
 * @datetime:  2011-4-21 下午04:41:21
*/
package monitor.user.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Set;

import monitor.common.dao.BaseDAO;
import monitor.common.exception.DaoException;
import monitor.user.dao.IAuthorityDAO;

/** 
 * 用于进行权限查询的dao
 * @author  cl
 * @datetime  2011-4-21 下午04:41:21
 */
public class AuthorityDAOImpl extends BaseDAO implements IAuthorityDAO{
	private Set<String> publicJspSet = null;
	private Set<String> publicActionSet = null;
	public Set<String> getPublicJspSet() {
		return publicJspSet;
	}
	public void setPublicJspSet(Set<String> publicJspSet) {
		this.publicJspSet = publicJspSet;
	}
	public Set<String> getPublicActionSet() {
		return publicActionSet;
	}
	public void setPublicActionSet(Set<String> publicActionSet) {
		this.publicActionSet = publicActionSet;
	}
	
	/**
	 * 查看当前action地址是否已被授权
	 * @author:  cl 
	 * @param 
	 * @return boolean
	 */
	public boolean checkRight(String currentURI,int roleSqu) {
		Connection conn = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		try {
			conn = datasource.getConnection();
			
			/*String sql = "select t6.url from ssp_tuserinfo t1,ssp_troleinfo t2,SSP_TRole_ModuleSub t3,ssp_tmodulesub t4," +
					"ssp_smodule_url t5,ssp_tactionurl t6 where t1.rolesqu=t2.squ and t2.squ = t3.rolesqu " +
					"and t3.subsqu = t4.squ and t4.squ = t5.subsqu and t5.urlsqu = t6.squ and t1.squ = ?" ;
			String sql = "select * from ssp_tuserinfo t1,SSP_TRole_ModuleSub t2,ssp_tmodulesub t3,ssp_smodule_url t4,ssp_tactionurl t5 " +
					"where t1.rolesqu = t2.rolesqu and t2.subsqu = t3.squ and t3.squ = t4.subsqu and t4.urlsqu = t5.squ and " +
					"t1.squ = ?";*/
			
			String sql = "select url from SSP_TRole_ModuleSub t1,ssp_tmodulesub t2,ssp_smodule_url t3,ssp_tactionurl t4 " +
					"where t1.subsqu = t2.squ and t2.squ = t3.subsqu and t3.urlsqu = t4.squ and t1.rolesqu = ?";
		//System.out.println("==="+sql);
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1,roleSqu);
			rs = pstmt.executeQuery();
			
			String currentAction = null;
			int i=0;
			while(rs.next()){
				currentAction = "/"+rs.getString("url").trim();
//				System.out.println(currentAction);
				if(currentURI.equals(currentAction)){
					return true;
				}	
			}
		} catch (Exception e) {
			throw new DaoException(e);
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
			} catch (SQLException e) {
				throw new DaoException(e);
			}
		}
		return false;
	}
}
