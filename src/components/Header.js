import React, { useEffect } from 'react'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((store)=>store.user)
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)


  const handleSignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
     navigate("/error")
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate('/browse')
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
    });

    return ()=>{
      unsubscribe()
    }
  },[])

  const handleGptSearchClick =()=>{
    //Toggle Gpt search button
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange=(e)=>{
     dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={LOGO} alt="logo"/>

     
      {user !== null && (<div className='flex p-3 '>
       {showGptSearch && <select className='p-2 m-5 py-1 px-10 pt-1  bg-gray-900 text-white rounded-lg' onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map(lang=>
        <>
         <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
         </>
        )}
        </select>} 
        <button className=' px-8 mx-4 my-5 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>{showGptSearch ? "Home Page" : "GPT Search"}</button>
      <img className="w-12 h-12 mt-3 " src={USER_AVATAR} alt="usericon" />
      <button onClick={handleSignOut} className='font-bold text-white px-4 pb-1 '>Sign Out</button>
    </div>)}
    </div>
  
  ) 
}

export default Header