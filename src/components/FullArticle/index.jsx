import React from "react";
import { Link } from "react-router-dom";

import "./FullArticle.scss";

const FullArticle = ({ title, createdAt, _id, text }) => {
  return (
    <div className="full-article">
      <h2>{title}</h2>
      <p>
        <i>Опубликовано: {createdAt}</i>
      </p>
      <p>{text}</p>
      <hr />
      <div className="btn-box">
        <Link to="/">
          <button className="btn btn-primary">Назад</button>
        </Link>
        <button className="btn btn-success">Показать комментарии</button>
      </div>
    </div>
  );
};

export default FullArticle;
