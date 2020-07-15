import React, { useContext, useEffect, useState } from 'react';
import AppContext from './AppContext';
import Card from './Card.js';
import Jumbotron from './Jumbotron.js';
import NavBar from './NavBar.js';
import NewsletterForm from './NewsletterForm.js';

// 1. Connect to the globalState
// 2. Conditionally render the cards
// 3. Use the useEffect() to subscribe to the globalState.loggedIn
// 4. If globalState.loggedIn is true, fetch products from db

const LandingPage = () => {

const [globalState, setGlobalState] = useContext(AppContext);
const [state, setState] = useState({ products: []});

  useEffect(
    () => {
      // only fetch products if and when the user logs in
      if(globalState.loggedIn === true) {
        fetch('http://localhost:8081/products')
        .then(
          (result)=>result.json()
        )
        .then (
          (json)=> {
            setState(
              {
                ...state,
                products: json.products
              }
            )
          }
        );
      }
    },
    [ globalState.loggedIn ]
  );

  return (
    <div>
        <NavBar />
        <Jumbotron 
          title="Newsletter" 
          description="Enter your email below to register"
        >
          <NewsletterForm />
        </Jumbotron>

        <Jumbotron 
          title="Featured Products" 
          description="Check out these latest trendy items"
        >

        <div className="row">
          {
            globalState.loggedIn === true &&
            state.products.map(
              (product)=>
                <div className="col-lg-4 col-sm-6">
                  <Card
                    title={product.brand}
                    description={product.description}
                    image={product.image}
                    buttonLabel="Buy"
                    buttonLink="#"
                  />
                </div>)
          }

          {
          globalState.loggedIn === false &&
            <div className="col-lg-4 col-sm-6">
              <p>Please login to see the exclusive products.</p>
            </div>
          }
    </div>
    </Jumbotron>
    </div>
  );
}

export default LandingPage;
