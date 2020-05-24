import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import VisibilitySensor from "react-visibility-sensor";
import { FlowerSpinner } from "react-epic-spinners";
import BackGround from "./../component/BackGround/BackGround";

function TemplateHome() {
  const [loading,setLoading] = useState(true);
  const history = useHistory();
  const onVisibilityChange = isVisible => {
    console.log(isVisible)
    if (isVisible) setTimeout(() => setLoading(false), 2000);
  }
  useEffect(()=>{
    if(loading===false){
      history.push('/home')
    }
  },[loading,history])

  return (
    <>
      {
        <div>
          <BackGround></BackGround>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)"
            }}
          >
            <VisibilitySensor onChange={onVisibilityChange}>
              <FlowerSpinner color="#ffffff" size={70} />
            </VisibilitySensor>
          </div>
        </div>
      }
    </>
  );
}

export default TemplateHome;