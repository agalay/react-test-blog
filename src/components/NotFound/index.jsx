import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
   <div className="text-center">
     <h1>404</h1>
     <hr/>
     <p>Страница не найдена</p>
     <Link to="/">
        <button className="btn btn-primary">Назад</button>
      </Link>
   </div>
  
  )
}

export default NotFound;