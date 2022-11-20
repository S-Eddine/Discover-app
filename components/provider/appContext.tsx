import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useEffect,
  useReducer,
  useState,
} from "react";
import { IAppContext, TSteps } from "./types";

type AppContextType = {
  context: IAppContext;
  dispatch: Dispatch<IAppContext>;
};

const appReducer = (originalState: IAppContext, updatedState: IAppContext) => {
  return { ...originalState, ...updatedState };
};

const initState = (initialState: IAppContext) => {
  return { ...initialState };
};

const AppContext = createContext<AppContextType>({} as AppContextType);

const KhatamatAppProvider = ({ children }: PropsWithChildren<{}>) => {
  const [step, setStep] = useState<TSteps>("STEP_WELCOM");

  useEffect(() => {
    console.log("Step : " ,step)
  })

  const initialState: IAppContext = {
    step,
    setStep,
  };

  const [readerContext, dispatch] = useReducer(
    appReducer,
    initialState,
    initState
  );

  return (
    <AppContext.Provider value={{ context: readerContext, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { KhatamatAppProvider, AppContext };
