import React,{Component} from 'react';
import {connect} from 'react-redux'; // glue react to reduxs

class BookList extends Component {

  renderList(){
    //value of books prop is coming from the reducer
     return this.props.books.map((book)=>{
       return (
         <li key={book.title} className="list-group-item">
           {book.title}
         </li>
       );
     });
  }

  render(){
    return (
      <ul className = "list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//takes the state of our app as arg and will return props inside of BookList
//this is the link between react and redux
//GLUING REACT TO REDUX HERE
 function mapStateToProps(state){
    return {
        books:state.books
    }
 }

 //connect function takes in the mapStateToProps and the conponent and returns a container
 //this is exporting a container instead of a component
 export default connect(mapStateToProps)(BookList);

//container is just a component that has access to redux state.
// we want the most parent component to be a container so it can have access to data.
// it shouldnt neccessary be the app component. in this case booklist should be a container bu the app should
// be a simple container.

// only the most parent component that works with a piece of state
// should be connected to redux

//react and redux are totally separate projects. we need to use a third library
// to connect these two together which is called reactredux. using this it will turn components into smart component which
// means it has access to piece of state.
// container is where redux and react connect to each other.

//using {} when importing means instead of importing the whole object we are going to
//import just a property of it.
