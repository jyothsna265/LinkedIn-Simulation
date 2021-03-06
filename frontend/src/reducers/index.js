import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';
import jobReducer from './jobReducer';
import applyForm from './applyForm';

export default combineReducers({
    login: loginReducer,
    form: formReducer,
    profile:profileReducer,
    job: jobReducer,
    apply:applyForm,
})