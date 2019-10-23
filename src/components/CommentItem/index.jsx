import React from "react";

import "./CommentItem.scss";

const CommentItem = ({ title, text, author, date }) => {
  return (
    <div className="comItem">
      <h6 className="comItem__author">{author}</h6>
      <p className="comItem__text">{text}</p>
      <span className="comItem__date">Опубликован: {date}</span>
    </div>
  );
};

export default CommentItem;
