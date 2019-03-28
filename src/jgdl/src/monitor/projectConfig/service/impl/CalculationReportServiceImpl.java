package monitor.projectConfig.service.impl;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;



import monitor.common.service.BaseServicce;
import monitor.projectConfig.dao.impl.CalculationReportDaoImpl;
import monitor.projectConfig.service.ICalculationReportService;

/**
 *@ClassName
 *@dataTime 2018-4-9-下午2:40:40
 *@version
 *@author:唐青
 *@since
 */
public class CalculationReportServiceImpl  extends BaseServicce implements ICalculationReportService{

	private Connection conn = null;
	
	@Resource(name="calculationReportDao")
	private CalculationReportDaoImpl calculationReportDao;
	
	
	/**
	 * 
	  * closed:(关闭数据源).
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).
	  * @author: 唐青
	  * @dateTime: 2018-4-9 下午3:39:43
	  * @param conn void
	  * @since JDK 1.7
	 */
	private void closed(Connection conn){
		if (conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

	/**
	 * 根据支架SQU查询项目和支架的信息
	  * selectProjectInfo:接口实现
	  * @author 唐青
	  * @date  2018-4-13 上午10:28:51
	  * @param prosqu
	  * @return
	  * @throws Exception
	 */
	@Override
	public Map<String, String> selectProjectInfo(String prosqu) throws Exception {
		try {
			conn = datasource.getConnection();
			Map<String, String> map = calculationReportDao.selectProjectInfo(conn, prosqu);
			return map;
		} catch (Exception e) {
			throw new Exception("查询项目信息错误"+e.getMessage());
		}finally{
			closed(conn);
		}
		
	}


	/**
	 * 查询子单位工程信息
	  * selectChildInfo:接口实现
	  * @author 唐青
	  * @date  2018-4-13 上午10:29:18
	  * @param childsqu
	  * @return
	  * @throws Exception
	 */
	@Override
	public Map<String, String> selectChildInfo(String childsqu)
			throws Exception {
		try {
			conn = datasource.getConnection();
			Map<String, String> map = calculationReportDao.selectChildInfo(conn, childsqu);
			return map;
		} catch (Exception e) {
			throw new Exception("查询子单位工程信息错误"+e.getMessage());
		}finally{
			closed(conn);
		}
	}

	/**
	 * 查询部位信息
	  * selectSiteInfo:接口实现
	  * @author 唐青
	  * @date  2018-4-13 上午10:29:28
	  * @param sitesqu
	  * @return
	  * @throws Exception
	 */
	@Override
	public Map<String, String> selectSiteInfo(String sitesqu) throws Exception {
		try {
			conn = datasource.getConnection();
			Map<String, String> map = calculationReportDao.selectSiteInfo(conn, sitesqu);
			return map;
		} catch (Exception e) {
			throw new Exception("查询部位信息错误"+e.getMessage());
		}finally{
			closed(conn);
		}
	}

	/**
	 * 查询支架信息
	  * selectZjInfo:接口实现
	  * @author 唐青
	  * @date  2018-4-13 上午10:29:37
	  * @param zjsqu
	  * @return
	  * @throws Exception
	 */
	@Override
	public Map<String, String> selectZjInfo(String zjsqu) throws Exception {
		try {
			conn = datasource.getConnection();
			Map<String, String> map = calculationReportDao.selectZjInfo(conn, zjsqu);
			return map;
		} catch (Exception e) {
			throw new Exception("查询部位信息错误"+e.getMessage());
		}finally{
			closed(conn);
		}
	}



}
