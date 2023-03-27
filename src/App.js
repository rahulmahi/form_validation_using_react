import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Show from './Show';
import UserForm from './UserForm';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserForm />}></Route>
        <Route path='/show' element={<Show />}></Route>
      </Routes>
      </BrowserRouter> 
      {/* <UserForm />
      <Show /> */}
        

    </div>
  );
}

export default App;
