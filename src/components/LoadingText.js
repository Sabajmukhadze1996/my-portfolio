import React from 'react'
import "../css/loadingtext.css"

export const LoadingText = () => {
  return (
    <div className="loading-text-div">
        <h1 className="text-white">
          Welcome to Saba's Portfolio
        </h1>
  <div className="d-flex justify-content-center gap-4 spinner-container">
    <h2>Loading...</h2>
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
    </div>
  )
}
