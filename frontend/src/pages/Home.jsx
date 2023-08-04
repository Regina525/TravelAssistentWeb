import React, { useState } from 'react';
import Cards from '../components/Cards';
import Container from '../components/Container';
import Filter from '../components/Filter';
import WeatherCard from '../components/WeatherCard';

const Home = () => {
  const [temperature, setTemperature] = useState(null);
  const [country, setCountry] = useState(null);
  const [exchange, setExchange] = useState(null);
  const [error, setError] = useState(null);
  const [hasResults, setHasResults] = useState(true);

  const handleTemperatureChange = (data) => {
    if (data.weather) {
      setTemperature(data.weather);
      setCountry({
        population: data.country.population,
        gdpPerCapita: data.country.gdpPerCapita,
      });
      setExchange(data.exchange);
      setError(null);
      setHasResults(true);
    } else {
      setError("Nenhum resultado encontrado para a pesquisa.");
      setHasResults(false);
    }
  };

  const handleError = (message) => {
    setError(message);
  };

  return (
    <div className="text-xl">
      <div className="relative">
        <img
          src="https://vidadeturista.com/wp-content/uploads/2009/05/agencia-de-turismo-e-viagem.jpg"
          className="w-full"
        />
        <div className="absolute bottom-0 z-10 mb-[-100px] w-full">
          <Filter onSubmit={handleTemperatureChange} onError={handleError} />
        </div>
      </div>
      <Container className="mt-24 py-8">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Prepare as suas férias</h2>
        </div>
        {hasResults ? (
          temperature === null ? (
            <Cards />
          ) : (
            country && (
              <div>
                <WeatherCard temperature={temperature} country={country} exchange={exchange} />
              </div>
            )
          )
        ) : (
          <div className='bg-red-100 text-red-800 p-4 mb-4'>Nenhum resultado encontrado.</div>
        )}
      </Container>
    </div>
  );
};

export default Home;
