const T = {
  en: {
    nav_skills:"Stack", nav_projects:"Projects", nav_exp:"Experience", nav_contact:"Contact",
    nav_cta:"Available for opportunities",
    hero_badge:"Java Developer · Backend Engineer",
    hero_h1:'Building <span class="accent">robust</span><br>systems with Java.',
    hero_sub:"Backend development specialist with Java, Spring Framework, REST APIs and scalable architectures. Focused on clean code, performance and long-lasting solutions.",
    hero_cta1:"View projects", hero_cta2:"Get in touch",
    stat_yr:"yrs", stat_exp:"Experience", stat_proj:"Projects delivered", stat_co:"Companies served", stat_apis:"APIs built",
    skill_api:"Integration & APIs", skill_data:"Database",
    s2_label:"// 02 — PROJECTS", s2_title:"Projects developed",
    s2_sub:"Backend solutions built in personal and professional projects — solid architectures, clean code, and APIs that scale.",
    p1_num:"001 — Featured", st_live:"● Live", st_dev:"◐ In development",
    p1_title:"Financial Management System",
    p1_desc:"Full RESTful API for enterprise financial control. JWT authentication, real-time reports, legacy system integration via SOAP and microservices architecture with Spring Cloud.",
    p_view:"View project",
    p2_title:"Legacy SOAP Integration",
    p2_desc:"Integration middleware between legacy systems (SOAP/XML) and modern REST APIs. Data transformation, error handling and automatic retry.",
    p_details:"View details →",
    p3_title:"Centralized Auth API",
    p3_desc:"Centralized authentication and authorization service with OAuth2, OpenID Connect and JWT token management for multiple applications.",
    p4_title:"Personal Portfolio",
    p4_desc:"Full-stack portfolio with Node.js backend, multi-container Docker setup with Traefik reverse proxy, automated SSL, CI/CD via GitHub Actions and transactional email via Resend.",
    acc_expand:'+ Case study',
    acc_positive:'✅ Positives',
    acc_negative:'❌ Challenges',
    acc_technical:'🔧 Technical difficulties',
    acc_learning:'💡 Learnings',
    p4_pos1:'Complete end-to-end ownership — from design to production',
    p4_pos2:'CI/CD pipeline fully automated via GitHub Actions',
    p4_pos3:'Multi-container architecture with clean separation of concerns',
    p4_pos4:'SSL certificate managed automatically by Traefik + Let\'s Encrypt',
    p4_pos5:'Transactional email with verified domain via Resend',
    p4_pos6:'Multi-language support (EN, PT-BR, FR-BE, NL-BE)',
    p4_neg1:'Traefik routing with multiple Docker networks caused hours of debugging',
    p4_neg2:'Git conflicts between local VPS edits and GitHub Actions workflow',
    p4_neg3:'Resend DNS propagation required patience to verify records',
    p4_neg4:'Separating HTML/CSS/JS required Dockerfile updates not initially committed',
    p4_tec1:'Traefik v3 picks the wrong network IP when container has multiple networks — fixed with traefik.docker.network label',
    p4_tec2:'Nginx SPA fallback masked missing JS/CSS files — showed as syntax error in browser console',
    p4_tec3:'Docker build cache ignored new folders because COPY instructions were missing from Dockerfile',
    p4_tec4:'GitHub Actions git pull aborted due to local VPS changes — solved with git reset --hard',
    p4_lea1:'Always add traefik.docker.network when a container is on multiple Docker networks',
    p4_lea2:'Never edit files directly on VPS without committing — always go through Git',
    p4_lea3:'Traefik debug logs (--log.level=DEBUG) are essential to diagnose proxy issues',
    p4_lea4:'Resend is far superior to Gmail SMTP for domain-based transactional email',
    p4_lea5:'Separating HTML/CSS/JS from the start saves refactoring time later',
    p_add:"Add project",
    s3_label:"// 03 — EXPERIENCE", s3_title:"Professional journey",
    s3_sub:"Building backend solutions across different industries and contexts.",
    exp_now:"Present", e1_role:"Senior Java Developer",
    e1_desc:"Microservices development with Spring Boot and Spring Cloud. REST and SOAP API design and consumption. Technical leadership in backend squad.",
    e2_role:"Mid-level Java Developer",
    e2_desc:"Maintenance and evolution of Java EE systems. Payment system integration via SOAP. Gradual migration to Spring Boot.",
    e3_role:"Junior Java Developer",
    e3_desc:"Career start with Java EE and JSF. Module development for internal ERP system. Learning design patterns and best practices.",
    hl_yr:"yrs", hl1:"Building Java systems in production environments",
    hl2:"APIs designed and documented with Swagger / OpenAPI",
    hl3:"Legacy system migrations to modern architecture",
    hl4:"Experience across multiple Java ecosystem versions",
    s4_label:"// 04 — CONTACT",
    contact_h2:'Let\'s build something <em>solid</em> together.',
    contact_p:"Open to opportunities as a senior Java developer, freelance projects and technical consulting. If you need a robust backend, we're on the same page.",
    cv_name:"Resume", cv_sub:"Download PDF",
    f_name:"Name", f_co:"Company", f_type:"Opportunity type", f_msg:"Message", f_send:"Send message",
    inp_name_ph:"Your name", inp_co_ph:"Your company", inp_msg_ph:"Describe the opportunity or project...",
    sel_ph:"Select...", sel_o1:"Full-time / Contract", sel_o2:"Freelance Project", sel_o3:"Technical Consulting", sel_o4:"Other"
  },
  pt: {
    nav_skills:"Stack", nav_projects:"Projetos", nav_exp:"Experiência", nav_contact:"Contato",
    nav_cta:"Disponível para oportunidades",
    hero_badge:"Desenvolvedor Java · Engenheiro Backend",
    hero_h1:'Construindo sistemas <span class="accent">robustos</span><br>com Java.',
    hero_sub:"Especialista em desenvolvimento backend com Java, Spring Framework, APIs REST e arquiteturas escaláveis. Focado em código limpo, performance e soluções que duram.",
    hero_cta1:"Ver projetos", hero_cta2:"Entre em contato",
    stat_yr:"anos", stat_exp:"Experiência", stat_proj:"Projetos entregues", stat_co:"Empresas atendidas", stat_apis:"APIs construídas",
    skill_api:"Integração & APIs", skill_data:"Banco de Dados",
    s2_label:"// 02 — PROJETOS", s2_title:"Projetos desenvolvidos",
    s2_sub:"Soluções backend criadas em projetos pessoais e empresariais — arquiteturas sólidas, código limpo e APIs que escalam.",
    p1_num:"001 — Destaque", st_live:"● Em produção", st_dev:"◐ Em desenvolvimento",
    p1_title:"Sistema de Gestão Financeira",
    p1_desc:"API RESTful completa para controle financeiro empresarial. Autenticação JWT, relatórios em tempo real, integração com sistemas legados via SOAP e microsserviços com Spring Cloud.",
    p_view:"Ver projeto",
    p2_title:"Integração SOAP Legado",
    p2_desc:"Middleware de integração entre sistemas legados (SOAP/XML) e APIs modernas REST. Transformação de dados, tratamento de falhas e retry automático.",
    p_details:"Ver detalhes →",
    p3_title:"API de Autenticação Centralizada",
    p3_desc:"Serviço centralizado de autenticação e autorização com OAuth2, OpenID Connect e gestão de tokens JWT para múltiplas aplicações.",
    p4_title:"Portfólio Pessoal",
    p4_desc:"Portfólio full-stack com backend Node.js, setup multi-container Docker com Traefik como reverse proxy, SSL automático, CI/CD via GitHub Actions e email transaccional via Resend.",
    acc_expand:'+ Análise do projeto',
    acc_positive:'✅ Pontos positivos',
    acc_negative:'❌ Desafios',
    acc_technical:'🔧 Dificuldades técnicas',
    acc_learning:'💡 Aprendizagens',
    p4_pos1:'Controlo total de ponta a ponta — do design à produção',
    p4_pos2:'Pipeline CI/CD totalmente automatizado via GitHub Actions',
    p4_pos3:'Arquitectura multi-container com separação clara de responsabilidades',
    p4_pos4:'Certificado SSL gerido automaticamente pelo Traefik + Let\'s Encrypt',
    p4_pos5:'Email transaccional com domínio verificado via Resend',
    p4_pos6:'Suporte multi-idioma (EN, PT-BR, FR-BE, NL-BE)',
    p4_neg1:'Routing do Traefik com múltiplas redes Docker causou horas de debug',
    p4_neg2:'Conflitos Git entre edições directas na VPS e o workflow do GitHub Actions',
    p4_neg3:'Propagação DNS do Resend exigiu paciência para verificar os registos',
    p4_neg4:'Separar HTML/CSS/JS exigiu actualizações no Dockerfile não commitadas inicialmente',
    p4_tec1:'Traefik v3 usa o IP da rede errada quando o container tem múltiplas redes — resolvido com o label traefik.docker.network',
    p4_tec2:'SPA fallback do Nginx mascarava ficheiros JS/CSS em falta — aparecia como erro de sintaxe no browser',
    p4_tec3:'Cache do Docker build ignorava novas pastas porque faltavam instruções COPY no Dockerfile',
    p4_tec4:'git pull do GitHub Actions abortava por alterações locais na VPS — resolvido com git reset --hard',
    p4_lea1:'Sempre adicionar traefik.docker.network quando um container está em múltiplas redes Docker',
    p4_lea2:'Nunca editar ficheiros directamente na VPS sem commitar — sempre usar Git',
    p4_lea3:'Logs de debug do Traefik (--log.level=DEBUG) são essenciais para diagnosticar problemas de proxy',
    p4_lea4:'Resend é muito superior ao SMTP do Gmail para email transaccional com domínio próprio',
    p4_lea5:'Separar HTML/CSS/JS desde o início poupa tempo de refactoring depois',
    p_add:"Adicionar projeto",
    s3_label:"// 03 — EXPERIÊNCIA", s3_title:"Trajetória profissional",
    s3_sub:"Experiências construindo soluções backend em diferentes contextos e setores.",
    exp_now:"Atual", e1_role:"Desenvolvedor Java Sênior",
    e1_desc:"Desenvolvimento de microsserviços com Spring Boot e Spring Cloud. Exposição e consumo de APIs REST e SOAP. Liderança técnica em squad de backend.",
    e2_role:"Desenvolvedor Java Pleno",
    e2_desc:"Manutenção e evolução de sistemas Java EE. Integração com sistemas de pagamento via SOAP. Migração gradual para Spring Boot.",
    e3_role:"Desenvolvedor Java Junior",
    e3_desc:"Início da carreira com Java EE e JSF. Desenvolvimento de módulos para sistema ERP interno. Aprendizado de padrões de projeto e boas práticas.",
    hl_yr:"anos", hl1:"Desenvolvendo com Java em ambientes de produção",
    hl2:"APIs projetadas e documentadas com Swagger / OpenAPI",
    hl3:"Migrações de sistemas legados para arquitetura moderna",
    hl4:"Experiência com múltiplas versões do ecossistema Java",
    s4_label:"// 04 — CONTATO",
    contact_h2:'Vamos construir algo <em>sólido</em> juntos.',
    contact_p:"Aberto a oportunidades como desenvolvedor Java sênior, projetos freelance e consultorias técnicas. Se precisar de um backend robusto, estamos no mesmo page.",
    cv_name:"Currículo", cv_sub:"Baixar PDF",
    f_name:"Nome", f_co:"Empresa", f_type:"Tipo de oportunidade", f_msg:"Mensagem", f_send:"Enviar mensagem",
    inp_name_ph:"Seu nome", inp_co_ph:"Sua empresa", inp_msg_ph:"Descreva a oportunidade ou o projeto...",
    sel_ph:"Selecione...", sel_o1:"CLT / PJ", sel_o2:"Projeto Freelance", sel_o3:"Consultoria Técnica", sel_o4:"Outro"
  },
  fr: {
    nav_skills:"Stack", nav_projects:"Projets", nav_exp:"Expérience", nav_contact:"Contact",
    nav_cta:"Disponible pour des opportunités",
    hero_badge:"Développeur Java · Ingénieur Backend",
    hero_h1:'Concevoir des systèmes <span class="accent">robustes</span><br>avec Java.',
    hero_sub:"Spécialiste du développement backend en Java, Spring Framework, APIs REST et architectures scalables. Axé sur le code propre, la performance et des solutions durables.",
    hero_cta1:"Voir les projets", hero_cta2:"Me contacter",
    stat_yr:"ans", stat_exp:"Expérience", stat_proj:"Projets livrés", stat_co:"Entreprises servies", stat_apis:"APIs construites",
    skill_api:"Intégration & APIs", skill_data:"Base de données",
    s2_label:"// 02 — PROJETS", s2_title:"Projets développés",
    s2_sub:"Solutions backend créées dans des projets personnels et professionnels — architectures solides, code propre et APIs qui scalent.",
    p1_num:"001 — À la une", st_live:"● En production", st_dev:"◐ En développement",
    p1_title:"Système de gestion financière",
    p1_desc:"API RESTful complète pour le contrôle financier d'entreprise. Authentification JWT, rapports temps réel, intégration systèmes legacy via SOAP et microservices avec Spring Cloud.",
    p_view:"Voir le projet",
    p2_title:"Intégration SOAP Legacy",
    p2_desc:"Middleware d'intégration entre systèmes legacy (SOAP/XML) et APIs REST modernes. Transformation de données, gestion des erreurs et retry automatique.",
    p_details:"Voir les détails →",
    p3_title:"API d'authentification centralisée",
    p3_desc:"Service centralisé d'authentification et d'autorisation avec OAuth2, OpenID Connect et gestion des tokens JWT pour plusieurs applications.",
    p4_title:"Portfolio Personnel",
    p4_desc:"Portfolio full-stack avec backend Node.js, setup multi-conteneur Docker avec Traefik comme reverse proxy, SSL automatique, CI/CD via GitHub Actions et email transactionnel via Resend.",
    acc_expand:'+ Étude de cas',
    acc_positive:'✅ Points positifs',
    acc_negative:'❌ Défis',
    acc_technical:'🔧 Difficultés techniques',
    acc_learning:'💡 Apprentissages',
    p4_pos1:'Maîtrise complète de bout en bout — de la conception à la production',
    p4_pos2:'Pipeline CI/CD entièrement automatisé via GitHub Actions',
    p4_pos3:'Architecture multi-conteneur avec séparation claire des responsabilités',
    p4_pos4:'Certificat SSL géré automatiquement par Traefik + Let\'s Encrypt',
    p4_pos5:'Email transactionnel avec domaine vérifié via Resend',
    p4_pos6:'Support multilingue (EN, PT-BR, FR-BE, NL-BE)',
    p4_neg1:'Le routage Traefik avec plusieurs réseaux Docker a causé des heures de débogage',
    p4_neg2:'Conflits Git entre les modifications directes sur la VPS et le workflow GitHub Actions',
    p4_neg3:'La propagation DNS Resend a nécessité de la patience pour vérifier les enregistrements',
    p4_neg4:'Séparer HTML/CSS/JS a nécessité des mises à jour du Dockerfile non committées initialement',
    p4_tec1:'Traefik v3 utilise le mauvais IP réseau quand le conteneur a plusieurs réseaux — résolu avec le label traefik.docker.network',
    p4_tec2:'Le fallback SPA Nginx masquait les fichiers JS/CSS manquants — apparaissait comme erreur de syntaxe',
    p4_tec3:'Le cache Docker ignorait les nouveaux dossiers car les instructions COPY manquaient dans le Dockerfile',
    p4_tec4:'Le git pull de GitHub Actions était annulé par des modifications locales sur la VPS — résolu avec git reset --hard',
    p4_lea1:'Toujours ajouter traefik.docker.network quand un conteneur est sur plusieurs réseaux Docker',
    p4_lea2:'Ne jamais modifier des fichiers directement sur la VPS sans committer — toujours passer par Git',
    p4_lea3:'Les logs debug Traefik (--log.level=DEBUG) sont essentiels pour diagnostiquer les problèmes de proxy',
    p4_lea4:'Resend est bien supérieur au SMTP Gmail pour les emails transactionnels avec domaine propre',
    p4_lea5:'Séparer HTML/CSS/JS dès le départ évite le refactoring plus tard',
    p_add:"Ajouter un projet",
    s3_label:"// 03 — EXPÉRIENCE", s3_title:"Parcours professionnel",
    s3_sub:"Construction de solutions backend dans différents secteurs et contextes.",
    exp_now:"Présent", e1_role:"Développeur Java Senior",
    e1_desc:"Développement de microservices avec Spring Boot et Spring Cloud. Conception et consommation d'APIs REST et SOAP. Leadership technique dans l'équipe backend.",
    e2_role:"Développeur Java Confirmé",
    e2_desc:"Maintenance et évolution de systèmes Java EE. Intégration de systèmes de paiement via SOAP. Migration progressive vers Spring Boot.",
    e3_role:"Développeur Java Junior",
    e3_desc:"Début de carrière avec Java EE et JSF. Développement de modules pour un ERP interne. Apprentissage des design patterns et bonnes pratiques.",
    hl_yr:"ans", hl1:"Développement Java en environnements de production",
    hl2:"APIs conçues et documentées avec Swagger / OpenAPI",
    hl3:"Migrations de systèmes legacy vers une architecture moderne",
    hl4:"Expérience sur plusieurs versions de l'écosystème Java",
    s4_label:"// 04 — CONTACT",
    contact_h2:'Construisons quelque chose de <em>solide</em> ensemble.',
    contact_p:"Ouvert aux opportunités en tant que développeur Java senior, projets freelance et conseil technique. Si vous avez besoin d'un backend robuste, nous sommes sur la même longueur d'onde.",
    cv_name:"CV", cv_sub:"Télécharger PDF",
    f_name:"Nom", f_co:"Entreprise", f_type:"Type d'opportunité", f_msg:"Message", f_send:"Envoyer le message",
    inp_name_ph:"Votre nom", inp_co_ph:"Votre entreprise", inp_msg_ph:"Décrivez l'opportunité ou le projet...",
    sel_ph:"Sélectionner...", sel_o1:"CDI / Freelance", sel_o2:"Projet Freelance", sel_o3:"Conseil Technique", sel_o4:"Autre"
  },
  nl: {
    nav_skills:"Stack", nav_projects:"Projecten", nav_exp:"Ervaring", nav_contact:"Contact",
    nav_cta:"Beschikbaar voor kansen",
    hero_badge:"Java Ontwikkelaar · Backend Engineer",
    hero_h1:'Robuuste systemen <span class="accent">bouwen</span><br>met Java.',
    hero_sub:"Backend ontwikkelingsspecialist met Java, Spring Framework, REST API's en schaalbare architecturen. Gericht op schone code, prestaties en duurzame oplossingen.",
    hero_cta1:"Bekijk projecten", hero_cta2:"Neem contact op",
    stat_yr:"jr", stat_exp:"Ervaring", stat_proj:"Geleverde projecten", stat_co:"Bedrijven bediend", stat_apis:"Gebouwde API's",
    skill_api:"Integratie & API's", skill_data:"Database",
    s2_label:"// 02 — PROJECTEN", s2_title:"Ontwikkelde projecten",
    s2_sub:"Backend-oplossingen gebouwd in persoonlijke en professionele projecten — solide architecturen, schone code en API's die schalen.",
    p1_num:"001 — Uitgelicht", st_live:"● In productie", st_dev:"◐ In ontwikkeling",
    p1_title:"Financieel Beheersysteem",
    p1_desc:"Volledige RESTful API voor zakelijke financiële controle. JWT-authenticatie, realtime rapporten, integratie van legacy-systemen via SOAP en microservices-architectuur met Spring Cloud.",
    p_view:"Project bekijken",
    p2_title:"Legacy SOAP Integratie",
    p2_desc:"Integratie-middleware tussen legacy-systemen (SOAP/XML) en moderne REST API's. Datatransformatie, foutafhandeling en automatisch opnieuw proberen.",
    p_details:"Details bekijken →",
    p3_title:"Gecentraliseerde Auth API",
    p3_desc:"Gecentraliseerde authenticatie- en autorisatieservice met OAuth2, OpenID Connect en JWT-tokenbeheer voor meerdere applicaties.",
    p4_title:"Persoonlijk Portfolio",
    p4_desc:"Full-stack portfolio met Node.js backend, multi-container Docker setup met Traefik als reverse proxy, automatisch SSL, CI/CD via GitHub Actions en transactionele e-mail via Resend.",
    acc_expand:'+ Casestudy',
    acc_positive:'✅ Positieve punten',
    acc_negative:'❌ Uitdagingen',
    acc_technical:'🔧 Technische moeilijkheden',
    acc_learning:'💡 Leerpunten',
    p4_pos1:'Volledige controle van begin tot eind — van ontwerp tot productie',
    p4_pos2:'CI/CD pipeline volledig geautomatiseerd via GitHub Actions',
    p4_pos3:'Multi-container architectuur met duidelijke scheiding van verantwoordelijkheden',
    p4_pos4:'SSL-certificaat automatisch beheerd door Traefik + Let\'s Encrypt',
    p4_pos5:'Transactionele e-mail met geverifieerd domein via Resend',
    p4_pos6:'Meertalige ondersteuning (EN, PT-BR, FR-BE, NL-BE)',
    p4_neg1:'Traefik-routing met meerdere Docker-netwerken veroorzaakte uren debuggen',
    p4_neg2:'Git-conflicten tussen directe VPS-bewerkingen en de GitHub Actions-workflow',
    p4_neg3:'DNS-propagatie van Resend vergde geduld om records te verifiëren',
    p4_neg4:'HTML/CSS/JS scheiden vereiste Dockerfile-updates die aanvankelijk niet gecommit waren',
    p4_tec1:'Traefik v3 kiest het verkeerde netwerk-IP als de container meerdere netwerken heeft — opgelost met traefik.docker.network label',
    p4_tec2:'Nginx SPA-fallback maskeerde ontbrekende JS/CSS-bestanden — zichtbaar als syntaxisfout in browser',
    p4_tec3:'Docker build-cache negeerde nieuwe mappen omdat COPY-instructies ontbraken in Dockerfile',
    p4_tec4:'GitHub Actions git pull werd afgebroken door lokale VPS-wijzigingen — opgelost met git reset --hard',
    p4_lea1:'Altijd traefik.docker.network toevoegen als een container op meerdere Docker-netwerken zit',
    p4_lea2:'Nooit bestanden direct op de VPS bewerken zonder te committen — altijd via Git',
    p4_lea3:'Traefik debug-logs (--log.level=DEBUG) zijn essentieel voor het diagnosticeren van proxy-problemen',
    p4_lea4:'Resend is veel beter dan Gmail SMTP voor transactionele e-mail met eigen domein',
    p4_lea5:'HTML/CSS/JS vanaf het begin scheiden bespaart later refactoring-tijd',
    p_add:"Project toevoegen",
    s3_label:"// 03 — ERVARING", s3_title:"Professionele loopbaan",
    s3_sub:"Backend-oplossingen bouwen in verschillende sectoren en contexten.",
    exp_now:"Heden", e1_role:"Senior Java Ontwikkelaar",
    e1_desc:"Microservices-ontwikkeling met Spring Boot en Spring Cloud. REST- en SOAP API-ontwerp en -gebruik. Technisch leiderschap in backend-squad.",
    e2_role:"Medior Java Ontwikkelaar",
    e2_desc:"Onderhoud en evolutie van Java EE-systemen. Integratie van betaalsystemen via SOAP. Geleidelijke migratie naar Spring Boot.",
    e3_role:"Junior Java Ontwikkelaar",
    e3_desc:"Carrièrestart met Java EE en JSF. Module-ontwikkeling voor intern ERP-systeem. Leren van ontwerppatronen en beste praktijken.",
    hl_yr:"jr", hl1:"Java-systemen bouwen in productieomgevingen",
    hl2:"API's ontworpen en gedocumenteerd met Swagger / OpenAPI",
    hl3:"Legacy-systeemmigraties naar moderne architectuur",
    hl4:"Ervaring met meerdere versies van het Java-ecosysteem",
    s4_label:"// 04 — CONTACT",
    contact_h2:'Laten we samen iets <em>solides</em> bouwen.',
    contact_p:"Open voor kansen als senior Java-ontwikkelaar, freelanceprojecten en technisch advies. Als u een robuuste backend nodig heeft, zitten we op dezelfde lijn.",
    cv_name:"CV", cv_sub:"PDF downloaden",
    f_name:"Naam", f_co:"Bedrijf", f_type:"Type kans", f_msg:"Bericht", f_send:"Bericht verzenden",
    inp_name_ph:"Uw naam", inp_co_ph:"Uw bedrijf", inp_msg_ph:"Beschrijf de kans of het project...",
    sel_ph:"Selecteer...", sel_o1:"Vast / Freelance", sel_o2:"Freelanceproject", sel_o3:"Technisch Advies", sel_o4:"Anders"
  }
};

let currentLang = 'en';

function setLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  document.documentElement.lang = {en:'en',pt:'pt-BR',fr:'fr-BE',nl:'nl-BE'}[lang];

  document.body.classList.add('fading');

  setTimeout(() => {
    const t = T[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      if (t[k] !== undefined) el.textContent = t[k];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const k = el.dataset.i18nHtml;
      if (t[k] !== undefined) el.innerHTML = t[k];
    });

    // placeholders
    const ph = {inp_name:'inp_name_ph', inp_co:'inp_co_ph', inp_msg:'inp_msg_ph'};
    Object.entries(ph).forEach(([id, key]) => {
      const el = document.getElementById(id);
      if (el && t[key]) el.placeholder = t[key];
    });

    // select options
    ['sel_ph','sel_o1','sel_o2','sel_o3','sel_o4'].forEach(id => {
      const el = document.getElementById(id);
      if (el && t[id]) el.textContent = t[id];
    });

    document.body.classList.remove('fading');
  }, 110);
}

// ── Contact form submit ──────────────────────
const successMsg = { en:'Message sent! I\'ll get back to you soon.', pt:'Mensagem enviada! Responderei em breve.', fr:'Message envoyé ! Je vous répondrai bientôt.', nl:'Bericht verzonden! Ik neem snel contact op.' };
const errorMsg   = { en:'Error sending. Please try again.', pt:'Erro ao enviar. Tente novamente.', fr:'Erreur d\'envoi. Veuillez réessayer.', nl:'Fout bij verzenden. Probeer opnieuw.' };

async function submitForm(e) {
  e.preventDefault();
  const btn      = document.getElementById('submit-btn');
  const spinner  = document.getElementById('btn-spinner');
  const icon     = document.getElementById('btn-icon');
  const feedback = document.getElementById('form-feedback');

  const name    = document.getElementById('inp_name').value.trim();
  const company = document.getElementById('inp_co').value.trim();
  const email   = document.querySelector('input[type="email"]').value.trim();
  const type    = document.querySelector('select').value;
  const message = document.getElementById('inp_msg').value.trim();

  if (!name || !email || !message) {
    feedback.style.display = 'block';
    feedback.style.background = '#FEF2F2';
    feedback.style.color = '#991B1B';
    feedback.style.border = '1px solid #FECACA';
    feedback.textContent = currentLang === 'pt' ? 'Preencha nome, e-mail e mensagem.' : currentLang === 'fr' ? 'Remplissez le nom, l\'e-mail et le message.' : currentLang === 'nl' ? 'Vul naam, e-mail en bericht in.' : 'Please fill name, email and message.';
    return;
  }

  btn.disabled = true;
  spinner.style.display = 'inline-block';
  icon.style.display = 'none';

  try {
    const res = await fetch('https://contact.gustavohub.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, company, email, type, message })
    });
    const data = await res.json();

    feedback.style.display = 'block';
    if (data.ok) {
      feedback.style.background = '#ECFDF5';
      feedback.style.color = '#065F46';
      feedback.style.border = '1px solid #6EE7B7';
      feedback.textContent = successMsg[currentLang] || successMsg.en;
      document.getElementById('inp_name').value = '';
      document.getElementById('inp_co').value = '';
      document.querySelector('input[type="email"]').value = '';
      document.querySelector('select').selectedIndex = 0;
      document.getElementById('inp_msg').value = '';
    } else {
      throw new Error(data.error);
    }
  } catch {
    feedback.style.display = 'block';
    feedback.style.background = '#FEF2F2';
    feedback.style.color = '#991B1B';
    feedback.style.border = '1px solid #FECACA';
    feedback.textContent = errorMsg[currentLang] || errorMsg.en;
  } finally {
    btn.disabled = false;
    spinner.style.display = 'none';
    icon.style.display = 'inline-block';
  }
}


// ── Accordion ──────────────────────────────
function toggleAccordion(id, trigger) {
  const acc = document.getElementById(id);
  const toggle = trigger.querySelector('.acc-toggle');
  const isOpen = acc.classList.contains('open');

  // Close all open accordions
  document.querySelectorAll('.accordion.open').forEach(a => {
    a.classList.remove('open');
    const t = a.previousElementSibling.querySelector('.acc-toggle');
    if (t) t.dataset.open = '';
    a.previousElementSibling.classList.remove('acc-open');
  });

  if (!isOpen) {
    acc.classList.add('open');
    trigger.classList.add('acc-open');
    if (toggle) toggle.textContent = '− ' + (toggle.textContent.replace(/^[+−] /, ''));
    acc.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    if (toggle) toggle.textContent = '+ ' + (toggle.textContent.replace(/^[+−] /, ''));
  }
}

// ── Scroll reveal ──
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 70);
  });
}, { threshold: 0.07 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));