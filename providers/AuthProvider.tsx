import { User } from "@/api/models/models";
import { checkIfAuthenticated, onSignIn, onSignOut } from "@/api/services/user";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContext = {
  // User
  user: undefined | User | null;

  // Methods
  setUser: (user: User | null) => void;
  logOut: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContext>({
  // Default states
  user: undefined,

  // Default methods
  setUser: (user: User | null) => {}, // Default noop function
  logOut: async () => {}, // Default noop function
  login: async (email: string, password: string) => {}, // Default noop function
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  // Check if the user is logged in
  useEffect(() => {
    const initializeAuth = async () => {
      setUser(await checkIfAuthenticated());
    };

    initializeAuth();
  }, []);

  // Log out function
  const logOut = async () => {
    await onSignOut();
    // State
    setUser(null);
  };

  // Log out function
  const login = async (email: string, password: string) => {
    const user = await onSignIn(email, password);
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ setUser, logOut, login, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
