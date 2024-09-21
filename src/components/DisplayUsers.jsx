import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();
  // state is global and through state we can access the store
  // useselector bata store ko slice name diyesi access garna sakinxa the .Mainly the reducer specified in store config file
  // use selector sanga use garne state is complete app ko state
  const data = useSelector((state) => {
    return state.users; //accessing the user state
    // ani state.smth garera particular slice lai hami access garna  sakinxa so purra app ko state pass garera we are simply accessing the one
  });

  const deleteUser = (key) => {
    dispatch(removeUser(key));
  };

  return (
    <div className="m-4">
      {/* javascript code needs to be written in {} */}
      {data.map((item, key) => {
        return (
          <div key={key} className="border p-2 w-[50vw] text-center flex ">
            {item}
            <button
              className="p-1 bg-red-500 rounded-full ml-auto"
              onClick={() => {
                deleteUser(key);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayUsers;
