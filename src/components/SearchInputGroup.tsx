import './../style/search_input_group.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateKeyword, updateQuery } from '../searchfeature/search';
import { goToPage } from '../searchfeature/pagination';
import { RootState } from '../store/store';

export const SearchInputGroup = () => {
        
    //alert(process.env.REACT_APP_ORGANISATION_ID);
    const SEARCH_PLACEHOLDER = process.env.REACT_APP_SEARCH_PLACEHOLDER || 'Search by name, barcode, activation date, result date separate multiple search criteria with :';
    
    const { value, query } = useSelector((state: RootState) => state.search);

    const dispatch = useDispatch();

    const changeKeyword = (v: string) => {
        dispatch(updateKeyword(v));
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const stringQuery = value.split(':');
        const res = {...query}
        res.patientName = stringQuery[0] || '';
        res.sampleId = stringQuery[1] || '';
        res.activationTime = stringQuery[2] || '';
        res.resultTime = stringQuery[3] || '';
        dispatch(updateQuery(res));
        dispatch(goToPage({ current_page: 1 }));
    }

    return (
        <form className='search-group' onSubmit={handleFormSubmit} data-testid='search-input-group'>
            <i className='fa fa-search'/>
            <input type='text' name='keyword' data-testid='search-input' placeholder={SEARCH_PLACEHOLDER} value={value} onChange={(e) => changeKeyword(e.target.value)} id='keyword' />               
        </form>
    )
}