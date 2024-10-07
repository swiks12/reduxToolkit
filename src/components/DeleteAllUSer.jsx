import React from 'react'
// import {clearAllUsers} from '../store/slices/UserSlice'
import { clearAllUSer } from '../store/actions';
import { useDispatch } from 'react-redux'

const DeleteAllUSer = () => {
  const dispatch =useDispatch();
  const deleteUsers=()=>{
    dispatch(clearAllUSer());

  }
  return (
    <div className='p-2 rounded-xl bg-red-700' onClick={deleteUsers}>DeleteAllUSer</div>
  )
}

export default DeleteAllUSer