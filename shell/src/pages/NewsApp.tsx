import React from 'react'
import { ErrorBoundary } from './ErrorBoundary';

const NewsAppRemote = React.lazy(() => import('newsApp/App'));

export const NewsApp = () => {
  return (
    <>
      <ErrorBoundary>
        <NewsAppRemote />
      </ErrorBoundary>
    </>
  )
}
