import Logo from "../assets/vscode-icons_file-type-gamemaker.svg";
//import { Login } from "../components/login";
//import { FormCadastro } from "../components/formCadastro";

export function Cadastro() {
  return (
    <>
      <div className="mx-auto   bg-slate-900 ">
        <img src={Logo} alt="Logo" className="mx-auto" />
      </div>
      <div className="w-full h-2 bg-primary  " />

      <div className=" w-[30%] h-full my-10 mx-auto flex flex-col items-start p-6 bg-slate-600 rounded-md">
        <h1 className="mx-auto text-2xl mb-5">Junte-se a nós</h1>
        <div>
          <button className="mr-6 font-semibold focus:text-primary">Entrar</button>
          <button className="font-semibold focus:text-primary">Cadastrar-se</button>
        </div>
        <div className="w-full h-0.5 bg-primary mb-4" />
        {/* <FormCadastro />*/}
        {/*<Login/>*/}
      </div>
    </>
  );
}
