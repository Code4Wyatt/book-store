import Card from "react-bootstrap/Card";
import React from "react";
import CommentArea from './CommentArea';

// class component
class SingleBook extends React.Component {
  
  // The goal click on book and display comments
  // first is book clicked/selected? for this can be created a boolean state true/false
  // If the boolean is true display comments
  // the commments area needs the book ID to retrive the comments (pass the book id as props)

  // create a function to listen the click if clicked set the state to true and render the comment area
  state = {
    selected: false,
  };

  render() {
    return (
      <Card onClick={() => this.setState({ selected: !this.state.selected })}
        style = {{ border: this.state.selected ? '3px solid red' : 'none' }}>
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
        <CommentArea />
      </Card>
    )
  }
}

export default SingleBook;
