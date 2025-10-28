import './App.css'
import useFetchTrips from './hooks/useFetchTrips'

function App() {
  const {trips, loading, error} = useFetchTrips();
  console.log(trips);
  
  return (
    <>
      
    </>
  )
}

export default App
