package com.bcserp.spboot.controller;

import java.util.LinkedHashMap;
import java.util.Map;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bcserp.spboot.service.ClientServiceImpl;

@RestController
public class ClientController {
	@Autowired
	private ClientServiceImpl clientServiceImpl;
	
	@CrossOrigin(origins ="http://localhost:4200")
	@RequestMapping(value="/clients/{userName}",method=RequestMethod.GET)
	public String getMyClients(@PathVariable String userName){
	//Map<String,Object> effortRespose= new LinkedHashMap<>();
		
		JSONObject jsonData = new JSONObject();
		try {
			jsonData.put("data", clientServiceImpl.getClients(userName));
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	
		//System.out.println(jsonData);
		
		return jsonData.toString();
		
	}
	
	@CrossOrigin(origins ="http://localhost:4200")
	@RequestMapping(value="/addclient/{userName}",method=RequestMethod.POST)
	public Map<String,Object> addClient(@PathVariable String userName,@RequestBody String clientData){
		Map<String,Object> responseData=new LinkedHashMap<>();
		//responseData.put("flag", "success");
		if(clientServiceImpl.addClients(clientData)){
			responseData.put("flag", "success");
			System.out.println("sajjan");
			System.out.println("sajjan hubale");
		}
		else
		{
			responseData.put("flag", "error");
		}
		return responseData;
		//System.out.println(jsonData);
		
	}
	
	@CrossOrigin(origins ="http://localhost:4200")
	@RequestMapping(value="/deleteclient/{userName}",method=RequestMethod.POST)
	public Map<String,Object> deleteMyEffort(@PathVariable String userName,@RequestBody String clientData){
	//Map<String,Object> effortRespose= new LinkedHashMap<>();
		
		Map<String,Object> responseData=new LinkedHashMap<>();
		if(clientServiceImpl.deleteClient(clientData)){
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
