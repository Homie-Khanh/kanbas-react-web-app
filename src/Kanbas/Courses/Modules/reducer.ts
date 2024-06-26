import { createSlice } from "@reduxjs/toolkit";
// import { modules } from "../../Database";

// interface Module {
//   _id?: string;
//   name: string;
//   description: string;
//   course: string;
//   lessons: [];
// }
const initialState = {
  // modules: modules,
  modules: [] as { _id: string; name: string; description: string }[],
  // modules: [] as Module[],
  module: { name: "New Module 123", description: "New Description" },
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    // addModule: (state, action) => {
    //   state.modules = [
    //     { ...action.payload, _id: new Date().getTime().toString() },
    //       ...state.modules,
    //   ];
    // },
    setModules: (state, action) => {
      state.modules = action.payload;
    },
    addModule: (state, action) => {
      state.modules = [action.payload, ...state.modules];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});

export const { setModules, addModule, deleteModule,
  updateModule, setModule } = modulesSlice.actions;
export default modulesSlice.reducer;