import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "./App";

const EditUser = (props) => {
  const editUsers = useContext(UserContext);
  const { id } = useParams();
 

  console.log("kkkkkkk ", props);
  const [editUserData, setAddUserData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

// const editUpdateUserData=editUsers[id-1];
// console.log("sdofdhfuffdhg",editUpdateUserData.email);



  // const editIndex=editUsers.findIndex(editUser =>editUser.id==={id})
  console.log("kskkddkkd", id, editUsers[id-1]);

  const { name, username, email, phone } = editUserData;

  const onInputChange = (e) => {
    setAddUserData({ ...editUserData, [e.target.name]: e.target.value });
  };

  function onSubmit(e) {
    e.preventDefault();
    console.log(editUsers);
    editUsers.push(editUserData);
  }

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
            <h1 className="text-center text-lg font-bold text-gray-500">
              Edit User
            </h1>
            <div className="space-y-4 mt-6">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  name="name"
                  onChange={(e) => {
                    onInputChange(e);
                  }}
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="username"
                  value={username}
                  name="username"
                  onChange={(e) => {
                    onInputChange(e);
                  }}
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  name="email"
                  onChange={(e) => {
                    onInputChange(e);
                  }}
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  name="phone"
                  onChange={(e) => {
                    onInputChange(e);
                  }}
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
            </div>
            <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditUser;