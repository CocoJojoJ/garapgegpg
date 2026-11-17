/* Contenu de la maquette. Tout est ici pour être corrigé facilement
   quand Jonathan aura les vraies spécialités, photos et textes du client.
   "a_confirmer: true" = service ajouté par nous, pas encore validé par le client. */

var CONTACT = {
    tel_affiche: "+244 976 827 403",
    tel_lien: "tel:+244976827403",
    whatsapp: "244976827403",
    adresse: "Endereço a confirmar",
    horaires: "Horário a confirmar"
};

var SERVICES = [
    {
        id: "pintura", nom: "Pintura", icone: "pinceau", couleur: "", vedette: true,
        court: "Pintura completa ou parcial, com acabamento de fábrica.",
        texte: "Somos especialistas em pintura automóvel. Preparamos a carroçaria, acertamos a cor exata da sua viatura e aplicamos a tinta numa zona limpa, para um acabamento uniforme e duradouro.",
        points: ["Pintura completa ou por peça", "Acerto de cor pelo código do fabricante", "Verniz de proteção e acabamento brilhante", "Retoque de riscos e lascas"],
        photo: "Foto: a equipa a pintar uma viatura"
    },
    {
        id: "pneus", nom: "Pneus", icone: "pneu", couleur: "verte", vedette: true,
        court: "Reparação, montagem, calibragem e manutenção dos pneus.",
        texte: "Temos uma especialidade na reparação de pneus e na sua manutenção. Desde a sua chegada, diagnosticamos e reparamos o seu pneu na perfeição.",
        points: ["Reparação de furos", "Montagem e desmontagem", "Calibragem e equilíbrio", "Verificação do desgaste"],
        photo: "Foto: a equipa a reparar um pneu"
    },
    {
        id: "ar-condicionado", nom: "Ar condicionado", icone: "flocon", couleur: "orange", vedette: true,
        court: "Auto frio: carga de gás, limpeza e reparação da climatização.",
        texte: "O calor não espera. Verificamos todo o circuito de climatização, fazemos a carga de gás, limpamos o sistema e reparamos as fugas para que volte a ter ar fresco dentro da viatura.",
        points: ["Carga de gás", "Deteção de fugas", "Limpeza e desinfeção do circuito", "Reparação do compressor"],
        photo: "Foto: técnico a fazer a carga do ar condicionado"
    },
    {
        id: "bate-chapa", nom: "Bate-chapa", icone: "marteau", couleur: "rouge", vedette: true,
        court: "Reparação de amolgadelas e da carroçaria após acidente.",
        texte: "Depois de um toque ou de um acidente, recuperamos a forma original da carroçaria: desamolgamos, endireitamos e substituímos as peças quando é necessário.",
        points: ["Desamolgagem", "Reparação após acidente", "Substituição de painéis", "Alinhamento da carroçaria"],
        photo: "Foto: reparação de bate-chapa"
    },
    {
        id: "polimento", nom: "Polimento", icone: "brillance", couleur: "grise", vedette: true,
        court: "Brilho e proteção da pintura, como nova.",
        texte: "O polimento elimina os riscos finos e as manchas, e devolve à pintura o brilho de origem. Terminamos com uma proteção que dura.",
        points: ["Polimento em várias etapas", "Remoção de riscos finos", "Restauro de faróis", "Cera e proteção"],
        photo: "Foto: polimento de uma viatura"
    },
    {
        id: "manutencao", nom: "Manutenção", icone: "cle", couleur: "", vedette: false,
        court: "Revisão, óleo, filtros e conservação da viatura.",
        texte: "Uma viatura bem mantida dura mais e gasta menos. Fazemos a revisão periódica, a mudança de óleo e de filtros, e verificamos os pontos de segurança.",
        points: ["Mudança de óleo e filtros", "Revisão periódica", "Verificação dos travões", "Controlo dos níveis"],
        photo: "Foto: revisão de uma viatura"
    },
    {
        id: "fibragem", nom: "Fibragem de para-choques", icone: "bouclier", couleur: "verte", vedette: false,
        court: "Reparação e recuperação de para-choques com fibra.",
        texte: "Um para-choques partido nem sempre precisa de ser substituído. Reparamos com fibra, refazemos a forma e pintamos, por um preço mais baixo do que uma peça nova.",
        points: ["Reparação de fissuras", "Reconstrução com fibra", "Pintura à cor"],
        photo: "Foto: fibragem de um para-choques"
    },
    {
        id: "mecanica", nom: "Mecânica geral", icone: "engrenage", couleur: "grise", vedette: false, a_confirmar: true,
        court: "Motor, caixa, suspensão, embraiagem.",
        texte: "Reparação mecânica do motor, da caixa de velocidades, da suspensão e da embraiagem.",
        points: ["Motor", "Caixa de velocidades", "Suspensão", "Embraiagem"],
        photo: "Foto: mecânico a trabalhar no motor"
    },
    {
        id: "eletricidade", nom: "Eletricidade auto", icone: "eclair", couleur: "orange", vedette: false, a_confirmar: true,
        court: "Bateria, alternador, luzes e cablagem.",
        texte: "Diagnóstico e reparação da parte elétrica: bateria, motor de arranque, alternador, luzes e cablagem.",
        points: ["Bateria e arranque", "Alternador", "Iluminação", "Cablagem"],
        photo: "Foto: reparação elétrica"
    },
    {
        id: "diagnostico", nom: "Diagnóstico eletrónico", icone: "ecran", couleur: "rouge", vedette: false, a_confirmar: true,
        court: "Leitura das avarias com máquina de diagnóstico.",
        texte: "Ligamos a máquina de diagnóstico à sua viatura para ler as avarias e encontrar a causa exata do problema, antes de reparar.",
        points: ["Leitura de códigos de avaria", "Luzes do painel", "Relatório explicado ao cliente"],
        photo: "Foto: máquina de diagnóstico ligada"
    }
];

/* Photos et vidéos de la page "Os nossos trabalhos" (exemples factices). */
var MEDIAS = [
    { cat: "pintura", type: "photo", titre: "Pintura completa — Toyota Hilux", gostos: 24, comentarios: 5 },
    { cat: "pneus", type: "video", titre: "Reparação de furo em 5 minutos", duree: "0:48", gostos: 41, comentarios: 9 },
    { cat: "ar-condicionado", type: "photo", titre: "Carga de gás — Hyundai Tucson", gostos: 12, comentarios: 2 },
    { cat: "bate-chapa", type: "photo", titre: "Recuperação após acidente — Kia Rio", gostos: 33, comentarios: 7 },
    { cat: "polimento", type: "video", titre: "Polimento: antes e depois", duree: "1:12", gostos: 58, comentarios: 14 },
    { cat: "fibragem", type: "photo", titre: "Para-choques reparado com fibra", gostos: 9, comentarios: 1 },
    { cat: "pintura", type: "video", titre: "Na cabine de pintura", duree: "2:05", gostos: 27, comentarios: 3 },
    { cat: "manutencao", type: "photo", titre: "Revisão completa — Mitsubishi L200", gostos: 15, comentarios: 2 },
    { cat: "pneus", type: "photo", titre: "Montagem de pneus novos", gostos: 11, comentarios: 0 },
    { cat: "publicidade", type: "video", titre: "Conheça a Auto PGP Oficina", duree: "0:30", gostos: 72, comentarios: 18 },
    { cat: "publicidade", type: "photo", titre: "A nossa equipa", gostos: 40, comentarios: 6 },
    { cat: "bate-chapa", type: "video", titre: "Desamolgagem passo a passo", duree: "1:40", gostos: 19, comentarios: 4 }
];

var ARTICLES = [
    { id: "pneus-calor", cat: "Pneus", titre: "Como cuidar dos pneus com o calor", resume: "A pressão muda com a temperatura. Saiba quando verificar e porquê.", couleur: "verte" },
    { id: "ar-condicionado", cat: "Ar condicionado", titre: "5 sinais de que o ar condicionado precisa de carga", resume: "Ar morno, mau cheiro, ruído: o que cada sinal quer dizer.", couleur: "orange" },
    { id: "pintura-sol", cat: "Pintura", titre: "Proteger a pintura do sol", resume: "Polimento, cera e estacionamento: os gestos simples que fazem a diferença.", couleur: "" },
    { id: "revisao", cat: "Manutenção", titre: "De quanto em quanto tempo fazer a revisão?", resume: "Óleo, filtros, travões: o calendário a seguir para não ter surpresas.", couleur: "grise" },
    { id: "acidente", cat: "Bate-chapa", titre: "Teve um acidente? O que fazer a seguir", resume: "Fotos, seguro, orçamento: os passos para reparar a viatura sem stress.", couleur: "rouge" },
    { id: "luzes-painel", cat: "Diagnóstico", titre: "As luzes do painel explicadas", resume: "Laranja ou vermelha? Saiba quando pode continuar e quando deve parar.", couleur: "grise" }
];

/* Avis d'exemple pour la maquette (pas de vrais clients). */
var AVIS = [
    { nom: "Cliente de exemplo 1", note: 5, service: "Pintura", texte: "Trabalho impecável, a cor ficou igual à original. Recomendo." },
    { nom: "Cliente de exemplo 2", note: 5, service: "Pneus", texte: "Atendimento rápido, o furo foi reparado na hora." },
    { nom: "Cliente de exemplo 3", note: 4, service: "Ar condicionado", texte: "O ar voltou a ficar frio. Bom preço." },
    { nom: "Cliente de exemplo 4", note: 5, service: "Bate-chapa", texte: "Depois do acidente, a viatura parece nova." },
    { nom: "Cliente de exemplo 5", note: 5, service: "Polimento", texte: "Ficou a brilhar. Equipa simpática e séria." },
    { nom: "Cliente de exemplo 6", note: 4, service: "Manutenção", texte: "Explicaram tudo o que fizeram, sem surpresas no preço." }
];
