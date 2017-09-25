import { ADD_ITEM, STRIKE_ITEM, DELETE_ITEM, FILTER_LIST } from './constants';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const deleteItem = id => {
  return { type: DELETE_ITEM, id };
};

export const strikeItem = id => {
  return { type: STRIKE_ITEM, id };
};

export const fitlerMyList = () => {
  return { type: FILTER_LIST };
};
