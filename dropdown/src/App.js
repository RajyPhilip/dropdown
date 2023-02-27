import logo from './logo.svg';

import './App.css';
import { useState } from 'react';

function App() {

  let [option,setOption] = useState('');

  // functions 
    const handleChange = (e) => {
      setOption(e.target.value);
    };


  return (
    <div className="App">
      <div className='container'>
      <select onChange={handleChange} >
        <option value=''>Select</option>
          <option  value="Circle">Circle</option>
          <option value="Square">Square</option>
        </select> 
        {option == '' ? <h1> Please select the shape above </h1> :         <div className={option==='Circle' ? `circle`  : `square`}>
        </div> }
      </div>




    </div>
  );
}

export default App;
