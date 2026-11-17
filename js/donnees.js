/* Contenu du site. Services, contacts et adresse repris de la bannière de l'oficina. */

var CONTACT = {
    tel_affiche: "+244 949 076 110",
    tel_lien: "tel:+244949076110",
    wa_affiche: "+244 951 921 340",
    whatsapp: "244951921340",
    adresse: "Lado oposto do KK5000, sentido 11 de Novembro. Detrás do Restaurante Gabinete KK5000",
    adresse_courte: "Lado oposto do KK5000, sentido 11 de Novembro",
    horaires: "Horário a confirmar",
    slogan: "Nada está perdido, somos a solução"
};

var SERVICES = [
    {
        id: "pintura", nom: "Pintura", icone: "pinceau", couleur: "", vedette: true,
        court: "Pintura completa ou parcial, com acabamento de fábrica.",
        texte: "Somos especialistas em pintura automóvel. Preparamos a carroçaria, acertamos a cor exata da sua viatura e aplicamos a tinta para um acabamento uniforme e duradouro.",
        points: ["Pintura completa ou por peça", "Acerto de cor", "Verniz de proteção e acabamento brilhante", "Retoque de riscos e lascas"],
        photo: "Foto: a equipa a pintar uma viatura"
    },
    {
        id: "auto-frio", nom: "Auto frio", icone: "flocon", couleur: "orange", vedette: true,
        court: "Ar condicionado automóvel: carga de gás, limpeza e reparação.",
        texte: "O calor não espera. Verificamos todo o circuito de climatização, fazemos a carga de gás, limpamos o sistema e reparamos as fugas para que volte a ter ar fresco dentro da viatura.",
        points: ["Carga de gás", "Deteção de fugas", "Limpeza do circuito", "Reparação do sistema de climatização"],
        photo: "Foto: técnico a fazer a carga do ar condicionado"
    },
    {
        id: "polimento", nom: "Polimento", icone: "brillance", couleur: "grise", vedette: true,
        court: "Brilho e proteção da pintura, como nova.",
        texte: "O polimento elimina os riscos finos e as manchas, e devolve à pintura o brilho de origem. Terminamos com uma proteção que dura.",
        points: ["Polimento em várias etapas", "Remoção de riscos finos", "Restauro de faróis", "Cera e proteção"],
        photo: "Foto: polimento de uma viatura"
    },
    {
        id: "bate-chapa", nom: "Bate-chapa", icone: "marteau", couleur: "rouge", vedette: true,
        court: "Reparação de amolgadelas e da carroçaria após acidente.",
        texte: "Depois de um toque ou de um acidente, recuperamos a forma original da carroçaria: desamolgamos, endireitamos e substituímos as peças quando é necessário.",
        points: ["Desamolgagem", "Reparação após acidente", "Substituição de painéis", "Alinhamento da carroçaria"],
        photo: "Foto: reparação de bate-chapa"
    },
    {
        id: "manutencao", nom: "Manutenção", icone: "cle", couleur: "", vedette: true,
        court: "Revisão, óleo, filtros e conservação da viatura.",
        texte: "Uma viatura bem mantida dura mais e gasta menos. Fazemos a revisão periódica, a mudança de óleo e de filtros, e verificamos os pontos de segurança.",
        points: ["Mudança de óleo e filtros", "Revisão periódica", "Verificação dos travões", "Controlo dos níveis"],
        photo: "Foto: mecânico em manutenção de uma viatura"
    },
    {
        id: "fibragem", nom: "Fibragem de para-choques", icone: "bouclier", couleur: "verte", vedette: true,
        court: "Reparação e recuperação de para-choques com fibra.",
        texte: "Um para-choques partido nem sempre precisa de ser substituído. Reparamos com fibra, refazemos a forma e pintamos, por um preço mais baixo do que uma peça nova.",
        points: ["Reparação de fissuras", "Reconstrução com fibra", "Pintura à cor"],
        photo: "Foto: fibragem de um para-choques"
    }
];

/* Photos et vidéos de la page "Os nossos trabalhos" (exemples factices). */
var MEDIAS = [
    { cat: "pintura", type: "photo", titre: "Pintura completa — Toyota Hilux", gostos: 24, comentarios: 5 },
    { cat: "auto-frio", type: "video", titre: "Carga de ar condicionado", duree: "0:48", gostos: 41, comentarios: 9 },
    { cat: "bate-chapa", type: "photo", titre: "Recuperação após acidente — Kia Rio", gostos: 33, comentarios: 7 },
    { cat: "polimento", type: "video", titre: "Polimento: antes e depois", duree: "1:12", gostos: 58, comentarios: 14 },
    { cat: "fibragem", type: "photo", titre: "Para-choques reparado com fibra", gostos: 9, comentarios: 1 },
    { cat: "pintura", type: "video", titre: "Na cabine de pintura", duree: "2:05", gostos: 27, comentarios: 3 },
    { cat: "manutencao", type: "photo", titre: "Revisão completa — Mitsubishi L200", gostos: 15, comentarios: 2 },
    { cat: "auto-frio", type: "photo", titre: "Limpeza do circuito de climatização", gostos: 11, comentarios: 0 },
    { cat: "publicidade", type: "video", titre: "Conheça a Auto-Oficina PGP", duree: "0:30", gostos: 72, comentarios: 18 },
    { cat: "publicidade", type: "photo", titre: "A nossa equipa", gostos: 40, comentarios: 6 },
    { cat: "bate-chapa", type: "video", titre: "Desamolgagem passo a passo", duree: "1:40", gostos: 19, comentarios: 4 },
    { cat: "fibragem", type: "video", titre: "Fibragem passo a passo", duree: "1:05", gostos: 13, comentarios: 2 }
];

var ARTICLES = [
    { id: "auto-frio", cat: "Auto frio", titre: "5 sinais de que o ar condicionado precisa de carga", resume: "Ar morno, mau cheiro, ruído: o que cada sinal quer dizer.", couleur: "orange" },
    { id: "pintura-sol", cat: "Pintura", titre: "Proteger a pintura do sol", resume: "Polimento, cera e estacionamento: os gestos simples que fazem a diferença.", couleur: "" },
    { id: "revisao", cat: "Manutenção", titre: "De quanto em quanto tempo fazer a revisão?", resume: "Óleo, filtros, travões: o calendário a seguir para não ter surpresas.", couleur: "grise" },
    { id: "acidente", cat: "Bate-chapa", titre: "Teve um acidente? O que fazer a seguir", resume: "Fotos, seguro, orçamento: os passos para reparar a viatura sem stress.", couleur: "rouge" },
    { id: "para-choques", cat: "Fibragem", titre: "Para-choques partido: reparar ou substituir?", resume: "Quando a fibra resolve, e porque sai mais barato.", couleur: "verte" },
    { id: "polimento", cat: "Polimento", titre: "Polimento: com que frequência?", resume: "Quantas vezes por ano polir sem estragar a pintura.", couleur: "grise" }
];

/* Avis d'exemple pour la maquette (pas de vrais clients). */
var AVIS = [
    { nom: "Cliente de exemplo 1", note: 5, service: "Pintura", texte: "Trabalho impecável, a cor ficou igual à original. Recomendo." },
    { nom: "Cliente de exemplo 2", note: 5, service: "Auto frio", texte: "O ar voltou a ficar frio no mesmo dia." },
    { nom: "Cliente de exemplo 3", note: 4, service: "Fibragem de para-choques", texte: "Para-choques reparado, mais barato do que comprar um novo." },
    { nom: "Cliente de exemplo 4", note: 5, service: "Bate-chapa", texte: "Depois do acidente, a viatura parece nova." },
    { nom: "Cliente de exemplo 5", note: 5, service: "Polimento", texte: "Ficou a brilhar. Equipa simpática e séria." },
    { nom: "Cliente de exemplo 6", note: 4, service: "Manutenção", texte: "Explicaram tudo o que fizeram, sem surpresas no preço." }
];
