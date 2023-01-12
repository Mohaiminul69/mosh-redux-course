const logger = (param) => (store) => (next) => (action) => {
  console.log("Login", param);
  next(action);
};

export default logger;
