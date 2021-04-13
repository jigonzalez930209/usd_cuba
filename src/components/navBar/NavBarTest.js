import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function NavBarTest() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex">
              <Link to="/">
                <div className="flex-shrink-0 text-gray-200 text-2xl">
                  <spam className='font-bold'>
                    U<spam className='text-green-500'>S</spam>D
                      </spam>
                  <spam className='text-red-600 font-bold font-mono'>  Cuba</spam>
                </div>
              </Link>
              <div className="hidden md:items-center md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/predictions"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Predictions
                  </Link>

                  <Link
                    to="/history"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    History
                  </Link>

                  <Link
                    to="/details"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Details
                  </Link>

                  <Link
                    to="/about"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-400 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 -pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/predictions"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Predictions
                  </Link>

                <Link
                  to="/history"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  History
                  </Link>

                <Link
                  to="/details"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Details
                  </Link>

                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                  </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

    // <div>
    //   <header x-data="{ mobileMenuOpen : false }" className="flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-white py-6 px-6 relative">
    //     <a href="#" className="block">
    //       <span className="sr-only">themes.dev</span>
    //       <img className="h-6 md:h-8" src="/images/themesdev-logo-dark.svg" alt="Themes.dev Logo" title="Themes.dev Logo"></img>
    //     </a>
    //     <button onClick={`mobileMenuOpen = !mobileMenuOpen`} className="inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1">
    //       <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    //     </button>
    //     <nav className="absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0" className="{ 'flex' : mobileMenuOpen , 'hidden' : !mobileMenuOpen}"  onClick={"mobileMenuOpen = false"}>
    //       <a href="#" className="block py-1 text-indigo-600 hover:underline">Home</a>
    //       <a href="#" className="block py-1 text-gray-600 hover:underline">About us</a>
    //       <a href="#" className="block py-1 text-gray-600 hover:underline">Services</a>
    //       <a href="#" className="block py-1 text-gray-600 hover:underline">Blog</a>
    //       <a href="#" className="block py-1 text-gray-600 hover:underline">Contact</a>
    //     </nav>
    //   </header>

    //   <article className="text-lg px-6 py-6 text-gray-600 mx-auto max-w-2xl">
    //     <h2 className="text-xl font-semibold">Page title</h2>
    //     <p className="mt-6">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet lorem in libero faucibus euismod nec in metus. Quisque at facilisis magna. Donec rhoncus bibendum tincidunt. Vestibulum non orci eget dolor eleifend mollis eu sit amet nunc. Cras malesuada sem nec malesuada cursus.
    //     </p>  
    //     <p className="mt-6">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet lorem in libero faucibus euismod nec in metus. Quisque at facilisis magna. Donec rhoncus bibendum tincidunt. Vestibulum non orci eget dolor eleifend mollis eu sit amet nunc. Cras malesuada sem nec malesuada cursus.
    //     </p>  
    //   </article>

    // </div>



//     