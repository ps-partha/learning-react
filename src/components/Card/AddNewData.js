import React, { useState } from "react";

const AddNewData = ({ handleNewData }) => {
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewData(formData);
    setFormData({ title: '', description: '' }); // Clear the form after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="userForm">
        <input type="text" name="title" className="title" placeholder="Enter title.." value={formData.title} onChange={handleChange} required />
        <textarea name="description" className="desc" value={formData.description} placeholder="Enter description.." onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNewData;
