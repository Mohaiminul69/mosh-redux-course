import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugAddedToUser,
  bugRemoved,
  bugResolved,
  getBugsByUser,
  getUnresolvedbugs,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

// store.subscribe(() => console.log("Store Change hoise "));

// store.dispatch(projectAdded({ name: "Project One" }));
// store.dispatch(projectAdded({ name: "Project Two" }));

// store.dispatch(bugAdded({ des: "bug 1 dispatched again" }));
// store.dispatch(bugAdded({ des: "bug 2 dispatched again" }));
// store.dispatch(bugAdded({ des: "bug 3 dispatched again" }));
// store.dispatch(bugAdded({ des: "bug 4 dispatched again" }));
// store.dispatch(bugRemoved({ id: 2 }));
// store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(userAdded({ name: "Dew Haven" }));
// store.dispatch(bugAddedToUser({ userId: 1, bugId: 3 }));
store.dispatch({
  type: "error",
  payload: { message: "Opps an error occured" },
});

const bugs = getBugsByUser(1)(store.getState());

console.log(bugs);
