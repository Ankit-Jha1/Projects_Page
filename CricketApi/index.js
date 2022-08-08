let apiKey = "c1f7a5a1-b47a-4ad1-8fee-67a8566bea0a";
let dataContainer = document.querySelector("#Data");

window.addEventListener("load", getFactFetch);

async function getFactFetch() {
  await fetch(
    "https://api.cricapi.com/v1/series?apikey=" + apiKey + "&offset=0"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("got to data");
      data.data.splice(0, 5).forEach((info) => {
        let card = `
              <div class="col mx-auto ml-3">
          <div class="card bg-light text-black mt-6 p-2 mb-4">
            <h2 class="text-success text-center mb-4 ">${info.name}</h2>
            <p class="text-center">Start Date: <span class="text-primary">${info.startDate}</span> End Date: <span class="text-primary ">${info.startDate}</span></p>
            <div class="card-body p-0" id="fact">
              <h5 class="card-title text-center text-warning">
                Number of matches played: <span>${info.matches}</span>
              </h5>
              <div class="row">
                <div class="col-2">
                  <p class="text-center text-danger">T20</p>
                  <p class="text-center">${info.t20}</p>
                </div>
                <div class="col-3">
                  <p class="text-center text-danger">ODI</p>
                  <p class="text-center">${info.odi}</p>
                </div>
               
                <div class="col-3">
                  <p class="text-center text-danger">Test</p>
                  <p class="text-center">${info.test}</p>
                  </div>
                  <div class="col-4">
                    <p class="text-center text-danger">Squads</p>
                    <p class="text-center">${info.squads}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
              `;
        dataContainer.insertAdjacentHTML("beforeend", card);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
