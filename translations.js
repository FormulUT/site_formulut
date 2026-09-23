/* FR → EN. Le site est écrit en français dans le template (il s'affiche donc immédiatement) ;
   l'anglais est appliqué par substitution des textes rendus. Une chaîne absente du dictionnaire
   reste en français. Clé = chaîne française exacte, espaces normalisés. */
(function () {
  var DICT = {
    /* Navigation, actions */
    "Accueil": "Home",
    "Association": "About",
    "Équipe": "Team",
    "Monoplace": "The car",
    "Actualités": "News",
    "Nous soutenir": "Support us",
    "Nous écrire": "Write to us",
    "La monoplace": "The car",
    "Toutes les actualités": "All the news",
    "Dossier de partenariat": "Partnership pack",
    "Le dossier": "The pack",
    "Envoyer": "Send",
    "Candidater": "Apply",
    "Partenariat": "Partnership",
    "Tout": "All",
    "Lire la suite": "Read more",

    /* Accueil */
    "Écurie Formula Student — UTC Compiègne": "Formula Student team — UTC Compiègne",
    "On conçoit,": "We design,",
    "on fabrique,": "we build,",
    "on court.": "we race.",
    "Formul'UT est l'écurie de course des étudiants de l'UTC Compiègne. Nous concevons et fabriquons nos monoplaces pour concourir contre les autres écoles d'ingénieurs.": "Formul'UT is the racing team of the students of UTC Compiègne. We design and build our own cars to race against other engineering schools.",
    "FS01 · #86 — Magny-Cours, février 2026.": "FS01 · #86 — Magny-Cours, February 2026.",
    "La FS01 en piste à Magny-Cours": "The FS01 on track at Magny-Cours",
    "Membres actifs": "Active members",
    "Pôles techniques": "Technical units",
    "Monoplace thermique en piste": "Combustion car on track",
    "Monoplace électrique en développement": "Electric car in development",
    "Nos monoplaces": "Our cars",
    "Deux voitures. Une écurie.": "Two cars. One team.",
    "Ils nous font confiance": "They trust us",
    "Votre entreprise": "Your company",
    "L'écurie en direct": "The team, live",
    "Votre logo.": "Your logo.",
    "Notre piste.": "Our track.",
    "Chaque euro et chaque pièce donnés partent dans la voiture. Les dons de tous les niveaux sont bienvenus — l'emplacement de votre logo sur la monoplace suit votre engagement.": "Every euro and every part given goes into the car. Contributions of all sizes are welcome — where your logo sits on the car follows your commitment.",

    /* Monoplaces, fiches */
    "Thermique": "Combustion",
    "Électrique": "Electric",
    "Notre monoplace de course, en piste. Moteur de Honda CBR600RR, châssis tubulaire acier.": "Our race car, on track. Honda CBR600RR engine, steel tubular frame.",
    "Notre monoplace électrique, en développement à l'atelier de l'UTC.": "Our electric car, in development at the UTC workshop.",
    "La fiche technique": "Technical sheet",
    "Fiche technique": "Technical sheet",
    "Suivre le projet": "Follow the project",
    "Moteur": "Engine",
    "Puissance": "Power",
    "Numéro": "Number",
    "Propulsion": "Drivetrain",
    "État": "Status",
    "État du projet": "Project status",
    "Régime maximal": "Maximum revs",
    "Couple": "Torque",
    "Boîte de vitesses": "Gearbox",
    "6 rapports": "6 speeds",
    "Masse": "Weight",
    "Châssis": "Chassis",
    "Motorisation": "Motor",
    "Pack batterie": "Battery pack",
    "En développement": "In development",
    "À compléter": "To be provided",
    "Sur mesure": "Custom-built",
    "117 ch": "117 hp",
    "15 000 tr/min": "15,000 rpm",
    "Notre monoplace thermique, en piste. Moteur de Honda CBR600RR, 117 chevaux, six rapports.": "Our combustion car, on track. Honda CBR600RR engine, 117 hp, six gears.",
    "Masse et type de châssis : valeurs en cours de mesure par l'écurie.": "Weight and chassis type: figures still being measured by the team.",
    "La FS01 trois-quarts avant gauche": "The FS01, front three-quarter view",
    "La FS01 trois-quarts arrière droit": "The FS01, rear three-quarter view",
    "Détail avant de la FS01": "Front detail of the FS01",
    "Conception": "Design",
    "Ce que l'équipe fabrique": "What the team builds",
    "Aéro": "Aero",
    "GMP Thermique": "Combustion powertrain",
    "GMP Électrique": "Electric powertrain",
    "LAS": "Suspension",
    "ELEC": "Electronics",
    "Fabrication": "Manufacturing",
    "Ailerons, diffuseur et carrosserie dessinés et fabriqués à l'atelier.": "Wings, diffuser and bodywork drawn and built at the workshop.",
    "Structure tubulaire et intégration de tous les sous-systèmes.": "Tubular structure and integration of every subsystem.",
    "Moteur de Honda CBR600RR : admission, échappement, transmission.": "Honda CBR600RR engine: intake, exhaust, transmission.",
    "Suspensions, géométrie, freinage et pneumatiques.": "Suspension, geometry, brakes and tyres.",
    "Prochain projet": "Next project",
    "FS02 — la monoplace électrique": "FS02 — the electric car",
    "Notre première monoplace électrique est en développement à l'atelier : chaîne de traction, électronique de puissance et pack batterie.": "Our first electric car is in development at the workshop: drivetrain, power electronics and battery pack.",
    "Rendu 3D ou photo d'atelier de la FS02 à fournir": "3D render or workshop photo of the FS02 to be provided",
    "Rendu 3D ou photo d'atelier à fournir": "3D render or workshop photo to be provided",
    "Cette voiture roule grâce à ses partenaires": "This car runs thanks to its partners",
    "Pièces, matériaux, logiciels ou soutien financier : tout part directement dans la monoplace.": "Parts, materials, software or funding: it all goes straight into the car.",

    /* Association */
    "L'association": "The association",
    "Une écurie": "A student",
    "étudiante.": "racing team.",
    "Formul'UT est une association loi 1901 de l'Université de Technologie de Compiègne. Sa mission : construire une monoplace de Formula Student et la faire courir contre les autres écoles d'ingénieurs.": "Formul'UT is a non-profit association of the Université de Technologie de Compiègne. Its mission: build a Formula Student car and race it against other engineering schools.",
    "Membres": "Members",
    "Pôles": "Units",
    "Monoplaces": "Cars",
    "La compétition": "The competition",
    "Qu'est-ce que la Formula Student ?": "What is Formula Student?",
    "La Formula Student est une compétition internationale d'ingénierie. Chaque école conçoit et fabrique une monoplace de course, puis la présente devant un jury d'ingénieurs de l'industrie automobile avant de l'engager dans des épreuves en piste.": "Formula Student is an international engineering competition. Each school designs and builds a race car, presents it to a jury of automotive engineers, then runs it in track events.",
    "La voiture n'est qu'une partie de l'évaluation : la conception, les coûts de production et la présentation du projet comptent autant que le chronomètre.": "The car is only part of the assessment: design, production costs and the presentation of the project count as much as the stopwatch.",
    "Comment on travaille": "How we work",
    "Tout est fait par les étudiants": "Everything is student-made",
    "Conception et fabrication": "Design and manufacturing",
    "Aéro, châssis, motorisation, électronique, liaison au sol : toute la voiture est dessinée et fabriquée par l'équipe, à l'atelier de l'UTC.": "Aero, chassis, powertrain, electronics, suspension: the whole car is drawn and built by the team, at the UTC workshop.",
    "Sept pôles techniques": "Seven technical units",
    "Chaque membre rejoint un pôle et prend en charge un sous-système, du dessin à la pièce montée.": "Each member joins a unit and takes charge of a subsystem, from drawing to fitted part.",
    "Une saison, une voiture": "One season, one car",
    "Le calendrier de l'écurie est celui de la compétition : conception, fabrication, roulages, épreuves.": "The team's calendar is the competition's: design, manufacturing, track days, events.",
    "La saison": "The season",
    "Le rythme d'une année": "The rhythm of a year",
    "Les jalons passés et les prochaines sorties de l'écurie.": "Past milestones and the team's next outings.",
    "Les jalons": "Milestones",
    "Nous rejoindre": "Join us",
    "Entrer dans l'écurie": "Getting into the team",
    "Ouvert à tous les étudiants de l'UTC, sans prérequis technique.": "Open to every UTC student, no technical prerequisite.",
    "L'équipe à l'atelier": "The team at the workshop",
    "L'équipe au complet": "The full team",
    "Une écurie, ça se finance": "A racing team has to be funded",
    "Entreprises comme particuliers peuvent soutenir l'écurie. Financement, pièces, matériaux, logiciels : tout part dans la voiture.": "Companies and individuals alike can support the team. Funding, parts, materials, software: it all goes into the car.",

    /* Équipe */
    "L'équipe": "The team",
    "Vingt étudiants.": "Twenty students.",
    "Une écurie.": "One team.",
    "Des ingénieurs en devenir issus de toutes les filières de l'UTC, répartis en sept pôles techniques autour d'une même voiture.": "Engineers in the making from every UTC programme, split into seven technical units around a single car.",
    "Organisation technique": "Technical organisation",
    "Sept pôles. Une voiture.": "Seven units. One car.",
    "Aérodynamique — ailerons, diffuseur, carrosserie": "Aerodynamics — wings, diffuser, bodywork",
    "Conception et fabrication des éléments aérodynamiques de la monoplace : aileron avant, aileron arrière, diffuseur et carrosserie.": "Design and manufacture of the car's aerodynamic parts: front wing, rear wing, diffuser and bodywork.",
    "Structure tubulaire et intégration": "Tubular structure and integration",
    "Conception du châssis, calculs de résistance et intégration de tous les sous-systèmes de la voiture.": "Chassis design, strength calculations and integration of every subsystem of the car.",
    "Électronique embarquée et faisceau": "On-board electronics and wiring",
    "Électronique de la monoplace : faisceau, capteurs, acquisition de données et tableau de bord pilote.": "The car's electronics: wiring, sensors, data acquisition and driver dashboard.",
    "Usinage, soudure, assemblage à l'atelier": "Machining, welding, assembly at the workshop",
    "Réalisation des pièces à l'atelier de l'UTC : usinage, soudure, montage et maintenance de la voiture entre les roulages.": "Making the parts at the UTC workshop: machining, welding, assembly and maintenance of the car between track days.",
    "Groupe motopropulseur thermique": "Combustion powertrain",
    "Moteur de Honda CBR600RR : admission, échappement, refroidissement, transmission et mise au point.": "Honda CBR600RR engine: intake, exhaust, cooling, transmission and tuning.",
    "Groupe motopropulseur électrique": "Electric powertrain",
    "Chaîne de traction électrique de la FS02 : moteur, électronique de puissance et pack batterie.": "The FS02's electric drivetrain: motor, power electronics and battery pack.",
    "Liaison au sol — suspensions, freins, pneus": "Suspension — springs, brakes, tyres",
    "Suspensions, géométrie, système de freinage et choix des pneumatiques.": "Suspension, geometry, braking system and tyre choice.",
    "Bureau": "Board",
    "Le bureau": "The board",
    "Les neuf membres du bureau qui mènent la saison.": "The nine board members running the season.",
    "Secrétaire général": "General secretary",
    "Responsable FS01": "FS01 lead",
    "Responsable FS02": "FS02 lead",
    "Responsable aéro": "Aero lead",
    "Responsable bureau d'études": "Design office lead",
    "Responsable RSE": "CSR lead",
    "Président": "President",
    "Directeur technique": "Technical director",
    "Responsable partenariats": "Partnerships lead",
    "Trésorier": "Treasurer",
    "Recrutement": "Recruitment",
    "Rejoindre l'écurie": "Join the team",
    "Aucun prérequis : seulement l'envie de mettre les mains dans la voiture.": "No prerequisite: just the will to get your hands on the car.",
    "Vous nous écrivez": "You write to us",
    "Un message à formulut@gmail.com en précisant les pôles qui vous intéressent.": "An email to formulut@gmail.com telling us which units interest you.",
    "Vous venez à l'atelier": "You visit the workshop",
    "On vous montre la monoplace et les projets en cours.": "We show you the car and the projects under way.",
    "Découverte des projets et de la voiture avec l'équipe.": "A look at the projects and the car with the team.",
    "Vous rejoignez un pôle": "You join a unit",
    "Vous prenez en charge un sous-système, du dessin à la pièce montée.": "You take charge of a subsystem, from drawing to fitted part.",
    "Vous prenez en main un sous-système de la monoplace.": "You take charge of one of the car's subsystems.",
    "Vous allez en piste": "You go trackside",
    "En fin de saison, vous participez aux roulages et à la compétition.": "At the end of the season you take part in the track days and the competition.",
    "Vous voulez nous aider ?": "Want to help us?",
    "Les dons de tous les niveaux sont bienvenus, du particulier à l'entreprise.": "Contributions of all sizes are welcome, from individuals to companies.",

    /* Actualités */
    "Roulage": "Track day",
    "Compétition": "Competition",
    "Roulage à Valéo": "Track day at Valéo",
    "Roulage et test de la monoplace sur l'anneau de Valéo.": "Testing the car on the Valéo test track.",
    "Session d'entraînement de Formula Student avec les autres écuries françaises.": "Formula Student practice session with the other French teams.",
    "Session d'entraînement avec les autres écuries françaises.": "Practice session with the other French teams.",
    "Session d'entraînement de Formula Student avec les écuries françaises.": "Formula Student practice session with the French teams.",
    "Compétition internationale — notre prochain grand rendez-vous.": "International competition — our next big date.",
    "Formula Student Italie": "Formula Student Italy",
    "L'équipe et la FS01 devant le siège Valéo": "The team and the FS01 at Valéo headquarters",
    "La FS01 en piste sous la pluie à Magny-Cours": "The FS01 on a wet track at Magny-Cours",
    "L'écurie": "The team",
    "en direct.": "live.",
    "Roulages, compétitions, avancées à l'atelier. Deux publications sont en ligne — les suivantes suivront au fil de la saison.": "Track days, competitions, progress at the workshop. Two posts are online — more will follow through the season.",
    "Suivre l'écurie, c'est bien. La soutenir, c'est mieux.": "Following the team is good. Supporting it is better.",
    "Aucune publication dans cette catégorie pour le moment.": "No posts in this category yet.",

    /* Soutenir */
    "Formul'UT roule grâce à ses partenaires. Les dons de tous les niveaux sont bienvenus : l'emplacement de votre logo sur la monoplace suit votre engagement.": "Formul'UT runs thanks to its partners. Contributions of all sizes are welcome: where your logo sits on the car follows your commitment.",
    "Pourquoi nous soutenir": "Why support us",
    "Ce que votre soutien apporte": "What your support brings",
    "À l'écurie, tout part dans la voiture. À vous, une visibilité auprès des futurs ingénieurs et sur les circuits.": "For the team, it all goes into the car. For you, visibility among future engineers and on the track.",
    "Visibilité en piste": "Visibility on track",
    "Votre logo sur la monoplace, présente en compétition face aux autres écoles d'ingénieurs.": "Your logo on the car, racing against other engineering schools.",
    "Auprès des futurs ingénieurs": "Among future engineers",
    "Une association directe avec les étudiants de l'UTC — utile en notoriété comme en recrutement.": "A direct association with UTC students — useful for both brand awareness and recruitment.",
    "Un soutien concret": "Support that shows",
    "Financement, pièces, matériaux, logiciels ou usinage : chaque apport se retrouve sur la voiture.": "Funding, parts, materials, software or machining: every contribution ends up on the car.",
    "Emplacement du logo": "Logo placement",
    "Votre logo sur la voiture": "Your logo on the car",
    "Il n'y a pas de grille tarifaire. L'emplacement et la taille de votre logo sur la monoplace sont fonction de votre engagement — on en discute ensemble.": "There is no price list. Where your logo sits on the car, and how big it is, follows your commitment — we discuss it together.",
    "Logo sur la monoplace": "Logo on the car",
    "Logo sur les combinaisons": "Logo on the race suits",
    "Mention sur le site": "Mention on the website",
    "Publications réseaux sociaux": "Social media posts",
    "Visite de l'atelier": "Workshop visit",
    "Invitation aux roulages": "Invitation to track days",
    "Apport en nature (pièces, matériaux, logiciels, usinage) accepté au même titre qu'un don financier.": "In-kind support (parts, materials, software, machining) is accepted just like a financial contribution.",
    "La FS01 et ses logos partenaires, roulage à Valéo": "The FS01 and its partner logos, track day at Valéo",
    "Partenaires actuels": "Current partners",
    "Ils nous font déjà confiance": "They already trust us",
    "Parlons de votre partenariat": "Let's talk about your partnership",
    "Écrivez-nous en français ou en anglais.": "Write to us in French or in English.",
    "Vous nous écrivez ce que vous cherchez": "You tell us what you are looking for",
    "Le formulaire ou un e-mail direct, comme vous préférez.": "The form or a direct email, whichever you prefer.",
    "On vous répond": "We get back to you",
    "Un membre du bureau vous rappelle ou vous écrit.": "A member of the board writes or calls you back.",
    "On cale ensemble votre visibilité": "We settle your visibility together",
    "Emplacement du logo, contreparties, calendrier de la saison.": "Logo placement, benefits, the season's calendar.",
    "Nom / entreprise": "Name / company",
    "Votre nom ou votre société": "Your name or your company",
    "E-mail": "Email",
    "vous@entreprise.fr": "you@company.com",
    "Votre message": "Your message",
    "Dites-nous ce que vous cherchez et ce que vous pouvez apporter.": "Tell us what you are looking for and what you can bring.",
    "Merci — votre message est parti. Un membre du bureau vous répond.": "Thank you — your message has been sent. A member of the board will get back to you.",
    "Envoi en cours…": "Sending…",
    "Merci, votre message est bien parti. Un membre du bureau vous répond rapidement.": "Thank you, your message has been sent. A board member will get back to you shortly.",
    "L'envoi n'a pas abouti. Écrivez-nous directement à formulut@gmail.com.": "Sending failed. Please email us directly at formulut@gmail.com.",
    "Merci de renseigner votre nom, un e-mail valide et un message.": "Please fill in your name, a valid email and a message.",

    /* Pied de page */
    "Écurie de Formula Student de l'Université de Technologie de Compiègne. Association loi 1901, entièrement étudiante.": "Formula Student team of the Université de Technologie de Compiègne. A fully student-run non-profit association.",
    "Le site": "The site",
    "Contact": "Contact",
    "Réseaux": "Social",
    "UTC, Compiègne": "UTC, Compiègne",

    /* Dates */
    "Janvier": "January", "Février": "February", "Mars": "March", "Avril": "April",
    "Mai": "May", "Juin": "June", "Juillet": "July", "Août": "August",
    "Septembre": "September", "Octobre": "October", "Novembre": "November", "Décembre": "December",
    "Juin 2026": "June 2026",
    "Février 2026": "February 2026",
    "Février 2027": "February 2027",
    "Août 2027": "August 2027",
    "Résultats": "Results",
    "Formula Student Italy 2024": "Formula Student Italy 2024",
    "Nos classements sur les épreuves statiques, sur 50 écuries engagées.": "Our rankings in the static events, out of 50 teams entered.",
    "Business plan": "Business plan",
    "Coûts et fabrication": "Cost and manufacturing",
    "Tubulaire acier": "Steel tubular",
    "300 kg": "300 kg",
    "Juillet 2024": "July 2024",
    "4e en business plan, 10e en design, 18e en coûts et fabrication, sur 50 écuries engagées.": "4th in business plan, 10th in design, 18th in cost and manufacturing, out of 50 teams entered.",
    "Les logos de nos seize partenaires": "The logos of our sixteen partners",
    "Fondation UTC · UTC · SG Crédit du Nord · BDE UTC · Poclain · efluid · RS · Erode · Protecable · Honda France · Votat · Protech Shocks · norelem · France Équipement · JDS Échappement · SKF": "Fondation UTC · UTC · SG Crédit du Nord · BDE UTC · Poclain · efluid · RS · Erode · Protecable · Honda France · Votat · Protech Shocks · norelem · France Équipement · JDS Échappement · SKF",
    "Sept pôles techniques": "Seven technical units",
    "Sept pôles. Une voiture.": "Seven units. One car.",
    "Cinquante étudiants.": "Fifty students.",
    "Trente étudiants.": "Thirty students.",
    "Des ingénieurs en devenir issus de toutes les promotions et filières de l'UTC, de BAC+0 à BAC+5, répartis en sept pôles autour d'une même voiture.": "Engineers in the making from every UTC year and programme, from first year to master's, split into seven units around a single car.",
    "Année de création": "Founded in",
    "Opérations": "Operations",
    "Le cœur de l'association — communication, partenariats, organisation": "The heart of the association — communication, partnerships, organisation",
    "Communication, partenariats, organisation": "Communication, partnerships, organisation",
    "Le pôle qui fait tourner l'association : sans lui, pas de partenaires, pas de budget, pas de déplacement en compétition. Il gère la communication, les relations avec les partenaires, le budget, la logistique et l'organisation de la saison.": "The team that keeps the association running: without it, no partners, no budget, no travel to competitions. It handles communication, partner relations, budget, logistics and season planning.",
    "Vie de l'association : communication, relations avec les partenaires, budget, logistique des déplacements et organisation de la saison.": "Running the association: communication, partner relations, budget, travel logistics and organising the season.",
    "Formation": "Training",
    "Transmission aux nouveaux membres": "Passing it on to new members",
    "Accueil et montée en compétence des nouveaux : prise en main des outils de conception, des méthodes de l'écurie et des machines de l'atelier.": "Welcoming and training new members: design tools, the team's methods and the workshop machines.",
    "Créée en septembre 2019 à l'Université de Technologie de Compiègne, Formul'UT conçoit et fabrique une monoplace de course pour participer aux compétitions de Formula Student.": "Founded in September 2019 at the Université de Technologie de Compiègne, Formul'UT designs and builds a race car to compete in Formula Student events.",
    "La Formula Student est une compétition internationale d'ingénierie qui réunit plus de 800 universités et écoles du monde entier. Chaque équipe conçoit et fabrique une monoplace de course, puis la présente devant un jury d'ingénieurs de l'industrie automobile avant de l'engager dans des épreuves en piste.": "Formula Student is an international engineering competition bringing together more than 800 universities and schools worldwide. Each team designs and builds a race car, presents it to a jury of automotive engineers, then runs it in track events.",
    "Ingénierie durable": "Sustainable engineering",
    "Carrosserie en fibre naturelle, bio-éthanol à la place de l'essence : la performance sans renoncer à l'éco-conception.": "Natural-fibre bodywork, bio-ethanol instead of petrol: performance without giving up eco-design.",
    "Les épreuves": "The events",
    "Sur quoi la voiture est notée": "What the car is judged on",
    "Des juges issus de l'industrie automobile inspectent chaque monoplace avant de l'autoriser à rouler.": "Judges from the automotive industry inspect every car before clearing it to run.",
    "Épreuves statiques": "Static events",
    "Épreuves dynamiques": "Dynamic events",
    "Conformité au règlement": "Compliance with the rules",
    "Défense devant un jury d'investisseurs": "Pitched to a jury of investors",
    "Coûts et méthodes de fabrication": "Costs and manufacturing methods",
    "Choix techniques et conception": "Technical choices and design",
    "Comportement en virage, circuit en 8": "Cornering behaviour, figure-of-eight track",
    "Accélération sur 75 m": "75 m acceleration run",
    "Performances sur 1 km sinueux": "Performance on a 1 km twisty course",
    "Fiabilité et efficacité sur 22 km": "Reliability and efficiency over 22 km",
    "Votre entreprise": "Your company",
    "Les logos des partenaires sur le flanc de la FS01, Magny-Cours": "Partner logos on the side of the FS01, Magny-Cours",
    "L'équipe pousse la FS01 dans la voie des stands à Magny-Cours": "The team pushing the FS01 down the pit lane at Magny-Cours",
    "+ Votre logo": "+ Your logo",
    "Votre logo": "Your logo"
  };

  /* Par nœud : { fr } la source française, { out } la dernière valeur écrite par nous.
     Si la valeur courante diffère de { out }, c'est React (ou un composant du design system)
     qui a écrit : on ré-enregistre la source au lieu de restaurer une valeur périmée.
     Sans cela, un compteur animé serait figé sur sa première valeur. */
  var ORIG = new WeakMap();
  var ATTRS = ["alt", "placeholder", "aria-label", "title"];

  function norm(s) { return s.replace(/\s+/g, " ").trim(); }

  function translateNode(node, lang) {
    var raw = node.nodeValue;
    if (!raw || !raw.trim()) return;
    if (/^[\s\d.,+%–—-]*$/.test(raw)) return; /* chiffres seuls : compteurs animés, jamais traduits */
    var rec = ORIG.get(node);
    if (!rec || rec.out !== raw) rec = { fr: raw, out: raw };
    var next = rec.fr;
    if (lang !== "fr") {
      var hit = DICT[norm(rec.fr)];
      if (hit) next = rec.fr.replace(norm(rec.fr), hit);
    }
    if (raw !== next) node.nodeValue = next;
    rec.out = next;
    ORIG.set(node, rec);
  }

  function translateAttrs(el, lang) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      if (!el.hasAttribute(a)) continue;
      var cur = el.getAttribute(a);
      var key = "__fut_" + a;
      var rec = el[key];
      if (!rec || rec.out !== cur) rec = { fr: cur, out: cur };
      var next = lang === "fr" ? rec.fr : (DICT[norm(rec.fr)] || rec.fr);
      if (cur !== next) el.setAttribute(a, next);
      rec.out = next;
      el[key] = rec;
    }
  }

  function apply(root, lang) {
    if (!root) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    var n = walker.currentNode;
    while (n) {
      if (n.nodeType === 3) translateNode(n, lang);
      else if (n.nodeType === 1) translateAttrs(n, lang);
      n = walker.nextNode();
    }
  }

  window.FUT_I18N = { dict: DICT, apply: apply };
})();
