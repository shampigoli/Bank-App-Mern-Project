import React from "react";
import { BiDonateBlood } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    toast.success("Logout Successfully!");
  };
  return (
    <div>
      <nav className="bg-black w-full flex justify-between items-center text-white p-4 ">
        <div className="flex items-center gap-3">
          <h1 className="overflow-hidden text-red-500 text-3xl">
            <Link to="/">Aj Blood Bank</Link>
          </h1>
          <h2 className="text-xl overflow-hidden text-red-500">
            <BiDonateBlood size={28} />
          </h2>
        </div>
        <div className="flex gap-2 items-center">
          <h2 className="text-xl overflow-hidden">Welcome </h2>
          <h2 className="btn btn-success tracking-[2px] capitalize flex">
            {" "}
            <FaRegUserCircle size={24} />
            &nbsp;{user?.name || user?.organizationName || user?.hospitalName}
          </h2>
          <h2 className="btn btn-secondary uppercase"> {user?.role}</h2>
          {location.pathname === "/" ||
          location.pathname === "/donar" ||
          location.pathname == "/hospital" ? (
            <Link to="/analytics">Analytics</Link>
          ) : (
            <Link to="/">Home</Link>
          )}
          <button
            className="btn btn-danger overflow-hidden"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
