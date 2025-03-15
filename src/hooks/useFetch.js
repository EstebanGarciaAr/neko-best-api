import { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [data,setData] = useState([{}])
    

    const getFetch = async () => {
        const response = await fetch(url)
        setData(await response.json())
    }

    useEffect(() => {
      getFetch()
    
      return () => {
        
      }
    }, [])
    

  return (
    data
  )
}
