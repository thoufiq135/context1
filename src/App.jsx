import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { CountProvider } from "./contextcart"
import List from './list'
import Pay from './payment'
import { Link } from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:"/",
    element:<List/>
  },
  {
    path:"/Payment",
    element:<Pay/>
  },
])
function App() {
  


  return (
    
    <CountProvider>
      <div id="nav">
        <li>Home</li>
        <li>About</li>
        <li>Account</li>
        <li>Contact</li>
        
      </div>
      <RouterProvider router={router}/> 
     
      
    </CountProvider>  
  )
  
}

export default App
