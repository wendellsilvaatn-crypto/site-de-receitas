const receitas = {
  "Pão com Ovo": {
    ingredientes: ["1 pão francês", "1 ovo", "Sal a gosto"],
    preparo: [
      "Aqueça uma frigideira em fogo médio.",
      "Quebre o ovo com cuidado.",
      "Tempere com sal e frite até a clara firmar.",
      "Coloque dentro do pão e sirva."
    ]
  },
  "Mingau de Aveia": {
    ingredientes: ["1 xícara de leite", "2 colheres de aveia", "Açúcar ou mel"],
    preparo: [
      "Misture o leite e a aveia em uma panela.",
      "Leve ao fogo médio mexendo sempre.",
      "Adoce e cozinhe até engrossar."
    ]
  },
  "Vitamina de Banana": {
    ingredientes: ["1 banana", "1 copo de leite", "Aveia opcional"],
    preparo: [
      "Coloque tudo no liquidificador.",
      "Bata até ficar homogêneo.",
      "Sirva imediatamente."
    ]
  },
  "Arroz Branco": {
    ingredientes: ["1 xícara de arroz", "2 xícaras de água", "Alho", "Sal"],
    preparo: [
      "Refogue o alho.",
      "Adicione o arroz e mexa.",
      "Coloque água e sal.",
      "Cozinhe até secar."
    ]
  },
  "Feijão Temperado": {
    ingredientes: ["Feijão cozido", "Alho", "Óleo", "Sal"],
    preparo: [
      "Refogue o alho no óleo.",
      "Adicione o feijão.",
      "Ferva por 10 minutos."
    ]
  },
  "Frango Grelhado": {
    ingredientes: ["Filé de frango", "Sal", "Alho"],
    preparo: [
      "Tempere o frango.",
      "Grelhe em fogo médio.",
      "Vire até dourar ambos os lados."
    ]
  },
  "Brigadeiro": {
    ingredientes: ["Leite condensado", "Chocolate em pó", "Manteiga"],
    preparo: [
      "Misture tudo na panela.",
      "Cozinhe mexendo.",
      "Desligue quando desgrudar do fundo."
    ]
  },
  "Bolo Simples": {
    ingredientes: ["Ovos", "Açúcar", "Farinha", "Leite", "Fermento"],
    preparo: [
      "Bata ovos e açúcar.",
      "Adicione os outros ingredientes.",
      "Asse a 180°C por 40 minutos."
    ]
  },
  "Omelete Fitness": {
    ingredientes: ["2 ovos", "Legumes", "Sal"],
    preparo: [
      "Bata os ovos.",
      "Adicione legumes.",
      "Cozinhe em fogo baixo."
    ]
  },
  "Salada com Frango": {
    ingredientes: ["Frango grelhado", "Alface", "Tomate"],
    preparo: [
      "Corte o frango.",
      "Misture com os legumes.",
      "Sirva fria."
    ]
  }
};

function abrirReceita(nome) {
  const r = receitas[nome];
  if (!r) return;

  document.getElementById('titulo').innerText = nome;

  const ing = document.getElementById('ingredientes');
  ing.innerHTML = '';
  r.ingredientes.forEach(i => {
    const li = document.createElement('li');
    li.textContent = i;
    ing.appendChild(li);
  });

  const prep = document.getElementById('preparo');
  prep.innerHTML = '';
  r.preparo.forEach(p => {
    const li = document.createElement('li');
    li.textContent = p;
    prep.appendChild(li);
  });

  document.getElementById('modal').style.display = 'block';
}

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}