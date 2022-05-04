import { useState, useEffect } from "react";
import { baseAPI, establishmentsAPI } from '../../constants/api';
import axios from 'axios';
import ResidentsDisplay from './ResidentsDisplay';

function Residents({query}) {
  const [ estates, setEstates ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  
  useEffect( () => {
    setLoading(true);
    const callAPI = async () => {
      const result = await axios.get(establishmentsAPI + `/?populate=*&filters[name][$containsi]=${query}`);

      setEstates(result.data.data);
      setLoading(false);
    }
    callAPI();
  }, [query]);

return(
    <>
      {loading && (
        <p className="pt-3">Loading...</p>
      )}

      {estates.length === 0 && (
        <p className="pt-3">No results</p>
      )}

      {estates.map(estate => {
        const id = estate.id;
        const { name, price, rating } = estate.attributes;
        const img = estate.attributes.image.data.attributes.url;

        console.log(estate);
        console.log(img);
        return (
          <ResidentsDisplay key={id} id={id} estateName={name} estatePrice={price} estateRating={rating} estateImage={img} link="yes" />
        );
      })}
    </>
  );
}

export default Residents