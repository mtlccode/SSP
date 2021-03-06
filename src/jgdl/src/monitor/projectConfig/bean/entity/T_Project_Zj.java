package monitor.projectConfig.bean.entity;

/**
 * @ClassName:Project_DXInfo 项目支架关联表
 * @dateTime: 2017-10-23 下午7:43:37
 * @Description: TODO
 * @version 
 * @author: 黄月
 * @since JDK 1.7
 * History：
 * Editor     version      Time               Operation
 */
public class T_Project_Zj {
	
	/**
	  * @Fields  squ:TODO(支架_项目中间表id)
	  * @since JDK1.7
	*/
	private String squ;
	
	/**
	 * 部位id
	 */
	private String psqu;
	
	/**
	  * @Fields  dxsqu:TODO(支架id)
	  * @since JDK1.7
	*/
	private String zjsqu;
	
	/**
	 * 支架数量
	 */
	private Integer sl;
	
	/**
	  * @Fields  serialNumber:TODO(流水号)
	  * @since JDK1.7
	*/
	private String serialNumber;
	
	/**
	  * @Fields  service_system:TODO(所属系统)
	  * @since JDK1.7
	*/
	private String service_system;
	
	/**
	  * @Fields  lb_num:TODO(侧向斜撑数量)
	  * @since JDK1.7
	*/
	private Integer lb_num;
	
	/**
	  * @Fields  vb_num:TODO(纵向斜撑数量)
	  * @since JDK1.7
	*/
	private Integer vb_num;
	
	/**
	  * @Fields  num:TODO(载荷计算-专业管道-数量)
	  * @since JDK1.7
	*/
	private Integer num;
	
	/**
	  * @Fields  gxlxsqu:TODO(管线类型squ)
	  * @since JDK1.7
	*/
	private String gxlxsqu;
	/**
	  * @Fields  gxczsqu:TODO(管线材质squ)
	  * @since JDK1.7
	*/
	private String gxczsqu;
	/**
	  * @Fields  gxggsqu:TODO(管线规格squ)
	  * @since JDK1.7
	*/
	private String gxggsqu;
	
	private String holderImg;
	
	/**
	  * @Fields  lb_num:TODO(侧向斜撑)
	  * @since JDK1.7
	*/
	private String lbImg;
	
	/**
	  * @Fields  vb_num:TODO(纵向斜撑)
	  * @since JDK1.7
	*/
	private String vbImg;
	
	
	
	public String getHolderImg() {
		return holderImg;
	}
	public void setHolderImg(String holderImg) {
		this.holderImg = holderImg;
	}
	public String getLbImg() {
		return lbImg;
	}
	public void setLbImg(String lbImg) {
		this.lbImg = lbImg;
	}
	public String getVbImg() {
		return vbImg;
	}
	public void setVbImg(String vbImg) {
		this.vbImg = vbImg;
	}
	public String getGxlxsqu() {
		return gxlxsqu;
	}
	public void setGxlxsqu(String gxlxsqu) {
		this.gxlxsqu = gxlxsqu;
	}
	public String getGxczsqu() {
		return gxczsqu;
	}
	public void setGxczsqu(String gxczsqu) {
		this.gxczsqu = gxczsqu;
	}
	public String getGxggsqu() {
		return gxggsqu;
	}
	public void setGxggsqu(String gxggsqu) {
		this.gxggsqu = gxggsqu;
	}
	public String getService_system() {
		return service_system;
	}
	public void setService_system(String service_system) {
		this.service_system = service_system;
	}
	public Integer getLb_num() {
		return lb_num;
	}
	public void setLb_num(Integer lb_num) {
		this.lb_num = lb_num;
	}
	public Integer getVb_num() {
		return vb_num;
	}
	public void setVb_num(Integer vb_num) {
		this.vb_num = vb_num;
	}
	public Integer getNum() {
		return num;
	}
	public void setNum(Integer num) {
		this.num = num;
	}
	public String getSerialNumber() {
		return serialNumber;
	}
	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}
	public String getSqu() {
		return squ;
	}
	public void setSqu(String squ) {
		this.squ = squ;
	}
	
	public String getPsqu() {
		return psqu;
	}
	public void setPsqu(String psqu) {
		this.psqu = psqu;
	}
	public String getZjsqu() {
		return zjsqu;
	}
	public void setZjsqu(String zjsqu) {
		this.zjsqu = zjsqu;
	}
	public Integer getSl() {
		return sl;
	}
	public void setSl(Integer sl) {
		this.sl = sl;
	}
	
}
