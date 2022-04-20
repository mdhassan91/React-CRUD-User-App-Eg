import React, { useState, useContext } from "react";
import {UserContext} from "./App";
import EditUser from "./EditUser"
import ReadOnlyRow  from "./ReadOnlyRow";



const Home = ({handleEditFormSubmit,}) => {
  const {users} = useContext(UserContext);
  const {setUsers}=useContext(UserContext)

// const [users,setUsers]= useState(data)


const [editUserId,setEditUserId]=useState(null)
const [editFormData, setEditFormData] = useState({
  name: "",

  email: "",
  phone: "",
});

const handleEditFormChange=(event) => {
  event.preventDefault();

const fieldName = event.target.getAttribute("name");
const fieldValue = event.target.value;

const newFormData={...editFormData};
newFormData[fieldName] = fieldValue;
setEditFormData(newFormData)

}
  const handleDeleteUser=(userId) => {
   
  console.log(userId);
  
  

const newUserData=users.filter(user => (user.id) !== userId);
  
   setUsers(newUserData);
  }
  




const handleEditClick = (event,user)=>{
event.preventDefault();
setEditUserId(user.id)

const formValues={
  name: user.name,

  email: user.email,
  phone: user.phone,
}
setEditFormData(formValues)

}

  return (
    <>
  
        {console.log(users)}
        <div className="container flex justify-center mx-auto">
          <form  onSubmit={(e)=>{
            
            handleEditFormSubmit(e,editUserId,editFormData)
            
            setEditUserId(null)
            }}>
          <div className="flex flex-col">
            <div className="w-full">
              <div className="border-b border-gray-200 shadow">
                <table className="divide-y divide-gray-300 ">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-2 text-xs text-gray-500">ID</th>
                      <th className="px-6 py-2 text-xs text-gray-500">Name</th>
                      <th className="px-6 py-2 text-xs text-gray-500">Email</th>
                      <th className="px-6 py-2 text-xs text-gray-500">Phone</th>
                      <th className="px-6 py-2 text-xs text-gray-500">View</th>
                      <th className="px-6 py-2 text-xs text-gray-500">Edit</th>
                      <th className="px-6 py-2 text-xs text-gray-500">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-300">
                    {users &&
                      users.map((user, index) => {
                        return (
 <>
{editUserId===user.id ? 
( <EditUser editFormData={editFormData} handleEditFormChange={handleEditFormChange}/>)
:( <ReadOnlyRow  user={user} index={index}  handleEditClick={handleEditClick} handleDeleteUser={handleDeleteUser}/>)}
 </>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          </form>
        </div>
     
    </>
  );
};

export default Home;
