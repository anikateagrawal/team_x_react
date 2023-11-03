import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import BillForm from './components/BillForm';
import Contactform from './components/Contactform';

function App() {
  const router=createBrowserRouter([
    {
      path:'*',
      element:<Contactform/>
    },
    {
      path:'/bill',
      element:<BillForm/>
    }
  ])
  return (
    <div className="app" >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App; 
