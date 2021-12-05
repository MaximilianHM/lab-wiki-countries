import './App.css';
import countriesData from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <CountriesList countriesData={countriesData} />

      <Routes>
        <Route
          path="/:alpha3Code"
          element={<CountryDetails countriesData={countriesData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
