import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState, type FormEvent } from 'react'
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';
import { addHabit } from '../store/habbit.slice';

const AddHabbit = () => {

    const [name, setName] = useState<string>('');
    const [frequency, setFrequency] = useState<"daily" | "weekly">('daily');

    const dispatch = useDispatch<AppDispatch>();

    const hadleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (name.trim()) {
            dispatch(addHabit({
                name,
                frequency,
            }))

            setName("")
        }
    }

    return (
        <form onSubmit={hadleSubmit}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2
            }}>
                <TextField label='Habit Name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Habit Name' fullWidth />
                <FormControl fullWidth>
                    <InputLabel>Frequency</InputLabel>
                    <Select value={frequency} onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}>
                        <MenuItem value="daily">Daily</MenuItem>
                        <MenuItem value="weekly">Weekly</MenuItem>
                    </Select>
                </FormControl>
                <Button type='submit' variant='contained' color='primary'>Add Habit</Button>
            </Box>
        </form>
    )
}

export default AddHabbit