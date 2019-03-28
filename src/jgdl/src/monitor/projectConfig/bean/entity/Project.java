/***
	* copyright ：  xindongsheng Technologies Co., Ltd. Copyright 2010-9999,  All rights reserved 
	* Project Name:jgdl
	* @since：JDK1.7
	* @version：1.0
	* File Name:Project.java
	* Date:2018-1-31上午11:04:39   
	***/
package monitor.projectConfig.bean.entity;

/**
 * @ClassName:Project  项目基本信息实体
 * @dateTime: 2018-1-31 上午11:04:39
 * @Description: TODO
 * @version 
 * @author: 黄月
 * @since JDK 1.7
 * History：
 * Editor     version      Time               Operation
 */
public class Project {

	/**
	  * @Fields  project_squ:TODO(项目id)
	  * @since JDK1.7
	*/
	private String project_squ;
	
	/**
	  * @Fields  dzjsd:TODO(地震加速度)
	  * @since JDK1.7
	*/
	private String dzjsd;
	
	/**
	  * @Fields  dzlx:TODO(地震类型)
	  * @since JDK1.7
	*/
	private String dzlx;
	
	/**
	  * @Fields  dzsfld:TODO(地区设防烈度)
	  * @since JDK1.7
	*/
	private String dzsfld;
	
	/**
	  * @Fields  xmbh:TODO(项目编号)
	  * @since JDK1.7
	*/
	private String xmbh;
	
	/**
	  * @Fields  xmdz:TODO(项目地址)
	  * @since JDK1.7
	*/
	private String xmdz;
	
	/**
	  * @Fields  xmlx:TODO(项目类型)
	  * @since JDK1.7
	*/
	private String xmlx;
	
	/**
	  * @Fields  xmmc:TODO(项目名称)
	  * @since JDK1.7
	*/
	private String xmmc;
	
	/**
	  * @Fields  xmmj:TODO(项目面积)
	  * @since JDK1.7
	*/
	private String xmmj;
	
	/**
	  * @Fields  alphaMax:TODO(地震影响系数最大值)
	  * @since JDK1.7
	*/
	private Double alphaMax;
	
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

	public Double getAlphaMax() {
		return alphaMax;
	}

	public void setAlphaMax(Double alphaMax) {
		this.alphaMax = alphaMax;
	}

	public String getProject_squ() {
		return project_squ;
	}

	public void setProject_squ(String project_squ) {
		this.project_squ = project_squ;
	}

	public String getDzlx() {
		return dzlx;
	}

	public void setDzlx(String dzlx) {
		this.dzlx = dzlx;
	}


	public String getXmbh() {
		return xmbh;
	}

	public void setXmbh(String xmbh) {
		this.xmbh = xmbh;
	}

	public String getXmdz() {
		return xmdz;
	}

	public void setXmdz(String xmdz) {
		this.xmdz = xmdz;
	}

	public String getXmlx() {
		return xmlx;
	}

	public void setXmlx(String xmlx) {
		this.xmlx = xmlx;
	}

	public String getXmmc() {
		return xmmc;
	}

	public void setXmmc(String xmmc) {
		this.xmmc = xmmc;
	}

	public String getDzjsd() {
		return dzjsd;
	}

	public void setDzjsd(String dzjsd) {
		this.dzjsd = dzjsd;
	}

	public String getDzsfld() {
		return dzsfld;
	}

	public void setDzsfld(String dzsfld) {
		this.dzsfld = dzsfld;
	}

	public String getXmmj() {
		return xmmj;
	}

	public void setXmmj(String xmmj) {
		this.xmmj = xmmj;
	}


	
}
