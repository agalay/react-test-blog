import React from "react";
import { CommentItem } from "../";

import "./CommentList.scss";

const CommentList = props => {
  return (
    <div className="commList">
      <header>Комментарии:</header>
      <hr />
      <CommentItem
        title="Hello"
        text="Lorem ipsum"
        author="Djo Black"
        date="reer"
      />
    </div>
  );
};

export default CommentList;
