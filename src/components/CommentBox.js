import React from "react";
import { connect } from "react-redux";

import * as actions from "actions";

class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = { comment: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.shouldNavigateAway();
  }

  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  shouldNavigateAway() {
    if (!this.props.auth) {
      this.props.history.push("/");
    }
  }

  handleChange(e) {
    this.setState({ comment: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>

        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

// null cos doesn't need any state as props
export default connect(mapStateToProps, actions)(CommentBox);

// as soon as we use the connect function it looks up the hierarchy for the provider tag
// with jest because we're creating a comment box instance but no store it breaks unless we account for that too
