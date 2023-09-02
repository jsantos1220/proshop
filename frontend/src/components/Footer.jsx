import { Container, Row, Col } from "react-bootstrap"

export default function Footer() {

   const currentYear = new Date().getFullYear()

   return (
      <footer>
         <Container>
            <Col className="text-center py-3">
               <p>Proshop &copy; {currentYear}</p>
            </Col>
         </Container>
      </footer>
   )
}
