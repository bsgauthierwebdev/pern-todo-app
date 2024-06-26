import { Fragment } from 'react';
import './App.css';
import InputTodo from './Components/InputTodo';
import ListTodos from './Components/ListTodos';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
