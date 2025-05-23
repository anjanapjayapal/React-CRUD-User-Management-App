import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api';

const EditUser = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', location: '' });
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/${id}`).then((res) => setForm(res.data));
  }, [id]);

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
    await api.put(`/${id}`, form);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-control mb-2"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <small className="text-danger">{errors.name}</small>}

        <input
          type="text"
          name="phone"
          className="form-control mb-2"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <small className="text-danger">{errors.phone}</small>}

        <input
          type="email"
          name="email"
          className="form-control mb-2"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}

        <input
          type="text"
          name="location"
          className="form-control mb-2"
          value={form.location}
          onChange={handleChange}
        />
        {errors.location && <small className="text-danger">{errors.location}</small>}

        <button className="btn btn-success">Update</button>
      </form>
    </div>
  );
};

export default EditUser;
