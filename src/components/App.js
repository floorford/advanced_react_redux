import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "actions";

import CommentList from "components/CommentList.js";
import CommentBox from "components/CommentBox.js";
// instead of ./components
// see jsconfig.json = this is so that we can use absolute imports in our project

// See also the official docs:
// https://facebook.github.io/create-react-app/docs/importing-a-component#absolute-imports

class App extends React.Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/" exact component={CommentList} />
        <Route path="/post" component={CommentBox} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);

// https://jsonplaceholder.typicode.com/
// API data faker we are using

// unit test - touching one piece of our app - atomic testing
// integration test - touching a workflow of our app
