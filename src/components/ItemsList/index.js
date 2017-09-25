import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';
import ItemDelete from '../ItemDelete';
import {deleteItem, strikeItem, fitlerMyList} from '../../logic/actions';

export const ItemsList = ({ items, deleteItem, strikeItem, fitlerMyList, showOnly }) => {
  const deleteFn = id => {
    deleteItem(id);
  }
  const strikeIt = id => {
    strikeItem(id);
  }
  return (
    <div>
      <ul className={'itemsList-ul'}>
        {items.length < 1 && <p id={'items-missing'}>Add some tasks above.</p>}
        {items
          .filter(x => showOnly ? x.complete : true)
          .map(item => item.complete
        ? <li key={item.id} onClick={() => strikeIt(item.id)}><s>{item.content}</s> <ItemDelete onClickFn={deleteFn} id={item.id}/></li>
        : <li key={item.id} onClick={() => strikeIt(item.id)}>{item.content} <ItemDelete onClickFn={deleteFn} id={item.id}/></li>)
        }
      </ul>
      <label>
        <input type="checkbox" onClick={() => fitlerMyList()} /> show only completed items
      </label>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return { 
    items: state.todos.items,
    showOnly: state.showOnly
  };
};

export default connect(mapStateToProps, {deleteItem, strikeItem, fitlerMyList})(ItemsList);
