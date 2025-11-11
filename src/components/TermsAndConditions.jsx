import { motion } from "framer-motion";

export const TermsAndConditions = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-12 -mt-8 mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0 md:pt-[12vw] lg:pt-16"
      id="terms"
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
              Bem-vindo à Velox Tech! Estes Termos de Uso regulam o
              relacionamento entre nossa empresa de desenvolvimento e
              consultoria de tecnologia e os clientes que contratam serviços de
              Definição, Construção, Testes e Implantação de soluções digitais.
              Ao aceitar uma proposta comercial, emitir uma ordem de serviço ou
              iniciar um projeto conosco, você concorda com as condições
              descritas abaixo.
            </p>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-title">
              1. Definições
            </h2>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <span>
                  <b>Velox Tech</b>: Velox Tecnologia e Consultoria, empresa de
                  desenvolvimento e consultoria de tecnologia responsável por
                  conduzir os serviços contratados.
                </span>
              </li>
              <li className="mb-4 flex">
                <span>
                  <b>Cliente</b>: Pessoa física ou jurídica que contrata a Velox
                  Tech para desenvolver, evoluir ou manter produtos digitais.
                </span>
              </li>
              <li className="mb-4 flex">
                <span>
                  <b>Projeto</b>: Conjunto de atividades descritas na proposta
                  comercial aprovada, estruturadas nas fases de Definição,
                  Construção, Testes e Implantação, com escopo, entregáveis,
                  prazos, responsabilidades e valores associados.
                </span>
              </li>
              <li className="mb-4 flex">
                <span>
                  <b>Materiais do Cliente</b>: Informações, dados, ativos
                  visuais, conteúdos e acessos fornecidos pelo Cliente para
                  execução do Projeto.
                </span>
              </li>
            </ul>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              2. Etapas do Projeto
            </h2>
            <h3 className="content-title py-3 sm:pt-0 pr-8 sm:pr-0">
              2.1 Definição
            </h3>
            <p className="mb-6 text-secondaryText leading-loose">
              Direcionamos a tecnologia para o problema certo, alinhando visão
              de produto, métricas, público-alvo e prioridades. As decisões
              tomadas aqui evitam escopos desnecessários e balizam o restante do
              trabalho.
            </p>
            <h3 className="content-title py-3 sm:pt-0 pr-8 sm:pr-0">
              2.2 Construção
            </h3>
            <p className="mb-6 text-secondaryText leading-loose">
              Desenvolvemos o produto em ciclos curtos, unindo engenharia e
              design para entregar um MVP sólido e performático. O Cliente
              acompanha os avanços, com visibilidade total do backlog e dos
              marcos.
            </p>
            <h3 className="content-title py-3 sm:pt-0 pr-8 sm:pr-0">
              2.3 Testes
            </h3>
            <p className="mb-6 text-secondaryText leading-loose">
              Realizamos testes funcionais, de experiência e de qualidade para
              garantir um lançamento sem falhas, priorizando feedbacks reais de
              negócio em vez de retrabalhos.
            </p>
            <h3 className="content-title py-3 sm:pt-0 pr-8 sm:pr-0">
              2.4 Implantação
            </h3>
            <p className="mb-6 text-secondaryText leading-loose">
              Colocamos tudo no ar com suporte próximo, transferência de
              conhecimento e monitoramento inicial, assegurando que o Cliente
              tenha dados confiáveis para guiar as próximas decisões
              estratégicas.
            </p>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              3. Obrigações do Cliente
            </h2>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <span>
                  Disponibilizar informações, acessos, conteúdos e validações
                  necessárias à execução do Projeto nas datas acordadas.
                </span>
              </li>
              <li className="mb-4 flex">
                <span>
                  Assegurar que os Materiais do Cliente respeitam direitos de
                  terceiros e legislações aplicáveis.
                </span>
              </li>
              <li className="mb-4 flex">
                <span>
                  Manter atualizados os canais de comunicação com a squad
                  alocada e registrar decisões e pendências nas ferramentas
                  indicadas pela Velox Tech.
                </span>
              </li>
            </ul>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              4. Obrigações da Velox Tech
            </h2>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <span>
                  Executar o Projeto de acordo com as boas práticas de produto,
                  design e engenharia, respeitando o escopo contratado.
                </span>
              </li>
              <li className="mb-4 flex">
                <span>
                  Disponibilizar equipe qualificada e comunicar previamente
                  qualquer substituição relevante de profissionais.
                </span>
              </li>
              <li className="mb-4 flex">
                <span>
                  Manter o Cliente informado sobre andamento, riscos e
                  necessidades de ajustes, registrando reportes periódicos.
                </span>
              </li>
            </ul>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              5. Remuneração e Condições de Pagamento
            </h2>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <span>
                  Os valores e formas de pagamento constam na proposta comercial
                  ou contrato específico aprovado pelo Cliente.
                </span>
              </li>
              <li className="mb-4 flex">
                <span>
                  A falta de pagamento poderá resultar na suspensão imediata das
                  atividades até regularização, sem prejuízo da cobrança de
                  multas e correções previstas em contrato.
                </span>
              </li>
              <li className="mb-4 flex">
                <span>
                  Valores pagos por etapas já iniciadas não são reembolsáveis,
                  exceto em caso de descumprimento comprovado pela Velox Tech
                  das obrigações assumidas.
                </span>
              </li>
            </ul>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              6. Propriedade Intelectual
            </h2>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <span>
                  Após a quitação das parcelas correspondentes, os
                  códigos-fonte, designs e demais entregáveis exclusivos do
                  Projeto serão transferidos ao Cliente, preservados eventuais
                  componentes de terceiros licenciados.
                </span>
              </li>
              <li className="mb-4 flex">
                <span>
                  Metodologias, frameworks internos, bibliotecas proprietárias e
                  materiais reutilizáveis permanecem de titularidade da Velox
                  Tech e podem ser concedidos ao Cliente em regime de licença,
                  quando aplicável.
                </span>
              </li>
            </ul>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              7. Confidencialidade
            </h2>
            <p className="mb-6 text-secondaryText leading-loose">
              Ambas as partes se comprometem a manter em sigilo dados
              estratégicos, informações comerciais, códigos, documentos e
              qualquer outro material identificado como confidencial. O dever de
              confidencialidade permanece válido por 5 (cinco) anos após o
              encerramento do Projeto, salvo se a legislação aplicável exigir
              prazo superior.
            </p>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              8. Garantias e Limitação de Responsabilidade
            </h2>
            <ul className="mb-6 text-primaryText">
              <li className="mb-4 flex">
                <span>
                  A Velox Tech garante que as entregas serão realizadas com
                  diligência e qualidade técnica, mas não se responsabiliza por
                  resultados comerciais específicos ou por decisões estratégicas
                  do Cliente.
                </span>
              </li>
              <li className="mb-4 flex">
                <span>
                  Não respondemos por danos indiretos, lucros cessantes ou
                  perdas de oportunidade decorrentes do uso do produto
                  desenvolvido.
                </span>
              </li>
            </ul>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              9. Suspensão e Rescisão
            </h2>
            <p className="mb-6 text-secondaryText leading-loose">
              Qualquer parte poderá rescindir o contrato mediante aviso prévio
              escrito com antecedência mínima de 15 (quinze) dias. Em caso de
              rescisão antecipada, o Cliente deverá arcar com os valores
              referentes às etapas já concluídas ou em andamento, conforme
              relatórios enviados pela Velox Tech.
            </p>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              10. Alterações dos Termos
            </h2>
            <p className="mb-6 text-secondaryText leading-loose">
              Podemos atualizar estes Termos a qualquer momento para refletir
              ajustes legais, operacionais ou estratégicos. Mudanças relevantes
              serão comunicadas ao Cliente pelos canais oficiais antes de
              entrarem em vigor.
            </p>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              11. Lei Aplicável e Foro
            </h2>
            <p className="mb-6 text-secondaryText leading-loose">
              Estes Termos são regidos pelas leis da República Federativa do
              Brasil. Fica eleito o foro da comarca de Curitiba/PR como
              competente para dirimir eventuais controvérsias, salvo disposição
              em contrário no contrato específico.
            </p>

            <h2 className="mt-11 mb-6 text-4xl lg:text-5xl block-title">
              12. Contato
            </h2>
            <p className="mb-10 text-secondaryText leading-loose">
              Dúvidas, solicitações ou notificações devem ser enviadas para{" "}
              <b>contato@veloxtech.com.br</b>.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
