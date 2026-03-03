import react from 'react';
import { Link } from 'react-router';

export function CommercialDetail() {
  return (
        <div className="container-fluid px-4">
      <div className="row">

    {/* <!-- Card 1 --> */}
        <div className="col-12 d-flex">
          <div className="card mt-4 mb-4 w-100">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-auto col-xl-12">
                  <img src="/img/bud_wassup_2.avif" alt="Budweiser Wassup" className=" img-fluid pb-3" />
                </div>
                  <div className="col-sm col-xl-12">
                    <h2 className="card-title">Budweiser Wassup</h2>
                    <p className="card-text">#1 35,000 votes</p>
                    <p>Budweiser's iconic "Whassup" campaign, debuting in late 1999, became a global pop-culture phenomenon based on a short film by Charles Stone III. It featured friends greeting each other with a tongue-wagging "Wassup?", focusing on friendship and connection while enjoying a beer. The ads won major awards and led to significant sales boosts.</p>
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