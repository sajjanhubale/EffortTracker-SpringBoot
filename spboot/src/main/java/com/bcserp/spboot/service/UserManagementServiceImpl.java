package com.bcserp.spboot.service;

import java.util.Iterator;

import org.bson.Document;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bcserp.spboot.dao.CommonDao;
import com.bcserp.spboot.dao.DatabaseConnection;
import com.bcserp.spboot.dao.DatabaseConnectionImpl;
import com.mongodb.BasicDBObject;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

@Service
public class UserManagementServiceImpl implements UserManagementService  {
	@Autowired
	private CommonDao commonDaoImpl;
	@Override
	public JSONObject login(JSONObject userData) throws JSONException {
		// TODO Auto-generated method stub
		JSONObject responseData=new JSONObject();
		try {
			BasicDBObject searchQuery=new BasicDBObject();
			searchQuery.put("userId", userData.get("username"));
			searchQuery.put("password",userData.get("password"));
			String collectionName= "user_master";
			FindIterable<Document>  iterDoc=commonDaoImpl.findData(searchQuery, collectionName);
			Iterator it = iterDoc.iterator(); 
			if(it.hasNext()) {
				Document document = (Document) it.next();
				responseData.put("flag",true);
				responseData.put("rolename",document.get("rolename"));
				System.out.println("login successfull");
				return responseData;
			}
			else
			{
				responseData.put("flag",false);
				responseData.put("message","User not found");
				System.out.println("wrong credentials");
				return responseData;
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			responseData.put("flag",false);
			responseData.put("message",e);
			return responseData;
		}
		
		
	
	}




}
