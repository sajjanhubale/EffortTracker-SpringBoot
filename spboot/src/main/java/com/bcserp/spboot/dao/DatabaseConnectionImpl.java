package com.bcserp.spboot.dao;

import com.fasterxml.jackson.core.JsonParser;
import com.mongodb.DB;
import com.mongodb.MongoClient;
import com.mongodb.MongoCredential;
import com.mongodb.client.MongoDatabase;

public class DatabaseConnectionImpl implements DatabaseConnection{

	@Override
	public MongoDatabase Connect() {
		// TODO Auto-generated method stub
		MongoClient mongo= new MongoClient("localhost",27017); //create mongodb connection 
		
		MongoDatabase database=mongo.getDatabase("bcserp");// connect to specific database
		System.out.println("connection established");
		return database;  //return database connection 
		
	}

	
}
