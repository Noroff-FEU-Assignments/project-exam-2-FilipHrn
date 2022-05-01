import { useState, useEffect } from "react";
import { baseAPI, establishmentsAPI, withImage } from '../../constants/api';
import axios from 'axios';
import ResidentsDisplay from './ResidentsDisplay';

function Residents({query}) {
  const [ estates, setEstates ] = useState([]);
  
  useEffect( () => {
    const callAPI = async () => {
      const result = await axios.get(establishmentsAPI + `/?populate=*&filters[name][$containsi]=${query}`);

      setEstates(result.data.data);
    }
    callAPI();
  }, [query]);

return(
    <>
      {estates.map(estate => {
        const id = estate.id;
        const { name, price, rating, type } = estate.attributes;
        const img = baseAPI + estate.attributes.image.data.attributes.url;

        return (
          <ResidentsDisplay key={id} id={id} estateName={name} estatePrice={price} estateRating={rating} estateType={type} estateImage={img} link="yes" />
        );
      })}
    </>
  );
}

export default Residents