
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function Login() {
    return (
        <>
            <div className="flex flex-col gap-5 w-full h-max items-center">
                <h1 className="font-semibold text-2xl">Faça login na sua conta</h1>
                <div className="flex flex-col w-full items-center">

                    <div className="flex flex-col gap-2 p-10 w-full">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Digite seu email"  />
                        <Label htmlFor="password">Senha</Label>
                        <Input type="password" id="password" placeholder="Digite sua senha" />
                        <a href="_blank" className="flex w-full justify-end">Esqueci minha senha</a>
                    </div>
                    <Button type="submit" className="w-max px-10 text-lg bg-green-500 text-black">Entrar</Button>
                </div>
                <h1 className="w-full text-center text-3xl font-extralight">- OU -</h1>
                <div className="w-full text-center">
                    <h1 className="text-xl">Não tem conta aqui?</h1>
                    <a href="" className="font-bold text-green-500 text-5xl">Criar Conta</a>
                </div>
            </div>
        </>
    )
};
