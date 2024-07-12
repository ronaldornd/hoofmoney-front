import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import about from "../../../assets/about.png";
import contact from "../../../assets/contact.png";
import instagram from "../../../assets/instagram.png";
import logo from "../../../assets/logo.png";
export default function Forget() {
    return (
        <>
            <div className="flex flex-row w-screen h-screen items-center">
                <div className="flex flex-col gap-2 w-full h-full p-10 justify-center items-center">
                    <img src={logo} alt="logo da empresa Hoof Money" className="w-96 h-96 m-10 mb-0" />
                    <h1 className="font-semibold text-xl text-center w-full h-max">“Gerenciando seu futuro financeiro”</h1>
                    <div className="flex flex-row w-full h-max gap-3 text-center items-center justify-center">
                        <a className='flex flex-col w-max items-center h-max gap-1'>
                            <img className='h-8 w-8' src={instagram} alt="Logo do Instagram" />
                            <p>Siga-nos</p>
                        </a>
                        <a className='flex flex-col w-max items-center h-max gap-1'>
                            <img className='h-8 w-8' src={contact} alt="Logo do Instagram" />
                            <p>Contate-nos</p>
                        </a>
                        <a className='flex flex-col w-max items-center h-max gap-1'>
                            <img className='h-8 w-8' src={about} alt="Logo do Instagram" />
                            <p>Sobre nós</p>
                        </a>
                    </div>
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
