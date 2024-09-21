import React from "react";
import DeleteAllUSer from "./DeleteAllUSer";
import { fakeUSerData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import DisplayUsers from "./DisplayUsers";


const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    console.log(payload);
    // react ra redux lai jodne kaam vairacha nita so we need react redux package
    dispatch(addUser(payload));
  };

  return (
    <>
      <div className="flex flex-col items-center mt-4">
        <div className="flex gap-[150px]">
          <p>List of User Details</p>
          <button
            className="p-2 bg-blue-600 rounded-lg text-white"
            onClick={() => {
              addNewUser(fakeUSerData());
            }}
          >
            Add New Users
          </button>
        </div>
        <ul>
          <DisplayUsers/>
        </ul>
        <hr/>
        <DeleteAllUSer />
      </div>
    </>
  );
};

export default UserDetails;
