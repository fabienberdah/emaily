import React from "react";
import StripeCheckout from "react-stripe-checkout";

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout
        //StripeCheckout defaults to using USD
        amount={500} //in US cents =5$
        token={(token) => console.log(token)} //expects to receive a callback function
        //that will be called after we have successfully
        //retrieved an authorization token from the stripe api
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default Payments;
