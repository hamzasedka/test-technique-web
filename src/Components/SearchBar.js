import React from "react";
import { Container, FormControl, InputGroup, Navbar } from "react-bootstrap";

const SearchBar = ({ callback }) => {
  return (
    <>
      <Navbar bg="dark" sticky="top">
        <Container>
          <Navbar.Brand>
            <img
              src="https://storage.gra.cloud.ovh.net/v1/AUTH_5b52b2f4ab714e20821799649e702a79/production-hubdigital-medias/startup_logo/204f33fb-8956-4a22-ad34-5fd1c233f0af"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <InputGroup>
            <FormControl
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(event) => callback(event.target.value)}
            />
          </InputGroup>
        </Container>
      </Navbar>
    </>
  );
};

export default SearchBar;
