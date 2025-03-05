export interface ILead {
    name: string
    email: string
    phone: string
    message: string
}

export interface ILeadStore {
    lead: ILead | undefined,
}