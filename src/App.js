import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
      <RoutesApp />
      <Analytics />
    </div>
  );
}

export default App;
