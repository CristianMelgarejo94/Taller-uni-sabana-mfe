import {Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NewsApp } from '@/pages/NewsApp'
import { WeatherApp } from '@/pages/WeatherApp'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="weather-app" element={<WeatherApp />} />
          <Route path="news-app" element={<NewsApp />} />
        </Route>
      </Routes>
    </>
  )
}
