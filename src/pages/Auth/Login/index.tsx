import React, { useState } from "react";
import About from "../About";
import {
  Form,
  Input,
  Button,
  Modal,
  Header,
  Container,
} from "semantic-ui-react";
import "./customStyles.css"; // Importando o CSS customizado
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    // Aqui você geraria o token. Este é um exemplo estático.
    const token = "seuTokenGeradoAqui";
    localStorage.setItem("token", token);

    // Após salvar o token, você pode redirecionar o usuário ou fazer outra ação
    console.log("Token salvo no localStorage e usuário logado");
    window.location.reload();
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Função para exibir o popup
  const showPopup = () => {
    setIsPopupVisible(true);
    //esconder o popup após X segundos
    setTimeout(() => (window.location.href = "/"), 5000);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    // Chamar a função de validação
    setIsEmailValid(validateEmail(emailValue));
  };

  // Definir uma função de validação
  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  // Função para verificar a senha
  const verificarSenha = (password: string) => {
    const criterios = {
      comprimento: password.length >= 8,
    };

    return criterios;
  };

  // Manipulador de mudança de input
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    const resultado = verificarSenha(e.target.value);
    console.log(resultado); // Aqui você pode substituir por uma lógica para exibir os resultados na UI
    console.log(password); // Aqui você pode substituir por uma lógica para exibir os resultados na UI
  };
  return (
    <>
      <div className="flex flex-col-reverse my-10 md:my-0 gap-10 content-center items-center justify-center md:flex-row w-screen md:h-screen  ">
        <div className="w-full h-max">
          <About />
        </div>
        <div className="flex flex-col gap-5 w-full md:h-max items-center">
          <h1 className="font-semibold text-2xl">Faça login na sua conta</h1>
          <div className="flex flex-col w-full items-center">
            <Form className="form-container">
              <Form.Field>
                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Digite seu email"
                  onChange={handleEmailChange}
                />
              </Form.Field>
              {!isEmailValid && (
                <span className="error-message">Insira um email válido</span>
              )}
              {isEmailValid && (
                <>
                  <Form.Field>
                    <label htmlFor="password">Senha</label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Digite sua senha"
                      onChange={handlePasswordChange}
                    />
                  </Form.Field>
                  <a onClick={showPopup} className="forgot-password">
                    Esqueci minha senha
                  </a>
                  <Modal
                    open={isPopupVisible}
                    onClose={() => setIsPopupVisible(false)}
                    className="reset-password-modal"
                  >
                    <Modal.Content>
                      <Header>Verifique seu email</Header>
                      <p>Um link foi enviado para o seu email.</p>
                      <p>{email}</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button
                        onClick={() => setIsPopupVisible(false)}
                        type="submit"
                      >
                        Okay
                      </Button>
                    </Modal.Actions>
                  </Modal>
                </>
              )}
              <Button onClick={() => handleLoginClick} type="submit"></Button>
            </Form>
          </div>
          <Container textAlign="center">
            <Header as="h1" className="ou-header">
              - OU -
            </Header>
            <Header as="h1" className="no-account-header">
              Não tem conta aqui?
            </Header>
            <div className="create-account-link">
              <Link to="/register">Criar Conta</Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
