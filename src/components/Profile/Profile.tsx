import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store, {messageType} from "../../redux/store";
import {ActionsTypesF} from "../../redux/ActionTypes";

type stateProfileType = {
    message: messageType[]
    newPostText: string;
    dispatch: (action: ActionsTypesF) => void;
}

function Profile(props: stateProfileType) {
    return (
        <div>
            <ProfileInfo
                pic={'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'}/>
            <MyPosts message={props.message}
                     newPostText={props.newPostText}
                     dispatch={store.dispatch.bind(store)}/>
        </div>
    );
}

export default Profile;
