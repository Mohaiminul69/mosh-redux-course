import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "../api";
let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: { list: [], loading: false, lastFetch: null },
  reducers: {
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
    },

    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        des: action.payload.des,
        resolved: false,
      });
    },

    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs.list[index].userId = userId;
    },

    bugRemoved: (bugs, action) =>
      bugs.list.filter((bug) => bug.id !== action.payload.id),

    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },
  },
});

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.filter((bug) => !bug.resolved === true)
);

export const getbugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );

export const {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
  bugsReceived,
} = slice.actions;

//Action Creator
const url = "./bugs";
export const loadBugs = () =>
  apiCallBegan({
    url,
    onSuccess: bugsReceived.type,
  });

export default slice.reducer;
