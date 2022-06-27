import { useEffect } from "react";
import { useParams} from "react-router-dom";
import { getBookDetails } from "../../utils/bookApi";

function BookDetails(props:any) {
  console.log(props)
  const { id } = useParams();


  useEffect(() => {
    
    getBookDetails(id)
  }, []);
  return <div>DETALHES</div>;
}

export default BookDetails;
