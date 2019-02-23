package com.bcserp.spboot.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.bson.Document;
import org.bson.types.ObjectId;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bcserp.spboot.dao.CommonDao;
import com.fasterxml.jackson.core.JsonParser;
import com.mongodb.BasicDBObject;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoDatabase;
import com.mongodb.util.JSON;
@Service
public class EffortServiceImpl implements EffortService {
	@Autowired
	private CommonDao commonDaoImpl;
	@Override
	public JSONArray getMyEfforts(String userName) {
		// TODO Auto-generated method stub
		BasicDBObject searchQuery=new BasicDBObject();
		searchQuery.put("consultant_name", userName);
		String collectionName="efforttrack";
		FindIterable<Document>  iterDoc =commonDaoImpl.findData(searchQuery, collectionName);
		
		JSONArray jsonData= new JSONArray();
		for (Document document : iterDoc) {
			
			jsonData.put(document);
		}
	
		return jsonData;
	}
	@Override
	public Boolean addMyEfforts(String jsonData) {
		// TODO Auto-generated method stub
		
		try {
			JSONObject jsonObject= new JSONObject(jsonData);
			SimpleDateFormat dateFormat= new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
			Document addQuery=  new Document().parse(jsonData);
			addQuery.put("Date",dateFormat.parse(jsonObject.get("Date").toString()));
			String collectionName="efforttrack";
			return commonDaoImpl.insertData(addQuery, collectionName);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
		
		
				
		
	}
	
	@Override
	public JSONArray getMyEffortsByDateRange(String userName,String roleName,String startDate,String endDate) {
		// TODO Auto-generated method stub
		SimpleDateFormat dateFormat= new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
		
		BasicDBObject searchQuery=new BasicDBObject();
		if(!roleName.equals("administrator"))
			searchQuery.put("consultant_name", userName);
		try {
			System.out.println(userName);
			System.out.println(dateFormat.parse(startDate));
			System.out.println(dateFormat.parse(endDate));
		} catch (ParseException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		;
		try {
			searchQuery.put("Date",new BasicDBObject("$gte",dateFormat.parse(startDate)).append("$lte",dateFormat.parse(endDate)));
			String collectionName="efforttrack";
			FindIterable<Document>  iterDoc =commonDaoImpl.findData(searchQuery, collectionName);
			
			JSONArray jsonData= new JSONArray();
			for (Document document : iterDoc) {
				jsonData.put(document);
			}
			System.out.println(jsonData.length());
			return jsonData;
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		
	}
	
	@Override
	public Boolean deleteEffort(String jsonData) {
		// TODO Auto-generated method stub
		JSONObject jsonObject;
		try {
			jsonObject = new JSONObject(jsonData);
			Document deleteQuery=  new Document().parse(jsonData);
			deleteQuery.put("_id",new ObjectId(jsonObject.get("_id").toString()));
			String collectionName="efforttrack";
			return commonDaoImpl.deleteData(deleteQuery, collectionName);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
			
		}
		
	}

}
