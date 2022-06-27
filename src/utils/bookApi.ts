import axios, { AxiosResponse } from "axios"
import { BookApiReturn } from "../types/Books"

const url = 'https://www.googleapis.com/books/v1/'
const APIKEY = 'AIzaSyD8rfuYX8CEnb3hLuh7HIiKlI2jgfmgs-I'

export const getBooks = async ({q='%27%27', maxResults=40}:any) => {

  const options = {
    method: 'get',
    path: `${url}volumes?key=${APIKEY}`,
    contentType: 'application/json',
    'Access-Control-Allow-Origin': '*',
    credentials: 'omit',
    SameSite: 'None; Secure',
    "Set-Cookie": "cross-site-cookie=whatever; SameSite=None; Secure"
  }
  const { data } = await axios.get<BookApiReturn>(`${url}volumes?q=${q}&maxResults=${maxResults}&key=${APIKEY}`, options)

  return data
}