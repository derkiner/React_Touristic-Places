import React from 'react'
import Tour from './Tour'


// Destructuring Props taken from App.js 
// RemoveTour also destructured from App.js
const Tours = ({ tours, removeTour }) => {

    // Returning via JSX - displaying data  
    // Iterate over tours with map 
    // Add 'key' to link it with the id + get all properties via spread operator
    return (
        <section>
        <div className="title">
            <h1 className='bigTitle'>Where To?</h1>
            <h2>choose one of our unique tours</h2>
            <div className="underline"></div>
        </div>
        <div>
        {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour> //removeTour passed as a prop here
        })}
  
        </div>
    </section>
    )
}

export default Tours;