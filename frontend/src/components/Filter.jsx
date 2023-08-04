import React, { useState } from 'react';
import Col from "./Col";
import Container from "./Container";
import Row from "./Row";
const Filter = ({ onSubmit }) => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [temperature, setTemperature] = useState(null);
  
  
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    
    const getTemperatureFromBackend = async () => {
      try {
        const response = await fetch(`http://localhost:3003/api/temperature?city=${city}`);
        const data = await response.json();
        console.log(data);
        
        setTemperature(data);
         onSubmit(data);
      } catch (error) {
        console.error(error);
      }
      
    };

    getTemperatureFromBackend();
  };
 
  return (
    <>
  
      <Container>
        <form method="POST"  onSubmit={handleSubmit}>
          <Row className="rounded-3xl bg-blue p-8 shadow-xl">
            <Col className=" text-white">
              <p>Pesquisar Cidade</p>
              <div className='flex w-full gap-10'>
              <input
                type="text"
                placeholder="Nome da cidade"
                value={city} onChange={handleCityChange}
                
                className="border-b border-white bg-transparent outline-none placeholder:text-sm placeholder:text-white focus:border-white w-1/2"
              />
            <button className=' rounded-lg border border-white  py-3 px-7' type="submit">Pesquisar</button>
            </div>

            </Col>
          </Row>
        </form>
      </Container>
    </>
  )
}

export default Filter
