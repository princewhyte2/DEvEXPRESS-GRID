import React, { useState, useEffect } from 'react';
import axios from "axios";
import DataGrid from 'devextreme-react/data-grid';

const columns = ['OID', 'FirstName', 'LastName', 'PhoneNumber', 'Email', "FeedBack"];

export const GetFeedBack = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([
        {
            "oid": 1,
            "firstName": "whyte",
            "lastName": "prince",
            "phoneNumber": "8089",
            "email": "james@mail.com",
            "feedBack": "just improve"
        },]);




    useEffect(() => {
        async function getData() {
            await axios.get("https://localhost:5000/api/feedback/")
                .then(
                    (result) => {
                        setIsLoaded(true);
                        setItems(result.data.result.data);
                        console.log(items)
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        }
        getData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <DataGrid
                dataSource={items}
                defaultColumns={columns}
                showBorders={true}
            />
        );


    }

}

