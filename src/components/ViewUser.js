import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';

const ViewUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    api.get(`/${id}`).then(res => setUser(res.data));
  }, [id]);

  return (
    <div>
      <h2>User Details</h2>
      <ul className="list-group">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Location: {user.location}</li>
      </ul>
      <Link to="/" className="btn btn-secondary mt-3">Back</Link>
    </div>
  );
};

export default ViewUser;