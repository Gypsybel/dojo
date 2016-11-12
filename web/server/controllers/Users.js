var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  login: function(req, res) {
    User.findOneAndUpdate({ $or: [
      {
        authId:req.body.user_id
      },
      {
        email:req.body.email
      }
      ]},
      {
        name: req.body.name,
        email: req.body.email,
        profilePic: req.body.picture,
        authId: req.body.user_id
      },
      {
        upsert: true,
        new: true
      }).exec(function(err, user) {
        if(err) {
          res.status(500).json(err);
        } else {
          req.session.user = user;
          res.json({user:user});
        }
      }
    );
  },
  getCurrentUser: function(req, res) {
    if(req.session.user !== undefined) {
      res.json({ user: req.session.user });
    } else {
      res.json({ user: {} });
    }
  },
  logout: function(req, res) {
    req.session.destroy();
    res.json({loggedOut:true});
  }
}