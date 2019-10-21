import React from "react";
import { Link } from "react-router-dom";

import "./ArticleItem.scss";

const ArticleItem = ({ title, createdAt, _id }) => (
  <div className="article-item">
    <Link to={`/article/${_id}`}>
      <h2>{title}</h2>
    </Link>
    <p>
      <i>Опубликовано: {createdAt}</i>
    </p>
    <div>
      <button className="btn btn-danger">Удалить</button>
      <button className="btn btn-info">Редактировать</button>
    </div>
    <hr />
  </div>
);

export default ArticleItem;
