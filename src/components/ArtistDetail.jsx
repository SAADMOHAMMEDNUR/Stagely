import react from 'react';
import { Link, useParams } from 'react-router';
import { artistsData } from '../data/data';

export function ArtistDetail() {
  const { id } = useParams();
  console.log("URL id:", id);
  console.log("Artist data:", artistsData);

  const artist = artistsData.find(a => a.id == Number(id));
  console.log("Found artist:", artist);

  if (!artist) {
    return <div>Artist not found!</div>;
  }

  const handleVote = () => {
    const db = getDatabase();
    const votesRef = ref(db, "artists/" + artist.id + "/votes");
    firebaseSet(votesRef, artist.votes + 1);
  };

  return (
        <div className="container-fluid px-4">
      <div className="row">

    {/* <!-- Card 1 --> */}
        <div className="col-12 d-flex">
          <div className="card mt-4 mb-4 w-100">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-auto col-xl-12">
                  <img src={artist.image} alt={artist.name} className=" img-fluid pb-3" />
                </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">{artist.name}</h2>
                    <p className="card-text">{artist.votes.toLocaleString()} votes</p>
                    <p>{artist.description}</p>
                    <Link to="#" className="btn btn-dark" onClick={handleVote}>Vote</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}