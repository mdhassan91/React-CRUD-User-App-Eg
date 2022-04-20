import React, { useContext, useState } from "react";
import { UserContext } from "./App";

const AddUsers = () => {
  const { users } = useContext(UserContext);
  const [addUserData, setAddUserData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  const { name, username, email, phone } = addUserData;

  const onInputChange = (e) => {
    setAddUserData({ ...addUserData, [e.target.name]: e.target.value });
  };

  function onSubmit(e) {
    e.preventDefault();
    console.log({ users });
    users.push(addUserData);
  }

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
            <h1 className="text-center text-lg font-bold text-gray-500">
              Add User
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
              Add User
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddUsers;
