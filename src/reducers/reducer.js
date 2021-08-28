const initialState = [];

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "add":
      return payload;
    default:
      return state;
  }
};
