const COURSE_DATA = {
  courseTitle: "Imersão em Chinês",
  levels: [
    {
      id: "nivel-1",
      title: "Nível 1",
      subtitle: "Fundamentos absolutos",
      lessons: [
        {
          id: "l1",
          title: "Lição 1",
          subtitle: "wǒ, péngyou, de, nǐ, shì, zhè, bù, nà",
          items: [
            {
              pinyin: "wǒ",
              characters: "我",
              translation: "eu, mim",
              note: "Primeiro pronome pessoal."
            },
            {
              pinyin: "péngyou",
              characters: "朋友",
              translation: "amigo",
              note: "Vocabulário muito comum em frases iniciais."
            },
            {
              pinyin: "wǒ de péngyou",
              characters: "我的朋友",
              translation: "meu amigo",
              note: "de (的) marca posse."
            },
            {
              pinyin: "nǐ",
              characters: "你",
              translation: "você",
              note: "Pronome de segunda pessoa."
            },
            {
              pinyin: "nǐ de péngyou",
              characters: "你的朋友",
              translation: "seu amigo",
              note: "Estrutura paralela à anterior."
            },
            {
              pinyin: "wǒ de péngyou de péngyou",
              characters: "我的朋友的朋友",
              translation: "o amigo do meu amigo",
              note: "Encadeamento de posse."
            },
            {
              pinyin: "nǐ shì wǒ de péngyou",
              characters: "你是我的朋友",
              translation: "você é meu amigo",
              note: "shì (是) = ser."
            },
            {
              pinyin: "wǒ shì nǐ de péngyou",
              characters: "我是你的朋友",
              translation: "eu sou seu amigo",
              note: "Mesmo padrão com sujeitos trocados."
            },
            {
              pinyin: "nǐ de péngyou shì wǒ de péngyou",
              characters: "你的朋友是我的朋友",
              translation: "seu amigo é meu amigo",
              note: "Frase composta simples."
            },
            {
              pinyin: "wǒ de péngyou shì nǐ de péngyou",
              characters: "我的朋友是你的朋友",
              translation: "meu amigo é seu amigo",
              note: "Reforça posse e cópula."
            },
            {
              pinyin: "zhè shì wǒ de péngyou",
              characters: "这是我的朋友",
              translation: "este é meu amigo",
              note: "zhè (这) = este/isto."
            },
            {
              pinyin: "zhè shì wǒ de",
              characters: "这是我的",
              translation: "isto é meu",
              note: "Estrutura demonstrativa."
            },
            {
              pinyin: "zhè shì nǐ de",
              characters: "这是你的",
              translation: "isto é seu",
              note: "Mesma estrutura com nǐ."
            },
            {
              pinyin: "zhè shì wǒ de péngyou de",
              characters: "这是我的朋友的",
              translation: "isto é do meu amigo",
              note: "Posse com omissão do substantivo final."
            },
            {
              pinyin: "zhè shì nǐ",
              characters: "这是你",
              translation: "isto é você",
              note: "Ex.: apontando para uma foto."
            },
            {
              pinyin: "bù",
              characters: "不",
              translation: "não",
              note: "Negação básica."
            },
            {
              pinyin: "nǐ bú shì wǒ de péngyou",
              characters: "你不是我的朋友",
              translation: "você não é meu amigo",
              note: "bù vira bú antes de quarto tom."
            },
            {
              pinyin: "zhè bú shì nǐ de",
              characters: "这不是你的",
              translation: "isto não é seu",
              note: "Negação com demonstrativo."
            },
            {
              pinyin: "nǐ de péngyou bú shì wǒ de péngyou",
              characters: "你的朋友不是我的朋友",
              translation: "seu amigo não é meu amigo",
              note: "Estrutura longa, mas regular."
            },
            {
              pinyin: "nà shì wǒ de",
              characters: "那是我的",
              translation: "aquilo é meu",
              note: "nà (那) = aquilo/aquele."
            },
            {
              pinyin: "zhè shì wǒ de, nà shì nǐ de",
              characters: "这是我的，那是你的",
              translation: "isto é meu, aquilo é seu",
              note: "Contraste entre zhè e nà."
            },
            {
              pinyin: "nà bú shì nǐ de péngyou",
              characters: "那不是你的朋友",
              translation: "aquele não é seu amigo",
              note: "Negação com nà."
            },
            {
              pinyin: "bù, wǒ bú shì",
              characters: "不，我不是",
              translation: "não, eu não sou",
              note: "Resposta curta."
            },
            {
              pinyin: "nǐ bú shì wǒ",
              characters: "你不是我",
              translation: "você não é eu",
              note: "Frase estrutural."
            },
            {
              pinyin: "nà bú shì wǒ de, nà shì wǒ de péngyou de",
              characters: "那不是我的，那是我的朋友的",
              translation: "aquilo não é meu, aquilo é do meu amigo",
              note: "Combina contraste e posse."
            }
          ]
        },
        {
          id: "l2",
          title: "Lição 2",
          subtitle: "ma, men, zhège, nàge, bēizi, shéi, tā",
          items: [
            {
              pinyin: "ma",
              characters: "吗",
              translation: "partícula de pergunta",
              note: "Usada no fim de frases interrogativas."
            },
            {
              pinyin: "men",
              characters: "们",
              translation: "sufixo plural",
              note: "Usado com pronomes e algumas palavras de pessoa."
            },
            {
              pinyin: "zhège",
              characters: "这个",
              translation: "este, isto",
              note: "Demonstrativo completo."
            },
            {
              pinyin: "nàge",
              characters: "那个",
              translation: "aquele, aquilo",
              note: "Contraste com zhège."
            },
            {
              pinyin: "bēizi",
              characters: "杯子",
              translation: "copo",
              note: "Vocabulário concreto."
            },
            {
              pinyin: "shéi",
              characters: "谁",
              translation: "quem",
              note: "Pronome interrogativo."
            },
            {
              pinyin: "tā",
              characters: "他 / 她",
              translation: "ele / ela",
              note: "Mesmo pinyin para ambos."
            }
          ]
        }
      ]
    },
    {
      id: "nivel-2",
      title: "Nível 2",
      subtitle: "Estruturas básicas de posse e existência",
      lessons: [
        {
          id: "l3",
          title: "Lição 3",
          subtitle: "yǒu, shǒujī, méiyǒu, píngguǒ, yī, gè, liǎng, méi",
          items: [
            {
              pinyin: "yǒu",
              characters: "有",
              translation: "ter, haver",
              note: "Verbo muito frequente."
            },
            {
              pinyin: "shǒujī",
              characters: "手机",
              translation: "celular",
              note: "Vocabulário cotidiano."
            },
            {
              pinyin: "méiyǒu",
              characters: "没有",
              translation: "não ter",
              note: "Negação comum de yǒu."
            },
            {
              pinyin: "píngguǒ",
              characters: "苹果",
              translation: "maçã",
              note: "Substantivo comum em lições iniciais."
            },
            {
              pinyin: "yī",
              characters: "一",
              translation: "um",
              note: "Número básico."
            },
            {
              pinyin: "gè",
              characters: "个",
              translation: "classificador geral",
              note: "Muito usado com objetos e pessoas."
            },
            {
              pinyin: "liǎng",
              characters: "两",
              translation: "dois",
              note: "Usado antes de classificadores."
            },
            {
              pinyin: "méi",
              characters: "没",
              translation: "não",
              note: "Parte de méiyǒu."
            }
          ]
        }
      ]
    }
  ]
};
