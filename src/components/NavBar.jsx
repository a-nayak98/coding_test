import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg" className="navBr">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/images/logo.svg" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-Links">
              <Nav.Link href="#home" className="nav-Link">
                Home
              </Nav.Link>
              <Nav.Link href="#network" className="nav-Link">
                Network
              </Nav.Link>
              <Nav.Link href="#product" className="nav-Link">
                Product
              </Nav.Link>
              <Nav.Link href="#technology" className="nav-Link">
                Technology
              </Nav.Link>
              <Nav.Link href="#ourstory" className="nav-Link">
                our Story
              </Nav.Link>
              <Nav.Link href="#knowledgecenter" className="nav-Link">
                Knowledge center
              </Nav.Link>
            </Nav>
            <Nav className="navButtons ms-auto d-flex justify-content-between">
              <button type="button" className="navBtn1">
                Contact Us
              </button>
              <button type="button" className="navBtn2">
                Login
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
