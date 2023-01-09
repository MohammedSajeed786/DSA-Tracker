import React,{useContext, useState,useEffect} from 'react'
import LoadingBar from 'react-top-loading-bar'
import LoadingContext from '../context/Loading/LoadingContext'

export default function Loading() {
    let  loadingContext = useContext(LoadingContext);
    let {loader,updateLoader}=loadingContext;
    
    // useEffect(() => {
        
    // }, loader)
    
  return (
    <div>
    <LoadingBar
      color='#ffffff'
      progress={loader}
      onLoaderFinished={() => updateLoader(0)}

    />
    </div>
  )
}
