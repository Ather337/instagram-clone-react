import React from 'react'
import {Link} from "react-router-dom"
import {MdDarkMode,MdLightMode} from "react-icons/md"
const Header = (props) => {
  return (
    <nav className="px-2 shadow-md shadow-emerald-200 sm:px-4 border-b border-primary-color dark:border-slate-600 py-2.5 dark:bg-blue">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <Link to="/" className="flex items-center">
        <img src="/logo.svg" className="mr-3 h-9 sm:h-11" alt="ConnectPU" />
        <span className="text-xl font-semibold text-primary-color">ConnectPU</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <Link to="/">Drop</Link>
        </li>
        <li>
        <Link to="/">Hello</Link>

        </li>
        <li>
        <Link to="/">Hello</Link>

        </li>
        <li>
        <MdDarkMode className={(localStorage.getItem("dark-mode")==="true" ? "hidden" : "block text-xl leading 0 transition-all duration-300 animate-spin cursor-pointer text-primary-color")} id='darkMode' onClick={props.toggleDarkMode}/>
        <MdLightMode className={(localStorage.getItem("dark-mode")==="true" ? "block text-xl leading 0 transition-all duration-300 animate-spin cursor-pointer text-primary-color":"hidden")} id='lightMode' onClick={props.toggleDarkMode}/>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header

