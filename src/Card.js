import React from 'react';


export const CardButton = () => {} 

const Card = (prop) => {

    let cardTitle;

    const makePurchase = () => {
      alert(cardTitle.innerText)
    };


    return (
        <div className="card" style={{width: "18rem"}}>
          <img 
            src={prop.image} 
            className="card-img-top" 
            alt={prop.title} 
          />
          <div className="card-body">

            <h5 
              ref={ (comp)=> cardTitle = comp} 
              className="card-title">{prop.title}
            </h5>

            <p className="card-text">{prop.description}</p>
            <a 
                onClick={makePurchase}
                href={prop.buttonLink} 
                className="btn btn-primary"
            >{prop.buttonLabel}</a>
          </div>
        </div>
    )
}

export default Card;