// // blogsSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios"; // Assuming you have axios for making HTTP requests

// // Async thunk for fetching blogs
// export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
//   try {
//     const response = await axios.get("https://api.example.com/ecommerce");
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// });

// const blogsSlice = createSlice({
//   name: "blogs",
//   initialState: {
//     blogs: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {
//     // Additional synchronous actions can be defined here
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchBlogs.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchBlogs.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.blogs = action.payload;
//       })
//       .addCase(fetchBlogs.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export default blogsSlice.reducer;
// export const {
//   /* additional synchronous action creators */
// } = blogsSlice.actions;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Assuming you have axios for making HTTP requests

// Async thunk for fetching ecommerce data
export const fetchEcommerceData = createAsyncThunk(
  "ecommerce/fetchEcommerceData",
  async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/products/1");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const ecommerceSlice = createSlice({
  name: "ecommerce",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // Additional synchronous actions can be defined here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEcommerceData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEcommerceData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchEcommerceData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default ecommerceSlice.reducer;
export const {
  /* additional synchronous action creators */
} = ecommerceSlice.actions;
