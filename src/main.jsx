import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./store/StoreContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <>
    <CartProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </CartProvider>
  </>
);