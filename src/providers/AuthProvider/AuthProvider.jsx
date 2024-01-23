import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const info = {test: 100}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;