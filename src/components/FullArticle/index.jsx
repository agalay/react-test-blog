import React from "react";
import { Link } from "react-router-dom";

import "./FullArticle.scss";
import { CommentList } from "../";

const FullArticle = ({ title, createdAt, text }) => {
  return (
    <div className="full-article">
      <h2>{title}</h2>
      <p>
        <i>Опубликовано: {createdAt}</i>
      </p>
      <p>{text}</p>

      <div className="btn-box">
        <Link to="/">
          <button className="btn btn-primary">Назад</button>
        </Link>
        <button className="btn btn-success">Показать комментарии</button>
      </div>

      <CommentList />
    </div>
  );
};

export default FullArticle;
