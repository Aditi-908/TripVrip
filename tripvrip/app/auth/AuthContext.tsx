import React, { createContext, useState, useContext, ReactNode } from "react";

type AuthContextType = {
  token: string | null;
  tokenType: string | null;
  setAuth: (token: string, tokenType: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [tokenType, setTokenType] = useState<string | null>(null);

  const setAuth = (newToken: string, newType: string) => {
    setToken(newToken);
    setTokenType(newType);
  };

  const logout = () => {
    setToken(null);
    setTokenType(null);
  };

  return (
    <AuthContext.Provider value={{ token, tokenType, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
