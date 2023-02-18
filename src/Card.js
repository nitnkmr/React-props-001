import React from 'react'

const Card = ({colorname,colorCode}) => {
  return (
    <div>
        <div className="container">
            <div className="colorbox" style={{backgroundColor:colorCode}}></div>
            <p className="cardName" style={{color:colorCode}}>{colorname} </p>
            <h3 className="code">{colorCode}</h3>
        </div>
    </div>
  )
}

export default Card