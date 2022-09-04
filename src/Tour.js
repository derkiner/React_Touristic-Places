import React, { useState } from 'react';



// Main Function
// Destructuring all props in Tours component
//Properties come from URL/JSON Object
// Remove Tour from App.js to Tours to Tour (Prop Drilling)
const Tour = ({id, image, info, price, name, removeTour}) => {
  // State Values to read more or less
  const [readMore, setReadMore] = useState(false);

  // return - UI with inserting destructured items
  // toggle functionality - read more - ternary operator
  // substring - will show 100 characters in total
  // button to toggle read more or less - (!readMore)}
  // button (id) to decide which tour to remove
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore?'show less' : 'read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id) }>nope, not my thing! Next?</button> 
      </footer>
    </article>
  );
}

export default Tour