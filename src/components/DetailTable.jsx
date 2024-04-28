import React, { useState, useEffect } from 'react';
const API = "https://jsonplaceholder.typicode.com/users";

const DetailTable = () => {

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
        }catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchUsers(API);
    }, []);

    return (
        <>
            Hello Baby
        </>
    )
}

export default DetailTable;
