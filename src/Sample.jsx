import  { useContext } from 'react'
import { MyContext } from './Nav'



const Sample = () => {

  const {count, incrementCount} = useContext(MyContext);

  return (
    <>
    <button onClick={incrementCount}>Add</button>
    {count}
    </>
  )
}

export default Sample