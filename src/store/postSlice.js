import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"posts",
    initialState: {posts: []},
    reducers: {
      addPost: (state , action) => {
          state.posts.push(action.payload);
      },
        addPosts: (state , action) => {
          state.posts = action.payload;
        },
        deletePost: (state , action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
        editPost: (state , action) => {
          state.posts =state.posts.map(post => post.id === action.payload.id ? { ...action.payload} : post)
        }
    },
});

export const  {addPost , deletePost , editPost , addPosts} = counterSlice.actions;
export default  counterSlice.reducer;