import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const user = useSelector((store)=>store.user)
  console.log(user);
  
  return (
        <>
        <div className="navbar absolute top-0 bg-base-300 z-40">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">👩‍💻 DevTinder</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control"></div>
          <div className="dropdown dropdown-end mx-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow font-bold "
            >
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <hr className='text-zinc-600 my-0.5' />
              <li>
                <a className='text-red-600'>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        </>
  )
}

export default Navbar