import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="mt-5">
        <div className="flex flex-col items-center align-self gap-4">
          <p>Welcome to Thapa Education Hub</p>
          <p className="text-3xl text-teal-300">ADMIN TABLE</p>
          <p>One destination for complete Web Development</p>
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex gap-10 bg-slate-100 p-3">
            <p>HOME</p>
            <p>ABOUT</p>
            <p>PROJECTS</p>
            <p>CODE</p>
            <p>CONTACT</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
