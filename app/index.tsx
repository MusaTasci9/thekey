import { LoadingScreen } from "@/components/LoadingScreen";
import { useAuth } from "@/providers/AuthProvider";
import { Redirect } from "expo-router";

export default function App() {
  const { user } = useAuth();

  if (user === undefined) return <LoadingScreen />;

  if (!user) return <Redirect href={"/sign-in"} />;

  return <Redirect href={"/(main)/home"} />;
}
