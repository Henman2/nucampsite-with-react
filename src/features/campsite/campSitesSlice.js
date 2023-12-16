//file to handle global application state for campsites feature
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utiils/mapImageURL';
// import { CAMPSITES } from '../../app/shared/oldData/CAMPSITES';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites', 
    async () => {
        const response = await fetch(baseUrl + 'campsites');
        if(!response.ok){
            return Promise.reject('Unable t fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data; }
);
const initialState ={
    campsitesArray: [],
    isLoading: true,
    errMsg: ''
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState,
    reducers: {},
    extraReducers:{
        [fetchCampsites.pending]: (state)=>{ state.isLoading = true;},
        [fetchCampsites.fulfilled]: (state, action) =>{
            state.isLoading = false;
            state.errMsg = {};
            state.campsitesArray = mapImageURL(action.payload);
        },
        [fetchCampsites.rejected]: (state, action) =>{
            state.isLoading = false;
            state.errMsg = action.error ? action.message : 'Fetch Failed';
        }
    }
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
    return state.campsites.campsitesArray.find((campsite) => campsite.id === parseInt(id)); //ID passed is a string change to number
};

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};

