import { createContext, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/User/Home/Home'
import Routes from './Components/Routes/Routes'
import { Outlet } from 'react-router-dom'


export const Store =  createContext();

const initialstate = {

};
function reducer(state ,  action){
return state;
};
 
function App() {
  const [State , dispatchstate] = useReducer(reducer , initialstate);
  return (
    <>
    <Store.Provider value={''}>
      <Routes/>
      </Store.Provider>
    </>
  )
};

export default App
