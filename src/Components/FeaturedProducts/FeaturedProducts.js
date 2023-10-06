import "./FeaturedProducts.scss";
import Products from "../Data.json";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

function FeaturedProducts() {
  return (
    <Container fluid="md">
      <Row className="text-center mt-5 mb-3">
        <h1 className="featuredproducts-title">Featured Products</h1>
      </Row>
      <Row>
        {Products.filter((items) => {
          if (items.Top === 1) {
            return items;
          } else {
            return null;
          }
        }).map((items, index) => (
          <Col xs={12} sm={6} md={3} key={index}>
            <Card className="mt-3 mb-3 card-products-featured">
              <Card.Img
                variant="top"
                src={items.Img1}
                alt={items.Name}
                className="img-card-rpoducts"
              />
              <Card.Body className="content-card-products">
                <NavLink
                  to={`/ShowProduct/${items.ID}`}
                  className=" detail-link-card"
                >
                  <Card.Title className="title-card-products">
                    {items.Name1}
                  </Card.Title>
                </NavLink>
                <Card.Text className="price-card-products">
                  {items.Price}
                </Card.Text>
                <Card.Text className="star-card-products">
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-sharp fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </Card.Text>
                <Button className="add-products">ADD TO CART</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default FeaturedProducts;