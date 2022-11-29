export type TSteps = 'STEP_WELCOM' | 'STEP_JOIN' | 'STEP_CREATE_NAME' | 'STEP_CREATE_NOR' | 'STEP_CREATE_LVL' | 'STEP_CREATE_DATE';
export type TLevel = 'LOW' | 'MEDIUM' | 'HIGH';

export type TReader = {
    readerName: string
    level: TLevel
    // email : string
}

export type TGroupe = {
    name?: string
    numberOfReader?: number
    date?: Date
    readers? : TReader[]
}

export type IAppContext = {
    step : TSteps
    groupe? : TGroupe
}