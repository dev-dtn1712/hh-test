import React, { createContext, useEffect, useState, useContext, ReactNode } from 'react'
import Cookies from 'js-cookie'

interface AuthContextType {
  name: string
  login: (name: string) => void
  logout: () => void
}

const initialAuthContext: AuthContextType = {
  name: '',
  login: () => {},
  logout: () => {},
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextType>(initialAuthContext)

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [name, setName] = useState('')

    useEffect(() => {
      const username = Cookies.get('name');
      if (username) {
        setName(username);
      }
    }, []);


  const login = (name: string) => {
    setName(name)
    Cookies.set('name', name);
  }

  const logout = () => {
    setName('')
    Cookies.remove('name')
  }

  return (
    <AuthContext.Provider value={{ name, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
