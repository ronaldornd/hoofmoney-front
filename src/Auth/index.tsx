import Login from "./Login";
import logo from "../assets/logo.png"
import Forget from "./Forget";
import Register from "./Register";
export default function Auth() {
    return(
        <>
        <div className="flex flex-row w-screen h-screen items-center">

        <div className="flex flex-col gap-2 w-full h-full p-10">
            <img src={logo} alt="logo da empresa Hoof Money" className="m-10 mb-0"/>
            <h1 className="font-semibold text-xl text-center w-full">“Gerenciando seu futuro financeiro”</h1>

        </div>
        <div className="flex w-full h-full items-center">
            <Register/>
        </div>
        </div>
        </>
    )
};
