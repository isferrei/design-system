import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Logo } from "../Logo";
import axios from "axios";

import "../styles/global.css";

export function Signin() {
  const [isUserSignedin, setIsUserSignedin] = useState<boolean>();

  async function handleSignin(event: FormEvent) {
    event.preventDefault();

    await axios.post("/sessions", {
      email: "isabela@hotmail.com",
      password: "123456",
    });

    setIsUserSignedin(true);
  }

  return (
    <div className="h-full flex flex-col items-center justify-center text-gray-100 bg-gray-900">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4 ">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar
        </Text>
      </header>
      <form
        onSubmit={handleSignin}
        className="gap-4 w-full max-w-[400px] mt-10 flex flex-col items-stretch"
      >
        {isUserSignedin && <Text>Login Realizado!</Text>}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="******"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim
          </Text>
        </label>
        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a className="text-gray-400 hover:text-gray-200 underline ">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a className="text-gray-400 hover:text-gray-200 underline ">
            Não possui conta? Crie sua conta
          </a>
        </Text>
      </footer>
    </div>
  );
}
