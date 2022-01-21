import React, { useReducer, useState } from 'react';




const App = () => {





    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchData = () => {

        setData("");
        setLoading(true);
        setError("");

        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then((response) => {
                setLoading(false)
                setData(response.message);
            })
            .catch((error) => {
                setLoading(false)
                setError('')
                setData('')
            }
            )

    }


    return (
        <div>
            <h2>Fetch Dog API </h2>
            <button onClick={fetchData} disabled={loading} >Fetch Data </button>
            <br /> <br />
        {data &&  <img src={data} alt="Random dog" />  }
        <br />
        {error &&  <div> {error} </div> }

        </div>
    )

};

export default App;



