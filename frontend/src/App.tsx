import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios'; // Импорт библиотеки Axios
import danyaLogo from './assets/logo.png';
import './App.css';


function App() {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files);
            setSelectedFiles(filesArray);
        }
    };

    const handleUpload = async (event: FormEvent) => {
        event.preventDefault();

        const formData = new FormData();
        selectedFiles.forEach(file => {
            formData.append('files', file);
        });

        try {
            const response = await axios.post('http://localhost/upload', formData);

            if (response.status === 200) {
                console.log('Files uploaded successfully');
                // Дополнительная логика по успешной загрузке файлов
            } else {
                console.error('Error uploading files');
                // Дополнительная логика по ошибке загрузки файлов
            }
        } catch (error) {
            console.error('An error occurred', error);
            // Дополнительная логика по обработке ошибки запроса
        }
    };

    return (
        <div className="d-flex flex-column vh-100">
            {/* Верхняя часть страницы, включая логотип */}
            <nav className="navbar bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand">
                        <img src={danyaLogo} alt="Bootstrap" width="40" height="40" />
                    </a>
                </div>
            </nav>
            <div className="col-md-6">
                <h2>Загрузка данных</h2>
                <form onSubmit={handleUpload}>
                    <div className="mb-3">
                        <label htmlFor="fileInput" className="form-label">Выберите файлы</label>
                        <input
                            type="file"
                            className="form-control"
                            id="fileInput"
                            multiple
                            onChange={handleFileChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Загрузить</button>
                </form>
            </div>
        </div>
    );
}

export default App;
