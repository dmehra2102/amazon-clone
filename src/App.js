import './App.css';
import {Routes,Route} from "react-router-dom";
import Homepage from './Homepage';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log(authUser);

      if(authUser){
        dispatch({
          type : "SET_USER",
          payload : authUser
        })
      }else{
        dispatch({
          type : "SET_USER",
          payload : null
        })
      }
    })
  },[])
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
