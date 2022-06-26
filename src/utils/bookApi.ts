import axios from "axios"

const url = 'https://www.googleapis.com/books/v1/'
const APIKEY = 'AIzaSyD8rfuYX8CEnb3hLuh7HIiKlI2jgfmgs-I'

export const getBooks = () => {
  axios.get(`${url}/volumes?key=${APIKEY}`)
}