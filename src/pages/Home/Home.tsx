import { useEffect, useState } from "react"
import Header from "../../components/Header"
import { getBooks } from "../../utils/bookApi"

function Home(){
  const [books, setBooks] = useState<any>([])
  const [searchQuery, setSearchQuery] = useState('yay');
  const [maxResults, setMaxResults] = useState(20);

  const getLivros = async () => await getBooks({q:searchQuery, maxResults})

  useEffect(() => {
    getLivros().then(data => setBooks(data))
  },[])

  const pesquisar = () => getLivros().then(data => setBooks(data))

  return (
    <section>
      <Header />
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={pesquisar}>Pesquisar</button>
      <div>
        {books?.items?.length && books.items.map((book:any) => <div key={book.id}>{book.volumeInfo.title} </div>)}
      </div>
    </section>
  )
}

export default Home