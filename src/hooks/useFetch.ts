import { useEffect, useState } from "react"
import axios from "axios"


export default function useFetch(url: string) {

  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (
      async function () {
        console.log('sera')
        try {
          setLoading(true)
          const response = await axios.get(url)
          setData(response.data)
        } catch (err) {
          setError(err)
        } finally {
          setLoading(false)
        }
      }
    )()
  }, [url])

  return { data, error, loading }

}