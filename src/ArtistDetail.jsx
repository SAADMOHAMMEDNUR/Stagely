import react from 'react';
import { Link } from 'react-router';

export function ArtistDetail() {
  return (
        <div className="container-fluid px-4">
      <div className="row">

    {/* <!-- Card 1 --> */}
        <div className="col-12 d-flex">
          <div className="card mt-4 mb-4 w-100">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-auto col-xl-12">
                  <img src="/img/taylorswift.webp" alt="Taylor Swift" className=" img-fluid pb-3" />
                </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">Taylor Swift</h2>
                    <p className="card-text">#1 30,000 votes</p>
                    <p>Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter and one of the most influential cultural figures of the 21st century, renowned for her autobiographical songwriting, artistic reinventions, and business acumen. Emerging from the country music scene in Nashville, she has transitioned into a global pop powerhouse, breaking countless records, including becoming a 11-time Grammy winner. Known for her storytelling ability, Swift often uses her music to document personal growth, relationships, and triumphs over public scrutiny, particularly highlighted by her re-recording projects, which she refers to as "reclaiming" her work. Beyond her songwriting, she is celebrated by her fans—"Swifties"—for her intimate connection with them, creating a legacy that combines deeply personal lyrics with massive, record-setting concert experiences like The Eras Tour!</p>
                    <Link to="#" className="btn btn-dark">Vote</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}