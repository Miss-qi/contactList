const logger = (store) => next => action => {
    console.log('will dispatch', action.type);
    console.log('state', action.data);
    return next(action);
};
export default logger;