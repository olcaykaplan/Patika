const Post = require('../models/Post');

exports.getHomePage = async (req, res) => {
  const posts = await Post.find();
  res.render('index', {
    posts,
  });
};
exports.getAboutPage = (req, res) => {
  res.render('about');
};
exports.getAddPage = (req, res) => {
  res.render('add_post');
};
exports.getPostPage = (req, res) => {
  res.render('post');
};
