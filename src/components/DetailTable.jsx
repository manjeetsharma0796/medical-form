import React, { useState, useEffect } from 'react';
import UserData from '../miniCompo/UserData';
import './componentsCss/DetailTable.css';
const API = "#";


const DetailTable = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);

            if(data.length > 0){
                setUsers(data);
            }
        }catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchUsers(API);
    }, []);

    return (
        <>
            <table className="detailTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone No.</th>
                        <th>Diabetic</th>
                        <th>Smoker</th>
                        <th>Hypertension</th>
                        <th>CBG</th>
                        <th>ECG</th>
                    </tr>
                </thead>
                <tbody>
                    <UserData users={users} />
                </tbody>
            </table>
        </>
    )
}

export default DetailTable;
