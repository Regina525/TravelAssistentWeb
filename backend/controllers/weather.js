import axios from "axios";
import country from "currency-codes";
const weatherApiKey = '5b0477b7be43760e5d82c205a09bb39e';
const exchangeApi = '22b8a0b2d4-58bc7b0063-ryt1jj'
export const destination = async (req,res)=>{
    
  try {
        const { city } = req.query;
        let code = null;

        
        //Obter dados da temperatura do pais pesquisado
        const geolocationUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`;
        const geolocationResponse = await axios.get(geolocationUrl);
    
        if (geolocationResponse.data.length === 0) {
          throw new Error('País não encontrado. Verifique o nome do país.');
        }
    
        const countryCode = geolocationResponse.data.sys.country;
       //O numero de populacao do pais
        const populationResponse = await axios.get(`https://api.worldbank.org/v2/countries/${countryCode}/indicators/SP.POP.TOTL?format=json`);
        const populationData = populationResponse.data[1];
    
        //GDP per capita
        const gdpPerCapitaResponse = await axios.get(`https://api.worldbank.org/v2/countries/${countryCode}/indicators/NY.GDP.PCAP.CD?format=json`);
        const gdpPerCapitaData = gdpPerCapitaResponse.data[1];
    
          const admregValue = populationData[1].country.value;
          const countryC = country.country(admregValue);
          code = countryC.at(0).code;
        
        if (!code) {
          throw new Error(`Código não encontrado para o país com o código do país ${countryCode}`);
        }
        //O cambio
        const exchangeResponse = await axios.get(`https://api.fastforex.io/fetch-all?api_key=${exchangeApi}&from=${code}`);
    
        res.json({
          weather: geolocationResponse.data,
          exchange: exchangeResponse.data,
          country: {
            population: populationData,
            gdpPerCapita: gdpPerCapitaData,
          },
        });
      } catch (error) {
        console.error('Erro ao obter os dados:', error.message);
        res.status(500).json({ error: 'Erro ao obter a previsão do tempo.' });
      }
}