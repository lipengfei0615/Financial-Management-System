package demo.mapper;

import java.util.List;
import java.util.Map;

import demo.model.DailyReportDetails;

public interface DailyReportDetailsMapper {
	public List<DailyReportDetails>getDailyReportDetails(Map<String,Object>paramsMap);
	public List<DailyReportDetails>getMonthReportDetails(Map<String,Object>paramsMap);
	public void update(DailyReportDetails rec);
	public void delete(String id);
	public void deleteAll(String id);
	public void insert(DailyReportDetails rec);
	public int isExtis(String id);
}
