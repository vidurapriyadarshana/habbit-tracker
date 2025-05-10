import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import { Container, Typography } from '@mui/material'
import AddHabbit from './components/AddHabbit'
import HabitList from './components/HabitList'

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align='center'>Habbit Tracker</Typography>
        <AddHabbit />
        <HabitList />
      </Container>
    </Provider>
  )
}

export default App