const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  // here, before we do anything, we need to make sure that the user is logged in and  has enough credits
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipient } = req.body;

    //creating an instance of the survey
    const survey = new Survey({
      title, //short for title: title
      subject,
      body,
      // since recipient is a subdocument collection that uses the recipient schema
      // recipients: recipients.split(',').map(email=>{ return {email: email}});
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });
  });
};
