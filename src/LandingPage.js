import React from 'react';
import Button from './Button.js';
import ColorButton from './ColorButton.js';
import Card from './Card.js';
import Jumbotron from './Jumbotron.js';
import NavBar from './NavBar.js';
import NewsletterForm from './NewsletterForm.js';

const products = [
  {
    brand: 'iPhone 11 Pro',
    description: 'Lots to love. Less to spend. Starting at $399. From nine dollars and fifty four cents per month or two hundred and twenty nine dollars with trade in.From $9.54/mo. or $229 with trade-in.*',
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  },
  {
    brand: 'Samsung S20',
    description: 'Lots to love. Less to spend. Starting at $399. From nine dollars and fifty four cents per month or two hundred and twenty nine dollars with trade in.From $9.54/mo. or $229 with trade-in.*',
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&w=1810&q=80"
  },
  {
    brand: 'Huwaei P40 Pro',
    description: 'Lots to love. Less to spend. Starting at $399. From nine dollars and fifty four cents per month or two hundred and twenty nine dollars with trade in.From $9.54/mo. or $229 with trade-in.*',
    image: "https://images.unsplash.com/photo-1564583138697-34f7b7488f94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80"
  }
]

const LandingPage = () => {
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
            products.map(
              (product)=>
                <div className="col-lg-4 col-sm-6">
                  <Card
                    title={product.brand}
                    description={product.description}
                    image={product.image}
                    buttonLabel="Buy"
                    buttonLink="#"
                  />
                </div>
            )
          }
          </div>
        </Jumbotron>
    </div>
  );
}

export default LandingPage;
