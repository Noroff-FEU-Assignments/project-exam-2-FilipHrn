import Layout from '../layout/Layout';
import Heading from '../typography/Heading';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from "react-router-dom";
import { validate } from '../../utils/login';

const schema = yup.object().shape({
  userName: yup.string().required('Please enter your username').min(3, 'Must be at least 3 characters long'),
  password: yup.string().required('Please enter your password').min(4, 'Must be at least 4 characters long')
});

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  function onSubmit(data) {
    console.log(data);
    validate();
  }
  
  console.log(errors);

  return (
    <Layout>
      <Heading>Login</Heading>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Username:</Form.Label>
          <Form.Control {...register("userName", { required: true })} type="text" placeholder="Your username" />
        </Form.Group>
          {errors.userName && <span className="error d-block text-end">{errors.userName.message}</span>}

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control {...register("password", { required: true })} type="password" placeholder="Your password" />
        </Form.Group>
          {errors.password && <span className="error d-block text-end">{errors.password.message}</span>}

        <Button className="button--form" type="submit">
          Login
        </Button>
      </Form>
      <p className="text-center">Dont have a user?<Link to="/register"><Button className="button--form mt-3" type="submit">Register</Button></Link></p>
    </Layout>
  );
}

export default Login