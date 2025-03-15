import { Album } from "./Album"
import { useFetch } from "./hooks/useFetch"


function App() {
  
  const url = "https://api.thecatapi.com/v1/images/search"

  const data = useFetch(url)

  const imgAlbum = data[0].url


  return (
    <>
      <div>    
          <img src={data[0].url}/>
          <button >L</button>
      </div>
    </>
  )
}

export default App
