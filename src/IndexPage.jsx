import { Link } from 'react-router';
import { artistsData, commercialsData } from './data';

function ArtistCard({ artist }) {
  return (
    <div className="col-md-6 col-xl-3 d-flex">
      <div className="card mt-4 mb-4 w-100">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-auto col-xl-12">
              <img src={artist.image} alt={artist.name} className="img-fluid pb-3" />
            </div>
            <div className="col-sm col-xl-12">
              <h2 className="card-title">{artist.name}</h2>
              <p className="card-text">#{artist.rank} {artist.votes.toLocaleString()} votes</p>
              <Link to="/artists" className="btn btn-dark">See More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommercialCard({ commercial }) {
  return (
    <div className="col-md-6 col-xl-3 d-flex">
      <div className="card mt-4 mb-4 w-100">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-auto col-xl-12">
              <img src={commercial.image} alt={commercial.name} className="img-fluid pb-3" />
            </div>
            <div className="col-sm col-xl-12">
              <h2 className="card-title">{commercial.name}</h2>
              <p className="card-text">#{commercial.rank} {commercial.votes.toLocaleString()} votes</p>
              <Link to="/commercials" className="btn btn-dark">See More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IndexPage() {
  // Show top 3 artists and top 3 commercials on the home page
  const topArtists = artistsData.slice(0, 3);
  const topCommercials = commercialsData.slice(0, 3);

  return (
    <main>
      <div className="container-fluid px-4">
        <p className="lead mt-4">Vote for your favorite artist to headline!</p>
        <div className="row">
          {topArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>

        <p className="lead">Vote your favorite commercial!!</p>
        <div className="row">
          {topCommercials.map((commercial) => (
            <CommercialCard key={commercial.id} commercial={commercial} />
          ))}
        </div>
      </div>
    </main>
  );
}