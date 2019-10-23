import commentsApi from "../../utils/api/comments";

const CommentsListActions = {
  setItems: items => ({
    type: "COMMETS:SET_ITEMS",
    payload: items
  }),

  fetchItems: () => dispatch => {
    commentsApi.get().then(({ data }) => {
      dispatch(CommentsListActions.setItems(data));
    });
  }

  // fetchItem: id => dispatch => {
  //   articlesApi.get(id).then(({ data }) => {
  //     dispatch(CommentsListActions.appendItem(data));
  //   });
  // },

  // appendItem: item => ({
  //   type: "ARTICLES:APPEND_ITEM",
  //   payload: item
  // }),

  // setComments: items => ({
  //   type: "COMMENTS:SET_ITEMS",
  //   payload: items
  // })
};

export default CommentsListActions;
