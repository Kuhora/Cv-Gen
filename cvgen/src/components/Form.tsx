import React, { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    objective: '',
    academic: '',
    experience: ''
    });

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const inputName = e.target.name;
        const inputValue = e.target.value;
    
        setForm(prevForm => ({
            ...prevForm,
            [inputName]: inputValue
        }));
    }
    

    return (
    <form>
        <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleInputChange}
        />

        <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleInputChange}
        />

        <input
        type="tel"
        name="phone"
        placeholder="Tel"
        value={form.phone}
        onChange={handleInputChange}
        />

        <input
        type="text"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleInputChange}
        />

        <input
        type="url"
        name="linkedin"
        placeholder="LinkedIn"
        value={form.linkedin}
        onChange={handleInputChange}
        />

        <textarea
        name="objective"
        placeholder="Objective"
        value={form.objective}
        onChange={handleInputChange}
        />

        <textarea
        name="academic"
        placeholder="Academic Background"
        value={form.academic}
        onChange={handleInputChange}
        />

        <textarea
        name="experience"
        placeholder="Work Experience"
        value={form.experience}
        onChange={handleInputChange}
        />
    </form>
    );
};

export default Form;
