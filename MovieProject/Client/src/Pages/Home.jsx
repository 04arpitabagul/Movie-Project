import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../App.css"; // correct path to your App.css

const Home = () => {
  const featuredMovie = {
    title: "Saiyaara",
    description: "A thrilling journey of love and adventure",
    image:
      "https://www.acmodasi.in/amdb/images/movie/7/e/saiyaara-2025-e7y1Ga.jpg",
  };

  const categories = [
    {
      name: "Action",
      image:
        "https://i.pinimg.com/736x/69/eb/2e/69eb2e87e012ec13b985b6b9d4aec99d.jpg",
    },
    {
      name: "Comedy",
      image:
        "https://www.tallengestore.com/cdn/shop/products/7381744976052A_7ee4e15b-2c32-4c75-9fe1-77966ec7feea.jpg?v=1683929399",
    },
    {
      name: "Drama",
      image:
        "https://i.pinimg.com/736x/d6/3c/10/d63c1030a290bc632fd424868f6fbfe0.jpg",
    },
    {
      name: "Horror",
      image:
        "https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg",
    },
  ];

  return (
    <div className="home-page">
      {/* Featured Movie Section */}
      <div className="featured-section text-white">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="featured-title">{featuredMovie.title}</h1>
              <p className="featured-desc">{featuredMovie.description}</p>
              <Button variant="danger">Watch Now</Button>
            </Col>
            <Col md={6} className="text-center">
              <img
                src={featuredMovie.image}
                alt={featuredMovie.title}
                className="featured-image"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Categories */}
      <Container className="category-section">
        <h2 className="text-center category-heading">Browse by Genre</h2>
        <Row>
          {categories.map((cat, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <Card className="category-card h-100">
                <Card.Img
                  variant="top"
                  src={cat.image}
                  className="category-img"
                />
                <Card.Body className="text-center">
                  <Card.Title>{cat.name}</Card.Title>
                  <Button variant="outline-primary" size="sm">
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="footer-section text-white text-center">
        <Container>
          <p className="mb-0">© 2025 MovieZone. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
