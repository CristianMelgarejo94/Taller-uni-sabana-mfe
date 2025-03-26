import React from 'react'

const NewsAppRemote = React.lazy(() => import('newsApp/App'));

export const NewsApp = () => {
  return (
    <NewsAppRemote/>
  )
}
