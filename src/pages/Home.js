import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/shared/Loader";
import Layout from "../components/shared/Layout/Layout";
import Modal from "../components/shared/Modal/Modal";
import api from "../services/Api";
import moment from 'moment'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { loading, error ,user} = useSelector((state) => state.auth);
  const [data,setData] = useState([]);
  const navigate= useNavigate()
  //get blood record
  const getBloodRecord = async () => {
    try {
      const {data} = await api.get("/inventry/get-inventry")
      if (data) {
        setData(data?.inventry);
        console.log(data);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBloodRecord();
  }, []);
  return (
    <Layout>
    {user?.role == 'admin' && navigate('/admin-home')}
      {error && <span>{alert(error)}</span>}
      {/* {loading ? <Loader/> : (
      <h1>Home Page</h1>
    )} */}
      <h4
        className="ms-4 text-2xl cursor-pointer justify-center md:text-4xl flex items-center gap-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i className="fa-solid fa-plus text-success py-2"></i>
        Add Inventry
      </h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Blood Group</th>
            <th scope="col">Inventry Type</th>
            <th scope="col">Quantity</th>
            <th scope="col">Donar Email</th>
            <th scope="col">Time & Date</th>
          </tr>
        </thead>
        <tbody>
        {data?.map(record => (
          <tr key={record._id}>
            <td>{record.bloodGroup}</td>
            <td>{record.inventryType}</td>
            <td>{record.quantity} (ml)</td>
            <td>{record.email}</td>
            <td>{moment(record.createdAt).format('DD/MM/YYY hh:mm A')}</td>
          </tr>
          ))}
        </tbody>
      </table>
      <Modal />
    </Layout>
  );
};

export default Home;
