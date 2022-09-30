import React from "react";
import {
  Link
} from "react-router-dom";

import {Container, Button,Row} from "react-bootstrap"

function Navibar() {
  return (
    <div className="home-wrapper text-center">
      <h3>GoPos Task</h3>
      <Container>
        <Row>
          <div className="col-sm-4">
            <Link to="/products"><Button variant="primary">Products</Button></Link>
          </div>
          <div className="col-sm-4">
            <Link to="/categories"><Button variant="info">Categories</Button></Link>
          </div>
          <div className="col-sm-4">
            <Link to="/add"><Button variant="light">Add a new product</Button></Link>
          </div>
        </Row>

      </Container>
    </div>
  )
}

export default Navibar