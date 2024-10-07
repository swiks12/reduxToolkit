import { createSlice } from "@reduxjs/toolkit";
import { clearAllUSer } from "../actions";

const userSlice = createSlice({
  //this slice expects an object with values of name,initial state and reducers
  // yasma bhako state is like user slice ko matra state 
  name: "user",
  initialState: [], //data haru ek thau ma store garne ani dekhaune and data store garne best thau nai array ho
  reducers: {
    //expects other reducers
    //kk functionality chahincha thyasko reducer bancha
    // asdduser,removeUser and delteUsers sabai action creators ho
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
    clearAllUsers(state, action) {
      // hami khali return empty garihaleko ho 
      return [];
    },
  },
  // if action is supposed to be handeld by one reducer then user reducer only
  // if a action is supposed to br handled by multiple reducers use extra reducers--- like when the same action needs to be done by many slices 
  // extrareducers can be a function or an object ---here we are using function

  // think of writing extraReducers part in some ither slice like admin slice where we are simply calling the clearAllUSer reducer fro similar functionality


  //this extrareducer we are using woeks on the basis of the microreducer above i.e clearAllUsers, so when  clearAllUSer hatayincha tyasko basis nai janxa

  // yasasri chai hami tyai reduxer ko fucntionality multiple thau ma call garna sakchau
  // extrareducer yo clearAlluSer ko basis ma kaam garirako huncaha so thyo hatauna vayena
  // extra reducer euta base ma kam garxa ani yadi kasaile thyo base nai hataidiyo vane wo koi kaam ka anahi base is clearAllUsers
  extraReducers(builder){
    builder.addCase(clearAllUSer,()=>{
      return [];
    });

  }
});


// kk action creator ho vanera pattta lagauna sakinxa
console.log(userSlice.actions);
// 
export default userSlice;
export const {addUser,removeUser,clearAllUsers}=userSlice.actions;


// deafualt anusar export garesi we cannot use curly braces
