import { Box, Button, CircularProgress } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import BooksCardList from "../../Containers/BooksCardList";
import { BookApiReturn } from "../../types/Books";
import { getBooks } from "../../utils/bookApi";

function Home() {
  const [books, setBooks] = useState<BookApiReturn>();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [maxResults, setMaxResults] = useState(20);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLivros = async () =>
      await getBooks({ q: searchQuery, maxResults });
    getLivros().then((data) => {
      setBooks(data);
      setLoading(false);
    });
  }, []);

  const search = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    getBooks({ q: searchQuery, maxResults }).then((data) => {
      setBooks(data);
      setLoading(false);
    });
    
  };

  return (
    <section>
      <Header />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        maxResults={maxResults}
        setMaxResults={setMaxResults}
        onSubmit={search}
      />
      {loading ? (
        <Box
          width={"100%"}
          display="flex"
          height={"60vh"}
          alignItems={"center"}
          justifyContent="center"
        >
          <CircularProgress size={100} />
        </Box>
      ) : (
        <BooksCardList books={books} />
      )}
    </section>
  );
}

export default Home;
