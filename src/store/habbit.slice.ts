import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
  id: string;
  name: string;
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
    addHabit: (
      state,
      action: PayloadAction<{ name: string; frequency: "daily" | "weekly" }>
    ) => {
      const newHabit: Habit = {
        id: Date.now().toString(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        completeDate: [],
        createdAt: new Date().toString(),
      };

      state.habits.push(newHabit);
    },
  },
});

export const { addHabit } = habitSlice.actions;
export default habitSlice.reducer;
