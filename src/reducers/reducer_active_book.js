//all reducers get two arguments: state and action
// state: it's not application state, just the peice of state the reducer is responsible for
export default function(state=null,action){

   switch(action.type){
     case 'BOOk_SELECTED':
       return action.payload;
   }
   //if you dont care about this action just return
   // the state
   return state;
}
