package demo.service;

import java.util.List;
import java.util.Map;

import demo.model.DailyReportDetails;
import demo.model.Demo;

public interface DemoService {
		public List<Demo> getDailyReport(Map<String, Object> paramsMap);
		public List<DailyReportDetails>getDailyReportDetails(Map<String,Object>ParamsMap);
		public void save(Demo[] list);
		public void saveDetails(DailyReportDetails[] list);
		public void destroy(Demo[] list);
		public void destroyDetails(DailyReportDetails[] list);
		public String getPw();
		public void setPw(String password);
		}
