import { Link, Outlet } from 'react-router-dom'
import { Button } from "@/components/ui/button"

export const Home = () => {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-10">
        Taller - Micro Frontends y su Integración con Microservicios
      </h1>
      <div className='mx-4'>
        <Button >
          <Link to="/weather-app">Aplicacion 1 - Clima</Link>
        </Button>
        <Button className='mx-4'>
          <Link to="/news-app">Aplicacion 2 - Noticias</Link>
        </Button>
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"></hr>
      <div className='mt-4'>
        <Outlet />
      </div>
    </>
  )
}
