import * as types from '../constants/ActionTypes';
import {bindActionCreators} from 'redux';


function reducer(state = {
    location : "Kiev"
}, action) {
   switch(action.type) {
      case types.LOCATION_UPDATE:
         return {
            ...state,
            location : action.payload.location
         };
      case types.ADD_FAVORITE:
         return{
            ...state,
            location:action.payload.location
         }     
      default:
         return state;
   }
}

export default reducer;