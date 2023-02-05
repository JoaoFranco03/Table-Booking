import React from 'react';
import { render } from 'react-dom';
import Schedule from './calendar'; 
import 'react-big-scheduler/lib/css/style.css'


function App() {
  render(<Schedule />, document.getElementById('root'));  
  return null;
}

export default App;
