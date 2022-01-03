/*  3. Ödev
cleanblog-test-db adında bir veri tabanı için mongoose ile gerekli bağlantı bilgilerini yazalım.
"Add New Post" sayfamızdan göndericeğimiz veriler req.body ile yakalayalım, gerekli middleware fonksiyonarını kullanalım.
title:String, detail:String, dateCreated:Date(default now) özelliklerine sahip Post modelini oluşturalım.
Veri tabanımızda 3 adet pos dökümanı oluşturalım.
Oluşturduğumuz post dökümanlarını Blog sitemizin anasayfasında gösterelim.
*/

const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const Post = require('./models/Post');

const app = express();

//Connection
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// Template Engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const posts = await Post.find();
  console.log("posts",posts)
  res.render('index', {
    posts
  });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});
app.post('/posts', async (req, res) => {
  console.log("req.body",req.body)
  await Post.create(req.body);
  res.redirect('/');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Port is working on ${PORT} successfully.`);
});
