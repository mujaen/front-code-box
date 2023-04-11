import { configureStore } from '@reduxjs/toolkit'

import userReducer from 'reducers/user/userSlice'
import counterReducer from 'reducers/counter/counterSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
