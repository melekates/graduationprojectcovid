import { useEffect, useState } from "react";

export default function LiveStatics() {
  const [statics, setStatics] = useState([]);
  useEffect(() => {
    getStatics();
  });
  function getStatics() {
    fetch("https://disease.sh/v3/covid-19/countries?sort=todayCases")
      .then((response) => response.json())
      .then((data) => setStatics(data));
  }
  return (
    <div className="container mt-2">
      <table className="table table-straped">
        <thead>
          <tr>
            <th>Ülke</th>
            <th>Günlük Vaka Sayısı</th>
          </tr>
        </thead>
        <tbody>
          {statics.slice(0, 10).map((staticsForCountry) => (
            <tr key={staticsForCountry.countryInfo.iso3}>
              <td>{staticsForCountry.countryInfo.iso3}</td>
              <td>{staticsForCountry.todayCases}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

