import Layout from '../layout/Layout';
import Heading from '../typography/Heading';
import { localGet, localClear } from '../../utils/localStorage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { uploadImage } from '../../utils/createPost';

const schema = yup.object().shape({
  title: yup.string().required('Please enter your title').min(3, 'Must be at least 3 characters long'),
  price: yup.number().required('Please enter the price').min(1, 'Must be at least 4 characters long'),
  rating: yup.number().required('Please enter your rating').min(1, 'Must have 1 number'),
  files: yup.mixed().required("You need to provide a file")
});

function Redirect() {
  const [createForm, setCreateForm] = useState(false)

  if(!localGet('user').user.username) {
    window.location.href = "/login";
  }

  const name = localGet('user').user.username;


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  function onSubmit(data) {
    console.log(data);

    uploadImage(data.image, data.title, data.rating, data.price);
  }

  return(
    <Layout>
      <Heading>Hello {name}</Heading>
      <Container>
        <Row>
          <Col className="text-center">
            <Link><Button onClick={()=> setCreateForm(true)} className="button--choice d-inline-block m-3">Create</Button></Link>
            <Link><Button className="button--choice d-inline-block m-3">Enquiries</Button></Link>
            <Link><Button className="button--choice d-inline-block m-3">Messages</Button></Link>
            <Link><Button onClick={localClear} className="button--choice d-inline-block m-3">Logout</Button></Link>
          </Col>
        </Row>
        {createForm && (
          <Row>
            <Col>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Title:</Form.Label>
                  <Form.Control {...register("title", { required: true })} type="text" placeholder="Your title" />
                </Form.Group>
                {errors.title && <span className="error d-block text-end">{errors.title.message}</span>}

                <Form.Group className="mb-3" controlId="price">
                  <Form.Label>Price:</Form.Label>
                  <Form.Control {...register("price", { required: true })} type="text" placeholder="Your price" />
                </Form.Group>
                {errors.price && <span className="error d-block text-end">{errors.price.message}</span>}

                <Form.Group className="mb-3" controlId="rating">
                  <Form.Label>Rating:</Form.Label>
                  <Form.Control {...register("rating", { required: true })} type="text" name="files" placeholder="Your rating" />
                </Form.Group>
                {errors.rating && <span className="error d-block text-end">{errors.rating.message}</span>}

                <Form.Group className="mb-3" controlId="files">
                  <Form.Label>Image:</Form.Label>
                  <Form.Control {...register("files", { required: true })} type="file" placeholder="Your image" />
                </Form.Group>
                {errors.image && <span className="error d-block text-end">{errors.image.message}</span>}

                <Button className="button--form" type="submit">
                  Create
                </Button>
              </Form>
            </Col>
          </Row>
        )}
      </Container>
    </Layout>
  );
}

export default Redirect