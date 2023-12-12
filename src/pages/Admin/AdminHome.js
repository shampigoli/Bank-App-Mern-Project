import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { useSelector } from 'react-redux'

const AdminHome = () => {
    const {user} = useSelector(state => state.auth)
  return (
    <Layout>
    <div className="container">
        <div className="flex flex-col mt-4">
            <h1 className=' text-3xl p-2 overflow-hidden'>Welcome to the Admin Page <i className='text-success'>{user?.name}</i></h1>
            <h3 className='overflow-hidden'>Manage Blood Bank App</h3>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos consectetur rerum sit tenetur debitis, harum reiciendis exercitationem quo ipsum illo tempora placeat, necessitatibus enim eveniet nisi aperiam magni, in illum deleniti repellendus facere. Tempora dolorem quidem laudantium adipisci deserunt inventore labore repudiandae consequatur quia, quod ad dolores vero excepturi fugit, enim molestiae facilis pariatur voluptates. Laudantium eum sed numquam velit aliquid repellendus, totam quaerat sequi. Nesciunt asperiores et consequatur quibusdam quas fugiat autem, veritatis, natus dolore cum in at maxime similique, neque corporis. Molestias corrupti vero a quae, tempora cumque. Facilis ipsam expedita, eveniet ad veritatis, minus hic praesentium itaque, nulla illo at error aperiam enim dignissimos unde provident odit sint pariatur fugiat! Aliquid placeat architecto possimus? Veritatis architecto modi, laudantium animi voluptatibus cum repellat dolorem accusamus earum? Qui delectus assumenda ullam minima, perferendis mollitia placeat sapiente aperiam quae id. Assumenda cumque suscipit, architecto blanditiis, eos exercitationem tenetur eum dignissimos deserunt sit officiis odio repellendus adipisci totam impedit repudiandae molestiae eligendi numquam quo nisi mollitia fugit. Placeat vero, eos dicta assumenda corporis minus sequi dolore quae, quam sint facilis veniam labore ex quod sunt ullam. Voluptate delectus molestiae quasi eum. Dolorum illum quod quae quis, exercitationem accusantium iste pariatur.</p>
        </div>
    </div>
    </Layout>
  )
}

export default AdminHome
