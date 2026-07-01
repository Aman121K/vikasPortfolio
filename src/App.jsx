import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Workflow,
  X,
} from 'lucide-react'
import { useState } from 'react'
import './App.css'

const navItems = ['Profile', 'Experience', 'Projects', 'Skills', 'Contact']

const stats = [
  { value: '5+', label: 'Years building production apps and business platforms' },
  { value: '20+', label: 'Customer apps, admin portals, APIs, and dashboards shipped' },
  { value: '4', label: 'Strong areas: React Native, ReactJS, Node.js, databases' },
]

const highlights = [
  'Can take a feature from requirement discussion to API design, UI implementation, testing support, release, and maintenance.',
  'Strong match for MNC product teams hiring React Native, ReactJS, Node.js, or full stack engineers.',
  'Has worked on customer-facing commerce apps, real-time chat, internal portals, admin dashboards, and operational workflows.',
  'Uses React Native, ReactJS, Node.js, REST, GraphQL, Socket.IO, MySQL, and MongoDB in production work.',
]

const recruiterSignals = [
  { label: 'Primary role', value: 'Full Stack Developer' },
  { label: 'Best fit', value: 'Mobile + Backend product teams' },
  { label: 'Location', value: 'New Delhi, India' },
  { label: 'Notice', value: 'Available for interviews' },
]

const valuePillars = [
  {
    icon: Workflow,
    title: 'End-to-end delivery',
    text: 'Turns ambiguous product requirements into shipped mobile, web, API, and admin workflows.',
  },
  {
    icon: ShieldCheck,
    title: 'Production mindset',
    text: 'Focuses on reliable API behavior, maintainable code paths, and operational visibility.',
  },
  {
    icon: Users,
    title: 'Business alignment',
    text: 'Builds systems used by customers, cafes, support, finance, and internal operations teams.',
  },
]

const experience = [
  {
    company: 'Blue Tokai Coffee Roasters',
    role: 'Full Stack Developer, Mobile App + Backend',
    period: 'Feb 2023 - Present',
    location: 'Gurgaon',
    summary:
      'Owns mobile, backend, admin, and internal operations products for a fast-growing consumer brand.',
    points: [
      'Delivered customer-facing React Native app features across ordering, cafe pickup, dine-in, product discovery, offers, and account journeys.',
      'Built reimbursement, admin, and cafe router downtime portals that improved internal tracking and operational coordination.',
      'Improved Node.js API flows and data-backed workflows for reliability, visibility, and day-to-day business speed.',
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
      'Developed Scord, Fanful, and gamesee.gg features for communities, fan engagement, and gaming products.',
      'Contributed reusable React Native screens, API integrations, release fixes, and responsive product experiences.',
      'Worked closely with product and QA teams in a fast-paced delivery environment with changing priorities.',
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
      'Implemented endless-scroll media experiences and high-traffic mobile UI flows in Radio FM.',
      'Built Socket.IO chat features for Radio FM and Screen Recorder with real-time message behavior.',
      'Worked on DaramFlicks and other mobile initiatives spanning app UI, backend integration, and delivery support.',
    ],
  },
]

const projects = [
  {
    title: 'Blue Tokai Coffee App',
    type: 'Mobile Commerce',
    url: 'https://play.google.com/store/apps/details?id=com.bluetokaicoffee.app',
    description:
      'Mobile commerce experience for ordering coffee, order-ahead cafe pickup, dine-in table ordering, roasted beans, brewing gear, offers, and community updates.',
    tags: ['React Native', 'Node.js', 'MySQL', 'Coffee App'],
  },
  {
    title: 'Blue Tokai Reimbursement Portal',
    type: 'Internal Tooling',
    url: 'https://reimbursement.bluetokaicoffee.com/login',
    description:
      'Business workflow portal for submitting, tracking, and processing reimbursement requests with cleaner internal visibility.',
    tags: ['ReactJS', 'Node.js', 'Dashboard', 'Portal'],
  },
  {
    title: 'Rozdeal',
    type: 'Grocery Delivery',
    url: 'https://play.google.com/store/apps/details?id=com.selnox.rozdeal',
    description:
      'Local grocery delivery app with product discovery, checkout flows, daily essentials categories, and delivery tracking.',
    tags: ['React Native', 'Delivery', 'Checkout'],
  },
  {
    title: 'Scord',
    type: 'Fan Engagement App',
    url: 'https://www.businesswire.com/news/home/20230523006096/en/Rae-Sremmurd-SCORD-Announce-SREMM4LIFE-Video-Game-Challenge',
    description:
      'Fan engagement app for artists, brands, and creators with skill-based games, tournaments, prizing, and CRM workflows.',
    tags: ['React Native', 'Games', 'Tournaments'],
  },
  {
    title: 'gamesee.gg',
    type: 'Gaming Platform',
    url: 'https://gamesee.gg/',
    description:
      'Online mini-games platform with puzzle, arcade, strategy, multiplayer, and casual games playable across web and mobile.',
    tags: ['ReactJS', 'Gaming', 'Mini Games'],
  },
  {
    title: 'Lucky Diem',
    type: 'Card-linked Offers',
    url: 'https://luckydiem.com/',
    description:
      'Card-linked offer network connecting merchants to measurable rewards, cashback, linked cards, wallets, and engagement workflows.',
    tags: ['Frontend', 'Rewards', 'Offers'],
  },
  {
    title: 'GoMechanic',
    type: 'Car Services Platform',
    url: 'https://gomechanic.in/',
    description:
      'Automotive service platform for car servicing, repairs, accessories, transparent pricing, pickup slots, and service updates.',
    tags: ['Product', 'Service Booking', 'Auto'],
  },
  {
    title: 'KitabCloud',
    type: 'Audio + E-book App',
    url: 'https://play.google.com/store/apps/details?id=com.techhouse.kitabcloud',
    description:
      'Digital library app for African literature with audiobooks, e-books, podcasts, offline reading, bookmarks, notes, and reviews.',
    tags: ['React Native', 'Audio Books', 'E-books'],
  },
  {
    title: 'PetSquare',
    type: 'Pet Commerce Platform',
    url: 'https://dev.petsquare.co.nz/',
    description:
      'Pet commerce platform for account creation, product discovery, shopping, shipping information, and customer-facing workflows.',
    tags: ['Frontend', 'E-commerce', 'Pet Care'],
  },
]

const skillGroups = [
  {
    icon: Smartphone,
    title: 'Mobile engineering',
    skills: ['React Native', 'Expo / CLI', 'iOS + Android', 'App store flows', 'Mobile UX'],
  },
  {
    icon: Server,
    title: 'Backend systems',
    skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Socket.IO', 'Auth flows'],
  },
  {
    icon: Code2,
    title: 'Web platforms',
    skills: ['ReactJS', 'Admin panels', 'Dashboards', 'Responsive UI', 'Internal tools'],
  },
  {
    icon: Database,
    title: 'Data and workflows',
    skills: ['MySQL', 'MongoDB', 'Chat history', 'Structured records', 'Reporting views'],
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
          <small>Full Stack Developer</small>
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
        <div className="hero-shell">
          <div className="hero-content">
            <p className="eyebrow">
              <Sparkles size={16} /> Full stack developer for MNC product teams
            </p>
            <h1>React Native + Node.js engineer who ships complete product features.</h1>
            <p className="hero-copy">
              I build mobile apps, web dashboards, APIs, and internal platforms used by
              customers and business teams. My work is strongest where product clarity,
              backend reliability, and release ownership all matter.
            </p>

            <div className="role-strip" aria-label="Role fit summary">
              <span><Target size={16} /> React Native</span>
              <span><Server size={16} /> Node.js APIs</span>
              <span><Code2 size={16} /> ReactJS dashboards</span>
              <span><Database size={16} /> MySQL + MongoDB</span>
            </div>

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

          <aside className="hero-panel" aria-label="Candidate summary">
            <div className="profile-row">
              <img className="profile-photo" src="/vikas-profile.jpg" alt="Vikas Tiwari" />
              <div>
                <span className="availability">MNC-ready profile</span>
                <h2>Vikas Tiwari</h2>
                <p>Full Stack Developer, Mobile App + Backend</p>
              </div>
            </div>
            <div className="recruiter-card">
              {recruiterSignals.map((signal) => (
                <div key={signal.label}>
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>
              ))}
            </div>
            <div className="hero-panel-grid">
              <span><CheckCircle2 size={16} /> Product delivery</span>
              <span><CheckCircle2 size={16} /> API ownership</span>
              <span><CheckCircle2 size={16} /> Mobile releases</span>
              <span><CheckCircle2 size={16} /> Internal tools</span>
            </div>
            <div className="panel-links">
              <a href="https://www.linkedin.com/in/vikas-tiwari-446b1b140/" target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={17} /> LinkedIn
              </a>
              <a href="https://github.com/Aman121K" target="_blank" rel="noreferrer">
                <Code2 size={17} /> GitHub
              </a>
            </div>
          </aside>
        </div>
        <div className="hero-proof" aria-label="Career highlights">
          {stats.map((stat) => (
            <div className="proof-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="intro-band" id="profile">
        <div className="section-heading">
          <p className="eyebrow">Profile</p>
          <h2>A practical engineer who can join a team, understand the product, and start shipping useful work.</h2>
        </div>
        <div className="intro-grid">
          <div>
            <p>
              Since June 2020, I have designed, built, and maintained mobile applications,
              backend platforms, admin dashboards, and internal tools. I am comfortable
              reading requirements, breaking work into deliverable parts, integrating APIs,
              fixing release issues, and supporting features after launch.
            </p>
            <div className="value-grid">
              {valuePillars.map(({ icon: Icon, title, text }) => (
                <article key={title}>
                  <Icon size={20} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="highlight-list">
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Recent experience with real products, business workflows, and release responsibility.</h2>
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
          <h2>Projects grouped around what MNC screeners look for: product range, ownership, and relevant stack.</h2>
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
          <h2>Technical skills organized by how they apply to real product delivery.</h2>
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

      <section className="section credibility-section" aria-label="Why hire Vikas">
        <div className="section-heading">
          <p className="eyebrow">Hiring Signal</p>
          <h2>What MNC teams can expect from day one.</h2>
        </div>
        <div className="credibility-grid">
          <article>
            <Layers3 size={24} />
            <h3>Cross-functional execution</h3>
            <p>Works across product, backend, mobile, web, QA, and business stakeholders without losing delivery momentum.</p>
          </article>
          <article>
            <Globe2 size={24} />
            <h3>Product breadth</h3>
            <p>Experience spans commerce, gaming, fan engagement, automotive services, pet commerce, media, and internal systems.</p>
          </article>
          <article>
            <Award size={24} />
            <h3>Interview-ready clarity</h3>
            <p>Can explain responsibilities, architecture choices, project tradeoffs, and delivered work clearly in screening rounds.</p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s discuss full stack, mobile, or product engineering opportunities.</h2>
          <p>
            Best fit: React Native, ReactJS, Node.js backend, admin systems, and full stack
            product roles in teams that value ownership and reliable delivery.
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
        <span>Vikas Tiwari · Full Stack Developer · React Native · Node.js · ReactJS</span>
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
