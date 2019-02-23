package com.bcserp.spboot.service;

import java.util.Date;

import org.bson.Document;
import org.json.JSONArray;

import com.mongodb.client.FindIterable;

public interface EffortService {
	JSONArray getMyEfforts(String userName);
	Boolean addMyEfforts(String jsonData);
	JSONArray getMyEffortsByDateRange(String userName,String roleName,String startDate,String endDate);
	 Boolean deleteEffort(String jsonData);
	
}
