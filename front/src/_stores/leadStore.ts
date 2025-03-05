import { create } from 'zustand'
import { ILeadStore } from '../_interfaces/ILead'



export const useLeadStore = create<ILeadStore>(()=>({
    lead: undefined
}))