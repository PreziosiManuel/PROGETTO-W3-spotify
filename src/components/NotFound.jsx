import React from "react";
import { Container, Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Container className="d-flex flex-column align-items-center mt-5 rouded">
        <Alert variant="warning ">
          <Alert.Heading>Pagina non trovata!</Alert.Heading>
          <p>La pagina che stai cercando non esiste.</p>
          <hr />
          <div className="d-flex justify-content-center">
            <Button onClick={() => navigate("/")} variant="outline-secondary">
              Torna indietro
            </Button>
          </div>
        </Alert>
      </Container>
    </>
  );
};

export default NotFound;
