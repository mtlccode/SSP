/*
 * @copyright:  xindongsheng Technologies Co., Ltd. Copyright 2010-9999,  All rights reserved 
 * @description:  <description> 
 * @author:  cl 
 * @datetime:  2011-4-18 上午10:55:47
 */
package monitor.user.bean.entity;

/**
 * <description>
 * 
 * @author cl
 * @datetime 2011-4-18 上午10:55:47
 */
public class UserEntity {
	private int squ = -1;
	private int roleSqu = -1;
	private String userTitle = null;
	private String username = null;
	private String pwd = null;
	private String descb = null;
	private int isDefault = 0;
	private int isEnabled = 1;

	// Adding Bean Attributes 2016-3-3
	private String sfzhm;
	private String validTime;
	private String crreateTime;
	private String loginCode;
	
	/**
	  * @Fields  deptID:TODO(部门代码)
	  * @since JDK1.7
	*/
	private String deptID;
	
	/**
	  * @Fields  deptName:TODO(部门名称)
	  * @since JDK1.7
	*/
	private String deptName;
	
	

	public String getDeptID() {
		return deptID;
	}

	public void setDeptID(String deptID) {
		this.deptID = deptID;
	}

	public String getDeptName() {
		return deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

	public int getSqu() {
		return squ;
	}

	public void setSqu(int squ) {
		this.squ = squ;
	}

	public int getRoleSqu() {
		return roleSqu;
	}

	public void setRoleSqu(int roleSqu) {
		this.roleSqu = roleSqu;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getDescb() {
		return descb;
	}

	public void setDescb(String descb) {
		this.descb = descb;
	}

	public int getIsDefault() {
		return isDefault;
	}

	public void setIsDefault(int isDefault) {
		this.isDefault = isDefault;
	}

	public int getIsEnabled() {
		return isEnabled;
	}

	public void setIsEnabled(int isEnabled) {
		this.isEnabled = isEnabled;
	}

	public String getUserTitle() {
		return userTitle;
	}

	public void setUserTitle(String userTitle) {
		this.userTitle = userTitle;
	}

	// Adding get and set 2016-3-3
	public String getSfzhm() {
		return sfzhm;
	}

	public void setSfzhm(String sfzhm) {
		this.sfzhm = sfzhm;
	}

	public String getValidTime() {
		return validTime;
	}

	public void setValidTime(String validTime) {
		this.validTime = validTime;
	}

	public String getCrreateTime() {
		return crreateTime;
	}

	public void setCrreateTime(String crreateTime) {
		this.crreateTime = crreateTime;
	}

	public String getLoginCode() {
		return loginCode;
	}

	public void setLoginCode(String loginCode) {
		this.loginCode = loginCode;
	}
}
