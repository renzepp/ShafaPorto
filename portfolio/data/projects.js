/* Semua isi project ada di sini. Untuk menambah project: copy satu blok { ... },
   ubah isinya, selesai. Tidak perlu menyentuh HTML.
   category : 'personal' atau 'academic'
   note     : boleh berisi HTML sederhana (mis. <span class="highlight">)
   url      : isi link asli; kalau null, tombol tampil abu-abu (belum aktif) */
const PROJECTS = [
  {
    category: 'personal',
    tag: 'ONGOING',
    title: 'Sha-Desk 📋',
    course: null,
    description: 'A personal study management system built to solve real exam prep chaos. Combines todo tracking, resource management, and progress monitoring in one place.',
    tech: ['Claude AI', 'Supabase', 'Frontend', 'GitHub'],
    noteLabel: 'Why it matters',
    note: 'Demonstrates end-to-end ownership from ideation to deployment. Shows practical ML integration (AI-assisted features) with scalable backend architecture. Built independently without guidance.',
    links: [{ label: 'GitHub (Private)', url: null }]
  },
  {
    category: 'academic',
    tag: 'ML / DATA SCIENCE',
    title: 'Heart Disease Risk Classifier',
    course: 'Data Science (Final Project)',
    description: 'Developed a feedforward neural network to classify heart disease risk based on lifestyle and demographic factors from 1,000+ health records.',
    tech: ['Python', 'TensorFlow', 'Neural Networks', 'Data Analysis'],
    noteLabel: 'Results',
    note: '<span class="highlight">88% accuracy</span>. Top predictors: stress level, age, smoking, exercise frequency.',
    links: [{ label: 'View Analysis', url: null }] // TODO: isi link notebook
  },
  {
    category: 'academic',
    tag: 'RESEARCH / ALGORITHMS',
    title: 'BMSSP Algorithm Analysis',
    course: 'Advanced Algorithms & Graph Theory',
    description: 'In-depth research on the Bounded Multiple-Source Shortest Path algorithm and its advantages over classical approaches like Dijkstra and Bellman-Ford.',
    tech: ['Algorithms', 'Graph Theory', 'Academic Research', 'Lightning Network'],
    noteLabel: 'Focus',
    note: 'Explored practical applications in Payment Channel Networks and sparse graph optimization. Analyzed cutting-edge 2023-2025 research.',
    links: [{ label: 'Read Paper', url: null }] // TODO: isi link paper
  },
  {
    category: 'academic',
    tag: 'DATA STRUCTURES',
    title: 'Music Search Engine',
    course: 'Data Structures & Algorithms',
    description: 'Built a Spotify-style music search engine using B-Tree data structures to achieve efficient, real-time search on large datasets.',
    tech: ['Python', 'B-Tree', 'Data Structures', 'Interactive UI'],
    noteLabel: 'Challenge',
    note: 'Implemented logarithmic search complexity while maintaining data integrity on large catalogs.',
    links: [{ label: 'View Code', url: null }] // TODO: isi link repo
  }
];
