import { combineReducers } from "redux";

import articles from "./modules/ArticleList/reducer";
import comments from "./modules/CommentsList/reducer";

export default combineReducers({
  articles,
  comments
});
