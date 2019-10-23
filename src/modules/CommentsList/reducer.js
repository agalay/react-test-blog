const initialState = {
  items: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "COMMENTS:SET_ITEMS":
      return {
        ...state,
        items: payload
      };
    case "COMMENTS:APPEND_ITEM":
      return {
        ...state,
        items: state.items ? [...state.items, payload] : [payload]
      };
    default:
      return state;
  }
};
