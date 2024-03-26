const Navbar = () => {
  return (
    <div className="navbar bg-base-100 work-sans">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Home</a></li> 
          <li><a>Listed Books</a></li>
          <li><a>Pages to Read</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 flex gap-3">
          <li><a className="border px-6 py-3 border-[#23BE0A] text-[#23BE0A] text-lg font-semibold">Home</a></li> 
          <li><a className="text-lg font-semibold">Listed Books</a></li>
          <li><a className="text-lg font-semibold">Pages to Read</a></li>
      </ul>
    </div>
    <div className="navbar-end flex gap-2">
     <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#23BE0A] text-white">Sign in</button>
     <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#59C6D2] text-white">Sign up</button>
    </div>
  </div>
  );
};

export default Navbar;
