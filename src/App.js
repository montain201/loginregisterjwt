
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import React,{useEffect, useState} from 'react'


function App() {

  const[username,setUserName] = useState('');
  useEffect(()=>{
  (
      async()=>{
         const response =  await fetch('https://localhost:44317/api/user',{
          headers:{'Content-Type':'application/json'},
          credentials:'include',
});
  const content = await response.json();

  setUserName(content.userName);
      }
  )();
});


  return (
    <div className='App'>
       <BrowserRouter>
        <Nav username={username} setUserName={setUserName}/>
     
       <main className='form-signin'>
       <Routes>
       <Route path="/" exact element={<Home username={username} />} />
       <Route path="/login"  element={<Login setUserName={setUserName}/>}/>
       <Route path="/register"  element={<Register/>}/>
       </Routes>
       </main>
       </BrowserRouter>
    </div>
  );
}

export default App;


