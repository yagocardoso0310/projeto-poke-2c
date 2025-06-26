import { Navbar, Nav, Container } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/home">PokeApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/viacep' >ViaCep</Nav.Link>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/pokeflex">PokeFlex</Nav.Link>
                        <Nav.Link href="/pokegrid">PokeGrid</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
