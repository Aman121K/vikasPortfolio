import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  Mail,
  MapPin,
  Menu,
  Phone,
  Server,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react'
import { useState } from 'react'
import './App.css'

const navItems = ['Profile', 'Experience', 'Projects', 'Skills', 'Contact']

const stats = [
  { value: '5+', label: 'Years building production apps' },
  { value: '2020', label: 'Started professional engineering' },
  { value: '8.4', label: 'B.Tech CSE CGPA' },
]

const highlights = [
  'React Native apps for iOS and Android',
  'Node.js APIs with REST, GraphQL, and Socket.IO',
  'Admin dashboards, internal tools, and portals',
  'MySQL and MongoDB backed product systems',
]

const experience = [
  {
    company: 'Blue Tokai Coffee Roasters',
    role: 'Full Stack Developer, Mobile App + Backend',
    period: 'Feb 2023 - Present',
    location: 'Gurgaon',
    summary:
      'Owns core app, backend, admin, and internal operations products for a fast-growing coffee brand.',
    points: [
      'Designed and developed the Blue Tokai mobile app experience.',
      'Built reimbursement, admin, and cafe router downtime portals.',
      'Improved backend API flows for reliability and operational speed.',
    ],
  },
  {
    company: 'Kiwitech',
    role: 'Mobile App Developer',
    period: 'May 2022 - Feb 2023',
    location: 'Noida',
    summary:
      'Delivered mobile products across social, fan engagement, and gaming communities.',
    points: [
      'Developed Scord App, Fanful App, and gamesee.gg features.',
      'Contributed to cross-platform app delivery with React Native.',
      'Worked closely with product teams in a fast-paced delivery environment.',
    ],
  },
  {
    company: 'Appsmartz',
    role: 'Full Stack Developer, Mobile App + Backend',
    period: 'Jun 2020 - May 2022',
    location: 'Mohali',
    summary:
      'Built consumer mobile experiences and backend systems with real-time communication features.',
    points: [
      'Implemented endless-scroll experiences in Radio FM mobile app.',
      'Built Socket.IO chat features for Radio FM and Screen Recorder.',
      'Worked on DaramFlicks and other mobile product initiatives.',
    ],
  },
]

const projects = [
  {
    title: 'Blue Tokai Coffee App',
    type: 'Mobile Commerce',
    url: 'https://play.google.com/store/apps/details?id=com.bluetokaicoffee.app',
    description:
      'Customer app for ordering coffee, order-ahead cafe pickup, dine-in table ordering, roasted beans, brewing gear, offers, and community updates.',
    tags: ['React Native', 'Node.js', 'MySQL', 'Coffee App'],
  },
  {
    title: 'Blue Tokai Reimbursement Portal',
    type: 'Internal Tooling',
    url: 'https://reimbursement.bluetokaicoffee.com/login',
    description:
      'A structured business portal that helps teams submit, track, and process reimbursement requests through cleaner internal workflows.',
    tags: ['ReactJS', 'Node.js', 'Dashboard', 'Portal'],
  },
  {
    title: 'Rozdeal',
    type: 'Grocery Delivery',
    url: 'https://play.google.com/store/apps/details?id=com.selnox.rozdeal',
    description:
      'Local grocery delivery app for groceries, fruits, vegetables, snacks, dairy, and daily essentials with fast checkout and delivery tracking.',
    tags: ['React Native', 'Delivery', 'Checkout'],
  },
  {
    title: 'Scord',
    type: 'Fan Engagement App',
    url: 'https://www.businesswire.com/news/home/20230523006096/en/Rae-Sremmurd-SCORD-Announce-SREMM4LIFE-Video-Game-Challenge',
    description:
      'Fan engagement app for artists, brands, and creators, hosting customized skill-based mobile games, tournaments, prizing, and CRM workflows.',
    tags: ['React Native', 'Games', 'Tournaments'],
  },
  {
    title: 'gamesee.gg',
    type: 'Gaming Platform',
    url: 'https://gamesee.gg/',
    description:
      'Free online mini-games platform with puzzle, arcade, strategy, multiplayer, and casual games playable on web and mobile.',
    tags: ['ReactJS', 'Gaming', 'Mini Games'],
  },
  {
    title: 'Lucky Diem',
    type: 'Card-linked Offers',
    url: 'https://luckydiem.com/',
    description:
      'Card-linked offer network connecting merchants to measurable rewards, cashback, and customer engagement across linked cards and digital wallets.',
    tags: ['Frontend', 'Rewards', 'Offers'],
  },
  {
    title: 'GoMechanic',
    type: 'Car Services Platform',
    url: 'https://gomechanic.in/',
    description:
      'Automotive service platform for car servicing, repairs, accessories, transparent pricing, pickup slots, and real-time service updates.',
    tags: ['Product', 'Service Booking', 'Auto'],
  },
  {
    title: 'KitabCloud',
    type: 'Audio + E-book App',
    url: 'https://play.google.com/store/apps/details?id=com.techhouse.kitabcloud',
    description:
      'Digital library app for African literature with audiobooks, e-books, podcasts, offline reading, bookmarks, notes, reviews, and native-language content.',
    tags: ['React Native', 'Audio Books', 'E-books'],
  },
  {
    title: 'PetSquare',
    type: 'Pet Commerce Platform',
    url: 'https://dev.petsquare.co.nz/',
    description:
      'Pet-focused commerce platform for account creation, product discovery, shopping, shipping information, and customer-facing pet care workflows.',
    tags: ['Frontend', 'E-commerce', 'Pet Care'],
  },
]

const skillGroups = [
  {
    icon: Smartphone,
    title: 'Mobile',
    skills: ['React Native', 'Expo / CLI', 'iOS + Android', 'App flows'],
  },
  {
    icon: Server,
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Socket.IO'],
  },
  {
    icon: Code2,
    title: 'Frontend',
    skills: ['ReactJS', 'Admin panels', 'Dashboards', 'Responsive UI'],
  },
  {
    icon: Database,
    title: 'Data',
    skills: ['MySQL', 'MongoDB', 'Chat history', 'Structured records'],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Vikas Tiwari home">
          <span className="brand-mark">VT</span>
          <span>Vikas Tiwari</span>
        </a>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Primary">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>

        <button
          className="icon-button menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>

      <section className="hero-section" id="top">
        <div className="star-field" aria-hidden="true" />
        <div className="hero-shell">
          <div className="orbit-card" aria-hidden="true">
            <span className="orbital-ring" />
            <img className="profile-photo" src="/vikas-profile.jpg" alt="" />
          </div>

          <p className="eyebrow">
            <Sparkles size={16} /> Available for full stack and mobile roles
          </p>
          <h1>Senior Full Stack Software Developer for mobile-first products.</h1>
          <p className="hero-copy">
            I build React Native apps, Node.js backends, admin panels, and operational
            tools with clean architecture, reliable APIs, and product-focused execution.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="/vikas-tiwari-resume.pdf" download>
              <Download size={18} /> Download Resume
            </a>
            <a className="secondary-action" href="mailto:tvikas6523@gmail.com">
              <Mail size={18} /> Contact Me
            </a>
          </div>

          <div className="contact-strip" aria-label="Contact details">
            <a href="mailto:tvikas6523@gmail.com">
              <Mail size={16} /> tvikas6523@gmail.com
            </a>
            <a href="tel:+917973070600">
              <Phone size={16} /> +91 79730 70600
            </a>
            <span>
              <MapPin size={16} /> Saket, New Delhi
            </span>
          </div>
        </div>
      </section>

      <section className="intro-band" id="profile">
        <div className="section-heading">
          <p className="eyebrow">Profile</p>
          <h2>End-to-end ownership across app, backend, and business workflows.</h2>
        </div>
        <div className="intro-grid">
          <p>
            Since June 2020, I have been designing, building, and scaling mobile
            applications and backend platforms used by real customers and internal teams.
            My strongest work sits where product experience meets engineering reliability:
            React Native apps, Node.js APIs, admin panels, dashboards, and real-time
            communication systems.
          </p>
          <div className="highlight-list">
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Professional work shaped by production pressure and business outcomes.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.company}>
              <div className="timeline-icon">
                <BriefcaseBusiness size={20} />
              </div>
              <div>
                <div className="timeline-topline">
                  <p>{item.period}</p>
                  <span>{item.location}</span>
                </div>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                <p>{item.summary}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section project-section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Systems that support customers, teams, and operations.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div>
                <span>{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              {project.url ? (
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                  View project <ArrowUpRight size={15} />
                </a>
              ) : null}
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2>Practical stack for shipping modern product software.</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map(({ icon: Icon, title, skills }) => (
            <article className="skill-card" key={title}>
              <div className="skill-icon">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <div>
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="education-section">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2>Computer science foundation with product-building practice.</h2>
        </div>
        <div className="education-grid">
          <article>
            <span>2016 - 2020</span>
            <h3>B.Tech in Computer Science</h3>
            <p>
              IET Bhaddal, Ropar. Graduated with 8.4 CGPA and contributed to R&D
              and coding team initiatives, including a secure React.js student
              management portal.
            </p>
          </article>
          <article>
            <span>2014 - 2016</span>
            <h3>Senior Secondary, Non-Medical</h3>
            <p>
              Sarvhitkari Vidya Mandir, Punjab School Education Board. Completed
              with 87%.
            </p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s discuss how I can contribute to your engineering team.</h2>
          <p>
            Best fit: React Native, ReactJS, Node.js backend, admin systems, and
            full stack product roles.
          </p>
        </div>
        <div className="contact-actions">
          <a className="primary-action" href="mailto:tvikas6523@gmail.com">
            <Mail size={18} /> Email Vikas
          </a>
          <a
            className="secondary-action"
            href="https://www.linkedin.com/in/vikas-tiwari-446b1b140/"
            target="_blank"
            rel="noreferrer"
          >
            <BriefcaseBusiness size={18} /> LinkedIn <ArrowUpRight size={15} />
          </a>
          <a className="secondary-action" href="/vikas-tiwari-resume.pdf" download>
            <Download size={18} /> Resume
          </a>
          <a
            className="secondary-action"
            href="https://github.com/Aman121K"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={18} /> GitHub <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      <footer>
        <span>Handcrafted in React for Vikas Tiwari.</span>
        <div>
          <a href="mailto:tvikas6523@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/vikas-tiwari-446b1b140/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness size={18} />
          </a>
          <a
            href="https://github.com/Aman121K"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Code2 size={18} />
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
