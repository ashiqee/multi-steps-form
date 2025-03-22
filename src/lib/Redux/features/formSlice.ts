import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  country: string;
  city: string;
  zip: string;
  address: string;
  profileImage: File | null;
  bio: string;
  linkedin: string;
  twitter: string;
  website: string;
}

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  country: "",
  city: "",
  zip: "",
  address: "",
  profileImage: null,
  bio: "",
  linkedin: "",
  twitter: "",
  website: "",
};

const formSlice = createSlice({
  name: "profileData",
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<FormState>>) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { updateForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
