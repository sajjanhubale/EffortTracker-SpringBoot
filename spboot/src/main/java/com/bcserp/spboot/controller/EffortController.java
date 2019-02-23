package com.bcserp.spboot.controller;

import java.util.LinkedHashMap;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bcserp.spboot.service.EffortService;

@RestController
public class EffortController {
	@Autowired
	private EffortService effortServiceImpl;
	
	@CrossOrigin(origins ="http://localhost:4200")
	@RequestMapping(value="/myefforts/{userName}/{roleName}",method=RequestMethod.POST)
	public String getMyEfforts(@PathVariable String userName,@PathVariable String roleName,@RequestBody String dateRange) throws JSONException{
	//Map<String,Object> effortRespose= new LinkedHashMap<>();
		JSONObject dateRangeJson=new JSONObject(dateRange);
		System.out.println(roleName);
		JSONObject jsonData = new JSONObject();
		try {
			jsonData.put("data", effortServiceImpl.getMyEffortsByDateRange(userName,roleName,dateRangeJson.get("startDate").toString(),dateRangeJson.get("endDate").toString()));
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}

		return jsonData.toString();
		
	}
	@CrossOrigin(origins ="http://localhost:4200")
	@RequestMapping(value="/addefforts/{userName}",method=RequestMethod.POST)
	public Map<String,Object> addMyEfforts(@PathVariable String userName,@RequestBody String effortData){
	//Map<String,Object> effortRespose= new LinkedHashMap<>();
		
		Map<String,Object> responseData=new LinkedHashMap<>();
		responseData.put("flag", "success");
		if(effortServiceImpl.addMyEfforts(effortData)){
			responseData.put("flag", "success");
		}
		else
		{
			responseData.put("flag", "error");
		}
		return responseData;
		//System.out.println(jsonData);
		
	}
	
	@CrossOrigin(origins ="http://localhost:4200")
	@RequestMapping(value="/deleteeffort/{userName}",method=RequestMethod.POST)
	public Map<String,Object> deleteMyEffort(@PathVariable String userName,@RequestBody String effortData){
	//Map<String,Object> effortRespose= new LinkedHashMap<>();
		
		Map<String,Object> responseData=new LinkedHashMap<>();
		if(effortServiceImpl.deleteEffort(effortData)){
			responseData.put("flag", "success");
		}
		else
		{
			responseData.put("flag", "error");
		}
		return responseData;
		//System.out.println(jsonData);
		
	}
	
	
}
