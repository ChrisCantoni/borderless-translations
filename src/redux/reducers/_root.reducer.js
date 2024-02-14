import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import allClients from './allClients.reducer';
import allContractors from './allContractors.reducer';
import allProjects from './allProjects.reducer';
import client from './client.reducer';
import contractor from './contractor.reducer';
import project from './project.reducer';
import clientProjects from './clientProjects.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  allClients, // Array of all clients
  allContractors, // Array of all contractors
  allProjects, // Array of all projects
  client, // Object containing data for a single client
  contractor, // Object containing data for a single contractor
  project, // Object containing data for a single project
  clientProjects, // Array containing all the projects for a single client
});

export default rootReducer;
