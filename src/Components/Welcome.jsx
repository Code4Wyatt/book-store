import Jumbotron from "react-bootstrap/Jumbotron";
import React from "react";
import Button from "react-bootstrap/Button"

class Welcome extends React.Component {
    render() {
        return (
         <Jumbotron>
  <h1>Lets read! 🤓</h1>
  <p>
    Buy books, store in cabinet, pretend to read!
  </p>
  <p>
    <Button variant="primary">Browse</Button>
  </p>
</Jumbotron>
     )
 }
}

export default Welcome;