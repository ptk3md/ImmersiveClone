const APP_DATA = {
  levels: [
    {
      id: "abs-beginner",
      title: "Absolute Beginner",
      subtitle: "",
      expanded: true,
      lessons: [
        {
          id: "lesson-1",
          title: "Lesson 1",
          meta: "wǒ, péngyou, de, nǐ, shì, zhè, bù, nà",
          sentences: [
            {
              pinyin: "wǒ",
              characters: "我",
              translation: "eu, mim",
              newWord: true,
              vocab: [
                { pinyin: "wǒ", characters: "我", translation: "eu" }
              ],
              notes: ["Pronome de primeira pessoa."]
            },
            {
              pinyin: "péngyou",
              characters: "朋友",
              translation: "amigo",
              newWord: true,
              vocab: [
                { pinyin: "péngyou", characters: "朋友", translation: "amigo" }
              ],
              notes: ["Vocabulário muito comum em diálogos básicos."]
            },
            {
              pinyin: "wǒ de péngyou",
              characters: "我的朋友",
              translation: "meu amigo",
              newWord: true,
              vocab: [
                { pinyin: "de", characters: "的", translation: "partícula possessiva" }
              ],
              notes: ["de marca posse."]
            }
          ]
        },
        {
          id: "lesson-18",
          title: "Lesson 18",
          meta: "zuótiān, le, chīfàn, sì",
          sentences: [
            {
              pinyin: "nǐ zuótiān zài nǎr?",
              characters: "你昨天在哪儿?",
              translation: "Onde você estava ontem?",
              newWord: true,
              vocab: [
                { pinyin: "zuótiān", characters: "昨天", translation: "ontem" },
                { pinyin: "zài nǎr", characters: "在哪儿", translation: "onde estava" },
                { pinyin: "yesterday", characters: "昨天", translation: "ontem" }
              ],
              notes: [
                "Frase interrogativa com nǎr para localização.",
                "No vídeo, esta frase aparece com pinyin visível e characters/translation ocultos inicialmente."
              ]
            },
            {
              pinyin: "wǒ zuótiān zài jiā.",
              characters: "我昨天在家。",
              translation: "Eu estava em casa ontem.",
              newWord: false,
              vocab: [
                { pinyin: "jiā", characters: "家", translation: "casa" }
              ],
              notes: ["Resposta curta e natural para a pergunta anterior."]
            },
            {
              pinyin: "tā zuótiān zài xuéxiào ma?",
              characters: "她昨天在学校吗?",
              translation: "Ela estava na escola ontem?",
              newWord: false,
              vocab: [
                { pinyin: "xuéxiào", characters: "学校", translation: "escola" }
              ],
              notes: ["Pergunta com partícula ma no final."]
            },
            {
              pinyin: "bù, tā zuótiān bú zài xuéxiào.",
              characters: "不，她昨天不在学校。",
              translation: "Não, ela não estava na escola ontem.",
              newWord: false,
              vocab: [
                { pinyin: "bú zài", characters: "不在", translation: "não estar em" }
              ],
              notes: ["Negação locativa com zài."]
            },
            {
              pinyin: "zuótiān wǒmen chīfàn le ma?",
              characters: "昨天我们吃饭了吗?",
              translation: "Nós comemos ontem?",
              newWord: true,
              vocab: [
                { pinyin: "chīfàn", characters: "吃饭", translation: "comer, fazer refeição" },
                { pinyin: "le", characters: "了", translation: "partícula aspectual" }
              ],
              notes: ["Pergunta sobre ação passada."]
            }
          ]
        }
      ]
    },
    {
      id: "early-beginner",
      title: "Early Beginner",
      subtitle: "",
      expanded: false,
      lessons: [
        { id: "lesson-21", title: "Lesson 21", meta: "huì, zhǐ, shǎo, duōshao, dà, xiǎo", sentences: [] },
        { id: "lesson-22", title: "Lesson 22", meta: "zěnme, yǒu shíhou, cái, nàme, zhème", sentences: [] }
      ]
    },
    {
      id: "mid-beginner",
      title: "Mid-Level Beginner",
      subtitle: "",
      expanded: false,
      lessons: [
        { id: "lesson-41", title: "Lesson 41", meta: "placeholder", sentences: [] }
      ]
    },
    {
      id: "upper-beginner",
      title: "Upper Beginner",
      subtitle: "",
      expanded: false,
      lessons: [
        { id: "lesson-61", title: "Lesson 61", meta: "placeholder", sentences: [] }
      ]
    },
    {
      id: "advanced-beginner",
      title: "Advanced Beginner",
      subtitle: "",
      expanded: false,
      lessons: [
        { id: "lesson-81", title: "Lesson 81", meta: "placeholder", sentences: [] }
      ]
    },
    {
      id: "basic-intermediate",
      title: "Basic Intermediate",
      subtitle: "",
      expanded: false,
      lessons: [
        { id: "lesson-101", title: "Lesson 101", meta: "placeholder", sentences: [] }
      ]
    },
    {
      id: "lower-intermediate",
      title: "Lower Intermediate",
      subtitle: "",
      expanded: false,
      lessons: [
        { id: "lesson-121", title: "Lesson 121", meta: "placeholder", sentences: [] }
      ]
    },
    {
      id: "intermediate",
      title: "Intermediate",
      subtitle: "",
      expanded: false,
      lessons: [
        { id: "lesson-141", title: "Lesson 141", meta: "placeholder", sentences: [] }
      ]
    },
    {
      id: "extra-stories",
      title: "Extra Stories",
      subtitle: "",
      expanded: false,
      lessons: [
        { id: "story-1", title: "Upper intermediate stories", meta: "stories", sentences: [] }
      ]
    }
  ]
};
