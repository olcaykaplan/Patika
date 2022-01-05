const Post = require('../models/Post');

exports.createNewPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};
exports.getPostByID = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', { post });
};
