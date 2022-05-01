import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { baseAPI, establishmentsAPI, withImage } from '../../constants/api';
import ResidentsDisplay from './ResidentsDisplay';
import Layout from '../layout/Layout';

function ResidentSpecific() {
  const [ estates, setEstates] = useState([]);

  let history = useHistory();

  const { id } = useParams();

  if(!id) {
    history.push('/');
  }

  useEffect( () => {
    const callAPI = async () => {
      const result = await axios.get(establishmentsAPI + '/' + id + withImage);

      let specific = [];

      specific.push(result.data.data);

      setEstates(specific);
    }

    callAPI();
  }, []);

  return(
    <>
      {estates.map(estate => {
        const id = estate.id;
        const { name, price, rating, type } = estate.attributes;
        const img = baseAPI + estate.attributes.image.data.attributes.url;

        return(
          <Layout>
            <ResidentsDisplay key={id} id={id} estateName={name} estatePrice={price} estateRating={rating} estateType={type} estateImage={img} />
          </Layout>
        );
      })}
    </>
  );
}

export default ResidentSpecific