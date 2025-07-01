const agrupamentos = {
  797: {
    nome: "Nova Oeiras",
    emocao: "Tristeza",
    img: {
      desktop: "Piper_tristeza.png",
      mobile: "piper_tristeza_tlm.png",
    },
  },
  413: {
    nome: "Ferragudo",
    emocao: "Medo",
    img: {
      desktop: "Piper_medo.png",
      mobile: "Piper_medo_tlm.png",
    },
  },
  692: {
    nome: "São Jacinto",
    emocao: "Medo",
    img: {
      desktop: "Piper_medo.png",
      mobile: "Piper_medo_tlm.png",
    },
  },
  235: {
    nome: "Figueira da Foz",
    emocao: "Alegria",
    img: {
      desktop: "Piper_felicidade.png",
      mobile: "Piper_felicidade_tlm.png",
    },
  },
  216: {
    nome: "São Martinho",
    emocao: "Alegria",
    img: {
      desktop: "Piper_felicidade.png",
      mobile: "Piper_felicidade_tlm.png",
    },
  },
  1100: {
    nome: "Parque das Nações",
    emocao: "Raiva",
    img: {
      desktop: "Piper_raiva.png",
      mobile: "piper_raiva_tlm.png",
    },
  },
  377: {
    nome: "Leça da Palmeira",
    emocao: "Raiva",
    img: {
      desktop: "Piper_raiva.png",
      mobile: "piper_raiva_tlm.png",
    },
  },
  1117: {
    nome: "Setúbal",
    emocao: "Repulsa",
    img: {
      desktop: "Piper_nojo.png",
      mobile: "piper_nojo_tlm.png",
    },
  },
  253: {
    nome: "Seixal",
    emocao: "Vergonha",
    img: {
      desktop: "Piper_vergonha.png",
      mobile: "Piper_vergonha_tlm.png",
    },
  },
  1180: {
    nome: "Santa Cruz - Barreiro",
    emocao: "Vergonha",
    img: {
      desktop: "Piper_vergonha.png",
      mobile: "Piper_vergonha_tlm.png",
    },
  },
};


const fundoCentroComando = {
  desktop: "allheadquarters.png",
  mobile: "8ad6270f-638f-4b00-80e3-7864ccd02411.png",
};


function mostrarChapeu() {
  document.getElementById("inicio").style.display = "none";
  const chapeuDiv = document.getElementById("chapeu");
  chapeuDiv.style.display = "flex";

  // Define imagem de fundo para desktop/mobile
  const isMobile =
    window.innerWidth <= 700 || /Mobi|Android/i.test(navigator.userAgent);
  const fundo = isMobile
    ? fundoCentroComando.mobile
    : fundoCentroComando.desktop;
  chapeuDiv.style.backgroundImage = `url('${fundo}')`;

  const suspenseDiv = document.getElementById("suspense");
  const mensagens = [
    "Memória a caminho da central...",
    "A ajustar os circuitos emocionais...",
    "A calibrar o painel de sentimentos...",
    "Uma emoção inesquecível está quase a surgir...",
    "Atenção! Vai começar a viagem emocional!",
  ];

  let i = 0;
  suspenseDiv.innerText = mensagens[i];
  const suspenseInterval = setInterval(() => {
    i++;
    if (i < mensagens.length) {
      suspenseDiv.innerText = mensagens[i];
    } else {
      clearInterval(suspenseInterval);
      setTimeout(revelarResultadoAgrupamento, 2000);
    }
  }, 2000);
}

function revelarResultadoAgrupamento() {
  document.getElementById("chapeu").style.display = "none";
  document.getElementById("resultado").style.display = "flex";

  const codigo = document.getElementById("selectAgrupamento").value;
  const info = agrupamentos[codigo];

  // Verificação robusta de telemóvel
  const isMobile =
    window.innerWidth <= 700 || /Mobi|Android/i.test(navigator.userAgent);
  const imagemFinal = isMobile ? info.img.mobile : info.img.desktop;
  /* console.log("É telemóvel?", isMobile, "Imagem:", imagemFinal); */

  document.getElementById(
    "tripulacao"
  ).innerHTML = `Memórias analisadas! A tripulação do agrupamento <strong>${info.nome}</strong> vai seguir viagem sob o comando da emoção...<br><strong>${info.emocao}</strong>!`;

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.className = "secao bg-emocao";
  resultadoDiv.style.backgroundImage = `url('${imagemFinal}')`;
}

function voltarInicio() {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.style.display = "none";
  resultadoDiv.className = "secao";
  resultadoDiv.style.backgroundImage = "";
  document.getElementById("inicio").style.display = "flex";
}
