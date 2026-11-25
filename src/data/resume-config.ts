import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Benjamin Jouve',
    photoBackEmoji: '👨‍💻',
    title: {
      fr: 'Product Designer Freelance',
      en: 'Freelance Product Designer',
    },
    subtitle: {
      fr: '15+ ans d\'expérience en design digital, dont 8 ans dans la SportTech',
      en: '15+ years of digital design experience, including 8 years in SportTech',
    },
    location: 'Paris, France',
  },
  seo: {
    title: 'Benjamin Jouve — Product Designer Freelance',
    description: 'CV interactif de Benjamin Jouve, Product Designer freelance spécialisé en UI/UX, branding et stratégie produit. 15+ ans d\'expérience.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'linkedin', label: 'Benjamin Jouve', href: 'https://www.linkedin.com/in/benjaminjouve/' },
    { type: 'email', label: 'b1jjouve@gmail.com' },
    { type: 'phone', label: '+33 6 03 45 60 69' },
    { type: 'location', label: 'Paris, France' },
    { type: 'website', label: 'benjjouve.com', href: 'https://benjjouve.com' },
  ],
  skills: [
    {
      title: { fr: 'Design', en: 'Design' },
      type: 'badges',
      items: [
        { name: 'UI/UX' },
        { name: 'Design Systems' },
        { name: 'Branding' },
        { name: 'Product Design' },
        { name: 'Art Direction' },
        { name: { fr: 'Discovery', en: 'Discovery' } },
        { name: 'UX Writing' },
      ],
    },
    {
      title: { fr: 'Stratégie', en: 'Strategy' },
      type: 'badges',
      items: [
        { name: 'Product Thinking' },
        { name: 'Strategy' },
        { name: 'Storyboarding' },
        { name: 'Growth' },
        { name: 'SaaS' },
        { name: 'E-commerce' },
        { name: 'B2B / B2C' },
      ],
    },
    {
      title: { fr: 'Management', en: 'Management' },
      type: 'text',
      items: [
        { name: { fr: 'Gestion d\'équipe', en: 'Team Management' } },
        { name: { fr: 'Division design produit/marque', en: 'Product/Brand Design Division' } },
      ],
    },
    {
      title: { fr: 'Outils', en: 'Tools' },
      type: 'badges',
      items: [
        { name: 'AI Builder' },
        { name: 'Figma' },
        { name: 'Adobe (PS, AI, IND)' },
        { name: 'Webflow' },
        { name: 'Notion' },
        { name: 'Claude (AI assistant)' },
      ],
    },
  ],
  experiences: [
    {
      id: 'freelance-2025',
      company: { fr: 'Freelance', en: 'Freelance' },
      role: { fr: 'UI/UX - Product - Brand Designer', en: 'UI/UX - Product - Brand Designer' },
      type: { fr: 'Indépendant', en: 'Freelance' },
      period: { fr: 'Depuis juin 2025', en: 'Since Jun 2025' },
      description: {
        fr: 'Design produit de bout en bout pour des startups : discovery, parcours UX, UI, prototypage et structuration produit de 0 à 1.',
        en: 'End-to-end product design for startups: discovery, UX flows, UI, prototyping and product structuring from 0 to 1.',
      },
      techs: ['AI Builder', 'Figma'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Missions pour des startups early-stage et des sociétés établies.',
          en: 'Engagements with early-stage startups and established companies.',
        },
        tasks: {
          fr: [
            'Design produit de bout en bout : discovery, parcours UX, UI, prototypage et structuration produit de 0 à 1.',
            'Identité de marque et design produit pour Video Download Helper : rebranding complet et audit UX de l\'extension.',
            'Design orienté acquisition et conversion pour un portefeuille de clients variés, de la startup early-stage à la société établie.',
          ],
          en: [
            'End-to-end product design for startups: discovery, UX flows, UI, prototyping and product structuring from 0 to 1.',
            'Brand identity and product design for Video Download Helper, including a full rebrand and a UX audit of their core extension.',
            'Acquisition- and conversion-focused design for a diverse portfolio of clients, from early-stage startups to established companies.',
          ],
        },
        env: {
          fr: 'AI Builder / Figma / Outils IA',
          en: 'AI Builder / Figma / AI tools',
        },
      },
    },
    {
      id: 'napp',
      company: { fr: 'Napp', en: 'Napp' },
      role: { fr: 'Co-fondateur & Product Designer', en: 'Co-founder & Product Designer' },
      type: { fr: 'Startup', en: 'Startup' },
      period: { fr: 'Mai 2023 - Mai 2025', en: 'May 2023 - May 2025' },
      description: {
        fr: 'Lancement d\'une FoodTech : premier moteur de recherche de plats de restaurant basé sur l\'IA. Design produit (iOS/Android/WebApp), branding, stratégie utilisateur et acquisition.',
        en: 'Launched a FoodTech startup: first AI-based restaurant dish search engine. Product design (iOS/Android/WebApp), branding, user strategy and acquisition.',
      },
      techs: ['AI Builder', 'Figma', 'Webflow'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Startup en phase de lancement, équipe pluridisciplinaire.',
          en: 'Startup in launch phase, cross-functional team.',
        },
        tasks: {
          fr: [
            'Conception de l\'expérience utilisateur et de l\'interface pour toutes les plateformes.',
            'Direction artistique et stratégie de marque.',
            'Partenariats et développement commercial initial.',
          ],
          en: [
            'Designed user experience and interface for all platforms.',
            'Art direction and brand strategy.',
            'Partnerships and early business development.',
          ],
        },
        env: {
          fr: 'Figma / AI Builder / Outils de collaboration',
          en: 'Figma / AI Builder / Collaboration tools',
        },
      },
    },
    {
      id: 'sportheroes',
      company: { fr: 'Sportheroes', en: 'Sportheroes' },
      role: { fr: 'Product Designer & Head of Brand Design', en: 'Product Designer & Head of Brand Design' },
      type: { fr: 'CDI', en: 'Full-time' },
      period: { fr: 'Nov 2015 - Mai 2023', en: 'Nov 2015 - May 2023' },
      description: {
        fr: 'Direction du design de marque pour United Heroes (B2B) et Running Heroes (B2C). Création d\'applications sportives (running, cyclisme, natation) et gestion d\'une équipe de 2 designers.',
        en: 'Led brand design for United Heroes (B2B) and Running Heroes (B2C). Created sports apps (running, cycling, swimming) and managed a team of 2 designers.',
      },
      techs: ['Figma', 'Webflow', 'Adobe', 'Design Systems'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Équipe produit de 10+ personnes, méthodologie Agile.',
          en: 'Product team of 10+ people, Agile methodology.',
        },
        tasks: {
          fr: [
            'Conception et maintenance d\'un design system (icônes, composants).',
            'Recherche utilisateur et conception d\'interfaces pour les applications sportives.',
            'Collaboration avec des designers freelances et partenaires externes.',
          ],
          en: [
            'Designed and maintained a design system (icons, components).',
            'User research and interface design for sports apps.',
            'Collaborated with freelance designers and external partners.',
          ],
        },
        env: {
          fr: 'Figma / Adobe / Outils de prototypage',
          en: 'Figma / Adobe / Prototyping tools',
        },
      },
    },
    {
      id: 'freelance',
      company: { fr: 'Freelance', en: 'Freelance' },
      role: { fr: 'Art Director / Designer', en: 'Art Director / Designer' },
      type: { fr: 'Indépendant', en: 'Freelance' },
      period: { fr: 'Mai 2013 - Oct 2015', en: 'May 2013 - Oct 2015' },
      description: {
        fr: 'Création de concepts digitaux, UI design et direction artistique pour des marques telles que Clarins, Hermès, SFR, Procter & Gamble, PMU.',
        en: 'Created digital concepts, UI design, and art direction for brands like Clarins, Hermès, SFR, Procter & Gamble, PMU.',
      },
      techs: ['Adobe', 'Figma'],
      details: {
        context: {
          fr: 'Collaboration avec des agences leaders (AKQA, etc.).',
          en: 'Collaborated with leading agencies (AKQA, etc.).',
        },
        tasks: {
          fr: [
            'Direction artistique pour des campagnes digitales et sites web.',
            'Conception d\'expériences interactives et d\'interfaces utilisateur.',
          ],
          en: [
            'Art direction for digital campaigns and websites.',
            'Designed interactive experiences and user interfaces.',
          ],
        },
        env: {
          fr: 'Adobe / Figma / Outils de collaboration',
          en: 'Adobe / Figma / Collaboration tools',
        },
      },
    },
    {
      id: 'madmix',
      company: { fr: 'Madmix Digital', en: 'Madmix Digital' },
      role: { fr: 'Designer', en: 'Designer' },
      type: { fr: 'CDI', en: 'Full-time' },
      period: { fr: 'Sep 2012 - Avr 2013', en: 'Sep 2012 - Apr 2013' },
      description: {
        fr: 'Conception de sites web, bannières digitales (Flash/HTML5) et éléments d\'interface.',
        en: 'Designed websites, digital banners (Flash/HTML5), and interface elements.',
      },
      techs: ['Adobe', 'Flash', 'HTML5'],
      details: {
        context: {
          fr: 'Agence digitale, focus sur l\'innovation interactive.',
          en: 'Digital agency, focus on interactive innovation.',
        },
        tasks: {
          fr: [
            'Création de concepts visuels et d\'animations interactives.',
            'Intégration HTML5/CSS3 pour des expériences web.',
          ],
          en: [
            'Created visual concepts and interactive animations.',
            'HTML5/CSS3 integration for web experiences.',
          ],
        },
        env: {
          fr: 'Adobe / Flash / HTML5',
          en: 'Adobe / Flash / HTML5',
        },
      },
    },
    {
      id: 'fullsix',
      company: { fr: 'Fullsix', en: 'Fullsix' },
      role: { fr: 'Designer', en: 'Designer' },
      type: { fr: 'CDI', en: 'Full-time' },
      period: { fr: 'Mar 2011 - Sep 2012', en: 'Mar 2011 - Sep 2012' },
      description: {
        fr: 'Design et direction artistique pour des projets web clés : SFR, LCL, PMU, La Poste, Accor.',
        en: 'Designed and art-directed key web projects for SFR, LCL, PMU, La Poste, Accor.',
      },
      techs: ['Adobe', 'HTML5', 'CSS3'],
      details: {
        context: {
          fr: 'Agence digitale, équipe créative de 15+ personnes.',
          en: 'Digital agency, creative team of 15+ people.',
        },
        tasks: {
          fr: [
            'Conception de campagnes digitales et d\'interfaces utilisateur.',
            'Intégration HTML5/CSS3 pour des expériences interactives.',
          ],
          en: [
            'Designed digital campaigns and user interfaces.',
            'HTML5/CSS3 integration for interactive experiences.',
          ],
        },
        env: {
          fr: 'Adobe / HTML5 / CSS3',
          en: 'Adobe / HTML5 / CSS3',
        },
      },
    },
  ],
  education: [
    {
      school: { fr: 'The Design Crew', en: 'The Design Crew' },
      degree: { fr: 'Bootcamp Product Design', en: 'Product Design Bootcamp' },
      period: 'Jan-Fév 2026',
    },
    {
      school: { fr: 'Sup de Pub - INSEEC', en: 'Sup de Pub - INSEEC' },
      degree: { fr: 'Master Digital Creative/E-marketing', en: 'Master in Digital Creative/E-marketing' },
      period: '2008-2010',
    },
    {
      school: { fr: 'ESPL', en: 'ESPL' },
      degree: { fr: 'Bachelor Communication/Marketing (alternance)', en: 'Bachelor in Communication/Marketing (work-study)' },
      period: '2007-2008',
    },
    {
      school: { fr: 'Université de Tours', en: 'University of Tours' },
      degree: { fr: 'DUT Techniques de commercialisation', en: 'DUT in Sales Techniques' },
      period: '2005-2007',
    },
  ],
  hobbies: [
    {
      title: { fr: 'VTT', en: 'Mountain Bike' },
    },
    {
      title: { fr: 'Crossfit', en: 'Crossfit' },
    },
    {
      title: { fr: 'Reiki', en: 'Reiki' },
    },
    {
      title: { fr: 'Activités outdoor', en: 'Outdoor Activities' },
    },
    {
      title: { fr: 'Cuisine', en: 'Food' },
    },
    {
      title: { fr: 'Design', en: 'Design' },
    },
  ],
  theme: { preset: 'slate' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'WORK EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences for more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
