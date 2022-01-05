/*  5. Ödev
post.ejs template içerisinde UPDATE ve DELETE butonu oluşturalım.
Herhangi bir post verisini güncellemek için gerekli çalışmaları yapalım.
Herhangi bir post verisini silmek için gerekli çalışmaları yapalım.
Kodumuzu MVC yapısına göre tekrar düzenleyelim.
*/

const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const Post = require('./models/Post');
const pageControllers = require('./controller/pageController');
const postControllers = require('./controller/postController');
const app = express();

//Connection
mongoose.connect('mongodb://localhost/cleanblog-test-db');

// Template Engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Pages
app.get('/', pageControllers.getHomePage);
app.get('/about', pageControllers.getAboutPage);
app.get('/add', pageControllers.getAddPage);
app.get('/post', pageControllers.getPostPage);

// Actions
app.post('/posts', postControllers.createNewPost);
app.get('/posts/:id',postControllers.getPostByID);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Port is working on ${PORT} successfully.`);
});
