// Pakistan Lookup
async function lookupPakistan() {
  let number = document.getElementById("pakNumber").value.trim();
  let resultBox = document.getElementById("pakResult");
  resultBox.innerHTML = "⏳ Fetching data...";

  try {
    // API 1
    let res1 = await fetch(`https://app-api.callerid.pk/api/api_sims/api.php?number=${number}`);
    let data1 = await res1.json();

    // API 2
    let cleanedNum = number.startsWith("0") ? number.slice(1) : number; // remove leading 0
    let res2 = await fetch(`https://api.nexoracle.com/details/pak-sim-database-free?apikey=demo&number=${cleanedNum}`);
    let data2 = await res2.json();

    resultBox.innerHTML = `
      <h3>📌 API 1 Result:</h3>
      <pre>${JSON.stringify(data1, null, 2)}</pre>
      <h3>📌 API 2 Result:</h3>
      <pre>${JSON.stringify(data2, null, 2)}</pre>
    `;
  } catch (err) {
    resultBox.innerHTML = "❌ Error fetching Pakistan data!";
  }
}

// USA Lookup
async function lookupUSA() {
  let number = document.getElementById("usaNumber").value.trim();
  let resultBox = document.getElementById("usaResult");
  resultBox.innerHTML = "⏳ Fetching data...";

  try {
    // APIs (sessionStorage values tumne diye the)
    let api1 = "https://tcpa.api.uspeoplesearch.net/tcpa/v1?x=" + number;
    let api2 = "https://person.api.uspeoplesearch.net/person/v3?x=" + number;
    let api3 = "https://premium_lookup-1-h4761841.deta.app/person?x=" + number;
    let api4 = "https://tcpa.api.uspeoplesearch.net/tcpa/report?x=" + number;

    let [res1, res2, res3, res4] = await Promise.all([
      fetch(api1), fetch(api2), fetch(api3), fetch(api4)
    ]);

    let data1 = await res1.json();
    let data2 = await res2.json();
    let data3 = await res3.json();
    let data4 = await res4.json();

    resultBox.innerHTML = `
      <h3>📌 API 1:</h3>
      <pre>${JSON.stringify(data1, null, 2)}</pre>
      <h3>📌 API 2:</h3>
      <pre>${JSON.stringify(data2, null, 2)}</pre>
      <h3>📌 API 3:</h3>
      <pre>${JSON.stringify(data3, null, 2)}</pre>
      <h3>📌 API 4:</h3>
      <pre>${JSON.stringify(data4, null, 2)}</pre>
    `;
  } catch (err) {
    resultBox.innerHTML = "❌ Error fetching USA data!";
  }
}
