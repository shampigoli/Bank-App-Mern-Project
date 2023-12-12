import React, { useState } from "react";
import InputType from "../../shared/form/InputType";
import api from "./../../../services/Api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const Modal = () => {
  const [inventryType, setInventryType] = useState("out");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [email, setEmail] = useState("");
  const { user } = useSelector((state) => state.auth);
  const hs = async () => {
    try {
      if (!bloodGroup || !quantity) {
        return toast.error("Please provide all the fields");
      }
      const { data } = await api.post("/inventry/create-inventry", {
        email,
        organization: user?._id,
        inventryType,
        bloodGroup,
        quantity,
      });
      if (data?.success) {
        toast.success("New Record Added");
        window.location.reload();
      }
    //   return data;
    } catch (error) {
        alert(error.response.data.message)
        console.log(error);
        window.location.reload();
    }
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content bg-black text-white">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-center flex justify-center items-center"
                id="exampleModalLabel"
              >
                Manage Blood Record
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="flex">
                Blood Type: &nbsp;
                <div className="form-check flex items-center gap-2 text-xl">
                  <input
                    type="radio"
                    name="inRadio"
                    className="from-check-input"
                    value={"in"}
                    onChange={(e) => setInventryType(e.target.value)}
                  />
                  <label htmlFor="in" className="form-check-label">
                    In
                  </label>
                </div>
                <div className="form-check flex items-center gap-2 text-xl">
                  <input
                    type="radio"
                    name="inRadio"
                    value={"out"}
                    defaultChecked
                    onChange={(e) => setInventryType(e.target.value)}
                  />
                  <label htmlFor="out" className="form-check-label">
                    Out
                  </label>
                </div>
              </div>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                <option defaultValue={'Open this select menu'}>Open this select menu</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
              <InputType
                labelText={"Donar Email"}
                labelFor={"Email"}
                inputType={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputType
                labelText={"Quantity (ML)"}
                labelFor={"quantity"}
                inputType={"Number"}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary" onClick={hs}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
