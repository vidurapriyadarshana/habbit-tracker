import { configureStore } from '@reduxjs/toolkit'
import habbitReducer from './habbit.slice'

const store = configureStore({
    reducer: {
      habbit:habbitReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;