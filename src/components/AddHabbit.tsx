import { Box } from '@mui/material';
import React, { useState } from 'react'

const AddHabbit = () => {

    const [name, setName] = useState<string>('');
    const [frequency, setFrequency] = useState<"daily" | "weekly">('daily');

    return (
        <form action="">
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2
            }}>

            </Box>
        </form>
    )
}

export default AddHabbit