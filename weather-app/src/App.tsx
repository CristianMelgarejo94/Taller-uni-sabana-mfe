import './App.css'
import { useFetch } from "./hooks/useFetch";
import { CardLoader } from "./components/shared/Loader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import imageBogota from '@assets/bogota.jpg'

function App() {
  const [dataResponse, setDataResponse] = useState<any>(null);
  const apiKey = import.meta.env.VITE_API_KEY;
  const lat = '4.6097';
  const lon = '-74.0817';

  const {
    data,
    isLoading,
  } = useFetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=sp&units=metric`);

  useEffect(() => {
    setDataResponse(data);
  }, [data]);

  return (
    <>
      <div className="text-center font-semibold text-2xl mb-8">
        <h1>MFE 1 - App Información del Clima</h1>
      </div>
      {/* <hr className="my-8"/> */}
      {
        isLoading
        ? <CardLoader />
        : (
          (dataResponse) &&
            <Card className="w-lg justify-self-center">
              <CardHeader>
                <CardTitle>Clima Bogotá Hoy</CardTitle>
                <CardDescription>Información extraída de la API openweathermap.org</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col justify-center items-center gap-4">
                  <img className="h-50 rounded-lg justify-self-center" src={imageBogota} alt="image description"/>
                  <div className="info justify-items-start">
                    <div className="flex flex-col space-y-1.5 p-1.5 font-semibold text-2xl">
                      { dataResponse.weather[0].description.toUpperCase() }
                    </div>
                    <div className="flex space-y-1.5 p-1.5">
                      <span className='font-bold p-0 m-0 pr-1.5'>Temperatura:</span> { dataResponse.main.temp }°C
                      <div className="info-temp flex gap-1.5 ml-3">
                        <Badge>Max: { dataResponse.main.temp_max }°C</Badge>
                        <Badge>Min: { dataResponse.main.temp_min }°C</Badge>
                      </div>
                    </div>
                    <div className="flex space-y-1.5 p-1.5 w-auto">
                      <span className='font-bold p-0 m-0 pr-1.5'>Sensación térmica:</span> { dataResponse.main.feels_like }°C
                    </div>
                    <div className="flex space-y-1.5 p-1.5 w-auto">
                      <span className='font-bold p-0 m-0 pr-1.5'>Humedad:</span> { dataResponse.main.humidity }%
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
              </CardFooter>
            </Card>
        )
      }
    </>
  )
}

export default App
