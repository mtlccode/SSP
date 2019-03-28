package monitor.projectConfig.bean.entity;

/**
 * @ClassName:Project_DXInfo 支架设备信息
 * @dateTime: 2017-10-23 下午7:43:37
 * @Description: TODO
 * @version 
 * @author: 黄月
 * @since JDK 1.7
 * History：
 * Editor     version      Time               Operation
 */
public class Project_DXInfo {
	
	/**
	  * @Fields  squ:TODO(支架_项目中间表id)
	  * @since JDK1.7
	*/
	private String squ;

	/**
	  * @Fields  dxsqu:TODO(支架id)
	  * @since JDK1.7
	*/
	private String dxsqu;
	
	/**
	  * @Fields  site_squ:TODO(部位id)
	  * @since JDK1.7
	*/
	private String site_squ;
	
	/**
	  * @Fields  gdlx:TODO(管道类型)
	  * @since JDK1.7
	*/
	private String gdlx;
	private String gdlx_name;
	
	/**
	  * @Fields  azfs:TODO(安装方式)
	  * @since JDK1.7
	*/
	private String azfs;
	private String azfs_name;
	
	/**
	  * @Fields  zjxs:TODO(支架形式)
	  * @since JDK1.7
	*/
	private String zjxs;
	
	/**
	  * @Fields  dxmc:TODO(单项名称)
	  * @since JDK1.7
	*/
	private String dxmc;
	
	/**
	  * @Fields  zp:TODO(照片路径)
	  * @since JDK1.7
	*/
	private String zp;
	
	/**
	  * @Fields  sl:TODO(数量)
	  * @since JDK1.7
	*/
	private Integer sl;
	
	/**
	 * 力学参数
	 */
	private String lxcs;
	
	/**
	  * @Fields  serialnumber:TODO(部位支架流水号)
	  * @since JDK1.7
	*/
	private String serialNumber;

	

	public String getSerialNumber() {
		return serialNumber;
	}

	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}

	/**
	  * @Fields  zym:TODO(专业码)
	  * @since JDK1.7
	*/
	private String zym;
	
	public String getZym() {
		return zym;
	}

	public void setZym(String zym) {
		this.zym = zym;
	}

	public String getSite_squ() {
		return site_squ;
	}

	public void setSite_squ(String site_squ) {
		this.site_squ = site_squ;
	}

	public Integer getSl() {
		return sl;
	}

	public void setSl(Integer sl) {
		this.sl = sl;
	}

	public String getDxsqu() {
		return dxsqu;
	}

	public void setDxsqu(String dxsqu) {
		this.dxsqu = dxsqu;
	}

	public String getGdlx() {
		return gdlx;
	}

	public void setGdlx(String gdlx) {
		this.gdlx = gdlx;
	}

	public String getAzfs() {
		return azfs;
	}

	public void setAzfs(String azfs) {
		this.azfs = azfs;
	}

	public String getZjxs() {
		return zjxs;
	}

	public void setZjxs(String zjxs) {
		this.zjxs = zjxs;
	}

	public String getDxmc() {
		return dxmc;
	}

	public void setDxmc(String dxmc) {
		this.dxmc = dxmc;
	}

	public String getZp() {
		return zp;
	}

	public void setZp(String zp) {
		this.zp = zp;
	}

	public String getSqu() {
		return squ;
	}

	public void setSqu(String squ) {
		this.squ = squ;
	}
	
	

	public String getGdlx_name() {
		return gdlx_name;
	}

	public void setGdlx_name(String gdlx_name) {
		this.gdlx_name = gdlx_name;
	}

	public String getAzfs_name() {
		return azfs_name;
	}

	public void setAzfs_name(String azfs_name) {
		this.azfs_name = azfs_name;
	}

	public String getLxcs() {
		return lxcs;
	}

	public void setLxcs(String lxcs) {
		this.lxcs = lxcs;
	}

	@Override
	public String toString() {
		return "Project_DXInfo [squ=" + squ + ", dxsqu=" + dxsqu + ", gdlx="
				+ gdlx + ", gdlx_name=" + gdlx_name + ", azfs=" + azfs
				+ ", azfs_name=" + azfs_name + ", zjxs=" + zjxs + ", dxmc="
				+ dxmc + ", zp=" + zp + ", sl=" + sl + ", lxcs=" + lxcs + "]";
	}


	
}
