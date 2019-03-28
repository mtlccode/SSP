/*
 * @copyright:  xindongsheng Technologies Co., Ltd. Copyright 2010-9999,  All rights reserved 
 * @description:  <description> 
 * @author:  cl 
 * @datetime:  2011-4-18 上午10:55:47
 */
package monitor.user.bean.dto;

import java.io.Serializable;

import monitor.user.bean.entity.RoleEntity;
import monitor.user.bean.entity.UserEntity;
import monitor.user.bean.vo.UserVo;

/**
 * <description>
 * 
 * @author cl
 * @datetime 2011-4-18 上午10:55:47
 */
public class UserDto implements Serializable {
	/**
	 * @field serialVersionUID
	 */
	private static final long serialVersionUID = 8641532553816240646L;
	private int squ = -1;
	private int roleSqu = -1;
	private String userTitle = null;
	private String username = null;
	private String pwd = null;
	private String repeatPwd = null;
	private String descb = null;
	private int isDefault = 0;
	private int isEnabled = 1;

	// Adding Bean Attributes 2016-3-3
	private String sfzhm;
	private String validTime;
/*	private String ip;*/
	private String crreateTime;
	private String loginCode;
	
	/**
	  * @Fields  deptID:TODO(部门id)
	  * @since JDK1.7
	*/
	private String deptID;
	/**
	  * @Fields  deptName:TODO(部门名称)
	  * @since JDK1.7
	*/
	private String deptName;
	

	public String getDeptName() {
		return deptName;
	}

	public void setDeptName(String deptName) {
		this.deptName = deptName;
	}

	public String getDeptID() {
		return deptID;
	}

	public void setDeptID(String deptID) {
		this.deptID = deptID;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public RoleEntity roleEntity;

	public UserDto(UserEntity userEntity) {
		this.squ = userEntity.getSqu();
		this.roleSqu = userEntity.getRoleSqu();
		this.userTitle = userEntity.getUserTitle();
		this.username = userEntity.getUsername();
		this.pwd = userEntity.getPwd();
		this.descb = userEntity.getDescb();
		this.isDefault = userEntity.getIsDefault();
		this.isEnabled = userEntity.getIsEnabled();

		this.sfzhm = userEntity.getSfzhm();
		this.validTime = userEntity.getValidTime();
		this.crreateTime = userEntity.getCrreateTime();
		this.loginCode = userEntity.getLoginCode();
		
		this.deptName = userEntity.getDeptName();
		this.deptID = userEntity.getDeptID();
	}

	public UserDto() {

	}

	public RoleEntity getRoleEntity() {
		return roleEntity;
	}

	public void setRoleEntity(RoleEntity roleEntity) {
		this.roleEntity = roleEntity;
	}

	public UserDto(UserVo userVo) {
		this.squ = userVo.getSqu();
		this.roleSqu = userVo.getRoleSqu();
		this.userTitle = userVo.getUserTitle();
		this.username = userVo.getUsername();
		this.pwd = userVo.getPwd();
		this.repeatPwd = userVo.getRepeatPwd();
		this.descb = userVo.getDescb();
		this.isEnabled = userVo.getIsEnabled();
		this.sfzhm=userVo.getSfzhm();
		this.validTime=userVo.getValidTime();
		this.deptID=userVo.getDeptID();
		
	/*	this.ip=userVo.getIp();*/
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

	public String getRepeatPwd() {
		return repeatPwd;
	}

	public void setRepeatPwd(String repeatPwd) {
		this.repeatPwd = repeatPwd;
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

/*	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}*/

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

	@Override
	public String toString() {
		return "UserDto [squ=" + squ + ", roleSqu=" + roleSqu + ", userTitle="
				+ userTitle + ", username=" + username + ", pwd=" + pwd
				+ ", repeatPwd=" + repeatPwd + ", descb=" + descb
				+ ", isDefault=" + isDefault + ", isEnabled=" + isEnabled
				+ ", sfzhm=" + sfzhm + ", validTime=" + validTime
				+ ", crreateTime=" + crreateTime + ", loginCode=" + loginCode
				+ ", deptID=" + deptID + ", roleEntity=" + roleEntity + "]";
	}

	
}
