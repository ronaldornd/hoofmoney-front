import logo from "../../assets/logo.png";
import Login from "./Login";
export default function Auth() {
    return (
        <>
            <div className="flex flex-row w-screen h-screen items-center">

                <div className="flex flex-col gap-2 w-full h-full p-10">
                    <img src={logo} alt="logo da empresa Hoof Money" className="m-10 mb-0" />
                    <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold leading-tight w-full">“Gerenciando seu futuro financeiro”</h1>

                </div>
                <div className="flex w-full h-full items-center">
                    <Login />
                </div>
            </div>
        </>
    )
};