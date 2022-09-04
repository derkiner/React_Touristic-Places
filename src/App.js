import React, { useState, useEffect} from 'react'
import Loading from './Loading'
import Tours from './Tours'


// JSON Data
const url = "https://course-api.com/react-tours-project";

console.log(url)


// Main Function
function App() {
  // React Hooks - Destructuring
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);


  // Remove Tours through 'id' + filter
  // removeTour function to be passed as 'props' in 'Tours' component
  const removeTour = (id) => {
    //if the id id does not match the id 
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);

  }

  // Fetching Data - with async & await + try & catch
  const fetchTours = async() => {
    // Display the user the data fetching process
    setLoading(true)
    try {
          const response = await fetch(url);
          // Parse the data with JSON
          const tours = await response.json();
          setLoading(false)
          setTours(tours)
      
    } catch (error) {
      setLoading(false)
      console.log(error)    
    }
  }

  // Catch Data with UseEffect Hook (runs only once)
  useEffect(() => {
    fetchTours();

  },[])


  //First Return - if 'loading'
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // Third Return - if there is no more tour left
  if(tours.length === 0) {
    return (
      <main>
      <div className="title">
        <h2>no tours left. Wanna see all again?  </h2>
        <button className='btn' onClick={fetchTours}>
          refresh
        </button>
      </div>
      

      </main>
    )

  }

  //Second Return - if 'not loading'
  return (
    // Using Tours props to display data
    // Remove Tour prop to 'Tours' as props
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}


export default App