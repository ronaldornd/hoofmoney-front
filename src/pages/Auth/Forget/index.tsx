import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import logo from "../../../assets/logo.png";
export default function Forget() {
    return (
        <>
            <div className="flex flex-row w-screen h-screen items-center">

                <div className="flex flex-col gap-2 w-full h-full p-10">
                    <img src={logo} alt="logo da empresa Hoof Money" className="m-10 mb-0" />
                    <h1 className="font-semibold text-xl text-center w-full">“Gerenciando seu futuro financeiro”</h1>

                </div>

                <div className="flex flex-col gap-5 w-full h-max items-center">
                    <h1 className="font-semibold text-2xl">Recupere sua Senha</h1>
                    <div className="flex flex-col w-full p-10 gap-2">
                        <Label htmlFor="password">Senha</Label>
                        <Input type="password" id="password" placeholder="Digite sua nova senha" />
                        <Label htmlFor="password">Confirme a Senha</Label>
                        <Input type="password" id="password" placeholder="Digite novamente sua nova senha" />
                    </div>
                    <Button type="submit" className="w-max px-10 text-lg bg-green-500 text-black">Salvar</Button>
                </div>
            </div>
        </>
    )
};
