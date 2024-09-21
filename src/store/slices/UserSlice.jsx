import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const userSlice = createSlice({
  //this slice expects an object with values of name,initial state and reducers
  // yasma bhako state is like user slice ko matra state 
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
    removeUser(state, action) {
      console.log("hi"+action.payload)
      // state.pop() yasto garyo vane stack ma last ma k niskeko xa thyo pop huncha
      // state.pop(action.payload) yasari also doesnt work coz thyo stack anusar last ma j input gareko cha thhyo niklana parcha
      state.splice(action.payload,1);
      // splice works as first parameter ma chai index pass agrincha ani last ma chahi kati ota deldet garne vanera rakhne ho


    },
    deleteUsers(state, action) {},
  },
});


// kk action creator ho vanera pattta lagauna sakinxa
console.log(userSlice.actions);
// 
export default userSlice;
export const {addUser,removeUser}=userSlice.actions;


// deafualt anusar export garesi we cannot use curly braces
