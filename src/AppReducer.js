import React, { useState, useReducer } from 'react';
import { reducer } from './Reducers';

const INITIAL_STATE = {
    data: "",
    error: "",
    loading: false
}
const AppReducer = () => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const { data, loading, error } = state;

    const fetchData = () => {

        dispatch({ type: 'FETCH_START' });

        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then((response) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.message })
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_ERROR', payload: 'Error fetching data' })
            }
            )

    }

    return (
        <div className='container mt-4' >
            <h2>Fetch Dog & useReducers Hooks Usage </h2>
            <button className='btn btn-danger my-3' onClick={fetchData} disabled={loading} >Fetch Data </button>
            {data &&
                <div className="card w-25 " >
                    <img className='card-img-top' src={data} alt="Random dog" />
                </div>
            }
            <br />
            {error && <div> {error} </div>}

        </div>
    )
};

export default AppReducer;
