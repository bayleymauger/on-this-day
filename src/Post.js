import React from 'react';

const Post = (props) => {
  return (
    <div className="post">
      <p className="text">{props.html}</p>
      <span className="year">Year: {props.year}</span>
    </div>
  )
}

export default Post;
