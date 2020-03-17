import React from "react";
import { connect } from "react-redux";

class CommentList extends React.Component {
  renderComments() {
    return this.props.comments.map((x, i) => {
      return <li key={i}>{x}</li>;
    });
  }

  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps)(CommentList);
