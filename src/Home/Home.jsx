import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>Home Page</h1>
        <h1>{user.loginName}</h1>

        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;

  return { user };
}

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };
