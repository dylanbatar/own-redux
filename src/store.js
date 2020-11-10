export const createStore = (reducers, initialData) => {
  let state = initialData;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(actions) {
    state = reducers(state, actions);
    listeners.forEach((listener) => {
      listener();
    });
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function unSubscribe() {
      console.log(listeners.splice(listeners.indexOf(listener), 1));
    };
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
};
