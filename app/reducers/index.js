import { combineReducers } from "redux";
import phoneContactList from './phoneContactList';

const contactListApp = combineReducers({
    phoneContactList
});

export default contactListApp;