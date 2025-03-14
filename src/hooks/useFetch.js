import { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [data,setData] = useState({
        isLoading: true
    })
    

    const getFetch = async () => {
        setData({
            ...data
        })
        const response = await fetch(url)
        const json = await response.json()
        setData({...json,isLoading: false})
    }

    useEffect(() => {
      getFetch()
    
      return () => {
        
      }
    }, [url])
    

  return (
    data
  )
}
