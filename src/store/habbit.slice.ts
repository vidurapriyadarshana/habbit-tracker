import { createSlice } from "@reduxjs/toolkit";

export interface Habit {
  id: string;
  frequency: "daily" | "weekly";
  completeDate: string[];
  createdAt: string;
}

interface HabitsState {
  habits: Habit[];
}

const initialState: HabitsState = {
  habits: [],
};

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action: any) => {
      
    },
  },
});

export const { addHabit } = habitSlice.actions;
export default habitSlice.reducer;
