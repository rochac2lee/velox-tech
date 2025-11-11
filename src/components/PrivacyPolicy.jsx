import { motion } from "framer-motion";

export const PrivacyPolicy = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-24 -mt-8  mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0 md:pt-[12vw] lg:pt-16"
      id="privacy"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <p className="mb-10 text-secondaryText leading-loose">
              Na Velox Tech levamos a sério a proteção dos dados que você
              compartilha conosco em nossos canais digitais, nas etapas de
              Definição, Construção, Testes e Implantação e nas rotinas de
              acompanhamento de projetos. Esta Política de Privacidade descreve
              como coletamos, utilizamos, armazenamos e protegemos essas
              informações em conformidade com a Lei Geral de Proteção de Dados
              (LGPD).
            </p>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-title">
              1. Quem somos
            </h2>
            <p className="mb-6 text-secondaryText leading-loose">
              A Velox Tech é uma empresa de desenvolvimento e consultoria de
              tecnologia que oferece serviços de consultoria, design,
              desenvolvimento e evolução de soluções digitais. Somos
              controladores dos dados pessoais tratados quando você interage com
              nossos sites, formulários, materiais e times.
            </p>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              2. Dados que coletamos
            </h2>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <span>
                  <b>Dados de contato</b>: Nome, e-mail, telefone, cargo,
                  empresa e informações fornecidas em formulários de
                  pré-briefing, newsletters ou reuniões das fases de Definição e
                  alinhamentos estratégicos.
                </span>
              </li>
              <li className="mb-4 flex">
                <span>
                  <b>Dados de navegação</b>: Páginas acessadas, endereço IP,
                  identificadores de dispositivo, geolocalização aproximada,
                  registros de eventos e preferências coletados por cookies e
                  ferramentas de analytics.
                </span>
              </li>
              <li className="mb-4 flex">
                <span>
                  <b>Dados de projeto</b>: Materiais, acessos, briefing,
                  métricas e outros insumos compartilhados para execução das
                  atividades contratadas.
                </span>
              </li>
            </ul>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              3. Finalidades do tratamento
            </h2>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <span>
                  Responder solicitações, elaborar propostas personalizadas e
                  conduzir reuniões de diagnóstico.
                </span>
              </li>
              <li className="mb-4 flex">
                <span>
                  Viabilizar a execução dos projetos contratados e registrar
                  decisões, indicadores e entregas.
                </span>
              </li>
              <li className="mb-4 flex">
                <span>
                  Enviar comunicações sobre status de projeto, convites para
                  rituais, conteúdos técnicos e oportunidades relacionadas aos
                  nossos serviços.
                </span>
              </li>
              <li className="mb-4 flex">
                <span>
                  Cumprir obrigações legais, contábeis e regulatórias, bem como
                  preservar direitos em processos administrativos ou judiciais.
                </span>
              </li>
            </ul>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              4. Bases legais utilizadas
            </h2>
            <p className="mb-6 text-secondaryText leading-loose">
              Tratamos dados pessoais com base no consentimento do titular, na
              execução de contratos ou procedimentos preliminares, no
              cumprimento de obrigações legais e no legítimo interesse da Velox
              Tech em oferecer e aprimorar seus serviços, sempre avaliando o
              impacto aos titulares.
            </p>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              5. Compartilhamento de informações
            </h2>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <span>
                  Compartilhamos dados com fornecedores de infraestrutura,
                  ferramentas de analytics, plataformas de comunicação, meios de
                  pagamento e parceiros estratégicos estritamente necessários
                  para cumprir as finalidades descritas.
                </span>
              </li>
              <li className="mb-4 flex">
                <span>
                  Podemos compartilhar dados mediante ordem judicial, obrigação
                  legal ou para prevenir fraudes e proteger direitos da Velox
                  Tech, dos clientes e titulares.
                </span>
              </li>
            </ul>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              6. Retenção e descarte
            </h2>
            <p className="mb-6 text-secondaryText leading-loose">
              Mantemos os dados apenas pelo tempo necessário ao cumprimento das
              finalidades informadas ou enquanto houver exigências legais
              aplicáveis. Após esse período, efetuamos o descarte seguro ou
              aplicamos mecanismos de anonimização.
            </p>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              7. Direitos dos titulares
            </h2>
            <p className="mb-6 text-secondaryText leading-loose">
              Você pode solicitar, a qualquer momento, confirmação de
              tratamento, acesso, correção, anonimização, portabilidade,
              eliminação, oposição ou revisão de decisões automatizadas
              envolvendo seus dados pessoais. Atendemos às solicitações pelo
              e-mail <b>contato@veloxtech.com.br</b>.
            </p>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              8. Segurança da informação
            </h2>
            <p className="mb-6 text-secondaryText leading-loose">
              Adotamos controles técnicos, administrativos e operacionais
              adequados para proteger os dados contra acessos não autorizados,
              perda, alteração ou destruição. O Cliente é responsável por manter
              seguras as credenciais e acessos concedidos à sua equipe e
              parceiros.
            </p>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              9. Cookies e tecnologias similares
            </h2>
            <p className="mb-6 text-secondaryText leading-loose">
              Utilizamos cookies essenciais para funcionamento do site, cookies
              de preferência para lembrar suas escolhas e cookies analíticos
              para medir desempenho. Você pode ajustar as permissões diretamente
              no navegador ou gerenciá-las em nossos banners de consentimento.
            </p>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              10. Atualizações desta política
            </h2>
            <p className="mb-6 text-secondaryText leading-loose">
              Esta Política pode ser atualizada periodicamente para refletir
              mudanças em nossos processos ou requisitos legais. Notificaremos
              alterações relevantes pelos canais oficiais da Velox Tech.
            </p>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              11. Contato
            </h2>
            <p className="mb-10 text-secondaryText leading-loose">
              Em caso de dúvidas, solicitações ou reclamações relacionadas aos
              seus dados pessoais, entre em contato com nosso time pelo e-mail{" "}
              <b>contato@veloxtech.com.br</b>.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
