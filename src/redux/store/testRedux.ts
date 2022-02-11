import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
interface testReduxState {
  value: string;
}
const initialState: testReduxState = {
  value: "test",
};
const testReduxSlice = createSlice({
  name: "testRedux",
  initialState,
  reducers: {
    changeText: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
export const { changeText } = testReduxSlice.actions;

export const selectValue = (state: RootState) => state.testReduxSlice.value;

export default testReduxSlice.reducer;
