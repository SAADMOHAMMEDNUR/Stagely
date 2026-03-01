import { Link } from 'react-router-dom';

export function CommercialsPage() {
  return (
    <main>
      <div className="container-fluid px-4">
        
        {/* Row 1 */}
        {/* Card 1*/}
        <div className="row">
        <div class="col-md-6 col-xl-3 d-flex">
          <div className="card mt-4 mb-4 w-100">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-auto col-xl-12">
                  <img src="img/bud_wassup_2.avif" alt="Budweiser Wassup" className=" img-fluid pb-3"/>
                </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">Budweiser Wassup</h2>
                    <p className="card-text">#1 35,000 votes</p>
                    <Link to="/commercials/detail" className="btn btn-dark">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* Card 2*/}
        <div className="col-md-6 col-xl-3 d-flex">
          <div className="card mt-4 mb-4 w-100">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-auto col-xl-12">
                    <img src="img/snickersbettywhite.jpg" alt="Snickers Betty White" className=" img-fluid pb-3" />
                </div>
                <div className="col-sm col-xl-12">
                    <h2 className="card-title">Snickers Betty White</h2>
                    <p className="card-text">#2 25,000 votes</p>
                    <Link to="/commercials/detail" className="btn btn-dark">View Details</Link>
                </div>
                </div>
              </div>
            </div>
          </div>

        {/* Card 3*/}
        <div className="col-md-6 col-xl-3 d-flex">
          <div className="card mt-4 mb-4 w-100">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-auto col-xl-12">
                  <img src="img/apple1984.jpg" alt="Apple 1984" className="img-fluid pb-3"/>
                </div>
                <div className="col-sm col-xl-12">
                    <h2 className="card-title">Apple 1984</h2>
                    <p className="card-text">#3 15,000 votes</p>
                    <Link to="/commercials/detail" className="btn btn-dark">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* Card 4*/}
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card mt-4 mb-4 w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img src="img/lays.webp" alt="Lay's Chips" className="img-fluid pb-3" />
                  </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">Lay's</h2>
                    <Link to="/commercials/detail" className="btn btn-dark">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        {/* Card 5*/}
        <div className="row">
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card mt-4 mb-4 w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img src="img/cocacola.jpg" alt="Coca-Cola" className="img-fluid pb-3" />
                  </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">Coca-Cola</h2>
                    <Link to="/commercials/detail" className="btn btn-dark">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6*/}
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card mt-4 mb-4 w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img src="img/alexa.webp" alt="Alexa (Amazon)" className="img-fluid pb-3" />
                  </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">Alexa (Amazon)</h2>
                    <Link to="/commercials/detail" className="btn btn-dark">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* Card 7*/}
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card mt-4 mb-4 w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img src="img/poppi.webp" alt="Poppi" className="img-fluid pb-3" />
                  </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">Poppi</h2>
                    <Link to="/commercials/detail" className="btn btn-dark">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        
        {/* Card 8*/}
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card mt-4 mb-4 w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img src="img/unitedairlines.webp" alt="United Airlines" className="img-fluid pb-3" />
                  </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">United Airlines</h2>
                    <Link to="/commercials/detail" className="btn btn-dark">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 */}
    `   {/* Card 9*/}
        <div className="row">
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card mt-4 mb-4 w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img src="img/t-mobile.webp" alt="T-Mobile" className="img-fluid pb-3" />
                  </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">T-Mobile</h2>
                    <Link to="/commercials/detail" className="btn btn-dark">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 10*/}
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card mt-4 mb-4 w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img src="img/dunkindonuts.webp" alt="Dunkin' Donuts" className="img-fluid pb-3" />
                  </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">Dunkin' Donuts</h2>
                    <Link to="/commercials/detail" className="btn btn-dark">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 11*/}
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card mt-4 mb-4 w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img src="img/pringles.webp" alt="Pringles" className="img-fluid pb-3" />
                  </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">Pringles</h2>
                    <Link to="/commercials/detail" className="btn btn-dark">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 12*/}
          <div className="col-md-6 col-xl-3 d-flex">
            <div className="card mt-4 mb-4 w-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-auto col-xl-12">
                    <img src="img/cadillac.webp" alt="Cadillac Formula 1 Team" className="img-fluid pb-3" />
                  </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">Cadillac Formula 1 Team</h2>
                    <Link to="/commercials/detail" className="btn btn-dark">View Details</Link>
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