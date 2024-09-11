import React from "react";
import DeleteAllUSer from "./DeleteAllUSer";

const UserDetails = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-4">
        <div className="flex gap-[150px]">
            <p>List of User Details</p>
            <button className="p-2 bg-blue-600 rounded-lg text-white">Add New Users</button>
        </div>
        <ul>
            <li>Hi</li>
            <li>Hii</li>
            
        </ul>
        <DeleteAllUSer/>


      </div>
    </>
  );
};

export default UserDetails;
