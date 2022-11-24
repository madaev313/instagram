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
      return { ...state, profile: action.payload };
    case "loadPosts":
      return { ...state, posts: action.payload };
    
    case "update/posts":
        return {...state, posts: state.posts.map(post => {
            if(post.id === +action.payload.id){
                return {...post, description: action.payload.description, image: action.payload.image}
            }
            return post
        })} 
    
    case "fulfilled":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export const loadProfile = () => {
  return async (dispatch) => {
    dispatch({ type: "pending" });
    const response = await fetchAPI("profile");
    const profile = await response.json();
    dispatch({
      type: "loadProfile",
      payload: profile,
    });
    dispatch({ type: "fulfilled" });
  };
};

export const loadPosts = () => {
  return async (dispatch) => {
    dispatch({ type: "pending" });
    const response = await fetchAPI("posts");
    const posts = await response.json();
    dispatch({
      type: "loadPosts",
      payload: posts,
    });
    dispatch({ type: "fulfilled" });
  };
};
