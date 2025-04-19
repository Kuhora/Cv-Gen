import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Preview from './components/Preview';
import PdfGen from './components/PdfGen';

function App() {
    return (
        <Router>
            <div className="app">
                <h1>CV Generator</h1>
                <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/preview" element={<Preview />} />
                    <Route path="/pdf" element={<PdfGen />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;