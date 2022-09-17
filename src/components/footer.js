import { Link, Outlet } from "react-router-dom"


export default function Footer() {
    return (
        <>
   <Link to='/'>Go back to Home</Link>
   <Link to='/Navbar'>Go to game</Link>
  
   <Outlet />
        </>
    )
}