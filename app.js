/*  4. Ödev
index.ejs içerisinde /posts/<%= posts[i]._id %> ile _id bilgisini gönderelim.
app.js içerisinde GET metoduyla "/posts/:id" ile gönderilen "_id" yi yakalayalım. .
tekil post bilgilerini post.ejs dosyasına gönderelim.
post.ejs içerisine post.title, post.detail ve post.dateCreated bilgilerini gönderelim. (her bir post için ayrı image kullanmayacağız)
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
  res.render('index', {
    posts,
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
  await Post.create(req.body);
  res.redirect('/');
});
app.get('/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id)
  res.render('post', { post });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Port is working on ${PORT} successfully.`);
});
