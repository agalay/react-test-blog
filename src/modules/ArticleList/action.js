import articlesApi from "../../utils/api/articles";
import commentsApi from "../../utils/api/comments";

const ArticleListActions = {
  setItems: items => ({
    type: "ARTICLES:SET_ITEMS",
    payload: items
  }),

  fetchItems: () => dispatch => {
    articlesApi.get().then(({ data }) => {
      dispatch(ArticleListActions.setItems(data));
    });
  },

  fetchItem: id => dispatch => {
    articlesApi.get(id).then(({ data }) => {
      dispatch(ArticleListActions.appendItem(data));
    });
  },

  appendItem: item => ({
    type: "ARTICLES:APPEND_ITEM",
    payload: item
  }),

  setComments: items => ({
    type: "COMMENTS:SET_ITEMS",
    payload: items
  }),

  fetchComments: id => dispatch => {
    commentsApi.get(id).then(({ data }) => {
      dispatch(ArticleListActions.setComments(data));
    });
  }
};

export default ArticleListActions;
