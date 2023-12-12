import React, { useEffect, useState } from 'react'
import Layout from '../shared/Layout/Layout'
import api from '../../services/Api'
import moment from 'moment'
const Donar = () => {
    const [data,setData] =useState([])
    const getDonars = async (req,res) =>{
        try {
            const {data} =await api.get('/inventry/get-donars')
            if(data?.success){
                setData(data?.donars)
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
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
        {data?.map(record => (
          <tr key={record._id}>
            <td>{record.name || record.organizationName + "(ORG)"}</td>
            <td>{record.email}</td>
            <td>{record.phone}</td>
            <td>{moment(record.createdAt).format('DD/MM/YYY hh:mm A')}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default Donar
