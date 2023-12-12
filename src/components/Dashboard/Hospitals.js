import React, { useEffect, useState } from 'react'
import Layout from '../shared/Layout/Layout'
import api from '../../services/Api'
import moment from 'moment'

const Hospitals = () => {
    const [data,setData] =useState([])
    const getHospitals = async (req,res) =>{
        try {
            const {data} =await api.get('/inventry/get-hospitals')
            if(data?.success){
                setData(data?.hospitals)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getHospitals()
    },[])
  return (
    <Layout>
            <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
        {data?.map(record => (
          <tr key={record._id}>
            <td>{record.hospitalName}</td>
            <td>{record.email}</td>
            <td>{record.phone}</td>
            <td>{record.address}</td>
            <td>{moment(record.createdAt).format('DD/MM/YYY hh:mm A')}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default Hospitals
