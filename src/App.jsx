import { Navigation } from "./routes/index";
import { AuthProvider } from "./utils/context";
import "./App.scss";
export const App = () => {
  return (
    <>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </>
  );
};
