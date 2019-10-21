const initialState = {
  items: null,
  comments: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ARTICLES:SET_ITEMS":
      return {
        ...state,
        items: payload
      };
    case "ARTICLES:APPEND_ITEM":
      return {
        ...state,
        items: state.items ? [...state.items, payload] : [payload]
      };
    case "COMMENTS:SET_ITEMS":
      return {
        ...state,
        comments: payload
      };
    default:
      return state;
  }
};
