import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const apiLink = 'https://ih-countries-api.herokuapp.com/countries';

function CountriesList({ countriesData }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiLink);
      const APIData = response.data;

      setCountries(APIData);
    };
    fetchData();
  }, []);

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => (
          <Link
            key={country.alpha3Code}
            className="list-group-item list-group-item-action"
            to={'/' + country.alpha3Code}
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              style={{ width: '50px' }}
              alt="flag"
            />
            <p>{country.name.common}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
