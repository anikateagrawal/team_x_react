import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Person from './components/props/Person';
import TodoList from './components/props/TodoList';
import ShoppingList from './components/shoppingList/ShoppingList';
import StopWatch from './components/StopWatch';
import Toggle from './components/custom hooks/Toggle';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <Person/>
    <TodoList/>
    <ShoppingList/>
    <StopWatch/>
    <Toggle/>
  </div>
);



