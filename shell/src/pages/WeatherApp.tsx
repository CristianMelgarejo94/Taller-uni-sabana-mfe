import React from 'react'

const WeatherAppRemote = React.lazy(() => import('weatherApp/App'));

export const WeatherApp = () => {
  return (
    <WeatherAppRemote/>
  )
}
