import { configureStore } from "@reduxjs/toolkit";

import testioSlice from "./testio-slice";

const store = configureStore({
  reducer: { testio: testioSlice.reducer },
});

export default store;
