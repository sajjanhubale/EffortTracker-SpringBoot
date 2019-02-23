package com.bcserp.spboot.service;

import org.json.JSONArray;

public interface ClientService {
	JSONArray getClients(String userName);
	Boolean addClients(String jsonData);
	Boolean deleteClient(String jsonData);
}
