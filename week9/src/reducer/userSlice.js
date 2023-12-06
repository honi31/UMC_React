import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        id: "",
        isLoading: false,
        isLogin: null,
    },
    reducers: {
        loginUser: (state, action) => {
            if (action.payload && action.payload.name) {
                state.name = action.payload.name;
                state.id = action.payload.id;
            } else {
        // payload에 name 속성이 없는 경우에 대한 처리
                console.error("Payload does not contain 'name' property.");
            }
        return state;
    },
        clearUser: (state) => {
            state.name = "";
            state.id = "";
        return state;
        },
    },
});


export const { loginUser, clearUser } = userSlice.actions;
export default userSlice.reducer;