import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout
        //StripeCheckout defaults to using USD
        amount={500} //in US cents =5$
        token={(token) => this.props.handleToken(token)} //expects to receive a callback function
        //that will be called after we have successfully
        //retrieved an authorization token from the stripe api
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Emaily"
        description="5$ for 5 email credits"
      >
        <button className="btn">Add credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
