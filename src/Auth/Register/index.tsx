import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Register() {
    return (
        <>
            <div className="flex flex-col gap-5 w-full h-max items-center">
                <h1 className="font-semibold text-2xl">Criar Conta</h1>
                <div className="flex flex-col w-full p-10 gap-2">
                    <div className="flex flex-row w-full">
                        <div className="w-full">

                            <Label htmlFor="name">Nome</Label>
                            <Input type="text" id="name" placeholder="Digite seu nome" />
                        </div>
                        <div className="w-full">

                            <Label htmlFor="lastName">Sobrenome</Label>
                            <Input type="text" id="lastName" placeholder="Digite seu sobrenome" />
                        </div>
                    </div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Digite seu email" />
                    <Label htmlFor="password">Senha</Label>
                    <Input type="password" id="password" placeholder="Digite sua nova senha" />
                    <Label htmlFor="password">Confirme a Senha</Label>
                    <Input type="password" id="password" placeholder="Digite novamente sua nova senha" />
                </div>
                <Button type="submit" className="w-max px-10 text-lg bg-green-500 text-black">Salvar</Button>
            </div>
        </>
    )

};
