package demo.controller;

import java.math.BigDecimal;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import demo.model.DailyReportDetails;
import demo.model.Demo;
import demo.service.DemoService;

@Controller
@RequestMapping("/demo")
public class DemoController {
	
	@Autowired
	private DemoService demoService;
	private ObjectMapper objectMapper=new ObjectMapper();
	public static Map<String,Object>getParamsMap(HttpServletRequest request){
		Map<String,Object>paramMap=new HashMap<String,Object>();
		Enumeration<String>pNames=request.getParameterNames();
		while(pNames.hasMoreElements()){
			String pName=pNames.nextElement();
			paramMap.put(pName,request.getParameter(pName));
		}
		return paramMap;
	}
@RequestMapping("checkPw.do")
@ResponseBody
public Map<String,Object>checkPw(String inputPw){
	Map<String,Object>respMap=new HashMap<String,Object>();
		try{
			String pw=demoService.getPw();
			if(inputPw.endsWith(pw)){
				respMap.put("text",true);
			}else{
				respMap.put("text",false);
			}
			respMap.put("success",true);
		}catch(Exception e){
			respMap.put("success",false);
			e.printStackTrace();
		}
		return respMap;
}
@RequestMapping("setPw.do")
@ResponseBody
public Map<String,Object>setPw(String pw){
	Map	<String,Object>respMap=new HashMap<String,Object>();
	try{
		demoService.setPw(pw);
		respMap.put("success", true);
	}catch(Exception e){
		respMap.put("success", false);
		e.printStackTrace();
	}
	return respMap;
	}
@RequestMapping("getDailyReport.do")
@ResponseBody
public Map<String, Object> getDailyReport(HttpServletRequest request) {
	Map<String, Object> respMap = new HashMap<String, Object>();
	Map<String, Object> paramsMap = getParamsMap(request);
	try {
		List<Demo> list = demoService.getDailyReport(paramsMap);
		respMap.put("data", list);
		respMap.put("total", list.size());
		respMap.put("success", true);
	} catch (Exception e) {
		respMap.put("success", false);
		e.printStackTrace();
	}
	return respMap;
}
@RequestMapping("getDailyReportDetails.do")
@ResponseBody
public Map<String,Object>getDailyReportDetails(HttpServletRequest request){
	Map<String,Object>respMap=new HashMap<String,Object>();
	Map<String,Object>paramsMap=getParamsMap(request);
	try{
		List<DailyReportDetails>list=demoService.getDailyReportDetails(paramsMap);
		respMap.put("data",list);
		respMap.put("total", list.size());
		respMap.put("success", true);
	}catch(Exception e){
		respMap.put("success", false);
		e.printStackTrace();
	}
	return respMap;
}
@RequestMapping("getPieData.do")
@ResponseBody
public Map<String,Object>getPieData(HttpServletRequest request){
	Map<String,Object>respMap=new HashMap<String,Object>();
	Map<String,Object>paramsMap=getParamsMap(request);
	try{
		List<DailyReportDetails>list=demoService.getDailyReportDetails(paramsMap);
		for(DailyReportDetails rec:list){
			if(rec.getTotal().compareTo(BigDecimal.ZERO)==0){
				list.remove(rec);
			}
		}
		respMap.put("data",list);
		respMap.put("total", list.size());
		respMap.put("success",true);
	}catch(Exception e){
		respMap.put("success",false);
		e.printStackTrace();
	}
		return respMap;
}
@RequestMapping("/save.do")
@ResponseBody
public Map<String, Object> save(HttpServletRequest request) {
			Map<String,Object>respMap=new HashMap<String,Object>();
			try{
				Demo[]list=objectMapper.readValue(request.getParameter("data"),Demo[].class);
				demoService.save(list);
				respMap.put("success", true);
			}catch(Exception e){
				respMap.put("success",false);
				e.printStackTrace();
			}
			return respMap;
	}
@RequestMapping("/saveDetails.do")
@ResponseBody
public Map<String, Object> saveDetails(HttpServletRequest request) {
		Map<String,Object>respMap=new HashMap<String,Object>();
		try{
			DailyReportDetails[]list=objectMapper.readValue(request.getParameter("data"),DailyReportDetails[].class);
			demoService.saveDetails(list);
			respMap.put("success", true);
		}catch(Exception e){
			respMap.put("success",false);
			e.printStackTrace();
		}return respMap;
	}
@RequestMapping("/destroy.do")
@ResponseBody
public Map<String,Object>destroy(HttpServletRequest request){
				Map<String,Object>respMap=new HashMap<String,Object>();
				try{
					Demo[]list=objectMapper.readValue(request. getParameter("data"),Demo[].class);
					demoService.destroy(list);
					respMap.put("success", true);
				}catch(Exception e){
					respMap.put("success",false);
					e.printStackTrace();
				}
				return respMap;
}
@RequestMapping("/destoryDetails.do")
@ResponseBody
public Map<String,Object>destroyDetails(HttpServletRequest request){
	Map<String,Object>respMap=new HashMap<String,Object>();
	try{
		DailyReportDetails[]list=objectMapper.readValue(request.getParameter("data"),DailyReportDetails[].class);
		demoService.destroyDetails(list);
		respMap.put("success",true);
	}catch(Exception e){
		respMap.put("success",false);
		e.printStackTrace();
	}
	return respMap;
}
}