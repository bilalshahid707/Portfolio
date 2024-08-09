import { Allroutes } from "./Routes/Allroutes";
import { Header, Footer } from "./index";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  });
  if (loading) {
    return (
      <div className="bg-primary h-screen loader-container flex items-center justify-center">
        <div className="loader">
          <ReactLoading
            type="bars"
            color={"#2a2a2a"}
            height={100}
            width={100}
          />
        </div>
      </div>
    );
  } else {
    return (
      <main>
        <ToastContainer limit={2} />
        <Allroutes />
        <Footer />
      </main>
    );
  }
}

export default App;
