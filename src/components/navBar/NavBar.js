import { MenuAlt2Icon } from "@heroicons/react/solid";
import React, { useState, useCallback, memo } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import ContextMenu from '../ContextMenu';

const Item = styled.div`

`;

const solutions = [
  {
    name: "Predictions",
    description: "Measure actions your users take",
    href: "/predictions",
  },
  {
    name: "History",
    description: "Create your own targeted content",
    href: "/history",
  },
  {
    name: "Details",
    description: "Keep track of your growth",
    href: "/details",
  },
  {
    name: "About",
    description: "Keep track of your growth",
    href: "/about",
  },
];


function NavBar() {
  const [contextMenuProperties, setContextMenuProperties] = useState({
    contextMenuVisibility: false,
    contextMenuTop: 0,
    contextMenuLeft: 0,
  });

  // Hide menu on close
  const onClose = useCallback(() => {
    setContextMenuProperties({
      contextMenuVisibility: false,
      contextMenuTop: 0,
      contextMenuLeft: 0,
    });
  }, [setContextMenuProperties]);

  // Left click on item logic
  const onItemClick = useCallback(
    (text) => {
      // alert(text);
      onClose();
    },
    [onClose]
  );

  // Right click logic, prevent default behaviour & set component position
  const onRightClick = useCallback(
    (event) => {
      event.preventDefault();
      setContextMenuProperties({
        contextMenuVisibility: true,
        contextMenuTop: event.clientY,
        contextMenuLeft: event.clientX,
      });
    },
    [setContextMenuProperties]
  );

  const {
    contextMenuTop,
    contextMenuLeft,
    contextMenuVisibility,
  } = contextMenuProperties;

  return (
    <>
      <div>
        <div>
          {contextMenuVisibility && (
            <ContextMenu
              top={contextMenuTop}
              left={contextMenuLeft}
              close={onClose}
              className=""
            >
              <div className="absolute pl-5 bg-gray-700 transform items-center transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ">
                {solutions.map((item) => (
                  <Link className="relative grid gap-1 grid-cols-1 text-gray-900" to={item.href} onClick={onItemClick.bind(null, item.name)} > {item.name} </Link>
                ))}
              </div>
            </ContextMenu>
          )}
        </div>
        <div className="grid ">
          <div className=" px-4 pt-5 grid grid-cols-3 content-center">
            <Item
              onClick={onRightClick}
              className="md:hidden opacity-90 text-black rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition ease-in-out duration-150"
            >
              <MenuAlt2Icon
                className="text-opacity-70 ml-2 mt-1 h-6 w-6 text-orange-300 group-hover:text-opacity-80 transition ease-in duration-150"
                aria-hidden="true"
              />
            </Item>
            <Link to="/" className="flex-shrink-0 text-2xl ml-4 col-span-2 max-w-max md:px-14 md:col-span-1">
              <strong className='font-bold'>
                U<strong className='text-green-500'>S</strong>D</strong>
              <strong className='text-red-600 font-bold font-mono'>  Cuba</strong>
            </Link>
            <div className="ml-4 col-span-2 hidden md:block">
              <div className=" grid grid-flow-col justify-items-center mt-1">
                {solutions.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className=" items-center text-lg transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    <div className="ml-4">
                      <div className="font-medium text-gray-900">
                        {item.name}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(NavBar);



// 


// <div className=" px-4 pt-5 grid grid-cols-3 content-center">

// <Popover as="nav"  open={op}>
//   {({ open }) => (
//     <>
//       <Popover.Button
//         className={`
//           ${open ? "hidden" : "opacity-90"}
//           text-black rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition ease-in-out duration-150`}
//       >

//         <MenuAlt2Icon
//           className={`${open ? "" : "text-opacity-70"}
//             ml-2 mt-1 h-6 w-6 text-orange-300 group-hover:text-opacity-80 transition ease-in duration-150`}
//           aria-hidden="true"
//         />

//       </Popover.Button>
//       <Transition
//         show={open}
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="opacity-0 translate-y-1"
//         enterTo="opacity-100 translate-y-0"
//         leave=""
//         leaveFrom="opacity-100 translate-y-0"
//         leaveTo="opacity-0 translate-y-1"
//       >
//         <Popover.Panel
//           className="absolute pl-5  bg-transparent transform "
//         >
//           <div className="overflow-hidden w-max rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
//             <div className="relative grid gap-1 grid-cols-1">
//               {solutions.map((item) => (
//                 <Link
//                   onClick={()=>setOp(false)}
//                   key={item.name}
//                   to={item.href}
//                   className=" items-center transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
//                 >
//                   <div className="ml-4">
//                     <p className="font-medium text-gray-900">
//                       {item.name}
//                       {open=op}
//                       {console.log(open)}

//                     </p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </Popover.Panel>
//       </Transition>
//     </>
//     // {()=>{setOp(false)}}
//   )}
// </Popover>


// </div>






// function IconOne() {
//   return (
//     <svg
//       width="48"
//       height="48"
//       viewBox="0 0 48 48"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect width="48" height="48" rx="8" fill="#FFEDD5" />
//       <path
//         d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
//         stroke="#FB923C"
//         strokeWidth="2"
//       />
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
//         stroke="#FDBA74"
//         strokeWidth="2"
//       />
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
//         stroke="#FDBA74"
//         strokeWidth="2"
//       />
//     </svg>
//   );
// }

// function IconTwo() {
//   return (
//     <svg
//       width="48"
//       height="48"
//       viewBox="0 0 48 48"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect width="48" height="48" rx="8" fill="#FFEDD5" />
//       <path
//         d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
//         stroke="#FB923C"
//         strokeWidth="2"
//       />
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
//         stroke="#FDBA74"
//         strokeWidth="2"
//       />
//     </svg>
//   );
// }

// function IconThree() {
//   return (
//     <svg
//       width="48"
//       height="48"
//       viewBox="0 0 48 48"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <rect width="48" height="48" rx="8" fill="#FFEDD5" />
//       <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
//       <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
//       <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
//       <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
//       <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
//       <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
//     </svg>
//   );
// }
