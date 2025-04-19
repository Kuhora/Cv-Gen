import React, { useState } from 'react';

const Formu = () => {
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

    const [showPreview, setShowPreview] = useState(false);

    const formChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const saveDados = (e: React.FormEvent) => {
        e.preventDefault();
        setShowPreview(true);
    };

    if (showPreview) {
        return (
            <div className="preview">
                <h2>{form.name || '[Your Name]'}</h2>
                <p><strong>Email:</strong> {form.email || '[your@email.com]'}</p>
                <p><strong>Tel:</strong> {form.phone || '[00] 00000-0000'}</p>
                <p><strong>Address:</strong> {form.address || 'City, State, Country'}</p>
                <p><strong>LinkedIn:</strong> {form.linkedin || 'linkedin.com/your-profile'}</p>
                
                <h3>Objective</h3>
                <p>{form.objective || 'Career Goal'}</p>
                
                <h3>Education</h3>
                <p>{form.academic || 'Your academic background goes here...'}</p>
                
                <h3>Work Experience</h3>
                <p>{form.experience || 'Describe your professional experience here...'}</p>
                
                <div className="buttons">
                    <button onClick={() => window.print()} className="btn">Pdf Gen</button>
                    <button onClick={() => setShowPreview(false)} className="btn btn-secondary">Return and Edit</button>
                </div>
            </div>
        );
    }

    return (
        <div className="form-container">
            <h2>📝 Your Profile Information</h2>
            <form onSubmit={saveDados}>
                <div className="form-group">
                    <label>Full Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={form.name} 
                        onChange={formChange} 
                        placeholder="your Full Name here"
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={form.email} 
                        onChange={formChange} 
                        placeholder="your@email.com"
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label>Tel:</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        value={form.phone} 
                        onChange={formChange} 
                        placeholder="(00) 00000-0000"
                    />
                </div>
                
                <div className="form-group">
                    <label>Addres:</label>
                    <input 
                        type="text" 
                        name="address" 
                        value={form.address} 
                        onChange={formChange}
                        placeholder="City, State, Country"
                    />
                </div>
                
                <div className="form-group">
                    <label>LinkedIn:</label>
                    <input 
                        type="url" 
                        name="linkedin" 
                        value={form.linkedin} 
                        onChange={formChange} 
                        placeholder="linkedin.com/in/your-profile"
                    />
                </div>
                
                <div className="form-group">
                    <label>Objective:</label>
                    <textarea 
                        name="objective" 
                        value={form.objective} 
                        onChange={formChange} 
                        placeholder="describe your professional experience"
                        rows={3}
                    />
                </div>
                
                <div className="form-group">
                    <label>Education:</label>
                    <textarea 
                        name="academic" 
                        value={form.academic} 
                        onChange={formChange} 
                        placeholder="your academic background"
                        rows={4}
                    />
                </div>
                
                <div className="form-group">
                    <label>Work Experience</label>
                    <textarea 
                        name="experience" 
                        value={form.experience} 
                        onChange={formChange} 
                        placeholder="describe your professional experience"
                        rows={5}
                    />
                </div>
                
                <button type="submit" className="btn">Preview</button>
            </form>
        </div>
    );
};

export default Formu;