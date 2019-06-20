import React from 'react';
import { Cascader } from 'antd';
import options from './cities'

function onChange(value) {
  console.log(value);
}

function App() {
  return (
    <div className="App">
      <Cascader options={options} onChange={onChange} placeholder="选择Cascader地址" style={{ width: 300 }} />
    </div>
  );
}

export default App;
