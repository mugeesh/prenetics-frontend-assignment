import './../style/table.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResultsFromAPI, updateMeta } from '../searchfeature/result';
import { SearchInputGroup } from './SearchInputGroup';
import { CircleResultTableRow, ResultTableRow } from './ResultTableRow';
import { Pagination } from './Pagination';
import { TotalResultFound } from './TotalResultFound';
import { RootState, AppDispatch } from '../store/store';
import { updateTotalPage } from '../searchfeature/pagination';

export const LandingResultPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { pagination, result, search, organisation } = useSelector((state: RootState) => state);
    const { query } = search;
    const { data, meta, status } = result;
    const { current_page, limit } = pagination;

    useEffect(() => {
        dispatch(getResultsFromAPI());
    }, [current_page, query, dispatch]);

    useEffect(() => {
        dispatch(updateTotalPage({ total_page: Math.ceil(meta.total / limit) }));
    }, [meta.total, limit, dispatch]);

    if (status !== 'fulfilled') {
        return (
            <div id='loading' data-testid='test-result-page-loading'>
                Loading...
            </div>       
        );
    }

    return (
        <>
            <div id='content-card' data-testid='test-result-page'>
                <SearchInputGroup />
                <div id='table-wrapper'>
                    <table id='result-table'>
                        <thead>
                            <tr>
                                <th>Barcode</th>
                                <th>Activation</th>
                                <th>Report Released</th>
                                { organisation.name !== 'Circle' && <th>Result Type</th> }
                                <th>Rejection</th>
                                <th>Name</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                             { data.map((item, i) => (
                                organisation.name === 'Circle' ? <CircleResultTableRow key={i} {...item} /> : <ResultTableRow key={i} {...item} />
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
            <div id='table-footer'>
                <TotalResultFound>{meta.total}</TotalResultFound>
                <Pagination />
            </div>
        </>
    );
}
