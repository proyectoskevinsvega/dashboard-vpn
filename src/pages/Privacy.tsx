import { motion } from "framer-motion";
import { Shield, Lock, EyeOff, FileText, Globe, Key } from "lucide-react";

const Privacy = () => {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <header className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8"
            >
              <Shield className="w-10 h-10" />
            </motion.div>
            <h1 className="text-5xl font-display font-bold">Política de <span className="text-gradient">Privacidad</span></h1>
            <p className="text-foreground/50 text-lg">Tu privacidad no es una opción, es nuestro estándar fundamental.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary mx-auto">
                <EyeOff className="w-6 h-6" />
              </div>
              <h3 className="font-bold">Zero Logs</h3>
              <p className="text-xs text-foreground/40 leading-relaxed">Nunca registramos tu actividad, destino o tráfico en nuestra red.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary mx-auto">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-bold">mTLS 100%</h3>
              <p className="text-xs text-foreground/40 leading-relaxed">Cada paquete está cifrado de extremo a extremo con certificados únicos.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary mx-auto">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="font-bold">Tú tienes la Llave</h3>
              <p className="text-xs text-foreground/40 leading-relaxed">Ni siquiera nosotros podemos acceder a tu red Mesh privada.</p>
            </div>
          </div>

          <article className="prose prose-invert max-w-none space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                1. Recopilación de Información
              </h2>
              <p className="text-foreground/60 leading-relaxed">
                VerterVpn NO recopila, monitorea ni almacena ningún tipo de registro de navegación, direcciones IP de origen, destinos de tráfico o consultas DNS de sus usuarios.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                2. Uso de Datos Técnicos
              </h2>
              <p className="text-foreground/60 leading-relaxed">
                Únicamente almacenamos los metadatos necesarios para el funcionamiento de tu cuenta (email y credenciales de autenticación), los cuales están protegidos bajo los más altos estándares de cifrado.
              </p>
            </div>

            <div className="p-8 glass rounded-3xl border border-dashed border-white/10 text-center space-y-4">
              <h3 className="font-bold">¿Tienes dudas sobre tus datos?</h3>
              <p className="text-sm text-foreground/50">Estamos comprometidos con la transparencia total. Puedes solicitarnos una auditoría técnica en cualquier momento.</p>
              <button className="text-primary font-bold hover:underline">privacy@vertervpn.online</button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
