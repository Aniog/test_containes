export const categoryColors = {
  Microbiology: 'text-cosmos-teal bg-cosmos-teal/10 border-cosmos-teal/20',
  'Human Health': 'text-cosmos-emerald bg-cosmos-emerald/10 border-cosmos-emerald/20',
  Astrobiology: 'text-cosmos-cyan bg-cosmos-cyan/10 border-cosmos-cyan/20',
  Biotechnology: 'text-cosmos-violet bg-cosmos-violet/10 border-cosmos-violet/20',
  Medicine: 'text-red-400 bg-red-400/10 border-red-400/20',
  Ecology: 'text-cosmos-amber bg-cosmos-amber/10 border-cosmos-amber/20',
};

export const articles = [
  {
    id: 'quorum-sensing',
    titleId: 'sci-quorum-title',
    descId: 'sci-quorum-desc',
    imgId: 'sci-img-quorum-m1n2',
    title: 'Quorum Sensing: How Bacteria Communicate',
    desc: 'Bacteria are not solitary creatures. They use a sophisticated chemical language called quorum sensing to coordinate behavior across entire colonies — forming biofilms, launching infections, and even producing bioluminescence in unison.',
    category: 'Microbiology',
    readTime: '5 min',
    featured: true,
    body: [
      {
        type: 'paragraph',
        text: 'For decades, scientists assumed bacteria were simple, solitary organisms — mindless cells drifting through their environment, reacting only to immediate chemical cues. That assumption was shattered in the 1970s when microbiologist Woody Hastings noticed something strange about the bioluminescent bacterium Vibrio fischeri: individual cells in a dilute solution produced no light at all, but once the population reached a critical density, every cell lit up simultaneously.',
      },
      {
        type: 'heading',
        text: 'The Chemical Language of Bacteria',
      },
      {
        type: 'paragraph',
        text: 'The mechanism behind this collective behavior is called quorum sensing — a system of chemical communication that allows bacteria to detect and respond to population density. Each bacterium continuously secretes small signaling molecules called autoinducers. As the population grows, the concentration of these molecules rises. When it crosses a threshold, it triggers a coordinated genetic response across the entire colony.',
      },
      {
        type: 'paragraph',
        text: 'This is not a metaphor. Bacteria are literally counting their neighbors and making collective decisions based on that census. The implications are profound: bacteria are not the mindless automatons we once imagined. They are social organisms capable of collective behavior that rivals the complexity of insect colonies.',
      },
      {
        type: 'heading',
        text: 'From Bioluminescence to Biofilms',
      },
      {
        type: 'paragraph',
        text: "Quorum sensing governs an astonishing range of bacterial behaviors. Pathogenic bacteria like Pseudomonas aeruginosa use it to time the release of toxins — waiting until their numbers are large enough to overwhelm a host's immune system before launching a coordinated attack. Streptococcus mutans, the bacterium responsible for tooth decay, uses quorum sensing to build the sticky biofilms we call dental plaque.",
      },
      {
        type: 'paragraph',
        text: 'Biofilms themselves are a masterpiece of microbial engineering. When quorum sensing signals that enough bacteria are present, the colony switches from a free-floating lifestyle to a sessile, structured community. Cells differentiate into specialized roles, secrete a protective matrix of polysaccharides and proteins, and establish channels for nutrient distribution. The result is a structure with properties more akin to a multicellular organism than a collection of single cells.',
      },
      {
        type: 'heading',
        text: 'Disrupting the Signal: A New Frontier in Medicine',
      },
      {
        type: 'paragraph',
        text: 'Understanding quorum sensing has opened an entirely new front in the war against antibiotic-resistant bacteria. Rather than killing bacteria directly — which creates evolutionary pressure for resistance — researchers are developing "quorum quenching" compounds that jam the chemical signals. Without the ability to coordinate, pathogenic bacteria cannot mount an effective attack, even if they are present in large numbers.',
      },
      {
        type: 'paragraph',
        text: 'This approach is particularly promising against biofilm-forming pathogens, which are notoriously resistant to conventional antibiotics. Biofilms can be up to 1,000 times more resistant to antibiotics than free-floating bacteria, making infections like chronic wound infections and device-associated infections extremely difficult to treat. Quorum quenching offers a way to disrupt the biofilm before it forms.',
      },
      {
        type: 'paragraph',
        text: 'The discovery of quorum sensing has fundamentally changed how we think about microbial life. Bacteria are not passive actors in the story of life on Earth — they are active, communicating, coordinating agents that have been shaping ecosystems for 3.8 billion years. We are only beginning to learn their language.',
      },
    ],
  },
  {
    id: 'gut-microbiome',
    titleId: 'sci-gut-title',
    descId: 'sci-gut-desc',
    imgId: 'sci-img-gut-o3p4',
    title: 'Your Gut: A Microbial Metropolis',
    desc: 'The 38 trillion microbes living in your gut outnumber your own cells. They influence your immune system, mental health, metabolism, and even your personality. The gut microbiome is arguably the most complex ecosystem on Earth.',
    category: 'Human Health',
    readTime: '7 min',
    featured: false,
    body: [
      {
        type: 'paragraph',
        text: 'You are not alone in your own body. For every human cell in your body, there is roughly one microbial cell — and in your gut, the ratio tilts dramatically in favor of the microbes. The human gut microbiome contains approximately 38 trillion bacteria, archaea, fungi, and viruses, representing over 1,000 different species and encoding 150 times more genes than the human genome itself.',
      },
      {
        type: 'heading',
        text: 'The Gut-Brain Axis',
      },
      {
        type: 'paragraph',
        text: "Perhaps the most startling discovery of the past decade is the gut-brain axis — a bidirectional communication highway between the gut microbiome and the central nervous system. The gut contains over 100 million neurons, more than the spinal cord, and produces 95% of the body's serotonin. Gut bacteria influence the production of neurotransmitters, modulate the immune system, and send signals directly to the brain via the vagus nerve.",
      },
      {
        type: 'paragraph',
        text: 'Studies in germ-free mice — animals raised without any gut bacteria — have revealed the profound influence of the microbiome on behavior. These animals show increased anxiety, altered stress responses, and impaired social behavior. When gut bacteria from anxious mice are transplanted into calm mice, the recipients become anxious. The reverse is also true.',
      },
      {
        type: 'heading',
        text: 'Metabolism and the Microbiome',
      },
      {
        type: 'paragraph',
        text: 'Your gut bacteria are not passive passengers — they are active metabolic partners. They break down dietary fiber into short-chain fatty acids that nourish the cells lining your gut, regulate blood sugar, and reduce inflammation. They synthesize vitamins K and B12. They metabolize bile acids in ways that influence cholesterol levels and fat absorption.',
      },
      {
        type: 'paragraph',
        text: 'The composition of your microbiome may even influence your weight. Studies of identical twins have found that the twin with obesity has a less diverse microbiome than the lean twin. When gut bacteria from obese humans are transplanted into germ-free mice, the mice gain more weight than mice receiving bacteria from lean donors — even when both groups eat the same diet.',
      },
      {
        type: 'heading',
        text: 'Protecting and Restoring Your Microbiome',
      },
      {
        type: 'paragraph',
        text: 'The modern lifestyle is devastating to the gut microbiome. Antibiotics, processed foods, chronic stress, and lack of sleep all reduce microbial diversity. The consequences may be far-reaching: the rise of autoimmune diseases, allergies, inflammatory bowel disease, and even depression in industrialized societies has been linked to the loss of microbial diversity.',
      },
      {
        type: 'paragraph',
        text: 'The good news is that the microbiome is remarkably responsive to dietary changes. A diet rich in diverse plant foods — vegetables, fruits, legumes, whole grains, and fermented foods — can dramatically increase microbial diversity within weeks. The microbiome is not fixed; it is a dynamic ecosystem that responds to how we live.',
      },
    ],
  },
  {
    id: 'extremophiles',
    titleId: 'sci-extreme-title',
    descId: 'sci-extreme-desc',
    imgId: 'sci-img-extreme-q5r6',
    title: 'Life at the Extremes: Extremophiles',
    desc: 'From boiling hydrothermal vents to frozen Antarctic ice sheets, extremophiles have colonized every hostile environment on Earth. Their existence has revolutionized our understanding of where life can exist — and where we might find it in the cosmos.',
    category: 'Astrobiology',
    readTime: '6 min',
    featured: false,
    body: [
      {
        type: 'paragraph',
        text: 'In 1977, a team of oceanographers descended to the Galapagos Rift in the submersible Alvin and made one of the most astonishing discoveries in the history of biology. At a depth of 2,500 meters, in complete darkness and crushing pressure, they found thriving ecosystems clustered around hydrothermal vents — cracks in the ocean floor spewing superheated water at temperatures exceeding 400°C.',
      },
      {
        type: 'heading',
        text: 'Redefining the Boundaries of Life',
      },
      {
        type: 'paragraph',
        text: 'The organisms living at these vents — collectively called extremophiles — shattered the assumption that life requires sunlight, moderate temperatures, and stable chemistry. Instead of photosynthesis, these ecosystems are powered by chemosynthesis: bacteria and archaea that derive energy from the chemical reactions between the vent fluids and seawater, forming the base of a food chain that includes tube worms, crabs, and fish.',
      },
      {
        type: 'paragraph',
        text: 'Since that discovery, extremophiles have been found in virtually every hostile environment on Earth. Thermophiles thrive in boiling hot springs. Psychrophiles live in Antarctic ice at temperatures of -20°C. Acidophiles flourish in the sulfuric acid pools of volcanic craters. Halophiles colonize salt lakes so concentrated that nothing else can survive. Radioresistant bacteria like Deinococcus radiodurans can withstand radiation doses 3,000 times lethal to humans.',
      },
      {
        type: 'heading',
        text: "The Tardigrade: Life's Ultimate Survivor",
      },
      {
        type: 'paragraph',
        text: 'No discussion of extremophiles is complete without the tardigrade — an eight-legged microscopic animal that has become the symbol of biological resilience. Tardigrades can survive temperatures from -272°C (just above absolute zero) to 150°C. They can withstand pressures six times greater than the deepest ocean trench. They can survive doses of radiation that would kill any other animal. And in 2007, they became the first animals to survive direct exposure to the vacuum of outer space.',
      },
      {
        type: 'paragraph',
        text: 'Their secret is cryptobiosis — a state of suspended animation in which they expel nearly all water from their bodies, replace it with a sugar called trehalose, and essentially turn themselves into glass. In this state, their metabolism drops to 0.01% of normal, and they can remain viable for decades, waiting for conditions to improve.',
      },
      {
        type: 'heading',
        text: 'Implications for the Search for Extraterrestrial Life',
      },
      {
        type: 'paragraph',
        text: 'The discovery of extremophiles has transformed astrobiology. If life can thrive in the boiling acid pools of Yellowstone, the frozen deserts of Antarctica, and the crushing darkness of the deep ocean, then the range of environments in the universe that could support life expands enormously. The subsurface oceans of Europa and Enceladus, the methane lakes of Titan, the briny subsurface of Mars — all of these environments have analogs on Earth where extremophiles flourish.',
      },
      {
        type: 'paragraph',
        text: 'Extremophiles have also provided us with some of our most powerful biotechnological tools. The heat-stable DNA polymerase from Thermus aquaticus, a bacterium found in Yellowstone hot springs, is the enzyme that makes PCR possible — the technology that underlies everything from COVID testing to forensic DNA analysis. Life at the extremes has given us tools that have transformed medicine, science, and society.',
      },
    ],
  },
  {
    id: 'crispr',
    titleId: 'sci-crispr-title',
    descId: 'sci-crispr-desc',
    imgId: 'sci-img-crispr-s7t8',
    title: "CRISPR: Bacteria's Immune System Becomes Our Tool",
    desc: "CRISPR-Cas9, the revolutionary gene-editing technology, was discovered in bacteria as a primitive immune system. Today it's being used to cure genetic diseases, engineer crops, and potentially eliminate entire species of disease-carrying mosquitoes.",
    category: 'Biotechnology',
    readTime: '8 min',
    featured: false,
    body: [
      {
        type: 'paragraph',
        text: "In the late 1980s, a Japanese scientist named Yoshizumi Ishino noticed something strange in the genome of E. coli: a series of short, repeated DNA sequences separated by unique spacer sequences. He had no idea what they were. It would take another two decades, and the work of dozens of scientists across multiple continents, to understand that these sequences — now known as CRISPR — were the remnants of a bacterial immune system, and the key to one of the most powerful biotechnological tools ever developed.",
      },
      {
        type: 'heading',
        text: 'How Bacteria Remember Their Enemies',
      },
      {
        type: 'paragraph',
        text: "CRISPR stands for Clustered Regularly Interspaced Short Palindromic Repeats. When a bacterium survives a viral attack, it can incorporate a short snippet of the virus's DNA into its own genome, between those repeated sequences. This creates a molecular memory of the infection. If the same virus attacks again, the bacterium transcribes this memory into a short RNA molecule that guides a protein called Cas9 to the matching sequence in the viral DNA — and cuts it, destroying the virus.",
      },
      {
        type: 'paragraph',
        text: 'It is, in essence, a programmable molecular scissors guided by a GPS made of RNA. And in 2012, Jennifer Doudna and Emmanuelle Charpentier realized that this system could be reprogrammed to cut any DNA sequence — not just viral DNA, but the DNA of any organism, including humans. Their paper in Science that year launched a revolution in biology.',
      },
      {
        type: 'heading',
        text: 'From the Lab to the Clinic',
      },
      {
        type: 'paragraph',
        text: "The first CRISPR-based therapy to receive regulatory approval was a treatment for sickle cell disease and beta-thalassemia, approved by the FDA in late 2023. The therapy works by editing patients' own stem cells to reactivate fetal hemoglobin — a form of hemoglobin that is naturally switched off after birth but that can compensate for the defective adult hemoglobin in these diseases. Early results have been remarkable: patients who previously required frequent blood transfusions have been transfusion-free for years.",
      },
      {
        type: 'paragraph',
        text: "Clinical trials are underway for dozens of other conditions, including various cancers, HIV, Duchenne muscular dystrophy, and inherited blindness. CRISPR is also being used to engineer CAR-T cells — immune cells reprogrammed to hunt and destroy cancer — with greater precision and effectiveness than previous methods.",
      },
      {
        type: 'heading',
        text: 'Beyond Medicine: Agriculture and Conservation',
      },
      {
        type: 'paragraph',
        text: "CRISPR's applications extend far beyond human medicine. Agricultural scientists are using it to develop crops that are resistant to drought, disease, and pests without introducing foreign DNA — a distinction that has allowed some CRISPR-edited crops to bypass the regulatory hurdles faced by traditional GMOs. CRISPR-edited mushrooms that don't brown, wheat with reduced gluten content, and disease-resistant pigs are already in development or on the market.",
      },
      {
        type: 'paragraph',
        text: 'Perhaps most controversially, researchers are exploring the use of CRISPR-based gene drives to suppress or eliminate populations of disease-carrying mosquitoes. A gene drive is a genetic element that spreads through a population much faster than normal inheritance would allow, potentially driving a species to extinction or rendering it unable to transmit disease. The ecological implications are profound and deeply contested.',
      },
    ],
  },
  {
    id: 'phage-therapy',
    titleId: 'sci-phage-title',
    descId: 'sci-phage-desc',
    imgId: 'sci-img-phage-u9v0',
    title: 'Phage Therapy: Viruses as Medicine',
    desc: 'As antibiotic resistance grows into a global crisis, scientists are turning to bacteriophages — viruses that infect and destroy bacteria — as a precision alternative. Phage therapy, once abandoned, is experiencing a remarkable renaissance.',
    category: 'Medicine',
    readTime: '6 min',
    featured: false,
    body: [
      {
        type: 'paragraph',
        text: "In 1919, a French-Canadian microbiologist named Félix d'Hérelle injected four children suffering from severe dysentery with a preparation of bacteriophages — viruses that infect and kill bacteria. All four children recovered. D'Hérelle had discovered phage therapy, and for the next two decades, it was used across Europe and the Soviet Union to treat bacterial infections ranging from cholera to typhoid fever.",
      },
      {
        type: 'heading',
        text: 'The Rise and Fall — and Rise Again',
      },
      {
        type: 'paragraph',
        text: 'Then came penicillin. The discovery of antibiotics in the 1940s was so transformative that phage therapy was largely abandoned in the West. Why bother with the complexity of phages when a single pill could kill a broad spectrum of bacteria? For decades, phage therapy survived only in the former Soviet Union, particularly in Georgia, where the Eliava Institute in Tbilisi continued to develop and use phage preparations.',
      },
      {
        type: 'paragraph',
        text: 'Now, as antibiotic resistance threatens to render our most powerful drugs useless, the world is rediscovering what d\'Hérelle knew a century ago. The World Health Organization estimates that antibiotic-resistant infections already kill 700,000 people per year globally, a number projected to reach 10 million by 2050 if current trends continue. Phage therapy offers a fundamentally different approach.',
      },
      {
        type: 'heading',
        text: 'Precision Medicine at the Microbial Scale',
      },
      {
        type: 'paragraph',
        text: 'Unlike antibiotics, which kill bacteria indiscriminately — including the beneficial bacteria in your gut — bacteriophages are exquisitely specific. Each phage infects only one or a few closely related bacterial species. This precision means that phage therapy can target a pathogen without disrupting the rest of the microbiome.',
      },
      {
        type: 'paragraph',
        text: 'Phages also have a remarkable ability to evolve alongside their bacterial targets. When bacteria develop resistance to a phage, the phage can evolve to overcome that resistance — a dynamic that does not exist with antibiotics. Researchers are exploiting this by using "phage cocktails" — mixtures of multiple phages that target the same bacterium through different mechanisms, making it much harder for resistance to develop.',
      },
      {
        type: 'heading',
        text: 'A Case That Changed Everything',
      },
      {
        type: 'paragraph',
        text: 'In 2016, a case at UC San Diego brought phage therapy to global attention. Tom Patterson, a professor, was dying from a multidrug-resistant Acinetobacter baumannii infection contracted in Egypt. After months of failed antibiotic treatments, his wife — a public health professor — convinced his doctors to try an experimental phage therapy. Phages were sourced from sewage treatment plants and the US Navy, purified, and injected directly into his abdomen. Patterson made a full recovery.',
      },
      {
        type: 'paragraph',
        text: 'His case sparked a wave of compassionate use phage therapy trials and accelerated regulatory interest in the field. Clinical trials are now underway in the US, Europe, and Australia. The challenge ahead is developing the regulatory frameworks and manufacturing infrastructure to make phage therapy widely available — but the science has never been more promising.',
      },
    ],
  },
  {
    id: 'wood-wide-web',
    titleId: 'sci-wood-title',
    descId: 'sci-wood-desc',
    imgId: 'sci-img-wood-w1x2',
    title: 'The Wood Wide Web: Fungal Networks',
    desc: 'Beneath every forest floor lies a vast fungal internet. Mycorrhizal networks connect trees across acres, allowing them to share nutrients, water, and even chemical warning signals. Mother trees nurture their seedlings through this underground web.',
    category: 'Ecology',
    readTime: '5 min',
    featured: false,
    body: [
      {
        type: 'paragraph',
        text: 'Walk through any old-growth forest and you are walking above one of the most complex communication networks on Earth. Beneath your feet, the roots of every tree are entwined with the thread-like filaments of fungi — a network so vast and so interconnected that a single teaspoon of forest soil can contain several kilometers of fungal threads. This network, which scientists call the mycorrhizal network and journalists have dubbed the "Wood Wide Web," is transforming our understanding of how forests function.',
      },
      {
        type: 'heading',
        text: 'A Partnership 450 Million Years in the Making',
      },
      {
        type: 'paragraph',
        text: 'The relationship between plants and mycorrhizal fungi is ancient — fossil evidence suggests it dates back at least 450 million years, to when the first plants colonized land. It is also one of the most successful symbioses in the history of life. Today, over 90% of all plant species form mycorrhizal associations. The fungi extend the effective root surface area of their host plants by up to 700 times, dramatically increasing their ability to absorb water and nutrients — particularly phosphorus, which is poorly mobile in soil.',
      },
      {
        type: 'paragraph',
        text: 'In return, the plants provide the fungi with sugars produced through photosynthesis. It is a trade that has shaped the evolution of both partners for hundreds of millions of years. But the relationship is far more complex than a simple exchange of goods.',
      },
      {
        type: 'heading',
        text: 'Mother Trees and Forest Communication',
      },
      {
        type: 'paragraph',
        text: 'The ecologist Suzanne Simard spent decades studying the mycorrhizal networks of Canadian forests and made a discovery that challenged the prevailing view of forests as collections of competing individuals. She found that large, old trees — which she called "mother trees" — were connected to hundreds of younger trees through the fungal network, and were actively transferring carbon, water, and nutrients to their seedlings.',
      },
      {
        type: 'paragraph',
        text: 'When a mother tree was shaded and unable to photosynthesize, carbon flowed to it from neighboring trees through the network. When a tree was attacked by insects, it sent chemical warning signals through the network that caused neighboring trees to upregulate their own defenses. The forest, Simard argued, was not a collection of competing individuals but a cooperative community — a superorganism connected by an underground internet.',
      },
      {
        type: 'heading',
        text: 'Implications for Forest Management',
      },
      {
        type: 'paragraph',
        text: 'These discoveries have profound implications for how we manage forests. Clear-cutting, which removes the mother trees and destroys the mycorrhizal network, may be far more damaging than previously understood — not just because it removes the trees, but because it severs the underground connections that allow the forest to regenerate. Selective logging that preserves the largest, most connected trees may allow the network to survive and support the recovery of the forest.',
      },
      {
        type: 'paragraph',
        text: 'The Wood Wide Web also offers insights into how forests might respond to climate change. Trees that are stressed by drought or heat can receive support from their neighbors through the network. But the network itself is vulnerable to soil disturbance, pollution, and the loss of the fungal species that maintain it. Protecting the invisible infrastructure beneath our forests may be as important as protecting the trees themselves.',
      },
    ],
  },
];
