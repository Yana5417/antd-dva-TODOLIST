import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';

const Add = ({ onAdd, onChange, input }) => {
  return (
    <div>
      <Input
        placeholder="请输入用户名"
        value={input}
        onChange={onChange}/>
      <Button type="primary" onClick={ onAdd }>添加</Button>
    </div>
  );
};

Add.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired
};

export default Add;