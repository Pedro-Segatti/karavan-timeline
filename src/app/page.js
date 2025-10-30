"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scrollama, Step } from "react-scrollama";
import { FaInstagram } from "react-icons/fa";
import { useState, useRef } from "react";

const isProd = process.env.NODE_ENV === 'production';
const prefix = isProd ? '/karavan-timeline' : '';

const story = [
  {
    id: 1,
    date: "",
    title: "Karavan ACF",
    text: "A história por trás do primeiro estrangeiro a competir no SEMA Show.",
    bg: `${prefix}/logo1.png`,
    img: `${prefix}/logo.png`,
  },
  {
    id: 2,
    date: "01/05/2024",
    title: "O começo de tudo",
    text: "Escolha do novo carro do canal.",
    bg: `${prefix}/story2.jpg`,
  },
  {
    id: 3,
    date: "10/05/2024",
    title: "A avaliação de um especialista",
    text: "Um momento decisivo para a continuação do projeto: a avaliação do Alemão.",
    bg: `${prefix}/story3.jpg`,
  },
  {
    id: 4,
    date: "27/01/2025",
    title: "Primeira grande empreitada – Funilaria",
    text: "A Split Custom assume o projeto de funilaria e pintura da Karavan.",
    bg: `${prefix}/story4.jpg`,
  },
  {
    id: 5,
    date: "01/05/2025",
    title: "A nova identidade da Karavan",
    text: "Após muita dedicação, é revelada a nova identidade visual da Karavan.",
    img: `${prefix}/story5.jpg`,
    bg: `${prefix}/bgstory5.jpg`,
  },
  {
    id: 6,
    date: "18/07/2025",
    title: "A escolha do coração",
    text: "Início da transformação mecânica da Karavan com a escolha do motor K24, do Honda Accord.",
    bg: `${prefix}/story6.jpg`,
  },
  {
    id: 7,
    date: "01/09/2025",
    title: "Revisão e preparação do motor",
    text: "A Retífica Projeto entra em ação, realizando a primeira revisão e aferição de medidas do motor, preparando-o para os pistões forjados.",
    bg: `${prefix}/story7.jpg`,
  },
  {
    id: 8,
    date: "05/09/2025",
    title: "Ajustes estruturais para o motor",
    text: "O Tiozão realiza as adaptações necessárias na estrutura da Karavan para receber o motor K24.",
    bg: `${prefix}/story8.jpg`,
  },
  {
    id: 9,
    date: "08/09/2025",
    title: "Fechamento do motor",
    text: "Após aguardar algumas peças, o Tiozão finaliza o fechamento do motor.",
    bg: `${prefix}/story9.jpg`,
  },
  {
    id: 10,
    date: "12/09/2025",
    title: "Escolha do pulmão",
    text: "Escolhido um turbo Garrett G35-1050.",
    bg: `${prefix}/story10.jpg`,
  },
  {
    id: 11,
    date: "15/09/2025",
    title: "Escolha do cérebro",
    text: "Não poderia ser diferente: a FT700 Plus, da FuelTech, compõe o projeto.",
    bg: `${prefix}/story11.jpg`,
  },
  {
    id: 12,
    date: "15/09/2025",
    title: "A cereja do bolo",
    text: "Como se não bastasse o K24, uma transmissão ZF8HP fecha com chave de ouro o conjunto.",
    bg: `${prefix}/story12.jpg`,
  },
  {
    id: 13,
    date: "30/09/2025",
    title: "Atrasos, dúvidas e incertezas",
    text: "Diversos imprevistos atrasam o projeto, mas a vontade de ver a Karavan nas ruas só aumenta. As madrugadas de trabalho viram rotina.",
    bg: `${prefix}/story13.jpg`,
  },
  {
    id: 14,
    date: "03/10/2025",
    title: "Plotagem",
    text: "Devido à documentação e para proteger a pintura, a Karavan recebe uma plotagem cinza.",
    bg: `${prefix}/story14.jpg`,
  },
  {
    id: 15,
    date: "03/10/2025",
    title: "Marco histórico",
    text: "Primeira volta da Karavan nas ruas: validação e testes iniciais.",
    bg: `${prefix}/story15.jpg`,
  },
  {
    id: 16,
    date: "06/10/2025",
    title: "Primeiro trecho da viagem – Rumo a Porto Alegre",
    text: "Impossível não se emocionar com o apoio da galera na estrada.",
    bg: `${prefix}/story17.jpg`,
    img: `${prefix}/story16.jpg`,
  },
  {
    id: 17,
    date: "06/10/2025",
    title: "Primeiro problema na estrada",
    text: "Após algumas falhas, é necessário trocar o óleo do câmbio ainda na estrada.",
    bg: `${prefix}/story20.jpg`,
    img: `${prefix}/story19.jpg`,
  },
  {
    id: 18,
    date: "06/10/2025",
    title: "Carro de apoio de respeito",
    text: "Gui, da Tonimek, aparece como carro de apoio na viagem.",
    bg: `${prefix}/story18.jpg`,
  },
  {
    id: 19,
    date: "08/10/2025",
    title: "Amigos que sempre serão lembrados",
    text: "A Karavan apresenta problemas no câmbio e na dirigibilidade. Pilô, Dio e Sek fazem milagres para trocar o câmbio e resolver os problemas.",
    bg: `${prefix}/story22.jpg`,
    img: `${prefix}/story21.jpg`,
  },
  {
    id: 20,
    date: "10/10/2025",
    title: "Últimos ajustes na FuelTech – Rumo à Argentina",
    text: "Última parada antes de cruzar a fronteira: ajustes finais no câmbio e recepção incrível de todos os apoiadores. A história segue sendo escrita.",
    bg: `${prefix}/story24.jpg`,
    img: `${prefix}/story23.jpg`,
  },
  {
    id: 21,
    date: "13/10/2025",
    title: "Primeira troca de pneu",
    text: "O esperado aconteceu: primeira troca de pneu na estrada. Todos foram revisados e ajustados.",
    bg: `${prefix}/story25.jpg`,
  },
  {
    id: 22,
    date: "13/10/2025",
    title: "Chegada à Argentina",
    text: "Chegada à Argentina: missão cumprida com sucesso até aqui.",
    bg: `${prefix}/story26.jpg`,
  },
  {
    id: 23,
    date: "14/10/2025",
    title: "Mudança de planos",
    text: "A Tonimek enfrenta problemas na aduana, exigindo mudança de planos e retorno ao Brasil. Artur mantém um trabalho impecável nas lives e na produção de conteúdo.",
    bg: `${prefix}/story27.jpg`,
  },
  {
    id: 24,
    date: "14/10/2025",
    title: "Plano B em ação",
    text: "Após um susto, a Karavan é revisada na Raptors Motors Force, em São Paulo, e segue viagem de avião rumo aos EUA.",
    bg: `${prefix}/story28.jpg`,
    img: `${prefix}/story29.jpg`,
  },
  {
    id: 25,
    date: "23/10/2025",
    title: "Chegamos aos EUA!",
    text: "Após algumas incertezas, finalmente a Karavan desembarca nos Estados Unidos.",
    bg: `${prefix}/story30.jpg`,
  },
  {
    id: 26,
    date: "23/10/2025",
    title: "Mais um câmbio",
    text: "Após novos problemas, a Karavan recebe um câmbio ZF8HP americano. A Mapgreen entra em ação, com mais uma demonstração de apoio incondicional da comunidade.",
    bg: `${prefix}/story31.jpg`,
    img: `${prefix}/story32.jpg`,
  },
  {
    id: 27,
    date: "27/10/2025",
    title: "Inovação e tecnologia no projeto",
    text: "Fanatec em um carro de rua? Parece loucura, mas é história sendo escrita. A Karavan agora conta com um seletor de marchas Fanatec — pioneirismo total.",
    bg: `${prefix}/story33.jpg`,
  },
  {
    id: 28,
    date: "28/10/2025",
    title: "Atlanta é logo ali – e mais problemas",
    text: "Velocidades mais altas evidenciam falhas: o diferencial precisa ser trocado. Parada crucial na FuelTech USA, onde novos colaboradores e amigos se juntam ao projeto.",
    bg: `${prefix}/story34.jpg`,
  },
  {
    id: 29,
    date: "29/10/2025",
    title: "Vamos para Vegas!",
    text: "Novos amigos no projeto, algumas loucuras (como comprar um ônibus), um pequeno acidente e malas prontas: a próxima parada é o SEMA Show.",
    bg: `${prefix}/story35.jpg`,
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

        <h2 className="text-xl sm:text-2xl min-[1025px]:text-3xl font-bold text-white drop-shadow-lg mb-4 leading-snug">
          Isso é apenas o começo...
        </h2>

        {/* 🔹 Ícones do Instagram */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.instagram.com/segattipedro_?igsh=MTViZXRnY2J6bjJ2bg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Pedro"
            className="text-gray-300 hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>

          <a
            href="https://www.instagram.com/eduardomokfa?igsh=MTB3cGNyNXB3d2YycQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Eduardo"
            className="text-gray-300 hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        </div>

        {/* 🔸 Créditos */}
        <p className="text-gray-400 text-xs sm:text-sm">
          Site criado por fãs — uma homenagem não oficial.
        </p>
      </motion.footer>
    </div>
  );
}
