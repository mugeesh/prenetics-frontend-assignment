import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { searchReducer } from '../searchfeature/search';
import { paginationReducer } from '../searchfeature/pagination';
import { resultReducer } from '../searchfeature/result';
import { organisationReducer } from '../searchfeature/organisation';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        pagination: paginationReducer,
        result: resultReducer,
        organisation: organisationReducer
    },
    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;