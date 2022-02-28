import React from 'react'
import './index.css';
import "./shopcart.js";


const Navbar = () => {
    return ( 
     <header>
 <div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl"> ALTAS UÑAS</a>
  </div>
  <div class="dropdown dropdown-left">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://images.pexels.com/photos/791157/pexels-photo-791157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"> 
          </img>
        </div>
      </label>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><a>Semipermanente</a></li>
           <li><a>Kapping</a></li>
           <li tabindex="0">
        <a>
          Face Transformation
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-base-100">
          <li><a>Slash Point</a></li>
          <li><a>Eyebrown Color</a></li>
          <li><a>Hyaluronic Mask</a></li>
        </ul>
      </li>
    </ul>
    </div>
  </div>
</div>
  </header>     
  
  

  

    )
}
export default Navbar;