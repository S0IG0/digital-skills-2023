import { useState, ChangeEvent, FormEvent } from 'react'; // Импорт React и необходимых типов
import danyaLogo from './assets/logo.png';
import './App.css';

function App() {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]); // Указание типа для состояния

    // Обработчик изменения выбранных файлов
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files);
            setSelectedFiles(filesArray);
        }
    };

    // Обработчик отправки формы
    const handleUpload = (event: FormEvent) => {
        event.preventDefault();
        // Обработка загрузки данных, используя selectedFiles
        console.log(selectedFiles);
        // Добавьте код для отправки файлов на сервер
        // POST localhost/upload
        // файлы с ключом files
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
            {/* Форма загрузки файлов */}
            <div className="col-md-6">
                <h2>Загрузка данных</h2>
                <form onSubmit={handleUpload}>
                    <div className="mb-3">
                        <label htmlFor="fileInput" className="form-label">Выберите файлы</label>
                        {/* Поле выбора файлов */}
                        <input
                            type="file"
                            className="form-control"
                            id="fileInput"
                            multiple
                            onChange={handleFileChange}
                        />
                    </div>
                    {/* Кнопка отправки формы */}
                    <button type="submit" className="btn btn-primary">Загрузить</button>
                </form>
            </div>
        </div>
    );
}

export default App;
