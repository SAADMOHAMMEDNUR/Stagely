import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './HeaderBar.jsx'
import { Footer } from './Footer.jsx'
import { IndexPage } from './IndexPage.jsx'

function ArtistsPage() {
  return <h2 className="text-center mt-5">Artists Page (Coming Soon)</h2>
}

function CommercialsPage() {
  return <h2 className="text-center mt-5">Commercials Page (Coming Soon)</h2>
}

function BingoPage() {
  return <h2 className="text-center mt-5">Bingo Page (Coming Soon)</h2>
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/commercials" element={<CommercialsPage />} />
        <Route path="/bingo" element={<BingoPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App