
import { NavLink, Outlet } from "react-router-dom"



export default function Sharedlink() {
    return (
        <>
    <NavLink to='/' className={({isActive}) => (isActive ? "link1" : "link2")} >Home</NavLink>
    
    <NavLink to='/Navbar' className={({isActive}) => (isActive ? "link1" : "link2")}>Navbar</NavLink>
    <NavLink to='/todolist' className={({isActive}) => (isActive ? "link1" : "link2")}>todolist</NavLink>
    <NavLink to='/products' className={({isActive}) => (isActive ? "link1" : "link2")}>Products</NavLink>
    <NavLink to='/login' className={({isActive}) => (isActive ? "link1" : "link2")}>Login</NavLink>
   <div>
    <Outlet />
    </div>
  
        </>
    )
}