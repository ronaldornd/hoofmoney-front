import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { useState } from "react";
import about from "../../../assets/about.png";
import contact from "../../../assets/contact.png";
import instagram from "../../../assets/instagram.png";
import logo from "../../../assets/logo.png";
export default function Register() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Função para exibir o popup
    const showPopup = () => {
        setIsPopupVisible(true);
        // Opcional: esconder o popup após X segundos
        setTimeout(() => window.location.href = '/', 3000);

    };

    const [email, setEmail] = useState('');

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
                    <h1 className="font-semibold text-2xl">Criar Conta</h1>
                    <div className="flex flex-col w-full p-10 gap-2">
                        <div className="flex flex-row gap-3 w-full">
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
                        <Input type="email" id="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} />
                        <Label htmlFor="password">Senha</Label>
                        <Input type="password" id="password" placeholder="Digite sua nova senha" />
                        <Label htmlFor="password">Confirme a Senha</Label>
                        <Input type="password" id="re-password" placeholder="Digite novamente sua nova senha" />
                    </div>
                    <Button onClick={showPopup} type="submit" className="w-max px-10 text-lg bg-green-500 text-black">Salvar</Button>
                    <AlertDialog.Root open={isPopupVisible}>
                        <AlertDialog.Portal>
                            <AlertDialog.Overlay className="fixed inset-0 bg-black/30" />
                            <AlertDialog.Content className="flex flex-col gap-2 items-center w-ma fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6">
                                <AlertDialog.Title className="font-bold">Confirme seu email</AlertDialog.Title>
                                <AlertDialog.Description className="flex flex-col gap-2 w-max items-center">
                                    <span>Um link foi enviado para o seu email.</span>
                                    <span>{email}</span>
                                </AlertDialog.Description>
                                <AlertDialog.Cancel asChild>
                                    <Button onClick={() => setIsPopupVisible(false)} type="submit" className="w-max px-10 mt-2 text-lg bg-green-500 text-black">Okay</Button>
                                </AlertDialog.Cancel>
                            </AlertDialog.Content>
                        </AlertDialog.Portal>
                    </AlertDialog.Root>
                </div>
            </div>
        </>
    )

};
