import React from 'react';
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({user}) => {
    if(!user) {
        return <Navigate to={'/'} />
    }
    return (
        <>
            <h5>Hello {user.name}</h5>
        </>
    )
};

export default ProtectedRoute;