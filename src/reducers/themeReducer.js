const initialState = false;

export const themeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "changeTheme":
      return payload;
    default:
      return state;
  }
};
