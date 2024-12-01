import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function MainPage() {
  return (
    <div className="container-fluid">
      {/* Навигационная панель */}
      <nav className="navbar navbar-light bg-light d-flex justify-content-between px-4">
        <div>
          <Link to="/" className="btn btn-outline-primary">
            Главная страница
          </Link>
          <Link to="/services" className="btn btn-outline-primary">
            Услуги компании
          </Link>
        </div>
        <div>
          <button className="btn btn-outline-secondary">ФИО</button>
          <button className="btn btn-outline-secondary">Вход</button>
        </div>
      </nav>

      {/* Основной контент */}
      <div className="mt-4">
        {/* Карточка 1 */}
        <div className="card mb-3 bg-primary text-white">
          <div className="card-body">
            <h5 className="card-title">
              Eos harum aliquam repellendus quidem ipsam vel necessitatibus id quasi.
            </h5>
            <p className="card-text">Описание описание описание</p>
            <p className="card-text">
              <small>2024-11-13 03:45:10</small>
            </p>
          </div>
        </div>
        {/* Пустые карточки */}
        <div className="card mb-3 bg-primary text-white card-empty"></div>
        <div className="card mb-3 bg-primary text-white card-empty"></div>
      </div>

      {/* Нижняя панель */}
      <footer className="bg-light text-center py-3 mt-4">
        <div>
          <Link to="/" className="btn btn-outline-primary">
            Главная страница
          </Link>
          <Link to="/services" className="btn btn-outline-primary">
            Услуги компании
          </Link>
        </div>
        <p>&copy; 2024 Моя компания</p>
      </footer>
    </div>
  );
}

function ServicesPage() {
  return (
    <div>
      <h1>Страница услуг компании</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
