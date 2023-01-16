import configurteStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  bugAssignedToUser,
  getbugsByUser,
  loadBugs,
} from "./store/slices/bugSlice";
import { projectAdded } from "./store/slices/projectSlice";
import { userAdded } from "./store/slices/userSlice";

const store = configurteStore();

store.dispatch(loadBugs());

// const unsubscribe = store.subscribe(() =>
//   console.log("store change hoy", store.getState())
// );

// store.dispatch(bugAdded({ des: "Bug 1 Created" }));
// store.dispatch(bugAdded({ des: "Bug 2 Created" }));
// store.dispatch(bugAdded({ des: "Bug 3 Created" }));
// store.dispatch(bugAdded({ des: "Bug 4 Created" }));
// store.dispatch(bugRemoved({ id: 1 }));
// store.dispatch(bugResolved({ id: 2 }));
// store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(userAdded({ name: "Dew" }));
// store.dispatch(userAdded({ name: "Haven" }));
// store.dispatch(bugAssignedToUser({ userId: 1, bugId: 3 }));
// store.dispatch(bugAssignedToUser({ userId: 2, bugId: 4 }));

// const unresolvedBugs = getUnresolvedBugs(store.getState());

// const bugsByUser = getbugsByUser(1)(store.getState());

// console.log(bugsByUser);
