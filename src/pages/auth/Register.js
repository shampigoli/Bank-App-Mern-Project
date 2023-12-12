import React, { useState } from "react";
import Form from "../../components/shared/form/Form";
import { useSelector } from "react-redux";
import Loader from "../../components/shared/Loader";

const Register = () => {
  const {loading,error} =useSelector((state)=> state.auth)

  return (
    <>
    {error && <span>{alert(error)}</span>}
    {/* {loading ? <Loader/> :(
      <div className="row g-0">
        <div className="col-md-8">
          <img
            src="./assets/banner2.jpg"
            alt="loginImage"
            className="form-banner"
          />
        </div>
        <div className="col-md-4 from-container">
          <Form
            fromTilte={"Register Page"}
            
            submitBtn={"Register"}

            formType={"register"}
          />
        </div>
      </div>
    )} */}
    <div className="row g-0">
        <div className="col-md-8">
          <img
            src="./assets/banner2.jpg"
            alt="loginImage"
            className="form-banner"
          />
        </div>
        <div className="col-md-4 from-container">
          <Form
            fromTilte={"Register Page"}
            
            submitBtn={"Register"}

            formType={"register"}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
