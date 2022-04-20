const EditUser = ({handleEditFormChange,editFormData}) => {
  return ( 
    <>
    <tr>
<td>
<input
                  type="number"
                  placeholder="Sr.NO"
                  id="id"
                  onChange={handleEditFormChange}
                  />

</td>


<td>
<input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={editFormData.name}
                  onChange={handleEditFormChange}
                  />
</td>
<td>
<input
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  value={editFormData.email}
                  onChange={handleEditFormChange}
                  />
</td>
<td>
<input
                  type="text"
                  placeholder="Enter your phone"
                  name="phone"
                  value={editFormData.phone}
                  onChange={handleEditFormChange}
                  />
</td>

<td>
  <button type="submit"> Save</button>
</td>


    </tr>
    
    
    </>
   );
}
 
export default EditUser;


