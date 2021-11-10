import "./ListingCard.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import guestIcon from "../../assets/image/guest_icon.svg";

export const ListingCards = () => {
  const [homeListings, setHomeListings] = useState([]);

  const fetchData = () => {
    fetch("/fakeHost/data.json")
      .then((response) => {
        return response.json();
      })
      .then(({ data }) => {
        setHomeListings(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="myCards">
      {homeListings.map((el) => {
        return <HouseCart data={el} key={el.id} />;
      })}
    </div>
  );
};

const HouseCart = ({ data }) => {
  return (
    <Link to={`/product/${data.id}`} className="link">
      <Container>
        <Row>
          <Col>
            <Card className="card-apart">
              <Card.Img
                variant="top"
                src={data.image}
                className="card-img-listing"
              />
              <Card.Body>
                <span className="price">${data.price}/day</span>
                <b>
                  <Card.Title class="card-title-listing">
                    {data.title}
                  </Card.Title>
                </b>
                <p className="card-header-adress">{data.adress}</p>
                <Card.Footer className="card-footer">
                  <img
                    className="guest_icon"
                    src={guestIcon}
                    alt="guest_icon"
                  />
                  for {data.guests} guests
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Link>
  );
};
