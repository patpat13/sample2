// import React, { useContext } from 'react'
import { createContext, useState } from "react";
import Btn from "./Btn";
// import { MyContext } from './MyContext'

export const MyContext = createContext();

const Nav = () => {
  const [count, setCount] = useState(10);

  const valueToShare = {
    count: count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };
  return (
    <>
      <MyContext.Provider value={valueToShare}>
        <Btn />
     
      </MyContext.Provider>
    </>
  );
};


export default Nav;
