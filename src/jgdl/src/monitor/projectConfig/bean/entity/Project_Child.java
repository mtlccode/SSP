/***
	* copyright ：  xindongsheng Technologies Co., Ltd. Copyright 2010-9999,  All rights reserved 
	* Project Name:jgdl
	* @since：JDK1.7
	* @version：1.0
	* File Name:Project_child.java
	* Date:2018-1-31下午4:15:38   
	***/
package monitor.projectConfig.bean.entity;

/**
 * @ClassName:Project_child 子项目表实体类
 * @dateTime: 2018-1-31 下午4:15:38
 * @Description: TODO
 * @version 
 * @author: 黄月
 * @since JDK 1.7
 * History：
 * Editor     version      Time               Operation
 */
public class Project_Child {

	/**
	  * @Fields  child_squ:TODO(子项目id)
	  * @since JDK1.7
	*/
	private String child_squ;
	
	/**
	  * @Fields  jzlx:TODO(建筑高度)
	  * @since JDK1.7
	*/
	private Double jzgd;
	
	/**
	  * @Fields  zdwxmmc:TODO(子单位项目名称)
	  * @since JDK1.7
	*/
	private String zdwxmmc;
	
	/**
	  * @Fields  project_squ:TODO(项目id)
	  * @since JDK1.7
	*/
	private String project_squ;
	
	/**
	  * @Fields  createDate:TODO(创建时间)
	  * @since JDK1.7
	*/
	private String createDate;
	
	/**
	  * @Fields  updateDate:TODO(修改时间)
	  * @since JDK1.7
	*/
	private String updateDate;
	
	/**
	  * @Fields  childNum:TODO(子项目编号)
	  * @since JDK1.7
	*/
	private String childNum;

	/**
	 * 建筑类别
	 */
	private String jzlb;
	
	
	
	public String getChildNum() {
		return childNum;
	}

	public void setChildNum(String childNum) {
		this.childNum = childNum;
	}

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	public String getUpdateDate() {
		return updateDate;
	}

	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}

	public String getChild_squ() {
		return child_squ;
	}

	public void setChild_squ(String child_squ) {
		this.child_squ = child_squ;
	}

	public Double getJzgd() {
		return jzgd;
	}

	public void setJzgd(Double jzgd) {
		this.jzgd = jzgd;
	}

	public String getZdwxmmc() {
		return zdwxmmc;
	}

	public void setZdwxmmc(String zdwxmmc) {
		this.zdwxmmc = zdwxmmc;
	}

	public String getProject_squ() {
		return project_squ;
	}

	public void setProject_squ(String project_squ) {
		this.project_squ = project_squ;
	}

	public String getJzlb() {
		return jzlb;
	}

	public void setJzlb(String jzlb) {
		this.jzlb = jzlb;
	}
	
}
