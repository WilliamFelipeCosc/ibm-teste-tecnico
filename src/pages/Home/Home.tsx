import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useMemo, useState } from "react"
import BookCard from "../../components/BookCard/BookCard";
import Header from "../../components/Header"
import BooksCardList from "../../Containers/BooksCardList";
import { Book, BookApiReturn } from "../../types/Books";
import { getBooks } from "../../utils/bookApi"

function Home(){

  const [books, setBooks] = useState<BookApiReturn>()
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [maxResults, setMaxResults] = useState(20);


  useEffect(() => {
    const getLivros = async () => await getBooks({q:searchQuery, maxResults})
    getLivros().then(data => setBooks(data))
  }, [])

  const search = () => getBooks({q:searchQuery, maxResults}).then(data => setBooks(data))

  const handleMaxResultsChange = (e:ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e?.target.value);
    
    setMaxResults(value > 40 ? 40 : value)
  }
  

  return (
    <section>
      <Header />
      <TextField label="Pesquisar" type="text" value={searchQuery} placeholder="pesquisar" onChange={(e) => setSearchQuery(e.target.value)} />
      <TextField label="Máximo por página" type="number" value={maxResults} onChange={handleMaxResultsChange}/>
      <Button variant="outlined" color='primary' onClick={search}>Pesquisar</Button>
      <BooksCardList books={books} />
    </section>
  )
}

export default Home