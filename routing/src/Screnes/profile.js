import React from "react";
import { useParams } from "react-router-dom";




function Profile() {
    const param = useParams()
    console.log(param);
  return (
    <>
      <h1> Welcome {param.userName} </h1>
    </>
  );
}

export default Profile;
