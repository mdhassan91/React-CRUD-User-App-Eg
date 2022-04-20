import React from "react";
import { Link } from "react-router-dom";

const ReadOnlyRow = ({ user, index, handleEditClick, handleDeleteUser }) => {
  return (
    <>
      <tr className="whitespace-nowrap" key={index}>
        <td className="px-6 py-4 text-sm text-gray-500">{index + 1}</td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-900">{user.name}</div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm text-gray-500">j {user.email}</div>
        </td>
        <td className="px-6 py-4 text-sm text-gray-500">{user.phone}</td>

        <td className="px-6 py-4 text-sm text-gray-500">
          <Link to="">View</Link>
        </td>

        <td className="px-6 py-4 text-sm text-gray-500">
          <button onClick={(e) => handleEditClick(e, user)}>Edit</button>
        </td>

        <td className="px-6 py-4 text-sm text-gray-500">
          <button
            onClick={() => {
              handleDeleteUser(user.id);
            }}
          >
            {" "}
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default ReadOnlyRow;
