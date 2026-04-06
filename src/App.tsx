//import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage  from './pages/HomePage'
import FilmsPage from './pages/FilmsPage'
import FilmDetailPage from "./pages/FilmDetailPage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"       element={<HomePage />} />
                <Route path="/films"  element={<FilmsPage />} />
                <Route path="/films/:id"  element={<FilmDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
