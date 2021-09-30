import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class CommentArea extends React.Component {

    state = {
      comments: "",
      
    }

  //How to pass the server data to the children components
    // you are going to to a request
    // if the request is ok you need to store this data in a component STATE
    // if the component STATE has 1 element or more you want to display the element

    // How to show/display the data 
    // from the State you are going to perform a map
    // this.state.booksComments.map(book=> <Comment key={book._id} book={book}/>)

    // This fetches the comments
  
  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
        {
          headers: {
            "Content-type": "application/json",
            "Authorization":
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjllNzJkNTI2MjAwMTViNmRjYTIiLCJpYXQiOjE2MzMwMDUyOTQsImV4cCI6MTYzNDIxNDg5NH0.d_KfdGYMLP2cIvkIVTXXAEEsTnwwgbKEKlTIzOAU9uA",
          },
        }
      );
      if (response.ok) {
        let data = await response.json()
        console.log(data)
        this.setState({
          comments: data,
          
        })
      }
    } catch (err) {
      console.log(err.message);
      this.setState({
        isLoading: false,
        isError: false
      })
    }
  }

    render() {
      return (
        <Modal.Dialog >
          <Modal.Header closeButton>
            <Modal.Title>Comments</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{this.state.comments}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog >
      )
    };
  };

export default CommentArea;