package demo.mapper;

import java.util.List;
import java.util.Map;

import demo.model.Demo;

public interface DemoMapper {
	public List<Demo>getDailyReport(Map<String,Object>paramsMap);
	public List<Demo>getMonthReport(Map<String,Object>paramsMap);
	public void update(Demo demo);
	public void delete(String id);
	public void insert(Demo demo);
	public int isExtis(String id);
	public String getPw();
	public void setPw(String password);
}
