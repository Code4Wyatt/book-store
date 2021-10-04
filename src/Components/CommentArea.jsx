
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import React from 'react';


class CommentArea extends React.Component {

    state = {
      comments: "",
      isLoading: true,
      isError: false
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
            
            "Authorization":
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjllNzJkNTI2MjAwMTViNmRjYTIiLCJpYXQiOjE2MzMwMDUyOTQsImV4cCI6MTYzNDIxNDg5NH0.d_KfdGYMLP2cIvkIVTXXAEEsTnwwgbKEKlTIzOAU9uA",
          },
        }
      );
      if (response.ok) {
        let data = await response.json()
        console.log(response)
        this.setState({
          comments: data,
          isLoading: false,
          isError: false 
        })
      } else {
        console.log('error')
        this.setState({ isLoading: false, isError: true })
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
        <div>
                {this.state.isLoading && <Loading />}
                {this.state.isError && <Error />}
                <AddComment asin={this.props.asin} />
                <CommentList commentsToShow={this.state.comments} />
        </div>
      )
    };
  };

export default CommentArea;