import axios from 'axios';
import { RootState } from '../../store/store';
import { ApiResponseType } from '../types/types';

const defaultBaseUrl =
  process.env.REACT_APP_API_BASEURL || 'http://localhost:8080/test/v1.0';
   axios.defaults.baseURL = defaultBaseUrl;

export const fetchResultsFormAPI = async (state: RootState) => {
    let url = `/org/${process.env.REACT_APP_ORGANISATION_ID}/sample?limit=${state.pagination.limit}&offset=${state.pagination.current_page - 1}&`;
    const params = new URLSearchParams();

    let i: keyof typeof state.search.query;
    for (i in state.search.query) {
        console.log(`searching for ${i} with value ${state.search.query[i]}`);
        if (state.search.query[i]!.length > 2) {
            params.append(i, state.search.query[i]!.trim())
        }
    }
    console.log(`final searching query >>> ${params.toString()}`);
    url += params.toString();
    try {
        const res = await axios.get(url)
        const { data, meta, included } = res.data as ApiResponseType;
        return {
            status: state.result.status,
            data: data.map((result, i) => {
                return {
                    patientName: included[i].attributes.name,
                    sampleId: result.attributes.sampleId,
                    result: result.attributes.result || '',
                    resultType: result.attributes.resultType,
                    resultTime: new Date(result.attributes.resultTime).toLocaleString(),
                    activationTime: new Date(result.attributes.activateTime).toLocaleString()
                }
            }),
            meta: {
                total: meta.total
            }
        }
    } catch {
        return {
            status: 'rejected',
            data: [],
            meta: {
                total: 0
            }
        }
    }
};