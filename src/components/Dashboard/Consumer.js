import React, { useEffect, useState } from 'react'
import Layout from '../shared/Layout/Layout'
import api from '../../services/Api'
import moment from 'moment'
import { useSelector } from 'react-redux'
const Consumer = () => {
    const {user} =useSelector(state => state.auth)
    const [data,setData] =useState([])
    const getDonars = async (req,res) =>{
        try {
            const {data} =await api.post('/inventry/get-inventry-hospital',{
                filters:{
                    inventryType:"out",
                    hospital:user?._id
                }
            })
            if(data?.success){
                setData(data?.inventry)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getDonars()
    },[])
  return (
    <Layout>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Blood Group</th>
            <th scope="col">Inventry Type</th>
            <th scope="col">Quantity</th>
            <th scope="col">Email</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
        {data?.map(record => (
          <tr key={record._id}>
            <td>{record.bloodGroup}</td>
            <td>{record.inventryType}</td>
            <td>{record.quantity}</td>
            <td>{record.email}</td>
            <td>{moment(record.createdAt).format('DD/MM/YYY hh:mm A')}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default Consumer
