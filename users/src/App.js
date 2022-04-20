import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import AddUsers from "./AddUsers";
import EditUser from "./EditUser";
import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const UserContext = createContext();

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(">>>>", users);

  const handleEditFormSubmit=(event,editUserId,editFormData) => {
    event.preventDefault();
  
    const editedUser={
      id:editUserId,
      name:editFormData.name,
      email:editFormData.email,
      phone:editFormData.phone,
    };
  
    const newUserData=[...users];
    const index=users.findIndex(user => user.id === editUserId);
  
    newUserData[index] =editedUser;
    
  
   setUsers(newUserData);
  }


  // const handleDeleteUser=(userId) => {
   
  
  
  //   const newUserData=[...users];
  //   const index=users.findIndex(user => user.id === userId);
  
  //   newUserData.slice( index,1)
    
  
  //  setUsers(newUserData);
  // }
  

  return (
    <div>
      <UserContext.Provider value={{users ,setUsers}} >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home  handleEditFormSubmit={handleEditFormSubmit}  />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="user/add" element={<AddUsers />} />
            {/* <Route path="user/edit/:id" element={<EditUser />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
