import './App.css';
import Task from './components/Task';

function App() {
  return (
    //added description property and some text
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash to completion and dry up afterwards!!!" />
      <Task title="Laundry" deadline="Tomorrow" description="Fold up and put under table" />
      <Task title="Tidy" deadline="Today" description="Dust and mop floors" />
    </div>
  );
}

export default App;
