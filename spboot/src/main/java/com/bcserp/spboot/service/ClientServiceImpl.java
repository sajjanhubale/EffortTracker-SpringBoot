package com.bcserp.spboot.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.bson.Document;
import org.bson.types.ObjectId;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bcserp.spboot.dao.CommonDaoImpl;
import com.mongodb.BasicDBObject;
import com.mongodb.client.FindIterable;
@Service
public class ClientServiceImpl implements ClientService{
	@Autowired
	private CommonDaoImpl commonDaoImpl;
	@Override
	public JSONArray getClients(String userName) {
		// TODO Auto-generated method stub
		BasicDBObject searchQuery=new BasicDBObject();
		//searchQuery.put("consultant_name", userName);
		String collectionName="clients";
		FindIterable<Document>  iterDoc =commonDaoImpl.findData(searchQuery, collectionName);
		
		JSONArray jsonData= new JSONArray();
		for (Document document : iterDoc) {
			
			jsonData.put(document);
		}
	
		return jsonData;
	}
	@Override
	public Boolean addClients(String jsonData) {
		// TODO Auto-generated method stub
		JSONObject jsonObject;
		try {
			jsonObject = new JSONObject(jsonData);
			SimpleDateFormat dateFormat= new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
			Document addQuery=  new Document().parse(jsonData);
			addQuery.put("start_date",dateFormat.parse(jsonObject.get("start_date").toString()));
			addQuery.put("end_date",dateFormat.parse(jsonObject.get("end_date").toString()));
			String collectionName="clients";
			return commonDaoImpl.insertData(addQuery, collectionName);
			
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
	}
	
	@Override
	public Boolean deleteClient(String jsonData) {
		// TODO Auto-generated method stub
		JSONObject jsonObject;
		try {
			jsonObject = new JSONObject(jsonData);
			Document deleteQuery=  new Document().parse(jsonData);
			deleteQuery.put("_id",new ObjectId(jsonObject.get("_id").toString()));
			String collectionName="clients";
			return commonDaoImpl.deleteData(deleteQuery, collectionName);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
			
		}
		
	}

}
