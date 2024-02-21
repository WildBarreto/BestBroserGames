import ReactDOM from "react-dom/client";
import "./styles/app.css";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FormCadastro } from "./components/formCadastro";
import { Login } from "./components/login";
import { PageGame } from "./components/pageGame";
import { Cadastro } from "./pages/cadastro";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "cadastro",
    element: <Cadastro />,
    children: [
      {
        path: "formCadastro",
        element: <FormCadastro />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/game",
    element: <PageGame />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
