import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const apiLink = 'https://ih-countries-api.herokuapp.com/countries';

function CountryDetalils({ countriesData }) {
  const [foundCountry, setFoundCountry] = useState(null);
  const { alpha3Code } = useParams();

  useEffect(() => {
    const fetchByCountry = async () => {
      const response = await axios.get(`${apiLink}/${alpha3Code}`);
      const APIData = response.data;

      setFoundCountry(APIData);
    };
    fetchByCountry();
  }, [alpha3Code]);

  if (!foundCountry) return <p className="col-7">Select a Country</p>;

  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
        alt="flag"
        style={{ width: '100px' }}
      />
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry &&
                  foundCountry.borders.map((countryAlpha3Code) => (
                    <li>
                      <Link to={'/' + countryAlpha3Code}>
                        {
                          countriesData.find(
                            (c) => c.alpha3Code === countryAlpha3Code
                          ).name.common
                        }
                      </Link>
                    </li>
                  ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetalils;
