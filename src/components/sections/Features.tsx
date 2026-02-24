import { motion } from "framer-motion";
import { Shield, Zap, Globe, Smartphone, Lock, Cpu } from "lucide-react";

const features = [
  {
    title: "Seguridad Militar",
    description: "Cifrado AES-256 bits y protocolos de última generación para proteger tus datos.",
    icon: Shield,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Velocidad Ultra",
    description: "Optimizado para streaming 4K y gaming sin latencia.",
    icon: Zap,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Multi-Dispositivo",
    description: "Compatible con todos tus equipos.",
    icon: Smartphone,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Red Global",
    description: "Más de 50 servidores en ubicaciones estratégicas alrededor del mundo.",
    icon: Globe,
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Detección Inteligente",
    description: "Conexión automática al servidor más rápido.",
    icon: Cpu,
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Privacidad Garantizada",
    description: "Política estricta de cero registros. Tus datos son solo tuyos.",
    icon: Lock,
    className: "md:col-span-2 md:row-span-1",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-display font-bold tracking-tight">Tecnología de <span className="text-gradient">Alto Rendimiento</span></h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Hemos construido una plataforma robusta pensando en la privacidad y la velocidad extrema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl glass hover:border-primary/30 transition-all duration-500 group ${feature.className}`}
            >
              <div className="bg-primary/10 p-3 rounded-2xl w-fit mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
