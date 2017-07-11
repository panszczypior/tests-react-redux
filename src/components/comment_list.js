import React from 'React';
import { connect } from 'react-redux';

const CommentList = ({ comments }) => {

  const list = comments.map( comment => <li key={comment}>{comment}</li>);

  return (
    <ul className="comment-list">
      {list}
    </ul>
  )
};

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(mapStateToProps)(CommentList);
