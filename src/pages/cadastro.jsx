import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/vscode-icons_file-type-gamemaker.svg";
import { FormCadastro } from "../components/formCadastro";
import { Login } from "../components/login";
//import { Login } from "../components/login";

export function Cadastro() {
  const [mostrarLogin, setMostrarLogin] = useState(true);
  const [mostrarCadastro, setMostrarCadastro] = useState(false);
  const botaoEntrarRef = useRef(null);

  const mostrarComponenteLogin = () => {
    setMostrarLogin(true);
    setMostrarCadastro(false);
  };

  const mostrarComponenteCadastro = () => {
    setMostrarCadastro(true);
    setMostrarLogin(false);
  };

  useEffect(() => {
    // Focar no botão "Entrar" quando o componente é montado
    botaoEntrarRef.current.focus();
  }, []); // executado apenas uma vez, após a montagem do componente

  return (
    <>
      <div className="mx-auto   bg-slate-900 overflow-y-hidden">
        <Link to="/"><img src={Logo} alt="Logo" className="mx-auto" /></Link>
      </div>
      <div className="w-full h-2 bg-primary  " />

      <div className=" w-[30%] h-full my-10 mx-auto flex flex-col items-start p-6 bg-slate-600 rounded-md ">
        <h1 className="mx-auto text-2xl mb-5">Junte-se a nós</h1>
        <div>
          <button
            ref={botaoEntrarRef}
            onClick={mostrarComponenteLogin}
            className="mr-6 font-semibold  focus:text-primary"
          >
            Entrar
          </button>
          <button
            onClick={mostrarComponenteCadastro}
            className="font-semibold focus:text-primary"
          >
            Cadastrar-se
          </button>
        </div>
        <div className="w-full h-0.5 bg-primary mb-4" />
        {mostrarLogin && <Login />}
        {mostrarCadastro && <FormCadastro />}
        {/* <FormCadastro />*/}
        {/*<Login/>*/}
      </div>
    </>
  );
}
