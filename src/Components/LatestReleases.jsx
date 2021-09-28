import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import historyBooks from "../Assetts/history.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { OverlayTrigger } from "react-bootstrap";
import Overlay from "react-overlays/esm/Overlay";
import { Popover } from "react-bootstrap";

const LatestReleases = () => {
  return (
    <Container className="col-12 ">
      <Row className="row-cols-6 ">
        {console.log(historyBooks)}

        {historyBooks.map((book) => {
          return (
            <Col>
              <Card className="cards" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>£{book.price}</Card.Text>
                  <Container className="cardBtns justify-content-space-between d-flex">
                    <>
                      {["bottom"].map((placement) => (
                        <OverlayTrigger
                          trigger="click"
                          key={placement}
                          placement={placement}
                          overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                              <Popover.Title as="h3">{`Blurb`}</Popover.Title>
                              <Popover.Content>{book.title}</Popover.Content>
                            </Popover>
                          }
                        >
                          <Button className="blurb-btn" variant="secondary">
                            Read Blurb
                          </Button>
                        </OverlayTrigger>
                      ))}
                    </>
                    <Button variant="primary">Buy</Button>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default LatestReleases;
