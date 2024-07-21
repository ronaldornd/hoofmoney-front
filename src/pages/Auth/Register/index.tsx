import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { useState } from "react";
import About from "../About";

export default function Register() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('1');
    const [isPasswordValid, setIsPasswordValid] = useState({
        comprimento: false,
        maiuscula: false,
        numero: false,
        especial: false
    });

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const emailValue = e.target.value;
        setEmail(emailValue);
        // Chamar a função de validação
        setIsEmailValid(validateEmail(emailValue));
    };

    // Definir uma função de validação
    const validateEmail = (email: string) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    };

    // Função para verificar a senha
    const verificarSenha = (senha: string) => {
        const criterios = {
            comprimento: senha.length >= 8,
            maiuscula: /[A-Z]/.test(senha),
            numero: /[0-9]/.test(senha),
            especial: /[^A-Za-z0-9]/.test(senha),
        };

        return criterios;
    };

    const conferirSenha = (senha: string, confirmarSenha: string) => {
        return senha === confirmarSenha;
    }

    // Manipulador de mudança de input
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(e.target.value);
        const resultado = verificarSenha(e.target.value);
        setIsPasswordValid(resultado);
    };

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Função para exibir o popup
    const showPopup = () => {
        setIsPopupVisible(true);
        //esconder o popup após X segundos
        setTimeout(() => window.location.href = '/', 3000);

    };


    return (
        <>
            <div className="flex flex-col-reverse my-10 md:my-0 gap-10 content-center items-center justify-center md:flex-row w-screen md:h-screen  ">
                <div className='w-full h-max'><About /></div>
                <div className="flex flex-col gap-5 w-full h-max items-center">
                    <h1 className="font-semibold text-2xl">Criar Conta</h1>
                    <div className="flex flex-col w-full p-10 gap-2">
                        <div className="flex flex-row gap-3 w-full">
                            <div className="w-full">
                                <Label htmlFor="name">Nome Completo</Label>
                                <Input type="text" id="name" placeholder="Digite seu nome" onChange={(e) => {setNome(e.target.value)}}/>
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="Digite seu email" onChange={handleEmailChange} />
                            {!isEmailValid && <span className="text-red-500 text-sm">Insira um email válido</span>}
                        </div>
                        <div>

                            <Label htmlFor="password">Senha</Label>
                            <Input type="password" id="password" placeholder="Digite sua nova senha" onChange={handlePasswordChange} />
                            <span className="flex flex-row w-full justify-between items-center">
                                {isPasswordValid.comprimento ? <div className="text-sm text-green-500" >Comprimento</div> : <div className="text-sm text-red-500" >Comprimento</div>}
                                {isPasswordValid.maiuscula ? <div className="text-sm text-green-500" >Maiúscula</div> : <div className="text-sm text-red-500" >Maiúscula</div>}
                                {isPasswordValid.numero ? <div className="text-sm text-green-500" >Número</div> : <div className="text-sm text-red-500" >Número</div>}
                                {isPasswordValid.especial ? <div className="text-sm text-green-500" >Especial</div> : <div className="text-sm text-red-500" >Especial</div>}
                            </span>
                            <span>
                            <Label htmlFor="password">Confirme a Senha</Label>
                            <Input type="password" id="re-password" placeholder="Digite novamente sua nova senha" onChange={(e) => {setConfirmarSenha(e.target.value)}}/>
                            {conferirSenha(senha, confirmarSenha) ? <div className="text-sm text-green-500">Senhas conferem</div> : <div className="text-sm text-red-500">Senhas não conferem</div>}
                            </span>
                        </div>
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
