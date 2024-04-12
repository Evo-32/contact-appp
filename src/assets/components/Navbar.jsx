import React from "react";
import ContactDetail from "./ContactDetail";

const Navbar = () => {
  return (
    <div className="flex-col h-screen w-full bg-blue-100">
      <div className="flex justify-between mx-30 bg-slate-400 p-3">
        <a href="/Contactlist"><h1 className="text-4xl  font-bold p-4">Contact</h1></a>
        <div className="flex items-center p-6 max-w-sm  bg-slate-500 rounded-xl shadow-lg space-x-4">
          <div className="shrink-0">
            <img
              src="your-image-path.jpg"
              className="h-12 w-12"
              alt="User Avatar"
            />
          </div>
          <div>
            <h4 className="text-xl font-medium text-white">username</h4>
            <p className="text-white">theuseremail@gmail.com</p>
          </div>
          <button className="bg-black  text-white p-2 rounded">sign out</button>
        </div>
      </div>
      <ContactDetail/>
    </div>
  );
};

export default Navbar;


