import { useContext } from "react"
import MyContext from "./MyContext"
const Component2 = () => {
    const value = useContext(MyContext);
  return (
    <div>
     <h1>this is the context value</h1>
     <h1 className="font-bold text-blue-800 text-7xl">{value}</h1>
    </div>
  )
}

export default Component2
