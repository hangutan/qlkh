import { combineReducers } from 'redux';
import listCourses from './courses/reducers';
import user from './users/reducers';

const rootReducer = combineReducers({
    ListCourses : listCourses,
    User : user,
})

export default rootReducer;