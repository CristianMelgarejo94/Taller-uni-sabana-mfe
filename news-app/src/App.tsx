import { useEffect, useState } from 'react';
import './App.css'
import { CardLoader } from './components/shared/Loader';
import { getFormattedDates } from './helpers/date.helper';
import { useFetch } from "./hooks/useFetch";
import { ArticleCard } from './components/shared/ArticleCard';


function App() {
  const [dataResponse, setDataResponse] = useState<any>(null);
  const apiKey = import.meta.env.VITE_API_KEY;
  const dates = getFormattedDates();
  const query = 'Bogotá';

  const {
    data,
    isLoading,
  } = useFetch (`https://newsapi.org/v2/everything?q=${query}&from=${dates.fiveDaysAgo}&to=${dates.today}&sortBy=popularity&apiKey=${apiKey}&language=es`);

  useEffect(() => {
    setDataResponse(data);
  }, [data]);

  return (
    <>
      <div className="text-center font-semibold text-2xl mb-8">
        <h1>MFE 2 - App Noticias</h1>
      </div>
      <div className='flex flex-wrap justify-center mt-10 gap-5'>
        {
          isLoading
          ? <CardLoader />
          : (
            dataResponse && dataResponse.articles.map((article: any, index: number) => (
              <ArticleCard key={index} {...article}/>
            ))
          )
        }
      </div>
    </>
  )
}

export default App
