import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";
const Form = ({ formType, submitBtn, fromTilte }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          if (formType == "login") return handleLogin(e, email, password, role);
          else if (formType === "register") {
            return handleRegister(
              e,
              name,
              role,
              email,
              password,
              organizationName,
              hospitalName,
              address,
              phone,
              website
            );
          }
        }}
      >
        <h1 className="text-center text-2xl md:text-4xl font-semibold overflow-hidden p-3">
          {fromTilte}
        </h1>
        <hr className="mt-[20px]" />
        <div className="flex justify-between items-center cursor-pointer mt-3">
          {/* radio buttons */}
          <div className="flex mb-2 items-center cursor-pointer">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              value={"donar"}
              id="donarRadio"
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label htmlFor="donarRadio" className="form-check-label ml-[2px]">
              Donar
            </label>
          </div>
          {/* radio buttons */}
          <div className="flex ms-2 mb-2 items-center cursor-pointer">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              value={"admin"}
              id="adminRadio"
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="donarRadio" className="form-check-label ml-[2px]">
              Admin
            </label>
          </div>
          {/* radio buttons */}
          <div className="flex ms-2  mb-2 items-center cursor-pointer">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              value={"hospital"}
              id="hospitalRadio"
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="donarRadio" className="form-check-label ml-[2px]">
              Hospital
            </label>
          </div>
          {/* radio buttons */}
          <div className="flex ms-2 mb-2 items-center cursor-pointer">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              value={"organization"}
              id="organizationRadio"
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="donarRadio" className="form-check-label ml-[2px]">
              Organization
            </label>
          </div>
        </div>
        {/* switch statement */}
        {(() => {
          //eslint-disable-next-line
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelFor={"foremail"}
                    labelText={"Email"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelFor={"forpassword"}
                    labelText={"Password"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  {(role == "admin" || role == "donar") && (
                    <InputType
                      labelFor={"forName"}
                      labelText={"Name"}
                      inputType={"text"}
                      name={"name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
                  {role == "organization" && (
                    <InputType
                      labelText={"Organization Name"}
                      labelFor={"forOrganizationName"}
                      inputType={"text"}
                      name={"organizatioName"}
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                    />
                  )}
                  {role == "hospital" && (
                    <InputType
                      labelFor={"forhospitalName"}
                      labelText={"Hospital Name"}
                      inputType={"text"}
                      name={"hospitalName"}
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />
                  )}
                  <InputType
                    labelFor={"foremail"}
                    labelText={"Email"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelFor={"forpassword"}
                    labelText={"Password"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputType
                    labelFor={"forWebsite"}
                    labelText={"Website"}
                    inputType={"text"}
                    name={"website"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <InputType
                    labelFor={"forAddress"}
                    labelText={"Address"}
                    inputType={"text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    labelFor={"forPhone"}
                    labelText={"Phone"}
                    inputType={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}
        {/* <InputType
          labelFor={"forRole"}
          labelText={"Role"}
          inputType={"text"}
          name={"Role"}
          value={role}
          onChange={(e)=>setRole(e.target.value)}
        /> */}
        <div className="flex justify-between items-center">
          {formType === "login" ? (
            <>
              <p>
                Not registered yet ?
                <Link to="/register" className="font-bold text-blue-900">
                  Register Here....
                </Link>
              </p>
            </>
          ) : (
            <>
              <p>
                Already User Please?
                <Link to="/login" className="font-bold text-blue-900">
                  Login Here...
                </Link>
              </p>
            </>
          )}
          <button className="btn bg-black text-white" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
