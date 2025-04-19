import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const result = await api.get('/');
    setUsers(result.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    await api.delete(`/${id}`);
    loadUsers();
  };

  return (
    <div>
      <h2>User List</h2>
      <Link to="/add" className="btn btn-primary mb-3">Create CRUD</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.location}</td>
              <td>
                <Link to={`/view/${user.id}`} className="btn btn-warning btn-sm me-1">View</Link>
                <Link to={`/edit/${user.id}`} className="btn btn-success btn-sm me-1">Edit</Link>
                <button onClick={() => deleteUser(user.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
