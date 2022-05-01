import Layout from '../layout/Layout';
import Filter from '../forms/Filter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Residents from '../display/Residents';
import { useState } from "react";

function Accommodation() {
  const [ searchValue, setSearchValue ] = useState('');

  return(
    <Layout>
      <Container fluid>
        <Row>
          <Col sm={4} md={4} lg={3}>
            <Form.Control onInput={ event => setSearchValue(event.target.value) } id="search__bar" className="mt-3 text-center" placeholder="Type hotel name" />
            <Filter />      
          </Col>

          <Col id="dropZone" className="mb-3">
            <Residents query={searchValue} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Accommodation