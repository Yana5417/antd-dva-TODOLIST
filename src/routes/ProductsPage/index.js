import React from 'react';
import { connect } from 'dva';
import ProductList from '../../components/ProductList';
import Add from '../../components/Add';
import styles from './index.css';

const Products = ({ dispatch, products, add }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id
    });
  }

  function handleAdd() {
    dispatch({
      type: 'products/add',
      payload: add.input
    });
  }

  function handleChange(e) {
    dispatch({
      type: 'add/change',
      payload: e.target.value
    });
  }

  return (
    <div className={styles.Products}>
      <Add
        onAdd={handleAdd}
        onChange={handleChange}
        input={add.input} />
      <h2>List of Products</h2>
      <ProductList products={products} onDelete={handleDelete}></ProductList>
    </div>
  );
};

export default connect(({ add, products }) => ({
  add, products
}))(Products);