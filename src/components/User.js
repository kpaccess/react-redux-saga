import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersRequested } from "../redux/actions";
import Card from "./Card";

const User = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error)

    useEffect(() => {
        dispatch(getUsersRequested())
    }, []);

    console.log(" users ", users)

    return (
        <>
            {
                users.length > 0 && users.map(user => (
                    <Card key={user.id} user={user}/>
                ))
            }

        </>
    );
};

export default User;