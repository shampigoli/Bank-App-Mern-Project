import React, { useEffect, useState } from 'react'
import Layout from '../shared/Layout/Layout'
import api from '../../services/Api'
import moment from 'moment'
import { useSelector } from 'react-redux'

const Organization = () => {
    const {user} =useSelector(state => state.auth)
    const [data,setData] =useState([])
    const getOrganization = async (req,res) =>{
        try {
            if(user?.role == 'donar'){
                const {data} =await api.get('/inventry/get-organization')
                if(data?.success){
                    setData(data?.organizations)
                }
            }
            if(user?.role == 'hospital'){
                const {data} =await api.get('/inventry/get-organization-for-hospital')
                if(data?.success){
                    setData(data?.organizations)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getOrganization()
    },[user])
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
            <td>{record.organizationName || record.name}</td>
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

export default Organization
