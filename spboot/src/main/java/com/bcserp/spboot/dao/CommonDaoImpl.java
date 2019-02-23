package com.bcserp.spboot.dao;

import java.util.Iterator;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bcserp.spboot.config.DatabaseConnectionConfig;
import com.mongodb.BasicDBObject;
import com.mongodb.DBCursor;
import com.mongodb.WriteResult;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

@Repository
public class CommonDaoImpl implements CommonDao{
	@Autowired
	private DatabaseConnectionConfig dbConnection;
	@Override
	public FindIterable<Document> findData(BasicDBObject searchQuery,String collectionName) {
		// TODO Auto-generated method stub
		MongoDatabase database =dbConnection.mongoDBConnection();
		MongoCollection<Document> collection =  database.getCollection(collectionName);
		FindIterable<Document> iterate = collection.find(searchQuery);
		return iterate;
	}
	
	public Boolean  insertData(Document addQuery,String collectionName) {
		// TODO Auto-generated method stub
		try {
			
			MongoDatabase database =dbConnection.mongoDBConnection();
			MongoCollection<Document> collection =  database.getCollection(collectionName);
			collection.insertOne(addQuery);
			return  true;
		} catch (Exception e) {
			// TODO: handle exception
			return  false;
		}
	}
	public Boolean  deleteData(Document addQuery,String collectionName) {
		// TODO Auto-generated method stub
		try {
			
			MongoDatabase database =dbConnection.mongoDBConnection();
			MongoCollection<Document> collection =  database.getCollection(collectionName);
			collection.deleteOne(addQuery);
			return  true;
		} catch (Exception e) {
			// TODO: handle exception
			return  false;
		}
	}
	
	
}
