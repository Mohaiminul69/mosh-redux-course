import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAddedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      bugs.map((bug) => (bug.id === bugId ? (bug.userId = userId) : bug));
    },

    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        des: action.payload.des,
        resolved: false,
      });
    },

    bugRemoved: (bugs, action) => {
      bugs.filter((bug) => bug.id !== action.payload.id);
    },

    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
  },
});

export default slice.reducer;

export const { bugAdded, bugRemoved, bugResolved, bugAddedToUser } =
  slice.actions;

export const getUnresolvedbugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
