package com.bcserp.spboot.service;

import org.json.JSONException;
import org.json.JSONObject;

public interface UserManagementService {
	
	JSONObject login(JSONObject userData) throws JSONException;
	
}
