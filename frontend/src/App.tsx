import danyaLogo from './assets/logo.png';
import './App.css';

function App() {
    const handleUpload = () => {
        // Обработка загрузки данных
    };

    return (
        <div className="d-flex flex-column vh-100">
            <nav className="navbar bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand">
                        <img src={danyaLogo} alt="Bootstrap" width="40" height="40" />
                    </a>
                </div>
            </nav>
            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Загрузка данных</h2>
                            <form onSubmit={handleUpload}>
                                <div className="mb-3">
                                    <label htmlFor="fileInput" className="form-label">Выберите файл</label>
                                    <input type="file" className="form-control" id="fileInput" />
                                </div>
                                <button type="submit" className="btn btn-primary">Загрузить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
