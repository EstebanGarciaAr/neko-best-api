import { useFetch } from "./hooks/useFetch"


function App() {
  
  const url = "https://nekos.best/api/v2/husbando"

  const data = useFetch(url)




  return (
    <>
      <div>
          {data.isLoading ? (<h1>""</h1>): (<img src={data.results[0].url}/>)}
      </div>
    </>
  )
}

export default App
