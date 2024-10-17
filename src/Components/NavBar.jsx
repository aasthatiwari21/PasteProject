import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
    <nav class="bg-gray-800">
    <div class="relative flex h-16 items-center">
      <div class="flex flex-1 items-center sm:items-stretch sm:justify-start">
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4  text-white">
        <NavLink
            to='/'
        >
            Home
        </NavLink>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:block  text-white">
          <div class="flex space-x-4">
          <NavLink
            to='/pastes'
        >
            Pastes
        </NavLink>
          </div>
        </div>
      </div>
      
    </div>


  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
    </div>
  </div>
</nav>

</div>
  )
}

export default NavBar






