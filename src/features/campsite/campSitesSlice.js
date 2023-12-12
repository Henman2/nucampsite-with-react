//file to handle global application state for campsites feature
import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    campsitesArray: CAMPSITES
    
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
});

export const campsitesReducer = campsitesSlice.reducer; //export as reducer
//return entire array of compasites
export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
};

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
// }

export const selectCampsiteById = (id) =>(state)=> {
    return state.campsites.campsitesArray.find((campsite) => campsite.id === parseInt(id)); //if ID passed is a string change to number
};

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};

