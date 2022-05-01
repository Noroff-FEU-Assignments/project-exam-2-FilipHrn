import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function ResidentsDisplay({ id, estateName, estatePrice, estateRating, estateImage, link, estateType }) {
  let destination;
  let text;

  if (link) {
    destination = `details/${id}`;
    text = 'Details';
  }else {
    destination = '/accommodation';
    text = "Go back";
  }

  return(
    <Card>
      <Row>
        <Col md={12} lg={5}>
          <Card.Img src={estateImage} />
        </Col>

        <Col className="d-flex flex-column">
          <Col className="flex-fill">
            <Card.Body className="ps-lg-0 pb-0 h-100 d-flex flex-column justify-content-between">
              <Card.Title className="fw-bold">{estateName}</Card.Title>
              <Card.Text className="text-end fw-bold fs-4">
                <span>{estatePrice}</span> NOK
              </Card.Text>
            </Card.Body>
          </Col>

          <Col className="flex-shrink-1">
            <Card.Footer className="ps-lg-0 pt-0 d-flex justify-content-between h-100 align-items-end">
              <Button className="success fs-6" variant="success">Rating: <span>{estateRating}/5</span></Button>
              <Link to={destination}><Button className="success fs-6 px-4" variant="success">{text}</Button></Link>
            </Card.Footer>
          </Col>
        </Col>
      </Row>
    </Card>
  );
}

export default ResidentsDisplay


