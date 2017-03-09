
import React, {Component} from 'react';
import { connet } from 'react-redux';

class BookDetail extends Component {
  render(){
    return (
      <div> Book Detail container </div>
    );
  }
}

function mapStateToProps(state){
  return {
    book:state.activeBook;
  };
}
export default connect(mapStateToProps)(BookDetail)
