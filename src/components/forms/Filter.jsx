import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Filter() {

  return(
    <Container className="mt-3 filter--side">
      <p className="text-center fw-bold my-0">Stars</p> {/* First Section */}
      <Row className="form-check">
        <Col><input className="form-check-input" type="checkbox" value="1" id="starRating" /></Col>
        <Col>
          <label className="form-check-label" for="starRating">
            1
          </label>
        </Col>
      </Row>

      <Row className="form-check">
        <Col><input className="form-check-input" type="checkbox" value="2" id="starRating" /></Col>
        <Col>
          <label className="form-check-label" for="starRating">
            2
          </label>
        </Col>
      </Row>

      <Row className="form-check">
        <Col><input className="form-check-input" type="checkbox" value="3" id="starRating" /></Col>
        <Col>
          <label className="form-check-label" for="starRating">
            3
          </label>
        </Col>
      </Row>

      <Row className="form-check">
        <Col><input className="form-check-input" type="checkbox" value="4" id="starRating" /></Col>
        <Col>
          <label className="form-check-label" for="starRating">
            4
          </label>
        </Col>
      </Row>

      <Row className="form-check">
        <Col><input className="form-check-input" type="checkbox" value="5" id="starRating" /></Col>
        <Col>
          <label className="form-check-label" for="starRating">
            5
          </label>
        </Col>
      </Row>

      <p className="text-center fw-bold my-0">Accommody</p> {/* Second Section */}
      <Row className="form-check">
        <Col><input className="form-check-input" type="checkbox" value="hotel" id="accommodyType" /></Col>
        <Col>
          <label className="form-check-label" for="accommodyType">
            Hotel
          </label>
        </Col>
      </Row>

      <Row className="form-check">
        <Col><input className="form-check-input" type="checkbox" value="b&amp;b" id="accommodyType" /></Col>
        <Col>
          <label className="form-check-label" for="accommodyType">
            B&amp;B
          </label>
        </Col>
      </Row>

      <Row className="form-check">
        <Col><input className="form-check-input" type="checkbox" value="guesthouse" id="accommodyType" /></Col>
        <Col>
          <label className="form-check-label" for="accommodyType">
            Guesthouse
          </label>
        </Col>
      </Row>

      <p className="text-center fw-bold my-0">Facilities</p> {/* Third Section */}
      <Row className="form-check">
        <Col><input className="form-check-input" type="checkbox" value="breakfast" id="facilitiesInc" /></Col>
        <Col>
          <label className="form-check-label" for="facilitiesInc">
            Breakfast
          </label>
        </Col>
      </Row>

      <Row className="form-check">
        <Col><input className="form-check-input" type="checkbox" value="internet" id="facilitiesInc" /></Col>
        <Col>
          <label className="form-check-label" for="facilitiesInc">
            Internet
          </label>
        </Col>
      </Row>

      <Row className="form-check">
        <Col><input className="form-check-input" type="checkbox" value="parking" id="facilitiesInc" /></Col>
        <Col>
          <label className="form-check-label" for="facilitiesInc">
            Parking
          </label>
        </Col>
      </Row>
    </Container>
  );
}

export default Filter