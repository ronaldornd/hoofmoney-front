import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import About from "../About";
export default function Forget() {
    return (
        <>
            <div className="flex flex-row w-screen h-screen items-center">
                <div className='w-full h-max'><About /></div>
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
