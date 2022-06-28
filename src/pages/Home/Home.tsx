import { Box, CircularProgress } from "@mui/material";
import { FormEvent, useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import Paginator from "../../components/Paginator/Paginator";
import SearchBar from "../../components/SearchBar/SearchBar";
import BooksCardList from "../../containers/BooksCardList";
import { BookApiReturn } from "../../types/Books";
import { getBooks } from "../../utils/bookApi";

function Home() {
  const [books, setBooks] = useState<BookApiReturn>();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [maxResults, setMaxResults] = useState(20);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil((books?.totalItems ?? 0) / maxResults);

  const search =  useCallback(async ({q='', maxResults=20, page=1 }) => {
    setLoading(true);
    const books = await getBooks({ q, maxResults, page });
    setBooks(books);
    setLoading(false);
  }, [])

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    if(page === 1){
      search({q:searchQuery, maxResults})
    }
    setPage(1);
  };

  useEffect(() => {
    search({page, q: searchQuery, maxResults});
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [maxResults])

  const handlePage = useCallback(
    (destinedPage: number) => {
      setPage(destinedPage);
    },
    [setPage]
  );

  return (
    <section>
      <Header />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        maxResults={maxResults}
        setMaxResults={setMaxResults}
        onSubmit={handleSubmit}
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
      <Paginator handlePage={handlePage} page={page} totalPages={totalPages} />
    </section>
  );
}

export default Home;
