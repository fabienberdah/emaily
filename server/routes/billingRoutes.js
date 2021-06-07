const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  //setting up the route handler to what for post requests that are
  // made to the  /api/stripe route

  app.post("/api/stripe", requireLogin, async (req, res) => {
    // this is where we want to put some logic to handle the token, reach
    // out to the stripe api and finalize the actual charge, and then finally,
    // update the users' number of credits

    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "5$ for 5 credits", //can be anything at all
      source: req.body.id, //what cc or what charge source we are trying to bill
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
