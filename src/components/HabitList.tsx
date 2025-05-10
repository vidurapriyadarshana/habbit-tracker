import React, { type FC } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import { Box, Grid, Paper, Typography } from '@mui/material';

const HabitList: FC = () => {

    const { habits } = useSelector((state: RootState) => state.habbit); 

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
            {habits.map((habit) => (
                <Paper key={habit.id} elevation={2} sx={{p: 2}}>
                    <Grid container alignItems="center">
                        <Grid>
                            <Typography variant='h6'>{habit.name}</Typography>
                            <Typography variant='body2' color='text.secondaty'>{ habit.frequency }</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </Box>
    )
}

export default HabitList
