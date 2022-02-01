import React, { useContext, useEffect, useState } from "react";
import avatar from "./img/avatar/1.png";
import axios from "axios";
import Random from "./Random";

const App = () => {
  const [bio, setBio] = useState([]);
  const [pro, setPro] = useState([]);
  const [img2 , setImg2] = useState([])
  useEffect(() => {
    axios
      .get(`https://techwich.net/twapp/test_task/random_profile?format=json`)
      .then((response) => {
        setBio(response.data);
        setPro(response.data.user);
        setImg2(response.data.user.profilePicture)
       
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <div className="container-lg">
        <div className="row">
          <div className="col-xl-4 min bg-blue-1 text-center p-4 pt-5">
            <img src={avatar} alt={img2.mediaKey} className="w-auto-2 w-50-1" />
            <div>
              <h3 className="color-h3 my-4">
                {" "}
                {pro.firstName} {pro.lastName}
              </h3>

              <p className="color-p"> {pro.username}</p>
              <div className="d-flex justify-content-center">
                <i className="fa-envelope fas icon-1"></i>
                <p className="color-h3 m-0 pl-2 font-12">{pro.email}</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 min text-center p-4 pt-5">
            <div className="row">
              <div className="col-xl-8 mx-auto">
              <h2 className="color-h2">BIO</h2>
             <p className="mt-3">{bio.bio}</p>
             <Random></Random>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
