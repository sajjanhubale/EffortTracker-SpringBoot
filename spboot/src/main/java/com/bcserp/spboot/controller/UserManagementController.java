package com.bcserp.spboot.controller;

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.bson.Document;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bcserp.spboot.dao.DatabaseConnection;
import com.bcserp.spboot.dao.DatabaseConnectionImpl;
import com.bcserp.spboot.service.UserManagementService;
import com.bcserp.spboot.service.UserManagementServiceImpl;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.mongodb.BasicDBObject;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

@RestController
public class UserManagementController {
	@Autowired
	private UserManagementService userManagementServiceImpl;
	@CrossOrigin(origins ="http://localhost:4200")
	@RequestMapping(value="/login",method = RequestMethod.POST )
	public String login(@RequestBody String loginData,HttpServletRequest req,HttpServletResponse response) throws JSONException{
		Map<String,Object> mapResponse=new LinkedHashMap<>();
		JSONObject jsonParse= new JSONObject(loginData);
		
		System.out.println(loginData);
		JSONObject responseJson=userManagementServiceImpl.login(jsonParse);
		return responseJson.toString();
		
//		if(responseJson.getBoolean("flag"))
//		{
//			mapResponse.put("flag","success");
//			return responseJson.toString();
//		}
//		else
//		{
//			returnresponseJson.toString();
//		}
		
	}
}
