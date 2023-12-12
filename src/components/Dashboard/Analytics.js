import React, { useEffect, useState } from "react";
import Header from "../shared/Layout/Header";
import api from "../../services/Api";
import {motion} from 'framer-motion';
import moment from 'moment'
const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventryData, setInventryData] = useState([]);
  const colors= [
      '#B99470',
      '#F4DFC8',
      '#2D9596',
    '#FFC5C5',
    '#0766AD',
    '#C7DCA7',
    '#A9B388',
    '#5FBDFF',
  ]
  //get bloodGroup Records
  const getBloodGroupData = async () => {
    try {
      const { data } = await api.get("/analytics/bloodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBloodGroupData();
  }, []);

   //get blood record
   const getBloodRecord = async () => {
    try {
      const {data} = await api.get("/inventry/get-recent-inventry")
      if (data) {
        setInventryData(data?.inventry);
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
    <div>
      <Header />
      <div className="flex flex-wrap justify-center">
        {data?.map((record,i) => (
          <motion.div whileHover={{scale:1.1}} className=" cursor-pointer card m-2 text-white card-body" key={i} style={{width: '17.75rem', backgroundColor:`${colors[i]}`}} >
            <div className="p-1 py-2">
              <h5 className="card-title font-semibold text-center text-4xl overflow-hidden">{record.bloodGroup}</h5>
              <p className="card-text flex justify-around text-xl">
              TotalIn: <b>{record.totalIn}</b>
              TotalOut: <b>{record.totalOut}</b>
              </p>
              <div className="card-footer text-center bg-black w-full mt-2 text-white">
              Available : {record.availableBlood} (ml)
              </div>
            </div>
          </motion.div>
        ))}
        <h1 className="text-xl text-center font-semibold md:text-3xl bg-black w-full text-white p-1">Recent Blood Transactions</h1>
        <div className="flex justify-between w-[90%]  items-center">
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
        {inventryData?.map(record => (
          <tr key={record._id}>
            <td >{record.bloodGroup}</td>
            <td>{record.inventryType}</td>
            <td>{record.quantity} (ml)</td>
            <td>{record.email}</td>
            <td>{moment(record.createdAt).format('DD/MM/YYY hh:mm A')}</td>
          </tr>
          ))}
        </tbody>
      </table>
        </div>
       
      </div>
    </div>
  );
};

export default Analytics;
