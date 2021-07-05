import React from 'react';
import { render } from 'react-dom';
import Schedule from './calendar'; 
import { SchedulerData, ViewTypes, DATE_FORMAT } from 'react-big-scheduler'
import 'react-big-scheduler/lib/css/style.css'
import moment from 'moment'


function App() {
  render(<Schedule />, document.getElementById('root'));  
}

export default App;
