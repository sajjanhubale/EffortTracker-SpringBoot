package com.bcserp.spboot.dao;

import org.bson.Document;

import com.mongodb.BasicDBObject;
import com.mongodb.client.FindIterable;

public interface CommonDao {
	
	FindIterable<Document> findData(BasicDBObject searchQuery, String collectionName);
	Boolean insertData(Document document,String collectionName);
	Boolean  deleteData(Document addQuery,String collectionName);
}
