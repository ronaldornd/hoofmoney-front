import * as AlertDialog from '@radix-ui/react-alert-dialog';
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import about from "../../../assets/about.png";
import contact from "../../../assets/contact.png";
import instagram from "../../../assets/instagram.png";
import logo from "../../../assets/logo.png";


export default function Login() {
    const handleLoginClick = () => {
        // Aqui você geraria o token. Este é um exemplo estático.
        const token = "seuTokenGeradoAqui";
        localStorage.setItem('token', token);

        // Após salvar o token, você pode redirecionar o usuário ou fazer outra ação
        console.log('Token salvo no localStorage e usuário logado');
        window.location.reload();

    };

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Função para exibir o popup
    const showPopup = () => {
        setIsPopupVisible(true);
        // Opcional: esconder o popup após X segundos
        setTimeout(() => window.location.href = '/', 5000);

    };

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);

    // Definir uma função de validação
    const validateEmail = (email: string) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        // Chamar a função de validação
        setIsEmailValid(validateEmail(emailValue));
    };
    return (
        <>
            <div className="flex flex-col-reverse my-10 md:my-0 gap-10 content-center items-center justify-center md:flex-row w-screen md:h-max  ">

                <div className="flex flex-col p-4 w-full h-max justify-center items-center">
                    <div className='flex flex-col gap-2 items-center justify-between w-30 h-max'>
                        <img src={logo} alt="logo da empresa Hoof Money" className=" w-28 h-full md:w-96 md:h-96 md:m-10 mb-0" />
                        <h1 className="font-semibold text-xl text-center w-full h-max">“Gerenciando seu futuro financeiro”</h1>
                    </div>
                    <div className="flex flex-row w-full md:h-max gap-3 text-center items-center justify-center">
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
                <div className="flex flex-col gap-5 w-full md:h-max items-center">
                    <h1 className="font-semibold text-2xl">Faça login na sua conta</h1>
                    <div className="flex flex-col w-full items-center">

                        <div className="flex flex-col gap-2 p-10 w-full">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="Digite seu email" onChange={handleEmailChange} />
                            {/* Passo 4: Mostrar uma mensagem de erro se o email não for válido */}
                            {!isEmailValid && <span className="text-red-500">Insira um email válido</span>}                            {/* Passo 4: Use uma condição para renderizar o campo de senha */}
                            {isEmailValid && (
                                <>
                                    <Label htmlFor="password">Senha</Label>
                                    <Input type="password" id="password" placeholder="Digite sua senha" />
                                    <a onClick={showPopup} className="flex underline w-full justify-end">Esqueci minha senha</a>
                                    <AlertDialog.Root open={isPopupVisible}>
                                        <AlertDialog.Portal>
                                            <AlertDialog.Overlay className="fixed inset-0 bg-black/30" />
                                            <AlertDialog.Content className="flex flex-col gap-2 items-center w-ma fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6">
                                                <AlertDialog.Title className="font-bold">Verifique seu email</AlertDialog.Title>
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
                                </>
                            )}
                        </div>
                        <Button onClick={handleLoginClick} type="submit" className="w-max px-10 text-lg bg-green-500 text-black">Entrar</Button>
                    </div>
                    <h1 className="w-full text-center text-3xl font-extralight">- OU -</h1>
                    <div className="w-full text-center">
                        <h1 className="text-xl">Não tem conta aqui?</h1>
                        <a href="/Register" className="font-bold text-green-500 text-5xl">Criar Conta</a>
                    </div>
                </div>
            </div>

        </>
    )
};
