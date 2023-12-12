import React, { useEffect, useState } from "react";
import api from "../../services/Api";
import moment from "moment";
import Layout from "../../components/shared/Layout/Layout";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const OrganizationList = () => {
    const [data, setData] = useState([]);
    const getDonars = async (req, res) => {
      try {
        const { data } = await api.get("/admin/org-list");
        if (data?.success) {
          setData(data?.orgData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getDonars();
    }, []);
  
    //delete donar data
    const handleDelete = async (id) => {
      try {
        let answer = window.prompt(
          "Are you sure to delete to delete htis data",
          "Sure"
        );
        if (!answer) return;
        const { data } = await api.delete(`/admin/delete-donar/${id}`);
        toast.success(data?.message);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <Layout>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((record) => (
              <tr key={record._id}>
                <td>{record.organizationName || record.name}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYY hh:mm A")}</td>
                <td className="flex flex-row ">
                  <button className="btn btn-danger" onClick={() =>handleDelete(record._id)}>
                    <MdDelete size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    );
  
}

export default OrganizationList
