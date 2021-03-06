import "./ListingCard.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import guestIcon from "../../assets/image/guest_icon.svg";
import Fetch from "../../api/request";
import React, { useEffect } from "react";

export const ListingCards = () => {
  const [homeListings, setHomeListings] = useState([]);
  const linkServer =
    "http://ec2-3-127-145-151.eu-central-1.compute.amazonaws.com:8000/";
  useEffect(() => {
    Fetch("listing/all", { method: "GET" }).then((response) => {
      setHomeListings(response);
    });
  }, []);
  /* ********************************* */
  const sliceListings = homeListings.slice(Math.max(homeListings.length - 8, 0))
  console.log(sliceListings);
  /* ********************************** */

  return (
    <div className="myCards">

      {sliceListings.map((el) => {
        return <HouseCart data={el} key={el.id} linkServer={linkServer} />;
      })}
    </div>
  );
};

const HouseCart = ({ data, linkServer }) => {
  return (
    <Link to={`/product/${data.id}`} className="link">
      <Container>
        <Row>
          <Col>
            <Card className="card-apart">
              <Card.Img
                variant="top"
                src={linkServer + data.image.path}
                className="card-img-listing"
              />
              <Card.Body>
                <span className="price">${data.price}<span className="day-price">/day</span></span>
                <br />
                <strong class="card-title-listing">
                  {data.title}
                </strong>
                <p className="card-header-adress">{data.address}</p>
                <Card.Footer className="card-footer">
                  <img
                    className="guest_icon"
                    src={guestIcon}
                    alt="guest_icon"
                  />
                  {data.numOfGuests} guests
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Link>
  );
};
