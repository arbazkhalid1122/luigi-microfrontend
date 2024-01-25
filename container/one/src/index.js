import React, { useState,useEffect } from 'react';
import { render } from 'react-dom';
import './index.css';
import LuigiClient from '@luigi-project/client';

const App = () => {
  const [count, setCount] = useState(0);
useEffect(() => {
  const counts =  LuigiClient.getNodeParams().total
  setCount(counts)
}, [count])

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '70vh' }}>
      <div>React</div>
      {count > 0 && <p>Total Count is: {count}</p>}
    </div>
  );
};

render(<App />, document.getElementById('root'));

