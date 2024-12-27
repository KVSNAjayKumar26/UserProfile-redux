import { createSlice } from "@reduxjs/toolkit";


const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: {
        name: '',
        email: '',
        avatar: null
    },
    reducers: {
        updateProfile(state, action) {
            const { name, email } = action.payload;
            state.name = name;
            state.email = email;
        },
        uploadAvatar(state, action) {
            state.avatar = action.payload;
        },
    },
});

export const { updateProfile, uploadAvatar } = userProfileSlice.actions;
export default userProfileSlice.reducer;