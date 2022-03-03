import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'


import type { AppState, AppThunk } from '../../app/store'
import { fetchProfile } from './profileAPI'

export interface ProfileState {
  name: string,
  email: string,
  phone: string
}

const initialState: ProfileState = {
  name: '',
  email: '',
  phone: '',
}


export const updateProfileAsync = createAsyncThunk(
  'profile/updateProfile',
  async (profile: ProfileState) => {
    const response = await fetchProfile(profile)
    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    updatePhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload
    }
  }
})

export const { updateName, updateEmail, updatePhone } = profileSlice.actions

export const selectEmail = (state: AppState) => state.profile.email
export const selectName = (state: AppState) => state.profile.name
export const selectPhone = (state: AppState) => state.profile.phone




export default profileSlice.reducer
