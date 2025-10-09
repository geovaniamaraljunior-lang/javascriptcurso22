import random

def exibir_boas_vindas():
    print("🎉 Bem-vindo ao jogo de adivinhação!")
    print("Tente adivinhar o número secreto entre 1 e 100.")

def gerar_numero_secreto():
    return random.randint(1, 100)

def pedir_chute():
    while True:
        try:
            chute = int(input("Digite seu chute: "))
            if 1 <= chute <= 100:
                return chute
            else:
                print("⛔ O número deve estar entre 1 e 100.")
        except ValueError:
            print("⛔ Por favor, digite um número válido.")

def verificar_chute(chute, numero_secreto):
    if chute == numero_secreto:
        print("✅ Parabéns! Você acertou o número secreto!")
        return True
    elif chute < numero_secreto:
        print("🔼 O número secreto é maior.")
    else:
        print("🔽 O número secreto é menor.")
    return False

def mostrar_historico(chutes):
    print("\n📜 Histórico de chutes:")
    for i, chute in enumerate(chutes, start=1):
        print(f"Tentativa {i}: {chute}")

def jogar():
    exibir_boas_vindas()
    numero_secreto = gerar_numero_secreto()
    chutes = []
    tentativas = 0

    while True:
        chute = pedir_chute()
        chutes.append(chute)
        tentativas += 1
        if verificar_chute(chute, numero_secreto):
            print(f"🎯 Você acertou em {tentativas} tentativas!")
            break

    mostrar_historico(chutes)

# Iniciar o jogo
jogar()
