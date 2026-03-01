// basically index.html but in react
import { Link } from 'react-router-dom';


export function IndexPage() {
    return (
    <main>
      <div className="container-fluid px-4">
        <div className="row">

          {/* Card 1 - Taylor Swift */}
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card mt-4 mb-4 w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img src="img/taylorswift.webp" alt="Taylor Swift" className="img-fluid pb-3" />
                  </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">Taylor Swift</h2>
                    <p className="card-text">#1 30,000 votes</p>
                    <Link to="/artists" className="btn btn-dark">See More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Kendrick Lamar */}
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card mt-4 mb-4 w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img src="img/kendricklamar.jpg" alt="Kendrick Lamar" className="img-fluid pb-3" />
                  </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">Kendrick Lamar</h2>
                    <p className="card-text">#2 20,000 votes</p>
                    <Link to="/artists" className="btn btn-dark">See More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Drake */}
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card mt-4 mb-4 w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img src="img/drake.jpg" alt="Drake" className="img-fluid pb-3" />
                  </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">Drake</h2>
                    <p className="card-text">#3 10,000 votes</p>
                    <Link to="/artists" className="btn btn-dark">See More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="lead">Vote your favorite commercial!!</p>
        
        <div className="row">
          {/* Card 4 - Budweiser */}
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card mt-4 mb-4 w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img src="img/bud_wassup_2.avif" alt="Budweiser Wassup" className="img-fluid pb-3" />
                  </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">Budweiser Wassup</h2>
                    <p className="card-text">#1 35,000 votes</p>
                    <Link to="/commercials" className="btn btn-dark">See More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 - Snickers */}
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card mt-4 mb-4 w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img src="img/snickersbettywhite.jpg" alt="Snickers Betty White" className="img-fluid pb-3" />
                  </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">Snickers Betty White</h2>
                    <p className="card-text">#2 25,000 votes</p>
                    <Link to="/commercials" className="btn btn-dark">See More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 - Apple */}
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card mt-4 mb-4 w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img src="img/apple1984.jpg" alt="Apple 1984" className="img-fluid pb-3" />
                  </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">Apple 1984</h2>
                    <p className="card-text">#3 15,000 votes</p>
                    <Link to="/commercials" className="btn btn-dark">See More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    );
}