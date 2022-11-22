import { fetchAPI } from "./api";

const initialState = {
  profile: {},
  posts: [],
  loading: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "pending":
      return { ...state, loading: true };
    case "loadProfile":
      return { ...state, profile: action.payload, loading: false };
      case "loadPosts":
        return {...state, posts: action.payload, loading: false}
    default:
      return state;
  }
};
export const loadProfile = () => {
  return async (dispatch) => {
    dispatch({ type: "pending" });
    const response = await fetchAPI('profile');
    const profile = await response.json();
    
    dispatch({
      type: "loadProfile",
      payload: profile,
    });
  };
};

export const loadPosts = () => {
    return async (dispatch) => {
      dispatch({ type: "pending" });
      const response = await fetchAPI('posts');
      const posts = await response.json();
      console.log(posts);
      dispatch({
        type: "loadPosts",
        payload: posts,
      });
    };
  };
