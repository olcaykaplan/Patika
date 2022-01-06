/*  5. Ödev
post.ejs template içerisinde UPDATE ve DELETE butonu oluşturalım.
Herhangi bir post verisini güncellemek için gerekli çalışmaları yapalım.
Herhangi bir post verisini silmek için gerekli çalışmaları yapalım.
Kodumuzu MVC yapısına göre tekrar düzenleyelim.
*/

const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override');
const pageControllers = require('./controller/pageController');
const postControllers = require('./controller/postController');
const app = express();
require('dotenv').config();

//Connection
mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    console.log('DB CONNECTED!');
  })
  .catch((err) => {
    console.log(err);
  });

// Template Engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Pages
app.get('/', pageControllers.getHomePage);
app.get('/about', pageControllers.getAboutPage);
app.get('/add', pageControllers.getAddPage);
app.get('/post', pageControllers.getPostPage);
app.get('/posts/edit/:id', pageControllers.getEditPostPage);
app.get('/posts/:id', pageControllers.getPostByID);

// Actions
app.post('/posts', postControllers.createNewPost);
app.put('/posts/:id', postControllers.updatePostById);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Port is working on ${PORT} successfully.`);
});
