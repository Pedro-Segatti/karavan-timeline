"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scrollama, Step } from "react-scrollama";
import { FaInstagram } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

export default function StoryPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [autoScroll, setAutoScroll] = useState(false); // 🌀 controle de rolagem
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleBackground = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const blurBackground = useTransform(scrollYProgress, [0, 1], ["0px", "4px"]);

  const isProd = process.env.NODE_ENV === 'production';
  const prefix = isProd ? '/karavan-timeline' : '';

  const story = [
    {
      id: 1,
      date: "",
      title: "Karavan ACF",
      text: "The story behind the first foreigner to compete at the SEMA Show.",
      bg: `${prefix}/logo1.png`,
      img: `${prefix}/logo.png`,
    },
    {
      id: 2,
      date: "05/01/2024",
      title: "The beginning of everything",
      text: "Choosing the new car for the channel.",
      bg: `${prefix}/story2.jpg`,
    },
    {
      id: 3,
      date: "05/10/2024",
      title: "The evaluation of a specialist",
      text: "A decisive moment for the project’s continuation: Alemão’s evaluation.",
      bg: `${prefix}/story3.jpg`,
    },
    {
      id: 4,
      date: "01/27/2025",
      title: "First major milestone – Bodywork",
      text: "Split Custom takes over the Karavan’s bodywork and paint project.",
      bg: `${prefix}/story4.jpg`,
    },
    {
      id: 5,
      date: "05/01/2025",
      title: "The new identity of the Karavan",
      text: "After much dedication, the new visual identity of the Karavan is revealed.",
      img: `${prefix}/story5.jpg`,
      bg: `${prefix}/bgstory5.jpg`,
    },
    {
      id: 6,
      date: "07/18/2025",
      title: "The choice of the heart",
      text: "The mechanical transformation begins with the selection of the K24 engine from the Honda Accord.",
      bg: `${prefix}/story6.jpg`,
    },
    {
      id: 7,
      date: "09/01/2025",
      title: "Engine inspection and preparation",
      text: "Projeto Engine Shop steps in, performing measurements and preparing it for forged pistons.",
      bg: `${prefix}/story7.jpg`,
    },
    {
      id: 8,
      date: "09/05/2025",
      title: "Structural adjustments for the engine",
      text: "Tiozão performs the necessary chassis adaptations for the K24 installation.",
      bg: `${prefix}/story8.jpg`,
    },
    {
      id: 9,
      date: "09/08/2025",
      title: "Engine assembly completed",
      text: "After waiting for a few parts, Tiozão completes the engine assembly.",
      bg: `${prefix}/story9.jpg`,
    },
    {
      id: 10,
      date: "09/12/2025",
      title: "The choice of the lungs",
      text: "A Garrett G35-1050 turbo is chosen.",
      bg: `${prefix}/story10.jpg`,
    },
    {
      id: 11,
      date: "09/15/2025",
      title: "The brain of the project",
      text: "As expected, the FuelTech FT700 Plus joins the setup.",
      bg: `${prefix}/story11.jpg`,
    },
    {
      id: 12,
      date: "09/15/2025",
      title: "The cherry on top",
      text: "Along with the K24, a ZF8HP transmission completes the masterpiece.",
      bg: `${prefix}/story12.jpg`,
    },
    {
      id: 13,
      date: "09/30/2025",
      title: "Delays, doubts, and uncertainties",
      text: "Several setbacks slow down progress, but motivation keeps growing. Long nights become routine.",
      bg: `${prefix}/story13.jpg`,
    },
    {
      id: 14,
      date: "10/03/2025",
      title: "Wrapping it up",
      text: "Due to paperwork and to protect the paint, the Karavan receives a gray wrap.",
      bg: `${prefix}/story14.jpg`,
    },
    {
      id: 15,
      date: "10/03/2025",
      title: "A historic milestone",
      text: "The Karavan’s first run on the streets — validation and initial tests.",
      bg: `${prefix}/story15.jpg`,
    },
    {
      id: 16,
      date: "10/06/2025",
      title: "First leg of the trip – Heading to Porto Alegre",
      text: "It’s impossible not to feel emotional seeing all the support along the road.",
      bg: `${prefix}/story17.jpg`,
      img: `${prefix}/story16.jpg`,
    },
    {
      id: 17,
      date: "10/06/2025",
      title: "First issue on the road",
      text: "After some failures, a transmission oil change is needed right on the road.",
      bg: `${prefix}/story20.jpg`,
      img: `${prefix}/story19.jpg`,
    },
    {
      id: 18,
      date: "10/06/2025",
      title: "Support car on point",
      text: "Gui, from Tonimek, steps in as the support vehicle during the trip.",
      bg: `${prefix}/story18.jpg`,
    },
    {
      id: 19,
      date: "10/08/2025",
      title: "Friends that will never be forgotten",
      text: "The Karavan faces transmission issues, but Pilô, Dio, and Sek perform miracles to fix it.",
      bg: `${prefix}/story22.jpg`,
      img: `${prefix}/story21.jpg`,
    },
    {
      id: 20,
      date: "10/10/2025",
      title: "Final tuning at FuelTech – Heading to Argentina",
      text: "Final stop before crossing the border: last adjustments and a warm reception from everyone.",
      bg: `${prefix}/story24.jpg`,
      img: `${prefix}/story23.jpg`,
    },
    {
      id: 21,
      date: "10/13/2025",
      title: "First tire change",
      text: "It finally happened — first tire change on the road. Everything was checked and adjusted.",
      bg: `${prefix}/story25.jpg`,
    },
    {
      id: 22,
      date: "10/13/2025",
      title: "Arrival in Argentina",
      text: "Arrival in Argentina: mission accomplished so far.",
      bg: `${prefix}/story26.jpg`,
    },
    {
      id: 23,
      date: "10/14/2025",
      title: "Change of plans",
      text: "Tonimek faces customs issues, forcing a change of plans and return to Brazil. Artur keeps the livestream and content flawless.",
      bg: `${prefix}/story27.jpg`,
    },
    {
      id: 24,
      date: "10/14/2025",
      title: "Plan B in action",
      text: "After a scare, the Karavan is serviced at Raptors Motors Force in São Paulo and continues by plane to the U.S.",
      bg: `${prefix}/story28.jpg`,
      img: `${prefix}/story29.jpg`,
    },
    {
      id: 25,
      date: "10/23/2025",
      title: "We made it to the U.S.!",
      text: "After some uncertainty, the Karavan finally lands in the United States.",
      bg: `${prefix}/story30.jpg`,
    },
    {
      id: 26,
      date: "10/23/2025",
      title: "Another transmission",
      text: "After new problems, the Karavan receives an American ZF8HP transmission. Mapgreen steps in again — the community’s support is unbelievable.",
      bg: `${prefix}/story31.jpg`,
      img: `${prefix}/story32.jpg`,
    },
    {
      id: 27,
      date: "10/27/2025",
      title: "Innovation and technology",
      text: "Fanatec in a street car? It sounds crazy, but it’s history being made. The Karavan now features a Fanatec shifter — total innovation.",
      bg: `${prefix}/story33.jpg`,
    },
    {
      id: 28,
      date: "10/28/2025",
      title: "Atlanta ahead – and more challenges",
      text: "Higher speeds reveal flaws: the differential needs replacement. A crucial stop at FuelTech USA brings new allies.",
      bg: `${prefix}/story34.jpg`,
    },
    {
      id: 29,
      date: "10/29/2025",
      title: "Let’s go to Vegas!",
      text: "New friends, a few crazy moments (like buying a bus), a small accident, and packed bags: next stop, the SEMA Show.",
      bg: `${prefix}/story35.jpg`,
    },
  ];

  const onStepEnter = ({ data }) => {
    setCurrentStep(data);
    setIsAtEnd(data === story.length);
  };

  useEffect(() => {
    if (!autoScroll) return;

    let direction = 1; 
    const scrollSpeedDown = 1.0; 
    const scrollSpeedUp = 35; 
    const pauseBottom = 200; 
    const pauseTop = 100; 
    let stop = false;
    let waitTimeout;

    const scroll = () => {
      if (!autoScroll || stop) return;

      if (direction === 1) {
        window.scrollBy(0, scrollSpeedDown);
      } else {
        window.scrollBy(0, -scrollSpeedUp);
      }

      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 5;
      const atTop = window.scrollY <= 0;

      if (atBottom && direction === 1) {
        window.scrollTo(0, document.body.scrollHeight);
        waitTimeout = setTimeout(() => {
          if (!stop) {
            direction = -1;
            requestAnimationFrame(scroll);
          }
        }, pauseBottom);
        return;
      }

      if (atTop && direction === -1) {
        window.scrollTo(0, 0);
        waitTimeout = setTimeout(() => {
          if (!stop) {
            direction = 1;
            requestAnimationFrame(scroll);
          }
        }, pauseTop);
        return;
      }

      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    return () => {
      stop = true;
      cancelAnimationFrame(animation);
      clearTimeout(waitTimeout);
    };
  }, [autoScroll]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-auto text-white"
      lang="pt-BR"
    >
      <div className="fixed top-4 right-4 z-50 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full shadow-lg hover:bg-black/60 transition-all duration-300">
        <button
          onClick={() => setAutoScroll((prev) => !prev)}
          className="text-sm sm:text-base text-white font-semibold"
        >
          {autoScroll ? "🌀 Disable Auto Scroll" : "🌀 Enable Auto Scroll"}
        </button>
      </div>

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

        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/90 to-transparent pointer-events-none" />
      </motion.div>

      {/* 🔹 Conteúdo da timeline */}
      <div className="relative z-10 w-full max-w-6xl mx-auto py-20 px-4 sm:px-6 min-[1025px]:px-8">
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] min-[1025px]:w-[3px] bg-white/30 transform -translate-x-1/2 hidden min-[1025px]:block" />

        <Scrollama onStepEnter={onStepEnter} offset={0.6}>
          {story.map((s, i) => {
            const isLeft = i % 2 === 0;
            const imagePath = s.img || s.bg;

            return (
              <Step data={i} key={s.id}>
                <div className="h-[100vh] snap-start flex items-center justify-center relative">
                  {/* 🔸 Marcador central */}
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
          Thank you for following
        </div>

        <h2 className="text-xl sm:text-2xl min-[1025px]:text-3xl font-bold text-white drop-shadow-lg mb-4 leading-snug">
          This is just the beginning...
        </h2>

        {/* 🔹 Ícones do Instagram */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.instagram.com/segattipedro_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Pedro"
            className="text-gray-300 hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>

          <a
            href="https://www.instagram.com/eduardomokfa"
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
          Website created by fans — an unofficial tribute.
        </p>
      </motion.footer>
    </div>
  );
}
