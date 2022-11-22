import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function AboutUs() {
    return(
        <Container>
            <Card border="info" >
                <Card.Header className="blockquote mb-0 card-body">About Us</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Our final project is a collaboration between Taylor Forbes, Tyhra Barreto, Aaron Boone, and Ashley Beal.
                    </Card.Text>
                    <Card.Text>
                        Our inspiration for this project came from our collective love of web/computer games and gaming.
                    </Card.Text>
                    <Card.Text>
                        This is the best of our favorite retro and classic games.  We hope you enjoy our app!!
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}