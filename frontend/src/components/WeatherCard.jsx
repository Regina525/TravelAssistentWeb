import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';

const WeatherCard = ({ temperature, country, exchange }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="border rounded-lg shadow-md p-4 mb-4">
      {user ? (
        <>
          {temperature && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Informações da temperatura:</h3>
              <p>Temperature: {temperature.main.temp}°C</p>
            </div>
          )}

          {country && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Informações da cidade:</h3>
              <p>População: {country.population[0].value}</p>
              <p>GDP per Capita: {country.gdpPerCapita[0].value}</p>
            </div>
          )}

          {exchange &&
            exchange.results &&
            Object.entries(exchange.results).map(([currency, rate]) => {
              if (exchange.base === currency) {
                return (
                  <div key={currency}>
                    <h3 className="text-lg font-semibold mb-2">Informações de câmbio:</h3>
                    <p>Moeda: {exchange.base}</p>
                    <p>Câmbio: {rate}</p>
                  </div>
                );
              }
              return null;
            })}
        </>
      ) : (
        <>
          {temperature && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Informações da temperatura:</h3>
              <p>Temperature: {temperature.main.temp}°C</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default WeatherCard;
