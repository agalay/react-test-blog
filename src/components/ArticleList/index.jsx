import React from "react";
import { ArticleItem } from "../";

import "./ArticleList.scss";

const ArticleList = ({ items }) => {
  return (
    <div className="article-items">
      {items
        ? items.map((article, i) => <ArticleItem key={i} {...article} />)
        : "Loading..."}
    </div>
  );
};

export default ArticleList;
