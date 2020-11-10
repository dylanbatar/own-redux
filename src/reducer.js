export const reducer = (state = [], actions) => {
  switch (actions.type) {
    case 'ADD':
      return [...state, actions.payload];
    case 'UPDATE':
      return state.map((item) =>
        item.bug === actions.payload.bug ? { bug: 'renombrado' } : item
      );
    default:
      return state;
  }
};
