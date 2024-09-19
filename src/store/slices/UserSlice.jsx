import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  //this slice expects an object with values of name,initial state and reducers
  name: "user",
  initialState: [], //data haru ek thau ma store garne ani dekhaune and data store garne best thau nai array ho
  reducers: {
    //expects other reducers
    //kk functionality chahincha thyasko reducer bancha
    // adduser,removeUser and delteUsers sabai action creators ho
    addUser(state, action) {
      // yasma chai simple state sanga matra kaam garne
      state.push(action.payload);
      console.log(action.payload);
      // console.log(state);
    },
    removeUser(state, action) {},
    deleteUsers(state, action) {},
  },
});


// kk action creator ho vanera pattta lagauna sakinxa
console.log(userSlice.actions);
// 
export default userSlice;
export const {addUser}=userSlice.actions;


// deafualt anusar export garesi we cannot use curly braces
