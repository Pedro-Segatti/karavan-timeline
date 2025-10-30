"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scrollama, Step } from "react-scrollama";
import { useState, useRef } from "react";

const story = [
  {
    id: 1,
    date: "",
    title: "Karavan ACF",
    text: "A história por trás do primeiro estrangeiro a competir no Sema Show",
    bg: "/favicon.png",
    img: "/logo.png",
  },
  {
    id: 2,
    date: "01/05/2024",
    title: "O começo de tudo",
    text: "Escolha do novo carro do canal",
    bg: "/story2.jpg",
  },
  {
    id: 3,
    date: "10/05/2024",
    title: "A avaliação de um especialista no assunto",
    text: "Um momento decisivo para a continuação do projeto, avaliação do Alemão",
    bg: "/story3.jpg",
  },
  {
    id: 4,
    date: "27/01/2025",
    title: "Primeira grande empreitada - Funilaria",
    text: "Split Custom assume o projeto de funilaria e pintura da Karavan",
    bg: "/story4.jpg",
  },
  {
    id: 5,
    date: "01/05/2025",
    title: "A nova identidade da Karavan",
    text: "Depois de muita massa e dedicação a revelação da nova identidade",
    img: "/story5.jpg",
    bg: "/bgstory5.jpg",
  },
  {
    id: 6,
    date: "18/07/2025",
    title: "A escolha do coração",
    text: "O início da transformação mecânica da Karavan com a escolha do motor. Um K24 de Honda Accord",
    bg: "/story6.jpg",
  },
  {
    id: 7,
    date: "01/09/2025",
    title: "Revisão e preparação do motor",
    text: "Retífica projeto entra em ação e realiza a primeira revisão e aferição de medidas do motor, preparando-o para os pistões forjados",
    bg: "/story7.jpg",
  },
  {
    id: 8,
    date: "05/09/2025",
    title: "Ajustes estruturais na Karavan para adequação do motor",
    text: "Tiozão realiza as adaptações necessárias na estrutura da Karavan para receber o motor K24",
    bg: "/story8.jpg",
  },
  {
    id: 9,
    date: "08/09/2025",
    title: "Fechamento do motor",
    text: "Depois de aguarda algumas peças, tiozao finaliza o fechamento do motor",
    bg: "/story9.jpg",
  },
  {
    id: 10,
    date: "12/09/2025",
    title: "Escolha do Pulmão",
    text: "Escolhido um turbo Garrett G35-1050",
    bg: "/story10.jpg",
  },
  {
    id: 11,
    date: "15/09/2025",
    title: "Escolha do Cérebro",
    text: "Não poderia ser diferente, FT700 Plus, da FuelTech, compõem o projeto",
    bg: "/story11.jpg",
  },
  {
    id: 12,
    date: "15/09/2025",
    title: "A cereja do bolo",
    text: "Como se não bastasse um k24, uma transmissão ZF8HP fecha com chave de ouro o conjunto",
    bg: "/story12.jpg",
  },
  {
    id: 13,
    date: "30/09/2025",
    title: "Atrasos, dúvidas e incertezas",
    text: "Diversos imprevistos atrasam o projeto, mas a vontade de ver a Karavan nas ruas só aumenta e a madrugada trabalhando vira rotina",
    bg: "/story13.jpg",
  },
  {
    id: 14,
    date: "03/10/2025",
    title: "Plotagem",
    text: "Devido a documentação e para proteger a pintura, a Karavan recebe a plotagem cinza",
    bg: "/story14.jpg",
  },
  {
    id: 15,
    date: "03/10/2025",
    title: "Marco Histórico",
    text: "Primeira volta da Karavan nas ruas, validação e testes iniciais",
    bg: "/story15.jpg",
  },
  {
    id: 16,
    date: "06/10/2025",
    title: "Primeiro trecho da viagem, rumo à Porto Alegre",
    text: "Impossível não se emocionar com o apoio da galera na estrada",
    bg: "/story17.jpg",
    img: "/story16.jpg",
  },
  {
    id: 17,
    date: "06/10/2025",
    title: "Primeiro problema na estrada",
    text: "Depois de algumas falhas no câmbio, é necessário trocar o óleo do câmbio na estrada",
    bg: "/story20.jpg",
    img: "/story19.jpg",
  },
  {
    id: 18,
    date: "06/10/2025",
    title: "Carro apoio de respeito",
    text: "Gui da Tonimek aparece como carro de apoio na viagem",
    bg: "/story18.jpg",
  },
  {
    id: 19,
    date: "08/10/2025",
    title: "Alguns amigos sempre serão lembrados",
    text: "Karavan apresenta alguns problemas no câmbio e na dirigibilidade. Pilô, Dio e Sek fazem milagre para trocar o câmbio e consertar os problemas",
    bg: "/story22.jpg",
    img: "/story21.jpg",
  },
  {
    id: 20,
    date: "10/10/2025",
    title: "Últimos ajustes no câmbio na Fueltech - Vamos rumo à Argentina",
    text: "Última parada antes de cruzar a fronteira, ajustes finais no câmbio e recepção incrível de todos os apoiadores e fanáticos pelo projeto, história sendo escrita com sucesso",
    bg: "/story24.jpg",
    img: "/story23.jpg",
  },
  {
    id: 21,
    date: "13/10/2025",
    title: "Primeira troca de pneu",
    text: "Primeira troca de pneu na estrada, o esperado aconteceu e todos os pneus foram revisados",
    bg: "/story25.jpg",
  },
  {
    id: 22,
    date: "13/10/2025",
    title: "Chegada na Argentina",
    text: "Chegada na Argentina, missão cumprida com sucesso até aqui",
    bg: "/story26.jpg",
  },
  {
    id: 23,
    date: "14/10/2025",
    title: "Mudança de planos",
    text: "Tonimek sofre com problemas na aduana, mudança de planos e retorno ao Brasil. Artur mantém um trabalho impecável durante as lives e produção de conteúdo",
    bg: "/story27.jpg",
  },
  {
    id: 24,
    date: "14/10/2025",
    title: "Plano B em Ação",
    text: "Um susto, a Karavan é revisada na Raptors Motors Force em São Paulo e segue viagem agora de avião rumo as EUA",
    bg: "/story28.jpg",
    img: "/story29.jpg",
  },
  {
    id: 25,
    date: "23/10/2025",
    title: "Chegamos nos EUA!",
    text: "Algumas incertezas, finalmente a Karavan desembarca nos EUA",
    bg: "/story30.jpg",
  },
  {
    id: 26,
    date: "23/10/2025",
    title: "Mais um câmbio",
    text: "Depois de alguns problemas, a Karavan recebe um novo câmbio ZF8HP, dessa vez na versão americana, Mapgreen entra em ação para ajudar nessa jornada. Mais uma vez, apoio incondicional da galera",
    bg: "/story31.jpg",
    img: "/story32.jpg",
  },
  {
    id: 27,
    date: "27/10/2025",
    title: "Inovação e tecnologia no projeto",
    text: "Fanatec em um carro de rua, parece loucura, mas é a história sendo escrita mais uma vez. A Karavan agora conta com um seletor de marchas da Fanatec, pioneirismo total",
    bg: "/story33.jpg",
  },
  {
    id: 28,
    date: "28/10/2025",
    title: "Atlanta é logo ali e mais problemas",
    text: "Velocidades mais altas evidenciaram problemas na Karavan, diferencial precisa ser trocado, parada extremamente importante na Fueltech USA. Novos colaboradores e amigos se juntam ao projeto",
    bg: "/story34.jpg",
  },
  {
    id: 29,
    date: "29/10/2025",
    title: "Vamos para Vegas!",
    text: "Novos amigos no projeto, depois de algumas loucuras (Compramos um ônibus), batemos um carro, malas prontas e a próxima parada é o Sema",
    bg: "/story35.jpg",
  },

];

export default function StoryPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const scaleBackground = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const blurBackground = useTransform(scrollYProgress, [0, 1], ["0px", "4px"]);

  const onStepEnter = ({ data }) => {
    setCurrentStep(data);
    setIsAtEnd(data === story.length);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen text-white snap-y snap-mandatory"
    >
      {/* 🔹 Fundo cinematográfico */}
      <motion.div
        style={{
          y: 0,
          scale: scaleBackground,
          filter: blurBackground,
        }}
        className="fixed inset-0 -z-10 transition-all duration-700 ease-in-out will-change-transform"
      >
        {story.map((s, i) => (
          <motion.div
            key={s.id}
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{
              backgroundImage: `url(${s.bg})`,
              opacity:
                currentStep === i
                  ? 1
                  : currentStep > i
                  ? i === story.length - 1
                    ? 1
                    : 0
                  : 0,
            }}
          />
        ))}

        {/* Gradiente escuro sobre o fundo */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background:
              currentStep % 2 === 0
                ? "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))"
                : "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6))",
          }}
          transition={{ duration: 1 }}
        />

        <div className="absolute top-0 left-0 right-0 h-48 min-[1025px]:h-64 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none" />
      </motion.div>

      {/* 🔹 Conteúdo da timeline */}
      <div className="relative z-10 w-full max-w-6xl mx-auto py-20 px-4 sm:px-6 min-[1025px]:px-8">
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] min-[1025px]:w-[3px] bg-white/30 transform -translate-x-1/2 hidden min-[1025px]:block" />

        <Scrollama onStepEnter={onStepEnter} offset={0.6}>
          {story.map((s, i) => {
            const isLeft = i % 2 === 0;
            const imagePath = s.img || s.bg; // ✅ usa img se existir, senão bg

            return (
              <Step data={i} key={s.id}>
                <div className="h-[100vh] snap-start flex items-center justify-center relative">
                  {/* 🔸 Marcador central (só desktop) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden min-[1025px]:flex flex-col items-center z-20">
                    <motion.div
                      className="w-4 h-4 rounded-full border-2 border-white bg-white/20 shadow-lg"
                      animate={{
                        scale: currentStep === i ? 1.3 : 1,
                        backgroundColor:
                          currentStep === i
                            ? "rgba(255,255,255,0.9)"
                            : "rgba(255,255,255,0.2)",
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {/* 🔸 Texto e imagem */}
                  <div
                    className={`flex flex-col min-[1025px]:grid min-[1025px]:grid-cols-2 gap-10 min-[1025px]:gap-20 items-center w-full max-w-5xl ${
                      isLeft
                        ? "min-[1025px]:text-right"
                        : "min-[1025px]:text-left"
                    }`}
                  >
                    {/* Texto */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{
                        opacity: currentStep === i ? 1 : 0,
                        y: currentStep === i ? 0 : 40,
                      }}
                      transition={{ duration: 0.8 }}
                      className={`space-y-3 ${
                        isLeft
                          ? "min-[1025px]:order-1"
                          : "min-[1025px]:order-2"
                      }`}
                    >
                      <p className="text-gray-300 font-semibold tracking-widest text-center min-[1025px]:text-inherit">
                        {s.date}
                      </p>
                      <h1 className="text-2xl sm:text-3xl min-[1025px]:text-5xl font-bold drop-shadow-lg text-center min-[1025px]:text-inherit">
                        {s.title}
                      </h1>
                      <p className="text-base sm:text-lg min-[1025px]:text-xl text-gray-200 leading-relaxed text-center min-[1025px]:text-inherit">
                        {s.text}
                      </p>
                    </motion.div>

                    {/* Imagem lateral */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: currentStep === i ? 1 : 0,
                        scale: currentStep === i ? 1.05 : 0.95,
                      }}
                      transition={{ duration: 0.8 }}
                      className={`flex justify-center w-full ${
                        isLeft
                          ? "min-[1025px]:order-2 min-[1025px]:ml-24"
                          : "min-[1025px]:order-1 min-[1025px]:mr-24"
                      }`}
                    >
                      <div className="w-full max-w-[420px] sm:max-w-[480px] min-[1025px]:max-w-[520px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-700 backdrop-blur-md">
                        <img
                          src={imagePath}
                          alt={s.title}
                          className="w-full h-auto object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Step>
            );
          })}

          {/* Step final */}
          <Step data={story.length}>
            <div className="h-screen snap-start flex items-center justify-center">
              <div />
            </div>
          </Step>
        </Scrollama>
      </div>

      {/* 🔹 Footer translúcido */}
      <motion.footer
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isAtEnd ? 1 : 0, y: isAtEnd ? 0 : 100 }}
        transition={{ duration: 0.8 }}
        className="fixed bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm py-8 text-center z-20 px-4 sm:px-8"
      >
        <div className="text-gray-300 text-sm uppercase tracking-widest mb-2">
          Obrigado por acompanhar
        </div>
        <h2 className="text-xl sm:text-2xl min-[1025px]:text-3xl font-bold text-white drop-shadow-lg">
          Essa história continua...
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          © 2025 - Todos os direitos reservados
        </p>
      </motion.footer>
    </div>
  );
}
