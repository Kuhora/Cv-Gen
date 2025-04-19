import React from 'react';
import { useLocation } from 'react-router-dom';

const Preview = () => {
    const { state } = useLocation();
    const formData = state || {};

    return (
        <div className="preview-container">
            <h1>Preview Gen</h1>
            
            <div className="cv-preview">
                <h2>{formData.name || 'Your Name'}</h2>
                <p>Email: {formData.email}</p>
                <p>Tel: {formData.phone}</p>
                
                <h3>Objective</h3>
                <p>{formData.objective}</p>
                
                <h3>Education</h3>
                <p>{formData.academic}</p>
                
                <h3>Work Experience</h3>
                <p>{formData.experience}</p>
            </div>
            
            <button onClick={() => window.print()} className="btn">Gen Cv</button>
        </div>
    );
};

export default Preview;