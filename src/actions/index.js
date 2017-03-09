
export function selectBook(book){
  // selectBook is an actionCreator which should return an action with a type property
//  const BOOk_SELECTED = 'Book_SELECTED';
   return {
     //action ALWYAS contains a type and sometimes has a payload.
     //Type should always be in capital
      type:'BOOk_SELECTED',
      payload: book
   };
}
