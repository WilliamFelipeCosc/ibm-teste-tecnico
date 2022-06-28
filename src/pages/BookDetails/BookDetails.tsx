import { Box, CircularProgress } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookDescription from "../../components/BookDetails/BookDescription";
import BookMain from "../../components/BookDetails/BookMain";
import Header from "../../components/Header";
import { Book } from "../../types/Books";
import { getBookDetails } from "../../utils/bookApi";

function BookDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState<Book>();

  const getBookData = useCallback(async (id: string = "") => {
    setLoading(true);
    const book = await getBookDetails(id);
    setBook(book);
    setLoading(false);
  }, []);

  useEffect(() => {
    getBookData(id);
  }, []);

  const { saleInfo, volumeInfo } = book ?? {};

  console.log(book);
  return (
    <Box>
      <Header />
      <Box>
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
          <Box width={"80%"} maxWidth={1024} mx="auto" mt={3}>
            <BookMain volumeInfo={volumeInfo} saleInfo={saleInfo} />
            <BookDescription volumeInfo={volumeInfo} saleInfo={saleInfo}/>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default BookDetails;
