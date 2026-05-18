import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Instagram, 
  Calendar, 
  Users, 
  ShieldCheck, 
  Heart,
  X
} from 'lucide-react';

// Configuration constants
const EXPERT_NAME = "Yara Aguiar Guimarães";
const PROFESSION = "Psicóloga Histórico Cultural";
const ADDRESS = "Rua Maria Gloria Chaves Lima Verde, 1367, Renato Parente, Sobral - CE";
const INSTAGRAM_URL = "https://www.instagram.com/psi.yaraaguiar/";
const WHATSAPP_NUMBER = "5588992543805";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá%20Yara,%20gostaria%20de%20agendar%20uma%20conversa%20inicial.`;

const IMAGES = {
  hero: "https://i.imgur.com/U57ZPHj.jpeg",
  authority: "https://i.imgur.com/AOP0WsU.jpeg",
  backstage: "https://i.imgur.com/NiIzu5V.jpeg",
  results: [
    "https://i.imgur.com/pTquk9H.png",
    // Add more here
  ]
};

// Components
const ButtonCTA = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <a 
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`whatsapp-button group ${className}`}
  >
    {children}
    <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
  </a>
);

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl font-serif mb-4 ${light ? 'text-white' : 'text-brand-ink'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`uppercase tracking-[0.2em] text-xs font-semibold ${light ? 'text-white/60' : 'text-brand-primary'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = useCallback((img: string) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-10 overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <span className="uppercase tracking-[0.3em] text-xs font-bold text-brand-primary mb-4 block">
              Psicologia Histórico Cultural
            </span>
            <h1 className="text-5xl md:text-7xl font-serif leading-[0.9] mb-6">
              Eu sou <span className="text-brand-primary italic">Yara Aguiar</span>, <br />Psicóloga em Sobral.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-sm">
              Desenvolva sua melhor versão em um ambiente seguro, acolhedor e focado na sua saúde emocional.
            </p>
            <div className="flex flex-col gap-4">
              <ButtonCTA>
                Agendar consulta no WhatsApp
              </ButtonCTA>
              <p className="text-sm text-gray-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> 
                Resposta rápida • Sem compromisso
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="image-oval relative z-10 aspect-[4/5] max-w-md mx-auto">
              <img 
                src={IMAGES.hero} 
                alt={EXPERT_NAME} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative background circle */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-accent/20 rounded-full blur-2xl -z-0" />
          </motion.div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="rounded-[40px] overflow-hidden shadow-xl aspect-square">
              <img 
                src={IMAGES.authority} 
                alt="Sobre Yara Aguiar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <div className="order-1 md:order-2">
            <SectionTitle subtitle="Autoridade Pessoal">
              Quem sou eu
            </SectionTitle>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Olá, eu sou a <strong>Yara Aguiar Guimarães</strong>. Minha missão é proporcionar um espaço de escuta e acolhimento onde você se sinta seguro para explorar suas emoções.
              </p>
              <p>
                Utilizo a abordagem da Psicologia Histórico-Cultural para entender não apenas o indivíduo, mas todo o contexto que o cerca.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Atendimento personalizado e humano",
                  "Especialista em Psicologia Histórico Cultural",
                  "Foco em resultados e bem-estar real",
                  "Ambiente ético e acolhedor"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-bg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="section-padding bg-brand-bg/50">
        <div className="container mx-auto">
          <SectionTitle subtitle="Testemunhos & Evolução">
            Resultados Reais
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {IMAGES.results.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="glass-card overflow-hidden cursor-pointer aspect-video md:aspect-square group"
                onClick={() => openLightbox(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
            {/* Placeholder for more images */}
            <div className="flex items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-3xl text-gray-400">
              Galeria em expansão...
            </div>
          </div>
          
          <p className="text-center mt-8 text-xs text-gray-400 italic">
            *Resultados podem variar de pessoa para pessoa. Fotos autorizadas.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <SectionTitle subtitle="Diferenciais">
            Por que confiar em mim?
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />,
                title: "Avaliação Honesta",
                desc: "Clareza e ética profissional desde o primeiro contato sobre as suas necessidades emocionais."
              },
              {
                icon: <Users className="w-8 h-8 text-brand-primary" />,
                title: "Atendimento Comigo",
                desc: "Você será atendido diretamente por mim, garantindo exclusividade e continuidade."
              },
              {
                icon: <Heart className="w-8 h-8 text-brand-primary" />,
                title: "Acolhimento Real",
                desc: "Um espaço seguro e livre de julgamentos para você explorar sua história livremente."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-brand-primary" />,
                title: "Clareza Terapêutica",
                desc: "Processos explicativos e transparentes para que você compreenda cada etapa da sua evolução."
              },
              {
                icon: <Calendar className="w-8 h-8 text-brand-primary" />,
                title: "Suporte Dedicado",
                desc: "Comprometimento total com sua jornada, respeitando seu tempo e seu ritmo individual."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />,
                title: "Segurança de Dados",
                desc: "Sigilo absoluto e respeito total à sua privacidade e intimidade em todas as sessões."
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[32px] bg-brand-bg/30 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-bg"
              >
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-16 px-6 bg-brand-primary text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Não deixe para depois o que sua mente precisa hoje.
          </h2>
          <p className="mb-10 text-white/80">
            Dê o primeiro passo rumo ao equilíbrio emocional com um atendimento que entende você.
          </p>
          <ButtonCTA className="bg-white !text-brand-primary hover:bg-gray-100 mx-auto">
            Quero agendar agora
          </ButtonCTA>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle subtitle="Simplicidade">
            Como funciona a primeira consulta
          </SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Step line */}
            <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-brand-bg -z-0" />
            
            {[
              {
                step: "01",
                title: "Contato no WhatsApp",
                desc: "Clique no botão e envie uma mensagem rápida para nossa equipe."
              },
              {
                step: "02",
                title: "Agendamento",
                desc: "Escolhemos juntos o melhor horário para sua primeira conversa."
              },
              {
                step: "03",
                title: "Avaliação",
                desc: "Um espaço seguro para cuidar da sua saúde emocional."
              }
            ].map((item, i) => (
              <div key={i} className="text-center relative z-10">
                <div className="w-20 h-20 bg-brand-bg rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-serif font-bold text-brand-primary shadow-sm">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <span className="inline-block px-8 py-3 rounded-full bg-brand-accent/15 text-brand-primary font-bold text-sm uppercase tracking-widest border border-brand-accent/20">
              Um espaço seguro para cuidar da sua saúde emocional.
            </span>
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (BASTIDORES) */}
      <section className="section-padding bg-brand-bg">
        <div className="container mx-auto">
          <SectionTitle subtitle="Bastidores & Atendimento">
            Cuidado e Profissionalismo
          </SectionTitle>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-[50px] overflow-hidden shadow-2xl aspect-video md:aspect-[21/9]"
            >
              <img 
                src={IMAGES.backstage} 
                alt="Consultório Yara Aguiar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="mt-8 flex items-center justify-center gap-4 text-gray-500 italic">
              <span className="flex items-center gap-2 italic">
                <MapPin className="w-4 h-4" /> Sobral - Ceará
              </span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>Atendimento personalizado</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Pronto para iniciar <br />
              <span className="text-brand-primary italic">sua jornada?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Agende uma conversa inicial agora mesmo.
            </p>
            <ButtonCTA className="min-w-[280px] py-6 text-lg mx-auto">
              Agendar minha consulta
            </ButtonCTA>
          </motion.div>
        </div>
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-2xl -z-0" />
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 px-6 border-t border-brand-bg bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">{EXPERT_NAME}</h3>
              <p className="text-gray-500 text-sm mb-4">{PROFESSION}</p>
              <div className="flex items-center gap-2 text-xs text-gray-400 max-w-xs mx-auto md:mx-0">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                {ADDRESS}
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-4">
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
              <p className="text-[10px] text-gray-300 uppercase tracking-widest">
                © {new Date().getFullYear()} {EXPERT_NAME} • Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Visualização" 
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
