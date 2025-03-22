import React from "react";

const FormComponent = ({ fields, onSubmit, buttonText = "Submit" }) => {
  const [formData, setFormData] = React.useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {fields.map((field) => (
        <div key={field.name} className="form-group">
          <label>{field.label}</label>
          {field.type === "file" ? (
            <input
              type="file"
              name={field.name}
              accept={field.accept || "*"}
              onChange={handleFileChange}
              required={field.required}
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              required={field.required}
              placeholder={field.placeholder || ""}
            />
          )}
        </div>
      ))}

      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default FormComponent;