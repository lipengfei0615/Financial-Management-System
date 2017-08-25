package demo.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import demo.mapper.DailyReportDetailsMapper;
import demo.mapper.DemoMapper;
import demo.model.DailyReportDetails;
import demo.model.Demo;
import demo.service.DemoService;

@Service
public class DemoServiceImpl  implements DemoService{
	@Autowired
	private DemoMapper demoMapper;
	@Autowired
	private DailyReportDetailsMapper dailyReportDetailsMapper;
	@Transactional
	public List<Demo>getDailyReport(Map<String,Object>paramsMap){
		List<Demo>list=null;
		String value=(String)paramsMap.get("monthReport");
		if(value.equals("1")){
			list=demoMapper.getMonthReport(paramsMap);
		}else{
			list=demoMapper.getDailyReport(paramsMap);
		}
	return list;
}
   @Transactional
   public List<DailyReportDetails>getDailyReportDetails(Map<String,Object>paramsMap){
		List<DailyReportDetails>list=null;
		String value=(String)paramsMap.get("monthReport");
		if(value.equals("1")){
			list=dailyReportDetailsMapper.getMonthReportDetails(paramsMap);
		}else{
			list=dailyReportDetailsMapper.getDailyReportDetails(paramsMap);
		}return list;
};
@Transactional
public void save(Demo[]list){
		for(Demo demo:list){
			if(demoMapper.isExtis(demo.getId())>0){
				demoMapper.update(demo);
			}else{
				demoMapper.insert(demo);
			}
		}
};

@Transactional
public void saveDetails(DailyReportDetails[]list){
	for(DailyReportDetails rec:list){
	if(dailyReportDetailsMapper.isExtis(rec.getId())>0){
			dailyReportDetailsMapper.update(rec);
		}else{
			dailyReportDetailsMapper.insert(rec);
		}
	}
};
@Transactional
public void destroy(Demo[]list){
	for(Demo demo:list){
		String id=demo.getId();
		demoMapper.delete(demo.getId());
		dailyReportDetailsMapper.deleteAll(id);
	}
};
@Transactional
public void destroyDetails(DailyReportDetails[]list){
	for(DailyReportDetails rec:list){
		dailyReportDetailsMapper.delete(rec.getId());
	}
}
public String getPw(){
	String pw=demoMapper.getPw();
	return pw;
}
public void setPw(String password){
	demoMapper.setPw(password);
};


}

