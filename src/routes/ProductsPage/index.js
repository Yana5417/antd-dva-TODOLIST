import React from 'react';
import { connect } from 'dva';
import ProductList from '../../components/ProductList';
import styles from './index.css';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id
    });
  }

  return (
    <div className={styles.Products}>
      <h2>List of Products</h2>
      <ProductList products={products} onDelete={handleDelete}></ProductList>
    </div>
  );
};

export default connect(({ products }) => ({
  products
}))(Products);