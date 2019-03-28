package monitor.goodsHouse.dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import monitor.goodsHouse.bean.entity.Gdlx;
import monitor.goodsHouse.bean.entity.Wzzdb;
import monitor.user.bean.vo.PageInfoVo;

/**
 *@ClassName
 *@dataTime 2017-10-14-下午2:09:44
 *@version
 *@author:唐青
 *@since
 */
public interface IPartsDao {
	
	/**
	 * 
	  * getParentMenu:().
	  * TODO(加载部件目录).
	  * @author: 唐青
	  * @dateTime: 2017-10-14 下午3:11:49
	  * @param squ
	  * @return
	  * @throws SQLException List<Map<String,String>>
	  * @since JDK 1.7
	 */
	public List<Map<String, String>> getPartsMenu(String squ,String type)
			throws SQLException;
	
	/**
	 * 
	  * selectChildMenu:(分页查询菜单).
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).
	  * @author: 唐青
	  * @dateTime: 2017-10-14 下午5:48:18
	  * @param page
	  * @return PageInfoVo
	  * @since JDK 1.7
	 */
	public PageInfoVo selectChildMenu(PageInfoVo page,String squ,String key) throws SQLException;
	
	/**
	 * 
	  * addMenu:(添加子目).
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).
	  * @author: 唐青
	  * @dateTime: 2017-10-16 下午6:33:40
	  * @param wzz
	  * @throws SQLException void
	  * @since JDK 1.7
	 */
	public void addMenu(Wzzdb wzz) throws SQLException;
	
	/**
	 * 修改
	  * updateMenu:(这里用一句话描述这个方法的作用).
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).
	  * @author: 唐青
	  * @dateTime: 2017-10-16 下午7:01:03
	  * @param wzz
	  * @throws SQLException void
	  * @since JDK 1.7
	 */
	public void updateMenu(Wzzdb wzz) throws SQLException;
	
	/**
	 * 
	  * delChildMenu:(删除).
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).
	  * @author: 唐青
	  * @dateTime: 2017-10-16 下午7:42:05
	  * @throws SQLException void
	  * @since JDK 1.7
	 */
	public int delChildMenu(String squ) throws SQLException;
	
	/**
	 * 
	  * addBatchParts:(批量导入部件).
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).
	  * @author: 唐青
	  * @dateTime: 2017-11-7 上午10:49:58
	  * @param list
	  * @throws SQLException void
	  * @since JDK 1.7
	 */
	public void addBatchParts(List<Wzzdb> list) throws SQLException;
	
	/**
	 * 
	  * addBatchGdlx:(批量导入管道类型).
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).
	  * @author: 唐青
	  * @dateTime: 2017-11-9 下午4:59:06
	  * @param list
	  * @throws SQLException void
	  * @since JDK 1.7
	 */
	public void addBatchGdlx(List<Gdlx> list) throws SQLException;
	
	/**
	 * 
	  * addBatchAzfs:(批量导入安装方式).
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).
	  * @author: 唐青
	  * @dateTime: 2017-11-9 下午4:59:36
	  * @param list
	  * @throws SQLException void
	  * @since JDK 1.7
	 */
	public void addBatchAzfs(List<Gdlx> list) throws SQLException;
	
	/**
	 * 
	  * addGdlx:(添加管道类型).
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).
	  * @author: 唐青
	  * @dateTime: 2017-11-7 上午10:51:21
	  * @param gdlx
	  * @throws SQLException void
	  * @since JDK 1.7
	 */
	public void addGdlx(Gdlx gdlx) throws SQLException;
	
	/**
	 * 
	  * addAzlx:(添加安装类型).
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).
	  * @author: 唐青
	  * @dateTime: 2017-11-7 上午10:53:45
	  * @param gdlx
	  * @throws SQLException void
	  * @since JDK 1.7
	 */
	public void addAzlx(Gdlx gdlx) throws SQLException;
	
	/**
	 * 
	  * selectAzlx:(分页查询安装方式).
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).
	  * @author: 唐青
	  * @dateTime: 2017-11-7 上午11:51:07
	  * @param page
	  * @param key
	  * @return
	  * @throws SQLException PageInfoVo
	  * @since JDK 1.7
	 */
	public PageInfoVo selectAzlx(PageInfoVo page,String key) throws SQLException;
	
	/**
	 * 
	  * selectGdlx:(分页查询管道类型).
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).
	  * @author: 唐青
	  * @dateTime: 2017-11-7 上午11:51:48
	  * @param page
	  * @param key
	  * @return
	  * @throws SQLException PageInfoVo
	  * @since JDK 1.7
	 */
	public PageInfoVo selectGdlx(PageInfoVo page,String key,String pid) throws SQLException;
	
	/**
	 * 
	  * selectAzlx:(查询安装方式).
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).
	  * @author: 唐青
	  * @dateTime: 2017-11-7 上午11:51:07
	  * @param page
	  * @param key
	  * @return
	  * @throws SQLException PageInfoVo
	  * @since JDK 1.7
	 */
	public List<Gdlx> selectAzlxMenu() throws SQLException;
	
	/**
	 * 
	  * selectGdlx:(查询管道类型).
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).
	  * @author: 唐青
	  * @dateTime: 2017-11-7 上午11:51:48
	  * @param page
	  * @param key
	  * @return
	  * @throws SQLException PageInfoVo
	  * @since JDK 1.7
	 */
	public List<Gdlx> selectGdlxMenu(String pid) throws SQLException;
	
	/**
	 * 
	  * updateGdlx:(修改管道类型).
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).
	  * @author: 唐青
	  * @dateTime: 2017-11-7 下午4:21:50
	  * @param gdlx
	  * @throws SQLException void
	  * @since JDK 1.7
	 */
	public void updateGdlx(Gdlx gdlx) throws SQLException;
	/**
	 * 
	  * updateAzlx:(修改安装方式).
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).
	  * @author: 唐青
	  * @dateTime: 2017-11-7 下午4:22:09
	  * @param gdlx
	  * @throws SQLException void
	  * @since JDK 1.7
	 */
	public void updateAzlx(Gdlx gdlx) throws SQLException;
	/**
	 * 
	  * deleteGdlx:(删除管道类型).
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).
	  * @author: 唐青
	  * @dateTime: 2017-11-7 下午4:22:26
	  * @param gdlx
	  * @throws SQLException void
	  * @since JDK 1.7
	 */
	public void deleteGdlx(String squ) throws SQLException;
	
	/**
	  * getParamConfig:(获取参数配置对象).<br/>
	  * TODO(这里描述方法适用条件/执行流程/使用方法/注意事项).<br/>
	  * @author: 黄月
	  * @dateTime: 2018-2-2 下午3:31:46
	  * @param conn
	  * @param search	查询条件
	  * @param param	查询参数
	  * @return Wzzdb
	  * @since JDK 1.7
	*/
	List<Wzzdb> getParamConfig(String search, String param ) throws SQLException;
	
	Wzzdb selectWzzdb(String squ) throws SQLException;

}
