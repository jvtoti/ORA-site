const routes = {
  home: "index.html",
  "quem-somos": "quem-somos.html",
  lideranca: "lideranca.html",
  solucoes: "solucoes.html",
  cfo: "cfo-as-a-service.html",
  melhoria: "melhoria-continua.html",
  sistemas: "sistemas-tecnologia.html",
  tributaria: "revisao-tributaria.html",
  diferenciais: "diferenciais.html",
  blog: "blog.html",
  "blog-post": "blog-post.html",
  contato: "contato.html",
};

const diagnosticUrl = "https://ora-fintech-v2-amber.vercel.app/diagnostico";

const blogPosts = [
  {
    slug: "fluxo-de-caixa-pme",
    category: "Gestão Financeira",
    date: "18 Jun 2026",
    image: "assets/generated/solution-cfo.png",
    title: "Como estruturar um fluxo de caixa confiável para sua empresa",
    excerpt: "O fluxo de caixa é a espinha dorsal da saúde financeira de qualquer empresa. Veja como estruturá-lo com rigor, previsibilidade e rastreabilidade para tomar decisões com confiança.",
    body: [
      "O fluxo de caixa não é apenas um relatório financeiro — é o termômetro diário da saúde da sua empresa. Muitas empresas operam com visibilidade limitada sobre entradas e saídas futuras, o que torna qualquer decisão de investimento ou expansão uma aposta desnecessária.",
      "O primeiro passo para estruturar um fluxo de caixa confiável é separar claramente o caixa operacional do caixa financeiro e do caixa de investimentos. Essa segregação permite entender de onde vem o dinheiro e para onde ele vai, sem confundir resultado com geração de caixa.",
      "Em seguida, é fundamental trabalhar com um rolling forecast — uma projeção móvel de 13 semanas, atualizada semanalmente. Essa prática permite antecipar gargalos de liquidez com tempo suficiente para agir: negociar prazos com fornecedores, acelerar recebíveis ou acionar uma linha de crédito de forma planejada, não emergencial.",
      "Outro ponto crítico é a conciliação bancária diária e o controle rigoroso do ciclo de conversão de caixa — o prazo médio entre o desembolso com fornecedores e o recebimento de clientes. Empresas que dominam esse indicador conseguem crescer com menos capital de giro e menor dependência de crédito caro.",
      "A ORA Advisory apoia empresas na implantação de rotinas financeiras estruturadas, desde o modelo de fluxo de caixa até a governança de aprovação de pagamentos e gestão ativa de liquidez. O resultado é uma operação financeira que sustenta o crescimento em vez de freiá-lo.",
    ],
  },
  {
    slug: "cfo-as-a-service",
    category: "Governança",
    date: "10 Jun 2026",
    image: "assets/generated/hero-governance.png",
    title: "CFO as a Service: quando contratar e o que esperar",
    excerpt: "Empresas já não precisam esperar crescer para ter gestão financeira de nível C-Level. Entenda como funciona, quando faz sentido e quais resultados esperar.",
    body: [
      "Durante muito tempo, ter um CFO — Chief Financial Officer — era privilégio de grandes corporações. O custo de um executivo sênior em tempo integral, somado aos encargos e benefícios, tornava essa estrutura inacessível para a maioria das empresas. O modelo CFO as a Service mudou essa equação.",
      "No formato sob demanda, a empresa acessa expertise de nível C-Level de forma fracionada: o profissional atua com dedicação parcial, mas com a mesma profundidade técnica e visão estratégica de um executivo em tempo integral. O custo é uma fração do equivalente CLT, com flexibilidade de escopo e duração.",
      "Quando faz sentido contratar? O gatilho mais comum é a percepção de que o financeiro deixou de ser fonte de informação confiável para virar um gargalo operacional. Outros sinais: dificuldade em captar crédito, ausência de DRE gerencial, caixa volátil sem explicação clara, ou um processo de valuation e captação que a empresa não consegue conduzir internamente.",
      "O que esperar nos primeiros 90 dias: diagnóstico completo do estado financeiro, identificação dos principais riscos e oportunidades, estruturação do modelo de reporte executivo e priorização das iniciativas de maior impacto. A partir daí, o trabalho evolui para execução — não apenas recomendação.",
      "A ORA Advisory atua nesse modelo com foco em resultados mensuráveis: redução do custo de capital, melhoria de margem, estruturação de governança e suporte a decisões estratégicas do board. Cada engajamento começa com um diagnóstico honesto do cenário atual.",
    ],
  },
  {
    slug: "reforma-tributaria-2026",
    category: "Tributário",
    date: "02 Jun 2026",
    image: "assets/generated/solution-tax.png",
    title: "Reforma tributária: o que muda para as empresas em 2026",
    excerpt: "As mudanças no sistema tributário brasileiro exigem atenção imediata. Entenda os impactos práticos sobre regime de apuração, créditos e obrigações acessórias.",
    body: [
      "A reforma tributária brasileira representa a maior mudança no sistema de impostos do país em décadas. Para as empresas, o período de transição exige atenção redobrada: as regras antigas e as novas coexistem, e erros de interpretação podem gerar passivos significativos.",
      "Um dos impactos mais relevantes para as empresas é a unificação de tributos sobre consumo no IBS e na CBS, substituindo progressivamente PIS, COFINS, IPI, ICMS e ISS. A lógica de não cumulatividade muda, e com ela a forma de apurar e aproveitar créditos tributários.",
      "Empresas que operam no Simples Nacional precisam avaliar se a permanência no regime ainda é vantajosa, considerando as novas alíquotas e a possibilidade de aproveitamento de créditos no sistema amplo. Em muitos casos, a migração para Lucro Presumido ou Lucro Real pode gerar economia relevante.",
      "Além das mudanças estruturais, as obrigações acessórias também evoluem. O SPED fiscal, a EFD-Contribuições e os demais arquivos digitais passarão por adaptações. Empresas com parametrização incorreta no ERP correm risco de inconsistências que geram autuações automáticas.",
      "A ORA Advisory realiza diagnósticos tributários completos, identificando oportunidades de recuperação de créditos e adequando a estrutura fiscal da empresa ao novo cenário regulatório. A atuação preventiva hoje evita contingências custosas amanhã.",
    ],
  },
  {
    slug: "como-escolher-erp",
    category: "Tecnologia",
    date: "24 Mai 2026",
    image: "assets/generated/solution-tech.png",
    title: "ERP: como escolher o sistema certo para a sua empresa",
    excerpt: "SAP, TOTVS, Oracle ou Omie? A escolha do ERP impacta toda a operação. Veja os critérios que realmente importam — e os erros mais comuns no processo de seleção.",
    body: [
      "A escolha de um ERP é uma das decisões mais impactantes que uma empresa pode tomar. Um sistema bem escolhido e bem implantado aumenta a eficiência, melhora a visibilidade financeira e sustenta o crescimento. Um sistema mal escolhido — ou bem escolhido, mas mal implantado — paralisa a operação e gera custos que se arrastam por anos.",
      "O primeiro erro no processo de seleção é começar pelos fornecedores em vez de começar pelos requisitos. Antes de avaliar qualquer solução, é preciso mapear os processos atuais, identificar os gaps críticos e definir quais módulos são essenciais versus desejáveis. Esse trabalho de RFP (Request for Proposal) estruturado é o que diferencia uma escolha técnica de uma escolha comercial.",
      "Para empresas em crescimento, o mercado oferece opções em diferentes faixas de maturidade e custo. Soluções como Omie e Bling atendem bem operações mais simples, com baixo custo de implantação. TOTVS Protheus e SAP Business One são adequados para empresas com operações mais complexas, especialmente em indústria e distribuição. SAP S/4HANA e Oracle Fusion ficam reservados para grandes corporações.",
      "Além da escolha do sistema, o sucesso da implantação depende de três fatores: um PMO dedicado que controle cronograma e riscos, parametrização correta dos módulos financeiros e fiscais desde o início, e um plano de treinamento que garanta adoção real pelos usuários-chave.",
      "A ORA Advisory conduz processos completos de seleção e implantação de ERP, desde o mapeamento de requisitos até o go-live e suporte pós-implantação. Nossa atuação é independente de fornecedores — o que garante que a recomendação seja baseada nas necessidades reais da empresa.",
    ],
  },
  {
    slug: "lean-financeiro",
    category: "Melhoria Contínua",
    date: "15 Mai 2026",
    image: "assets/generated/solution-process.png",
    title: "Lean nas finanças: como eliminar desperdícios no back-office",
    excerpt: "Metodologias Lean não são exclusividade da produção. Aplicadas ao financeiro e operacional, geram eficiência mensurável, redução de retrabalho e processos mais previsíveis.",
    body: [
      "O Lean Manufacturing nasceu no chão de fábrica, mas seus princípios se aplicam com igual eficácia ao back-office financeiro. Retrabalho, aprovações redundantes, conciliações manuais, relatórios gerados em planilhas — tudo isso é desperdício mensurável que consome tempo, gera erros e impede a equipe de focar no que realmente importa.",
      "O primeiro passo é o mapeamento do fluxo de valor (Value Stream Mapping) dos processos financeiros críticos: contas a pagar, contas a receber, fechamento contábil e geração de relatórios gerenciais. Esse mapeamento revela, de forma visual, onde estão os gargalos, as esperas e as atividades que não agregam valor.",
      "Um dos ganhos mais expressivos costuma vir na redução do tempo de fechamento mensal. Empresas que levam 15 a 20 dias para fechar o mês perdem 50% ou mais do período útil operando com informações desatualizadas. Com redesenho de processo e automação de rotinas repetitivas, esse prazo pode cair para 3 a 5 dias úteis.",
      "A automação via RPA (Robotic Process Automation) complementa o Lean ao eliminar tarefas repetitivas de baixo valor: conciliações bancárias automáticas, geração de boletos, importação de notas fiscais, envio de cobranças. O resultado é uma equipe financeira menor, mais qualificada e focada em análise em vez de digitação.",
      "A ORA Advisory estrutura projetos de melhoria contínua com metodologia clara: diagnóstico do estado atual, desenho do estado futuro, implementação faseada com gestão de mudança e consolidação por meio de indicadores e POPs. O objetivo não é apenas melhorar uma vez — é criar uma cultura de melhoria permanente.",
    ],
  },
  {
    slug: "indicadores-financeiros-ceo",
    category: "Governança",
    date: "06 Mai 2026",
    image: "assets/generated/hero-governance.png",
    title: "Indicadores financeiros que todo CEO deveria acompanhar",
    excerpt: "Margem, liquidez, ciclo de caixa, EBITDA ajustado. Saiba quais KPIs realmente importam para decisões estratégicas e como construir um dashboard executivo eficiente.",
    body: [
      "Um CEO que não domina os indicadores financeiros da própria empresa toma decisões no escuro. Não é necessário ser contador ou ter formação em finanças — mas é essencial entender o significado e as implicações de alguns KPIs fundamentais que revelam a saúde real do negócio.",
      "O primeiro bloco é o de rentabilidade: margem bruta, margem EBITDA e margem líquida. A margem bruta revela a eficiência do produto ou serviço. O EBITDA ajustado mostra a geração de caixa operacional antes de efeitos financeiros e contábeis. A margem líquida fecha o ciclo, revelando quanto sobra após todos os custos, despesas e impostos.",
      "O segundo bloco é o de liquidez e endividamento: liquidez corrente, dívida líquida sobre EBITDA e cobertura de juros. Esses indicadores mostram se a empresa consegue honrar seus compromissos no curto prazo e se o nível de alavancagem está dentro de um patamar sustentável para o setor.",
      "O terceiro bloco é o de eficiência operacional: prazo médio de recebimento, prazo médio de pagamento, giro de estoque e ciclo de conversão de caixa. Esses números revelam quanto tempo o dinheiro fica 'preso' no ciclo operacional — e onde estão as oportunidades de liberar capital de giro sem precisar de crédito adicional.",
      "Um dashboard executivo eficiente não precisa ter dezenas de indicadores. Cinco a oito KPIs bem escolhidos, atualizados com frequência e apresentados em formato visual claro são mais úteis do que relatórios complexos que ninguém lê. A ORA Advisory ajuda a definir quais indicadores fazem sentido para cada modelo de negócio e a construir o processo de reporte executivo que suporta decisões de board.",
    ],
  },
];

const oraAcademyUrl = "https://ebook.oraadvisory.com.br/";

const solutions = [
  {
    key: "cfo",
    number: "01",
    title: "CFO as a Service",
    href: routes.cfo,
    short: "Governança financeira C-Level, estruturação de capital e gestão estratégica de caixa.",
    image: "assets/generated/solution-cfo.png",
    eyebrow: "CFO as a Service & Finanças Corporativas",
    headline: "Transformamos o financeiro em núcleo de inteligência estratégica.",
    lead: "Fornecemos expertise executiva sênior sob demanda, elevando a maturidade financeira da empresa e apoiando o board com disciplina, dados e visão de alocação de capital.",
    quote: "Transformamos o departamento financeiro de um centro de registro em um núcleo de inteligência estratégica e geração de valor.",
    items: [
      ["Fluxo de Caixa e Liquidez", "Ciclo de conversão de caixa, rolling forecast e gestão ativa de capital de giro."],
      ["Estruturação e Captação de Capital", "Otimização de dívida, pitch decks, data rooms e intermediação com investidores."],
      ["Viabilidade e Modelagem Econômica", "Rentabilidade por produto, precificação estratégica e valuation de projetos."],
      ["Report Executivo e KPIs", "Dashboards executivos, DRE gerencial e indicadores de liquidez e endividamento."],
    ],
  },
  {
    key: "melhoria",
    number: "02",
    title: "Melhoria Contínua",
    href: routes.melhoria,
    short: "Otimização de processos, redução de desperdícios e automação com RPA.",
    image: "assets/generated/solution-process.png",
    eyebrow: "Gerenciamento de Projetos de Melhoria Contínua",
    headline: "Processos complexos viram fluxos enxutos, mensuráveis e sustentáveis.",
    lead: "Impulsionamos eficiência operacional com identificação sistemática de gargalos, redesenho de rotinas e consolidação de novas práticas.",
    quote: "Eficiência real nasce quando processo, indicador e comportamento caminham juntos.",
    items: [
      ["Mapeamento e Redesenho", "Diagnóstico do estado atual e desenho do estado futuro otimizado, alinhado à estratégia."],
      ["Redução de Desperdícios", "Metodologias Lean para eliminar atividades que não agregam valor e aumentar rentabilidade."],
      ["Eficiência e Padronização", "POPs e KPIs para consistência, qualidade e previsibilidade na execução."],
      ["Gestão de Mudança", "Transição estruturada, engajamento de stakeholders e consolidação de novas práticas."],
      ["Automação de Processos", "Automações inteligentes para eliminar tarefas repetitivas e reduzir erros operacionais."],
    ],
  },
  {
    key: "sistemas",
    number: "03",
    title: "Sistemas & Tecnologia",
    href: routes.sistemas,
    short: "Implementação de ERPs, integração de sistemas e revitalização tecnológica.",
    image: "assets/generated/solution-tech.png",
    eyebrow: "Sistemas & Tecnologia",
    headline: "A infraestrutura tecnológica passa a sustentar a estratégia do negócio.",
    lead: "Lideramos a transformação digital do back-office financeiro e operacional, conectando sistemas, dados, governança e decisão.",
    quote: "Tecnologia só gera valor quando conversa com o processo e com a gestão.",
    items: [
      ["Seleção e RFP", "Aderência, requisitos e condução da escolha do ERP ideal."],
      ["Gestão de Projeto", "PMO dedicado com cronograma, riscos e entregas controladas."],
      ["Parametrização", "Módulos financeiros, contábeis e fiscais em ambientes como SAP, Oracle e TOTVS."],
      ["Treinamento e Go-Live", "Capacitação de usuários-chave e suporte na entrada em produção."],
      ["Integração e BI", "ERPs, CRMs, e-commerce, legados via APIs e dashboards automatizados."],
      ["Governança de TI", "Controle, segurança da informação e compliance tecnológico."],
    ],
  },
  {
    key: "tributaria",
    number: "04",
    title: "Revisão Tributária",
    href: routes.tributaria,
    short: "Análise de carga tributária, recuperação de créditos e planejamento fiscal.",
    image: "assets/generated/solution-tax.png",
    eyebrow: "Revisão Tributária & Compliance Fiscal",
    headline: "Economia fiscal legítima, recuperação de créditos e mitigação de riscos.",
    lead: "Realizamos análise profunda e sistemática da carga tributária, identificando oportunidades e adequando a operação às mudanças da legislação brasileira.",
    quote: "Pagar corretamente é tão estratégico quanto vender mais.",
    items: [
      ["Diagnóstico Tributário Completo", "Análise dos últimos 5 anos de recolhimentos e identificação de pagamentos indevidos."],
      ["Recuperação de Créditos", "Habilitação de créditos de PIS/COFINS, ICMS-ST e IPI pagos a maior."],
      ["Planejamento Tributário Estratégico", "Reestruturação societária e operacional para otimização da carga fiscal."],
      ["Compliance e Obrigações Acessórias", "Revisão de SPED, ECD e ECF para mitigar riscos de autuação."],
      ["Defesa Administrativa e Contencioso", "Suporte técnico em processos administrativos e assistência pericial tributária."],
    ],
  },
];

const mainNav = [
  ["Início", routes.home, "home"],
  ["Quem Somos", routes["quem-somos"], "quem-somos"],
  ["Liderança", routes.lideranca, "lideranca"],
  ["Diferenciais", routes.diferenciais, "diferenciais"],
  ["Contato", routes.contato, "contato"],
];

const pageTitles = {
  home: "ORA Advisory | Governança e valor estratégico",
  "quem-somos": "Quem Somos | ORA Advisory",
  lideranca: "Liderança | ORA Advisory",
  solucoes: "Soluções | ORA Advisory",
  cfo: "CFO as a Service | ORA Advisory",
  melhoria: "Melhoria Contínua | ORA Advisory",
  sistemas: "Sistemas & Tecnologia | ORA Advisory",
  tributaria: "Revisão Tributária | ORA Advisory",
  diferenciais: "Diferenciais | ORA Advisory",
  blog: "Blog | ORA Advisory",
  "blog-post": "Artigo | ORA Advisory",
  contato: "Contato | ORA Advisory",
};

const values = [
  ["01", "Rigor analítico", "Toda recomendação nasce de dados e análise; profundidade é inegociável."],
  ["02", "Verdade acima de tudo", "Dizemos ao cliente o que ele precisa ouvir, não o que gostaria."],
  ["03", "Independência", "Conclusões a serviço do cliente, livres de vínculos ou agendas externas."],
  ["04", "Cliente no centro", "Atendimento com respeito e excelência, honrando a confiança depositada."],
  ["05", "Compromisso com resultado", "Existimos para gerar valor mensurável, com incentivos alinhados."],
  ["06", "Integridade", "Ética e responsabilidade em cada entrega e relação."],
];

const leadershipSkills = [
  "CFO as a Service e Governança C-Level",
  "Estruturação de Capital e Captação",
  "Modelagem Econômica e Valuation",
  "Turnaround e Otimização de Caixa",
  "Auditoria Forense e Prevenção a Fraudes",
  "Revisão Tributária e Gestão de Passivos",
  "Assistência Técnica em Litígios",
  "Compliance e Inteligência de Riscos",
];

const differentials = [
  ["Expertise C-Level", "Atuação sênior para decisões de board, estrutura de capital, governança e performance."],
  ["Parceria Estratégica", "Presença próxima da gestão, com leitura do negócio e responsabilidade sobre execução."],
  ["Foco em Resultados", "Entregas conectadas a valor mensurável, caixa, margem, eficiência e redução de risco."],
  ["Soluções Sob Medida", "Diagnóstico e desenho de trabalho de acordo com maturidade, urgência e complexidade."],
  ["Confidencialidade Total", "Tratamento discreto de dados, decisões sensíveis, passivos e informações estratégicas."],
  ["Velocidade de Entrega", "Ritmo executivo para sair do diagnóstico e chegar a decisões acionáveis."],
];

function header(active) {
  const solutionActive = solutions.some((item) => item.key === active) || active === "solucoes";
  const primaryLinks = mainNav
    .filter(([, , key]) => ["home", "quem-somos"].includes(key))
    .map(([label, href, key]) => `<a class="nav-link ${active === key ? "is-active" : ""}" href="${href}">${label}</a>`)
    .join("");
  const solutionLinks = solutions
    .map((item) => `<a href="${item.href}"><strong>${item.title}</strong><span>${item.short}</span></a>`)
    .join("");
  const mobileLinks = [
    ["Início", routes.home],
    ["Quem Somos", routes["quem-somos"]],
    ["Soluções", routes.solucoes],
    ...solutions.map((item) => [`- ${item.title}`, item.href]),
    ["Blog", routes.blog],
    ["ORA Academy", oraAcademyUrl],
    ...(active === "home" ? [["Iniciar Diagnóstico", diagnosticUrl]] : []),
    ["Contato", routes.contato],
  ]
    .map(([label, href]) => `<a href="${href}">${label}</a>`)
    .join("");

  return `
    <header class="site-header">
      <div class="nav-wrap">
        <a class="brand" href="${routes.home}" aria-label="ORA Advisory">
          <img src="assets/logo-white.png" alt="ORA Advisory">
        </a>
        <nav class="desktop-nav" aria-label="Navegação principal">
          ${primaryLinks}
          <div class="dropdown">
            <button class="dropdown-trigger ${solutionActive ? "is-active" : ""}" type="button">Soluções</button>
            <div class="dropdown-panel">
              <a href="${routes.solucoes}"><strong>Visão geral</strong><span>Conheça todas as frentes de atuação.</span></a>
              ${solutionLinks}
            </div>
          </div>
          <a class="nav-link ${active === "blog" ? "is-active" : ""}" href="${routes.blog}">Blog</a>
          <a class="nav-link" href="${oraAcademyUrl}" target="_blank" rel="noreferrer">ORA Academy</a>
          <a class="nav-link ${active === "contato" ? "is-active" : ""}" href="${routes.contato}">Contato</a>
        </nav>
        ${
          active === "home"
            ? `<div class="home-diagnostic-cta" aria-label="Diagnóstico gratuito">
                <span class="diagnostic-meta"><span aria-hidden="true"></span>Gratuito · 3 minutos</span>
                <a class="diagnostic-button" href="${diagnosticUrl}">Iniciar Diagnóstico</a>
              </div>`
            : `<a class="nav-cta" href="${routes.contato}">Vamos conversar</a>`
        }
        <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false"><span></span></button>
      </div>
      <nav class="mobile-menu" aria-label="Menu mobile">${mobileLinks}</nav>
    </header>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <img class="footer-logo" src="assets/logo-white.png" alt="ORA Advisory">
          <p>Governança financeira, tecnologia e valor estratégico para empresas.</p>
        </div>
        <nav class="footer-links" aria-label="Links do rodapé">
          <a href="${routes["quem-somos"]}">Quem Somos</a>
          <a href="${routes.lideranca}">Liderança</a>
          <a href="${routes.solucoes}">Soluções</a>
          <a href="${routes.diferenciais}">Diferenciais</a>
          <a href="${routes.contato}">Contato</a>
        </nav>
        <div class="footer-contact">
          <a href="mailto:ora@oraadvisory.com.br">ora@oraadvisory.com.br</a>
          <a href="https://wa.me/5519999642620" target="_blank" rel="noreferrer">(19) 99964-2620</a>
          <a href="https://www.instagram.com/ora_advisory" target="_blank" rel="noreferrer">@ora_advisory</a>
        </div>
      </div>
      <div class="container footer-bottom">© 2026 ORA Advisory. Todos os direitos reservados.</div>
    </footer>
  `;
}

function eyebrow(text) {
  if (!text) return "";
  return `<p class="eyebrow">${text}</p>`;
}

function pageHero({ section, title, lead, image, compact = false }) {
  return `
    <section class="page-hero ${compact ? "compact" : ""}">
      <div class="hero-bg" aria-hidden="true">
        ${image ? `<img src="${image}" alt="">` : ""}
        <div class="hero-mark"></div>
      </div>
      <div class="container hero-grid">
        <div class="hero-copy">
          ${eyebrow(section)}
          <h1>${title}</h1>
          <p>${lead}</p>
        </div>
      </div>
    </section>
  `;
}

function sectionHead(kicker, title, lead, center = false) {
  return `
    <div class="section-head ${center ? "center" : ""}">
      ${eyebrow(kicker)}
      <h2>${title}</h2>
      ${lead ? `<p>${lead}</p>` : ""}
    </div>
  `;
}

function cta(title = "Vamos conversar?", text = "Uma conversa para entender o cenário e apontar o que precisa mudar primeiro.") {
  return `
    <section class="cta-section">
      <div class="container cta-box">
        <div>
          ${eyebrow("Contato")}
          <h2>${title}</h2>
          <p>${text}</p>
        </div>
        <a class="button light" href="${routes.contato}">Fale com a ORA</a>
      </div>
    </section>
  `;
}

function solutionCard(item) {
  return `
    <article class="solution-card">
      <a href="${item.href}">
        <span>${item.number}</span>
        <h3>${item.title}</h3>
        <p>${item.short}</p>
      </a>
    </article>
  `;
}

function homePage() {
  return `
    <section class="home-hero">
      <div class="home-media" aria-hidden="true">
        <img src="assets/generated/hero-governance.png" alt="">
        <div class="home-overlay"></div>
      </div>
      <div class="container home-content">
        <h1>Governança<br><span>e valor estratégico</span></h1>
        <p>Democratizamos a gestão financeira de alto nível, dando às empresas condições para crescer com controle, autonomia e decisões baseadas em dados.</p>
        <div class="hero-actions">
          <a class="button primary" href="${routes.solucoes}">Conheça as soluções</a>
          <a class="button ghost" href="${routes.contato}">Vamos conversar</a>
        </div>
      </div>
    </section>

    <section class="section tech-power-section">
      <div class="container tech-power-box">
        <h2>O poder da tecnologia nas finanças da sua empresa</h2>
        <p>Tomar decisões estratégicas exige <strong>clareza total dos números</strong>. Mas como transformar dados complexos em insights acionáveis, sem perder tempo?</p>
        <div class="tech-pill-row" aria-label="Pilares ORA">
          <span>Processos</span>
          <span>Pessoas</span>
          <span>Tecnologia</span>
        </div>
      </div>
    </section>

    <section class="section brand-proof-section">
      <div class="container brand-proof-box">
        <p>Marcas, cases e empresas atendidas pela ORA são compartilhados mediante solicitação e autorização.</p>
        <div class="brand-carousel" aria-label="Marcas e cases sob autorização">
          <div class="brand-track">
            <span>Governança</span>
            <span>Indústria</span>
            <span>Serviços</span>
            <span>Varejo</span>
            <span>Tecnologia</span>
            <span>Saúde</span>
            <span>Educação</span>
            <span>Back-office</span>
            <span>Governança</span>
            <span>Indústria</span>
            <span>Serviços</span>
            <span>Varejo</span>
            <span>Tecnologia</span>
            <span>Saúde</span>
            <span>Educação</span>
            <span>Back-office</span>
          </div>
        </div>
        <a class="button primary" href="${routes.contato}">Quero mais informações</a>
      </div>
    </section>

    <section class="section product-tabs-section">
      <div class="container product-tabs-box">
        <div class="product-tabs-head">
          <h2>Conheça as frentes que levam inteligência financeira para a rotina da empresa.</h2>
          <p>Educação executiva e tecnologia aplicada para transformar gestão em controle, autonomia e decisão.</p>
        </div>
        <div class="product-tab-controls" role="tablist" aria-label="Frentes ORA">
          <button class="is-active" type="button" data-product-tab="academy" role="tab" aria-selected="true">ORA Academy</button>
          <button type="button" data-product-tab="fintech" role="tab" aria-selected="false">ORA Fintech</button>
        </div>
        <div class="product-tab-panel is-active" data-product-panel="academy" role="tabpanel">
          <div>
            <span>ORA Academy</span>
            <h3>Formação prática para empresários e profissionais financeiros.</h3>
            <p>Conteúdos e treinamentos para quem quer dominar gestão financeira estratégica, indicadores, governança e rotina de decisão.</p>
            <a class="button primary" href="${oraAcademyUrl}" target="_blank" rel="noreferrer">Conhecer o ORA Academy</a>
          </div>
          <div class="product-visual academy-visual" aria-hidden="true">
            <div class="mock-window">
              <span></span><span></span><span></span>
            </div>
            <div class="mock-lines">
              <strong>Academy</strong>
              <i></i><i></i><i></i>
            </div>
          </div>
        </div>
        <div class="product-tab-panel" data-product-panel="fintech" role="tabpanel" hidden>
          <div>
            <span>ORA Fintech</span>
            <h3>Produto financeiro e tecnológico em desenvolvimento.</h3>
            <p>Uma frente pensada para ampliar inteligência, automação e acompanhamento financeiro em tempo real.</p>
            <button class="button muted" type="button" disabled>Em breve</button>
          </div>
          <div class="product-visual fintech-visual" aria-hidden="true">
            <div class="mock-dashboard">
              <i></i><i></i><i></i><i></i>
            </div>
            <div class="mock-status">Em breve</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section regions-section">
      <div class="container regions-grid">
        <div>
          <h2>Regiões que a ORA já atende.</h2>
          <p>Atuamos com empresas de diferentes mercados e níveis de maturidade, levando governança financeira, tecnologia e controle para operações em várias regiões do Brasil.</p>
          <div class="region-tags" aria-label="Estados atendidos">
            <span>Maranhão</span>
            <span>São Paulo</span>
            <span>Santa Catarina</span>
            <span>Mato Grosso</span>
            <span>Goiás</span>
            <span>Rio de Janeiro</span>
            <span>Pernambuco</span>
            <span>Rio Grande do Sul</span>
          </div>
        </div>
        <div class="brazil-map-card">
          <img src="assets/generated/brazil-regions-map.png" alt="Mapa do Brasil com regiões atendidas pela ORA destacadas">
        </div>
      </div>
    </section>

    <section class="section light-section">
      <div class="container">
        ${sectionHead("", "Quatro frentes para elevar a maturidade de gestão.", "Consultoria, tecnologia, processos e revisão fiscal trabalhando como uma estrutura única de valor.", true)}
        <div class="solution-grid">${solutions.map(solutionCard).join("")}</div>
      </div>
    </section>

    <section class="section client-pains-section">
      <div class="container client-pains-box">
        <div class="pain-intro">
          <h2>7 em cada 10 empresas tomam decisões financeiras sem dados confiáveis</h2>
        </div>
        <div class="pain-grid" aria-label="Dores dos clientes">
          <article><span aria-hidden="true"></span><p>Erro de parametrização no ERP</p></article>
          <article><span aria-hidden="true"></span><p>Ineficiência fiscal devido à falta de planejamento tributário</p></article>
          <article><span aria-hidden="true"></span><p>Retenções indevidas nunca compensadas</p></article>
          <article><span aria-hidden="true"></span><p>Escolha de regime tributário inadequado</p></article>
          <article><span aria-hidden="true"></span><p>Diferenças entre fiscal e contábil mascarando margens</p></article>
          <article><span aria-hidden="true"></span><p>Créditos válidos prescrevendo silenciosamente</p></article>
          <article><span aria-hidden="true"></span><p>Decisões tomadas sem trilha de auditoria</p></article>
          <article><span aria-hidden="true"></span><p>Falhas na gestão tributária do negócio</p></article>
        </div>
        <div class="pain-explanation">
          <p>A ORA Advisory atua exatamente nesse ponto cego: estruturamos a gestão financeira, tributária e operacional da sua empresa para que as decisões deixem de ser baseadas em intuição e passem a ser sustentadas por dados reais, processos confiáveis e visão estratégica de quem já viveu esses desafios de dentro.</p>
          <a class="button primary" href="${routes.contato}">Quero estruturar minha gestão</a>
        </div>
      </div>
    </section>

    <section class="section testimonials-section">
      <div class="container testimonials-box">
        <h2>Clientes satisfeitos, negócios transformados</h2>
        <div class="testimonial-grid" aria-label="Depoimentos">
          <article>
            <span aria-hidden="true">“</span>
            <p>Depoimento disponível mediante autorização do cliente. A ORA preserva confidencialidade, dados estratégicos e informações sensíveis de cada operação.</p>
            <strong>Cliente ORA</strong>
            <small>Gestão financeira e governança</small>
          </article>
          <article>
            <span aria-hidden="true">“</span>
            <p>Cases detalhados podem ser apresentados em conversa com Carlos, com contexto, escopo, desafios enfrentados e resultados obtidos em cada frente de atuação.</p>
            <strong>Case sob autorização</strong>
            <small>CFO as a Service e tecnologia</small>
          </article>
          <article>
            <span aria-hidden="true">“</span>
            <p>A ORA atua em cenários que exigem discrição, profundidade técnica e leitura executiva. Por isso, depoimentos públicos dependem de aprovação prévia.</p>
            <strong>Depoimento reservado</strong>
            <small>Tributário, processos e sistemas</small>
          </article>
        </div>
        <p class="testimonial-caption">Depoimentos</p>
      </div>
    </section>

    <section class="section leadership-preview">
      <div class="container leadership-grid">
        <div class="leadership-media leadership-symbol">
          <img src="assets/logo-clean.png" alt="ORA Advisory">
        </div>
        <div>
          <h2>Expertise sênior em finanças corporativas, governança estratégica e compliance.</h2>
          <p>Combinamos reestruturação financeira, modelagem econômica, auditoria forense e transformação operacional para apoiar decisões críticas com profundidade técnica.</p>
          <a class="text-link" href="${routes.lideranca}">Conheça a liderança</a>
        </div>
      </div>
    </section>

    <section class="section dark-section">
      <div class="container">
        ${sectionHead("", "Por que a ORA Advisory?", "Atuação independente, executiva e orientada a valor mensurável.", true)}
        <div class="differential-grid">${differentials.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
      </div>
    </section>
    <section class="section final-form-section">
      <div class="final-form-media" aria-hidden="true">
        <img src="assets/generated/hero-governance.png" alt="">
      </div>
      <div class="container final-form-grid">
        <div class="final-form-copy">
          <h2>Fale com um especialista.</h2>
          <p>Preencha suas informações para receber uma proposta personalizada.</p>
        </div>
        <form class="final-lead-form" id="home-lead-form">
          <p>Responda o formulário abaixo, que a nossa equipe entrará em contato.</p>
          <div class="form-grid">
            <label>Nome*<input name="nome" type="text" placeholder="Nome e sobrenome" autocomplete="name" required></label>
            <label>WhatsApp*<input name="whatsapp" type="tel" placeholder="(DDD) 99999-9999" autocomplete="tel" required></label>
            <label>E-mail*<input name="email" type="email" placeholder="nome@email.com" autocomplete="email" required></label>
            <label>Nome da Empresa<input name="empresa" type="text" placeholder="Nome da Empresa" autocomplete="organization"></label>
            <label>Cargo*
              <select name="cargo" required>
                <option value="">Selecione</option>
                <option>CEO / Sócio</option>
                <option>Diretor financeiro</option>
                <option>Gestor financeiro</option>
                <option>Contador / Fiscal</option>
                <option>Outro</option>
              </select>
            </label>
            <label>Setor*
              <select name="setor" required>
                <option value="">Selecione</option>
                <option>Indústria</option>
                <option>Serviços</option>
                <option>Varejo</option>
                <option>Tecnologia</option>
                <option>Saúde</option>
                <option>Educação</option>
                <option>Outro</option>
              </select>
            </label>
            <label>Qual ERP sua empresa utiliza?*
              <select name="erp" required>
                <option value="">Selecione</option>
                <option>TOTVS</option>
                <option>SAP</option>
                <option>Oracle</option>
                <option>Omie</option>
                <option>Bling</option>
                <option>Planilhas</option>
                <option>Outro</option>
              </select>
            </label>
            <label>Faixa de faturamento mensal*
              <select name="faturamento" required>
                <option value="">Selecione</option>
                <option>Até R$ 500 mil</option>
                <option>R$ 500 mil a R$ 1 milhão</option>
                <option>R$ 1 milhão a R$ 5 milhões</option>
                <option>Acima de R$ 5 milhões</option>
              </select>
            </label>
          </div>
          <label class="checkbox-line">
            <input name="consentimento" type="checkbox" required>
            <span>Concordo em receber propostas, informações e atendimento comercial da ORA Advisory pelo WhatsApp.</span>
          </label>
          <button class="button primary" type="submit">Enviar</button>
        </form>
      </div>
    </section>
  `;
}

function aboutPage() {
  return `
    ${pageHero({
      section: "",
      title: "Propósito, Missão e Visão",
      lead: "A ORA nasce para elevar o padrão de gestão das empresas, unindo consultoria financeira C-Level e ferramentas aplicadas à rotina do negócio.",
      image: "assets/generated/hero-governance.png",
      compact: true,
    })}
    <section class="section light-section">
      <div class="container direction-grid">
        <article>
          <span>Propósito</span>
          <h2>Democratizar a gestão financeira de alto nível.</h2>
          <p>Dar às empresas as condições para crescer com controle, autonomia e decisões baseadas em dados.</p>
        </article>
        <article>
          <span>Missão</span>
          <h2>Transformar realidade, status de gestão e governança.</h2>
          <p>Oferecer serviços e produtos que unem consultoria, CFO as a Service e ferramentas como ERP/SaaS.</p>
        </article>
        <article>
          <span>Visão</span>
          <h2>10.000 empresas até 2030.</h2>
          <p>Levar gestão financeira estruturada para empresas que precisam decidir melhor e crescer com controle.</p>
        </article>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${sectionHead("", "Nossos Valores", "Princípios que orientam cada recomendação, entrega e relação.", true)}
        <div class="values-grid">
          ${values.map(([number, title, text]) => `<article><span>${number}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </div>
    </section>
    ${cta("Quer entender como esses princípios se aplicam à sua empresa?")}
  `;
}

function leadershipPage() {
  return `
    ${pageHero({
      section: "",
      title: "Liderança com visão de finanças corporativas, governança e compliance.",
      lead: "Expertise sênior consolidada em empresas nacionais, multinacionais e organizações listadas em bolsa.",
      image: "assets/generated/solution-cfo.png",
      compact: true,
    })}
    <section class="section">
      <div class="container split-grid">
        <div>
          ${sectionHead("", "Transformação operacional com profundidade técnica.", "A ORA combina reestruturação financeira, modelagem econômica e auditoria forense com visão prática para decisões complexas.")}
        </div>
        <div class="executive-card">
          <span>C-Level</span>
          <h2>Governança para decisões que não podem depender de improviso.</h2>
          <p>O papel da liderança é transformar dados em leitura estratégica e leitura estratégica em ação.</p>
        </div>
      </div>
    </section>
    <section class="section light-section">
      <div class="container">
        ${sectionHead("", "O que sustenta a atuação da ORA", "", true)}
        <div class="skill-grid">${leadershipSkills.map((item) => `<article>${item}</article>`).join("")}</div>
      </div>
    </section>
    ${cta("Leve uma visão financeira sênior para a mesa de decisão.")}
  `;
}

function solutionsPage() {
  return `
    ${pageHero({
      section: "",
      title: "Soluções para elevar controle, governança e valor estratégico.",
      lead: "Cada frente pode atuar de forma independente ou integrada, de acordo com a maturidade e urgência da empresa.",
      image: "assets/generated/hero-governance.png",
      compact: true,
    })}
    <section class="section light-section">
      <div class="container">
        <div class="solution-feature-grid">
          ${solutions.map((item) => `
            <article class="solution-feature">
              <img src="${item.image}" alt="">
              <div>
                <span>${item.number}</span>
                <h2>${item.title}</h2>
                <p>${item.short}</p>
                <a class="text-link" href="${item.href}">Ver solução</a>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
    ${cta("Não sabe qual frente vem primeiro?", "A ORA faz o diagnóstico e prioriza impacto financeiro, urgência e complexidade.")}
  `;
}

function solutionPage(key) {
  const item = solutions.find((solution) => solution.key === key);
  return `
    ${pageHero({
      section: "",
      title: item.headline,
      lead: item.lead,
      image: item.image,
      compact: true,
    })}
    <section class="section">
      <div class="container quote-grid">
        <div class="quote-card"><p>${item.quote}</p></div>
        <div>
          ${sectionHead("", "O que está incluído", "A frente é desenhada para produzir leitura, controle e ação, não apenas relatório.")}
        </div>
      </div>
    </section>
    <section class="section light-section">
      <div class="container">
        <div class="service-grid">
          ${item.items.map(([title, text], index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </div>
    </section>
    <section class="section next-section">
      <div class="container next-grid">
        <div>
          ${sectionHead("", "Diagnóstico antes de escopo.", "Entendemos cenário, urgências e riscos para definir a forma certa de atuação.")}
        </div>
        <a class="button primary" href="${routes.contato}">Fale com um especialista</a>
      </div>
    </section>
  `;
}

function differentialsPage() {
  return `
    ${pageHero({
      section: "",
      title: "Por que a ORA Advisory?",
      lead: "O diferencial está na combinação entre independência, profundidade técnica, visão executiva e compromisso com resultado mensurável.",
      image: "assets/generated/hero-governance.png",
      compact: true,
    })}
    <section class="section light-section">
      <div class="container">
        <div class="differential-grid expanded">
          ${differentials.map(([title, text]) => `<article><h2>${title}</h2><p>${text}</p></article>`).join("")}
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container split-grid">
        <div>
          ${sectionHead("", "Diagnóstico, decisão e execução no mesmo movimento.", "A consultoria não para no relatório. O trabalho conecta leitura financeira, desenho operacional e acompanhamento executivo.")}
        </div>
        <ol class="process-list">
          <li><strong>Mapear</strong><span>Entender caixa, processos, tributos e sistemas.</span></li>
          <li><strong>Priorizar</strong><span>Separar urgência, impacto financeiro e complexidade.</span></li>
          <li><strong>Executar</strong><span>Transformar recomendação em rotina, indicador e governança.</span></li>
        </ol>
      </div>
    </section>
    ${cta("Pronto para colocar sua gestão em outro nível?")}
  `;
}

function contatoPage() {
  return `
    ${pageHero({
      section: "",
      title: "Vamos conversar?",
      lead: "Conte em poucas palavras o cenário da sua empresa. A ORA retorna com o melhor próximo passo.",
      image: "assets/generated/hero-governance.png",
      compact: true,
    })}
    <section class="section contact-section">
      <div class="container contact-grid">
        <div>
          ${sectionHead("", "Fale com um especialista.", "Use os canais diretos ou preencha o formulário para abrir uma conversa no WhatsApp com a mensagem pronta.")}
          <div class="contact-lines">
            <a href="mailto:ora@oraadvisory.com.br">ora@oraadvisory.com.br</a>
            <a href="https://wa.me/5519999642620" target="_blank" rel="noreferrer">(19) 99964-2620</a>
            <a href="https://www.instagram.com/ora_advisory" target="_blank" rel="noreferrer">@ora_advisory</a>
          </div>
        </div>
        <form class="contact-form" id="contact-form">
          <label>Nome<input name="nome" type="text" autocomplete="name" required></label>
          <label>Empresa<input name="empresa" type="text" autocomplete="organization" required></label>
          <label>E-mail<input name="email" type="email" autocomplete="email" required></label>
          <label>WhatsApp<input name="whatsapp" type="tel" autocomplete="tel" required></label>
          <label>Faixa de faturamento mensal
            <select name="faturamento">
              <option value="">Selecione</option>
              <option>Até R$ 500 mil</option>
              <option>R$ 500 mil a R$ 1 milhão</option>
              <option>R$ 1 milhão a R$ 5 milhões</option>
              <option>Acima de R$ 5 milhões</option>
            </select>
          </label>
          <label>Mensagem<textarea name="mensagem" rows="5" required></textarea></label>
          <button class="button primary" type="submit">Enviar</button>
        </form>
      </div>
    </section>
  `;
}

function blogPage() {
  return `
    ${pageHero({
      section: "",
      title: "Insights sobre gestão financeira e governança.",
      lead: "Artigos, análises e perspectivas da equipe ORA Advisory sobre finanças corporativas, tecnologia e estratégia empresarial.",
      image: "assets/generated/hero-governance.png",
      compact: true,
    })}
    <section class="section light-section">
      <div class="container">
        <div class="blog-grid">
          ${blogPosts.map((post) => `
            <a class="blog-card" href="blog-post.html#${post.slug}">
              <div class="blog-card-img">
                <img src="${post.image}" alt="${post.title}">
              </div>
              <div class="blog-card-body">
                <div class="blog-card-top">
                  <span class="blog-category">${post.category}</span>
                  <time>${post.date}</time>
                </div>
                <h2>${post.title}</h2>
                <p>${post.excerpt}</p>
                <span class="blog-link">Ler artigo →</span>
              </div>
            </a>
          `).join("")}
        </div>
        <p class="blog-notice">Novos artigos em breve. Acompanhe também pelo <a href="https://www.instagram.com/ora_advisory" target="_blank" rel="noreferrer">@ora_advisory</a>.</p>
      </div>
    </section>
    ${cta("Quer aprofundar algum tema com um especialista?")}
  `;
}

function blogPostPage() {
  const slug = window.location.hash.slice(1);
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return `
      <section class="section light-section">
        <div class="container" style="text-align:center;padding:80px 0">
          <h1>Artigo não encontrado.</h1>
          <a class="button primary" href="${routes.blog}" style="margin-top:24px;display:inline-flex">Voltar ao Blog</a>
        </div>
      </section>
    `;
  }
  return `
    <section class="article-hero">
      <div class="article-hero-bg" aria-hidden="true">
        <img src="${post.image}" alt="">
      </div>
      <div class="container article-hero-content">
        <a class="article-back" href="${routes.blog}">← Voltar ao Blog</a>
        <span class="blog-category">${post.category}</span>
        <h1>${post.title}</h1>
        <time>${post.date}</time>
      </div>
    </section>
    <section class="section light-section">
      <div class="container article-body">
        ${post.body.map((p) => `<p>${p}</p>`).join("")}
        <div class="article-footer">
          <a class="button primary" href="${routes.contato}">Fale com um especialista</a>
          <a class="button ghost-dark" href="${routes.blog}">← Voltar ao Blog</a>
        </div>
      </div>
    </section>
    ${cta("Quer aprofundar esse tema com a ORA?")}
  `;
}

const renderers = {
  home: homePage,
  "quem-somos": aboutPage,
  lideranca: leadershipPage,
  solucoes: solutionsPage,
  cfo: () => solutionPage("cfo"),
  melhoria: () => solutionPage("melhoria"),
  sistemas: () => solutionPage("sistemas"),
  tributaria: () => solutionPage("tributaria"),
  diferenciais: differentialsPage,
  blog: blogPage,
  "blog-post": blogPostPage,
  contato: contatoPage,
};

function setupHeader() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

async function sendToEmail(fields, subject) {
  const lines = Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  const payload = {
    _subject: subject,
    _captcha: "false",
    _template: "basic",
    Mensagem: lines,
  };
  try {
    const res = await fetch("https://formsubmit.co/ajax/ora@oraadvisory.com.br", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (e) {
    console.error("Erro ao enviar formulário:", e);
  }
}

function showSuccessModal() {
  const modal = document.querySelector("#success-modal");
  if (!modal) return;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector("#success-close").focus();
}

function setupSuccessModal() {
  const modal = document.querySelector("#success-modal");
  if (!modal) return;
  const close = () => {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  };
  modal.querySelector("#success-close").addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) close(); });
}

function setupContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const d = new FormData(form);
    const nome = d.get("nome") || "Novo contato";
    await sendToEmail({
      "Nome": nome,
      "Empresa": d.get("empresa") || "",
      "E-mail": d.get("email") || "",
      "WhatsApp": d.get("whatsapp") || "",
      "Faturamento mensal": d.get("faturamento") || "",
      "Mensagem": d.get("mensagem") || "",
    }, `Novo contato: ${nome}`);
    form.reset();
    showSuccessModal();
  });
}

function setupHomeLeadForm() {
  const form = document.querySelector("#home-lead-form");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const d = new FormData(form);
    const nome = d.get("nome") || "Novo lead";
    await sendToEmail({
      "Nome": nome,
      "WhatsApp": d.get("whatsapp") || "",
      "E-mail": d.get("email") || "",
      "Empresa": d.get("empresa") || "",
      "Cargo": d.get("cargo") || "",
      "Setor": d.get("setor") || "",
      "ERP utilizado": d.get("erp") || "",
      "Faturamento mensal": d.get("faturamento") || "",
    }, `Novo lead: ${nome}`);
    form.reset();
    showSuccessModal();
  });
}

function setupProductTabs() {
  const buttons = document.querySelectorAll("[data-product-tab]");
  const panels = document.querySelectorAll("[data-product-panel]");
  if (!buttons.length || !panels.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const tab = button.dataset.productTab;
      buttons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-selected", String(selected));
      });
      panels.forEach((panel) => {
        const active = panel.dataset.productPanel === tab;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
    });
  });
}

function render() {
  const root = document.querySelector("#site");
  if (!root) return;
  const page = root.dataset.page || "home";
  const renderer = renderers[page] || renderers.home;
  document.title = pageTitles[page] || pageTitles.home;
  root.innerHTML = `<div class="site-shell">${header(page)}<main>${renderer()}</main>${footer()}</div>
    <div class="success-modal" id="success-modal" role="dialog" aria-modal="true" aria-labelledby="success-title" hidden>
      <div class="success-modal-box">
        <div class="success-icon" aria-hidden="true">✓</div>
        <h2 id="success-title">Mensagem enviada!</h2>
        <p>Em breve entraremos em contato com você.</p>
        <button class="button primary" type="button" id="success-close">Fechar</button>
        <div class="modal-social">
          <p>Siga a ORA Advisory nas redes</p>
          <div class="modal-social-links">
            <a href="https://www.instagram.com/ora_advisory" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              @ora_advisory
            </a>
            <a href="https://www.linkedin.com/company/ora-dvisory/" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              ORA Advisory
            </a>
          </div>
        </div>
      </div>
    </div>`;
  setupHeader();
  setupSuccessModal();
  setupContactForm();
  setupHomeLeadForm();
  setupProductTabs();
}

render();
