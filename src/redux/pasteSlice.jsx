import { createSlice } from '@reduxjs/toolkit'
import toast from "react-hot-toast" 


const initialState = {
  pastes: (() => {
    try {
      const storedPastes = localStorage.getItem("pastes");
      return Array.isArray(JSON.parse(storedPastes)) ? JSON.parse(storedPastes) : [];
    } catch (error) {
      console.error("Error parsing pastes from localStorage:", error);
      return [];
    }
  })(),
};

const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload 
      state.pastes.push(paste)
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("Paste Created Successfully")
    },
    updateToPaste: (state, action)=>{
      const paste =  action.payload;
      const index = state.pastes.findIndex((item)=> item._id === paste._id)
      if(index>=0){
        state.pastes[index]= paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Updated Successfully")
      }
    }, 
    restAllPaste: (state, action) =>{
        state.pastes = [];
        localStorage.removeItem("pastes");
    }, 
    removeFromPaste: (state, action) => {
      const pasteID = action.payload;
      const index = state.pastes.findIndex((item => item._id===pasteID))

      if(index>=0){
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste Deleted Successfully")
      }
    }
    },
})

export const { addToPastes, updateToPaste , restAllPaste , removeFromPaste } = pasteSlice.actions
export default pasteSlice.reducer