import React from 'react'
import { ErrorBoundary } from './ErrorBoundary';

const WeatherAppRemote = React.lazy(() => import('weatherApp/App'));

export const WeatherApp = () => {
  return (
    <ErrorBoundary>
      <WeatherAppRemote/>
    </ErrorBoundary>
  )
}
