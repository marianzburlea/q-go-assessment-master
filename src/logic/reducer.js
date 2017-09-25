import { ADD_ITEM, DELETE_ITEM, STRIKE_ITEM, FILTER_LIST } from './constants';

let nextId = 3;

export const initialState = {
  items: [
    { id: 1, content: 'Make sure items are completeable!', complete: false },
    { id: 2, content: 'Add filters (Use HOC)', complete: false },
  ],
};

export const showOnlyReducer = (state=false, {type}) => {
  switch (type) {
    case FILTER_LIST:
      return !state;
    default:
      return state;
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = {
        id: nextId++,
        content: action.content,
        complete: false
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };

    case DELETE_ITEM:
      return {
        items: [...state.items.filter(v => v.id !== action.id)]
      };

    case STRIKE_ITEM:
      return {
        items: [...state.items.map(v => v.id !== action.id ? v : {...v, complete: !v.complete})]
      };
    default:
      return state;
  }
};

export default reducer;
