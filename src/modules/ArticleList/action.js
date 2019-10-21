import articlesApi from "../../utils/api/articles";

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
      dispatch(ArticleListActions.appendItem(data[0]));
      dispatch(ArticleListActions.setComments(data[1]));
    });
  },

  appendItem: item => ({
    type: "ARTICLES:APPEND_ITEM",
    payload: item
  }),

  setComments: items => ({
    type: "COMMENTS:SET_ITEMS",
    payload: items
  })
};

export default ArticleListActions;
