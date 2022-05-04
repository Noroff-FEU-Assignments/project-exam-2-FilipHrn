import Layout from '../layout/Layout';
import Heading from '../typography/Heading';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import uploadEnquiry from '../../utils/uploadEnquiry';

const schema = yup.object().shape({
  enqName: yup.string().required('Please enter your name').min(6, 'Must be at least 6 characters long'),
  enqSubject: yup.string().required('Please enter the subject of your enquiry').min(3, 'Must be at least 3 characters long'),
  enqMessage: yup.string().required('Please enter your message').min(10, 'Must be at least 10 characters long')
});

function Enquiry() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmit(data) {
    console.log(data);

    uploadEnquiry(data.enqName, data.enqSubject, data.enqMessage);
  }

  console.log(errors);

  return(
    <Layout>
      <Heading>Enquiry</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="enqName">
          <Form.Label>Name:</Form.Label>
          <Form.Control {...register("enqName", { required: true })} type="text" placeholder="Your name" />
        </Form.Group>
          {errors.enqName && <span className="error d-block text-end">{errors.enqName.message}</span>}

        <Form.Group className="mb-3" controlId="enqSubject">
          <Form.Label>Subject:</Form.Label>
          <Form.Control {...register("enqSubject", { required: true })} type="text" placeholder="Subject of your enquiry" />
        </Form.Group>
          {errors.enqSubject && <span className="error d-block text-end">{errors.enqSubject.message}</span>}

        <Form.Group className="mb-3 message--long" controlId="enqMessage">
          <Form.Label className="text-center">Message</Form.Label>
          <Form.Control {...register("enqMessage", { required: true })} type="text" placeholder="Your message" as="textarea" rows={5} />
          {errors.enqMessage && <span className="error d-block">{errors.enqMessage.message}</span>}
        </Form.Group>

        <Button className="button--form" type="submit">
          Send
        </Button>
      </Form>
    </Layout>

  );
}

export default Enquiry