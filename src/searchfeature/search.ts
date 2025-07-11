import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { query } from 'express';
import { SearchState, SearchQuery } from '../components/types/types';

const initialState: SearchState = {
    value: '',
    query: {
        sampleId: '',
        activationTime: '',
        patientName: '',
        resultTime: ''
    }
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateKeyword: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        updateQuery: (state, action: PayloadAction<SearchQuery>) => {
            state.query = { ...state.query, ...action.payload };
        }
    }
})

export const { updateKeyword, updateQuery } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;