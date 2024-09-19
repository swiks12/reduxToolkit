import { configureStore } from "@reduxjs/toolkit";
import userSlice  from "./slices/UserSlice";


const store=configureStore({
    reducer:{
        //reducer ko name dine 
        // all the reducers jun hamroo userSlice ma thyo jastai addUser tyasko acces hamro store ma aaisakcha
        users:userSlice.reducer,
        // flow main reducuder ma janxa in index.js thne kun slice h herxa then kun particular reducer ho herxa
        // users vaneko chai state ho 
    }

});

export default store;
