import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchMemes from "@/utils/fetchMemes";

export const loadMemes = createAsyncThunk("memes/loadMemes", async () => {
  return await fetchMemes();
});

const memeSlice = createSlice({
  name: "memes",
  initialState: { items: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadMemes.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
  },
});

export default memeSlice.reducer;
