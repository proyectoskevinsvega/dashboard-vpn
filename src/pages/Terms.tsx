import { FileText, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";

const Terms = () => {
  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <header className="text-center space-y-6">
            <h1 className="text-5xl font-display font-bold">Términos de <span className="text-gradient">Servicio</span></h1>
            <p className="text-foreground/50 text-lg">Al usar VerterVpn, aceptas estas condiciones diseñadas para proteger la red.</p>
            <p className="text-xs text-foreground/30 font-bold uppercase tracking-widest">Última actualización: 24 de Febrero de 2026</p>
          </header>

          <div className="bg-white/2 border border-white/5 rounded-4xl p-10 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-primary">
                <ShieldCheck className="w-6 h-6" />
                <h2 className="text-2xl font-bold">1. Uso del Servicio</h2>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                VerterVpn proporciona una infraestructura de red privada. El usuario es el único responsable del contenido transmitido a través de su red Mesh y se compromete a no utilizar el servicio para fines ilegales o que infrinjan los derechos de terceros.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-secondary">
                <CheckCircle2 className="w-6 h-6" />
                <h2 className="text-2xl font-bold">2. Suscripciones y Pagos</h2>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                Los servicios se facturarán según el plan seleccionado. Nos reservamos el derecho de modificar los precios con previo aviso de 30 días. La cancelación del servicio puede realizarse en cualquier momento desde el panel de control.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-yellow-500">
                <AlertTriangle className="w-6 h-6" />
                <h2 className="text-2xl font-bold">3. Limitación de Responsabilidad</h2>
              </div>
              <p className="text-foreground/60 leading-relaxed">
                Aunque nos esforzamos por mantener un uptime del 99.9%, VerterVpn no se hace responsable por interrupciones causadas por terceros o por el uso indebido de las configuraciones de seguridad por parte del usuario.
              </p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 p-3 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-foreground/40 uppercase tracking-widest">
              <FileText className="w-4 h-4" />
              Acuerdo Legal Completo
            </div>
            <p className="text-foreground/30 text-sm max-w-2xl mx-auto">
              Este resumen no sustituye a las leyes vigentes en tu jurisdicción. Para más información, contacta con nuestro departamento legal en legal@vertervpn.online
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
