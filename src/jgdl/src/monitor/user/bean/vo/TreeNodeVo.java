package monitor.user.bean.vo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import monitor.user.bean.dto.DatasourceDto;
import monitor.user.bean.dto.EntityDto;
import monitor.user.bean.dto.ModuleMainDto;
import monitor.user.bean.dto.ModuleSubDto;
import monitor.user.bean.dto.QueryDto;
import monitor.user.bean.dto.ViewDto;

/** 
 * <description> 
 * @author  cl
 * @datetime  2011-4-20 上午11:05:40
 */
public class TreeNodeVo {
	private int id = -1;
	private String text = null;
	private String iconCls = null;
	private boolean checked = false;
	private Map<String,String> attributes = new HashMap<String, String>();
	private List<TreeNodeVo> children = null;
	
	private String state = null;//open:叶子节点；closed:非叶子节点
	
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}

	public TreeNodeVo(){
		
	}
	
	public TreeNodeVo(ModuleMainDto moduleMainDto){
		this.id = moduleMainDto.getSqu();
		this.text = moduleMainDto.getName();
		this.attributes.put("isMain", "1");
	}

	public TreeNodeVo(ModuleSubDto moduleSubDto){
		this.id = moduleSubDto.getSqu();
		this.text = moduleSubDto.getName();
		this.attributes.put("isMain", "0");
	}
	
	public TreeNodeVo(ViewDto view){
//		this.id = view.getViewName();
		this.text = view.getViewName()+"("+view.getViewComment()+")";
	}
	
	
	public TreeNodeVo(DatasourceDto dsDto) {
		this.id = dsDto.getSqu();
		this.text = dsDto.getTitle();
		this.attributes.put("isDs", "1");
	}

	public TreeNodeVo(EntityDto entityDto) {
		this.id = entityDto.getSqu();
		this.text = entityDto.getTitle();
		this.attributes.put("name", entityDto.getName());
		this.attributes.put("isDs", "0");
	}

	public TreeNodeVo(QueryDto queryDto) {
		this.id = queryDto.getSqu();
		this.text = queryDto.getName();
		this.attributes.put("isDs", "0");
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getIconCls() {
		return iconCls;
	}
	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}
	public List<TreeNodeVo> getChildren() {
		return children;
	}
	public void setChildren(List<TreeNodeVo> children) {
		this.children = children;
	}

	public boolean isChecked() {
		return checked;
	}

	public void setChecked(boolean checked) {
		this.checked = checked;
	}

	public Map<String, String> getAttributes() {
		return attributes;
	}

	public void setAttributes(Map<String, String> attributes) {
		this.attributes = attributes;
	}
	
	
}
