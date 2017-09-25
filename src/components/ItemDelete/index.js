import React from 'react';

const ItemDelete = ({onClickFn, id}) => {
  return(
    <input type="button" value="&times;" onClick={() => onClickFn(id)}/>
  );
};

export default ItemDelete;