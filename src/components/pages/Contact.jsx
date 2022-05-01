import Layout from '../layout/Layout';
import Heading from '../typography/Heading';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  firstName: yup.string().required('Please enter your first name').min(3, 'Must be at least 3 characters long'),
  lastName: yup.string().required('Please enter your last name').min(2, 'Must be at least 2 characters long'),
  email: yup.string().required('Please enter your email address').email('Must be a valid email address'),
  subject: yup.string().required('Please enter the subject of your enquiry').min(4, 'Must be at least 4 characters long'),
  message: yup.string().required('Please write a message').min(10, 'Must be at least 10 characters long')
});

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return(
    <Layout>
      <Heading>Contact</Heading>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control {...register("firstName", { required: true })} type="text" placeholder="Your first name" />
        </Form.Group>
          {errors.firstName && <span className="error d-block text-end">{errors.firstName.message}</span>}

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last name:</Form.Label>
          <Form.Control {...register("lastName", { required: true })} type="text" placeholder="Your last name" />
        </Form.Group>
          {errors.lastName && <span className="error d-block text-end">{errors.lastName.message}</span>}

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control {...register("email", { required: true })} type="text" placeholder="Your email" />
        </Form.Group>
          {errors.email && <span className="error d-block text-end">{errors.email.message}</span>}

        <Form.Group className="mb-3" controlId="subject">
          <Form.Label>Subject:</Form.Label>
          <Form.Control {...register("subject", { required: true })} type="text" placeholder="Subject of your enquiry" />
        </Form.Group>
          {errors.subject && <span className="error d-block text-end">{errors.subject.message}</span>}

        <Form.Group className="mb-3 message--long" controlId="message">
          <Form.Label className="text-center">Message</Form.Label>
          <Form.Control {...register("message", { required: true })} type="text" placeholder="Your message" as="textarea" rows={5} />
          {errors.message && <span className="error d-block">{errors.message.message}</span>}
        </Form.Group>

        <Button className="button--form" type="submit">
          Send
        </Button>
      </Form>
    </Layout>
  );
}

export default Contact