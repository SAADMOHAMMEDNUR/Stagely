import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './HeaderBar.jsx';
import { Footer } from './Footer.jsx';
import { IndexPage } from './IndexPage.jsx';
import { ArtistsPage } from './ArtistsPage.jsx';
import { ArtistDetail } from './ArtistDetail.jsx'; 
import { CommercialsPage } from './CommercialsPage.jsx';
import { CommercialDetail } from './CommercialDetail.jsx';

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
        <Route path="/artists/detail" element={<ArtistDetail />} />
        <Route path="/commercials" element={<CommercialsPage />} />
        <Route path="/commercials/detail" element={<CommercialDetail />} />
        <Route path="/bingo" element={<BingoPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
