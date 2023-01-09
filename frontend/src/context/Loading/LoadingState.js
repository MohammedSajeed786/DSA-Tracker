import React,{useState} from "react";
import LoadingContext from "./LoadingContext";
 

export default function LoadingState(props) {
  const [loader, setloader] = useState(0);
  const updateLoader=(value)=>{
    // console.log("loader",value)
    setloader(value);
  }
  return <LoadingContext.Provider value={{loader,updateLoader}}>{props.children}</LoadingContext.Provider>;
}
