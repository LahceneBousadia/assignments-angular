let User = require("../model/user");
const router = require("express").Router();
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
router.post("/inscription", (req, res) => {
    //hash mot de passe
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.json({ success: false, message: "Hash Error!" });
      } else {
        const user = new User({
          nomprenom: req.body.nomprenom,
          email: req.body.email,
          password: hash,
        });
        user
          .save()
          .then((_) => {
            return res.json({ success: true, message: "Account has been created" });
          })
          .catch((err) => {
            if (err.code === 11000) {
              return res.json({ success: false, message: "E-mail existe déjà !" });
            }
            return res.json({ success: false, message: "Authentification Faild !!" });
          });
      }
    });
  });

  router.post("/connexion", (req, res) => {
    User.find({ email: req.body.email }).exec().then((result) => {
      if (result.length < 1) {
        return res.json({ success: false, message: "User Not Found !!" })
      }
      const user = result[0];
      bcrypt.compare(req.body.password, user.password, (err, ret) => {
        if (ret) {
          const payload = {
            userId: user._id
          }
          const token = jwt.sign(payload, "webBatch")
          return res.json({ success: true, token: token, message: "connexion Success" })
        } else {
          return res.json({ success: false, message: "passeword does not match" })

        }
      })
    }).catch(err => {
      return res.json({ success: false, message: "Authentification Failed!!" })
    })
  });
  router.route
  module.exports = router;