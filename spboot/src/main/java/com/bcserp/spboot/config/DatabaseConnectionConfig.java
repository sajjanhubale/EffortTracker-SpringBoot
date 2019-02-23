package com.bcserp.spboot.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.mongodb.MongoClient;
import com.mongodb.client.MongoDatabase;

@Configuration
public class DatabaseConnectionConfig {

	@Bean
	public MongoDatabase mongoDBConnection(){
		MongoClient mongo= new MongoClient("localhost",27017); //create mongodb connection 
		MongoDatabase database=mongo.getDatabase("bcserp");// connect to specific database
		System.out.println("connection established");
		return database;  //return database connection 
		
		
	}
}
