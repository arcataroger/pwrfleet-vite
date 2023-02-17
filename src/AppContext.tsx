import {createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState} from 'react';

export interface AppContext {
    isLoggedIn: boolean,
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

export const AppContext = createContext<AppContext>({} as AppContext);

export const AppContextProvider: FC<PropsWithChildren> = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    return (<AppContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {props.children}
    </AppContext.Provider>)
}