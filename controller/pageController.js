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
exports.getEditPostPage = async(req, res) => {
  let post = await Post.findById(req.params.id);
  res.render('editPost', { post });
};
exports.getPostByID = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('post', { post });
  };