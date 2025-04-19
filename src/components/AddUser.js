import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const AddUser = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', location: '' });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const validateForm = () => {
  const newErrors = {};
  if (!form.name) newErrors.name = 'Name is required';
  if (!form.phone || !/^\d{10}$/.test(form.phone)) newErrors.phone = 'Phone number must be exactly 10 digits';
  if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Please enter a valid email address';
  if (!form.location) newErrors.location = 'Location is required';
  return newErrors;
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    await api.post('/', form);
    navigate('/');
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-control mb-2"
          placeholder="Name"
          onChange={handleChange}
        />
        {errors.name && <small className="text-danger">{errors.name}</small>}

        <input
          type="text"
          name="phone"
          className="form-control mb-2"
          placeholder="Phone"
          onChange={handleChange}
        />
        {errors.phone && <small className="text-danger">{errors.phone}</small>}

        <input
          type="email"
          name="email"
          className="form-control mb-2"
          placeholder="Email"
          onChange={handleChange}
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}

        <input
          type="text"
          name="location"
          className="form-control mb-2"
          placeholder="Location"
          onChange={handleChange}
        />
        {errors.location && <small className="text-danger">{errors.location}</small>}

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
