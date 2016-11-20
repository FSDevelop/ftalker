/**
 * MongoDB Controller (low level commands)
 * @since   October 2016
 * @author  Federico Sosa (federico.develop@gmail.com)
 */

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/ftalker';
 
module.exports = {
    "insert": function(collection, insertedObject, callback) {
        MongoClient.connect(url, function(err, db) {
          assert.equal(null, err);
          
          // Insert "insertedObject" to "collection"
          db.collection(collection).insertOne(insertedObject, function(err, result) {
              assert.equal(null, err);
              
              callback(result);
          });
          
          db.close();
        });
    },
    "get": function(collectionName, callback) {
        MongoClient.connect(url, function(err, db) {
          assert.equal(null, err);
          
          // Get all results from collection
          var collection = db.collection(collectionName);
          collection.find({}).toArray(function(err, docs) {
              callback(docs);
          });
          
          db.close();
        });
    }
};
