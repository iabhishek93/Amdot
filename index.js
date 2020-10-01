const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const dbConfig = require('./config/dbconfig');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var docArr = [];
const cors = require('cors');
app.use(cors());

app.use(express.static(__dirname + "/src"));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

var uri = dbConfig.url;

app.post('/deals', async (req, res) => {
    console.log(req.body);
    res.json({
        'status': 'OK'
    })
})

app.post('/redirectLog', async (req, res) => {
    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("app_master");
        //Find the first document in the customers collection:
        dbo.collection("productredirects").find({}).toArray(
            (err, docs) => {
                assert.equal(err, null);
                assert.notEqual(docs.length, 0);
                docs.forEach(doc => {
                    docArr.push(doc);
                })
                res.json({
                    'dbResp': docArr
                })
                docArr = [];
            }
        )
    });
})

app.post('/searchLog', async (req, res) => {
    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("app_master");
        //Find the first document in the customers collection:
        dbo.collection("productsearches").find({}).toArray(
            (err, docs) => {
                assert.equal(err, null);
                assert.notEqual(docs.length, 0);
                docs.forEach(doc => {
                    docArr.push(doc);
                })
                res.json({
                    'dbResp': docArr
                })
                docArr = [];
            }
        )
    });
})

app.post('/detailRedirectLog', async (req, res) => {
    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("app_master");
        //Find the first document in the customers collection:
        dbo.collection("detailredirects").find({}).toArray(
            (err, docs) => {
                assert.equal(err, null);
                assert.notEqual(docs.length, 0);
                docs.forEach(doc => {
                    docArr.push(doc);
                })
                res.json({
                    'dbResp': docArr
                })
                docArr = [];
            }
        )
    });
})


app.listen(8080, () => {
    console.log('App Running on Port 8080');
})