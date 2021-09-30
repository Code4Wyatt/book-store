import Card from "react-bootstrap/Card";
import React from 'react';
import Props from 'react-bootstrap'

// class component
class SingleBook extends React.Component {
  // The goal click on book and display comments
  // first is book clicked/selected? for this can be created a boolean state true/false
  // If the boolean is true display comments
  // the commments area needs the book ID to retrive the comments (pass the book id as props)

  // create a function to listen the click if clicked set the state to true and render the comment area
   state = {
      BookClicked: [] 
    }asdasd
    
 asdasdasdas

  render() {
    return (
  <Card onClick="showComments()" style={{ width: "18rem" }}> 
    <Card.Img variant="top" src={props.book.img} />
    <Card.Body>
      <Card.Title>{props.book.title}</Card.Title>
        </Card.Body>
        <CommentArea />
    </Card>
    
    )
  }
};

export default SingleBook;
