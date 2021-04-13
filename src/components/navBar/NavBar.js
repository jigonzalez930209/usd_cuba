import React from "react";
import { Link } from 'react-router-dom'

export default function NavBar() {

  return (
    <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">

      <div className="flex items-center justify-between mb-4 md:mb-0">
        <h1 className="leading-none text-2xl text-grey-darkest">
          <Link to='/' className="no-underline text-grey-darkest hover:text-black" href="#">
            USD_CUBA
      		</Link>
        </h1>
      </div>

      <nav>
        <ul className="list-reset md:flex md:items-center">
          <li className="md:ml-4">
            <Link to='/details' className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
              Details
       			</Link>
          </li>
          <li className="md:ml-4">
            <Link to='/predictions' className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
              Predictions
        		</Link>
          </li>
          <li className="md:ml-4">
            <Link to='/history' className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
              History
        		</Link>
          </li>
          <li className="md:ml-4">
            <Link to='/about' className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
              Contact
        		</Link>
          </li>
        </ul>
      </nav>

    </header>
  );
}
