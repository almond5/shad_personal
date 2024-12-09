import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <div
        id="about"
        style={{
          alignSelf: 'start',
          marginLeft: '20vw',
          marginTop: '10vh',
          height: '5vh',
        }}
      ></div>
      <div
        className="mx-auto"
        style={{
          display: 'flex',
          maxWidth: '36rem',
          padding: '0 1.5rem',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
          alignSelf: 'center',
          marginTop: '5vh',
          textAlign: 'left',
          marginBottom: '5vh',
        }}
      >
        <a
          style={{
            fontWeight: 800,
            fontSize: '1.5rem',
            marginBottom: '0.5vh',
          }}
        >
          About Me
        </a>
        <a
          style={{
            marginBottom: '2vh',
          }}
        >
          Greetings, my name is Adrian Hossen and I&apos;m an incoming Software
          Engineer @ Microsoft. I recently graduated from the University of
          Central Florida with a Bachelor&apos;s in Computer Science (Summa Cum
          Laude).
        </a>
        <a
          style={{
            marginBottom: '2vh',
          }}
        >
          I&apos;m passionate about full-stack software development, artificial
          intelligence, and machine learning. I&apos;m always looking for new
          opportunities to learn and grow. If you would like to discuss any
          opportunities, please feel free to reach out to me via email or
          LinkedIn.
        </a>
        <a>
          As it pertains to my skillset, I have experience working with
          full-stack web applications, mobile applications, database systems,
          data analysis, machine learning models, and data pipelines. Here is a
          list of the technologies that I am familiar with:
        </a>
        <a style={{ marginTop: '2vh', fontWeight: 800 }}>Languages</a>
        <ul className={styles.columns}>
          <li>
            <a>Java</a>
          </li>
          <li>
            <a>C#</a>
          </li>
          <li>
            <a>C</a>
          </li>
          <li>
            <a>JavaScript</a>
          </li>
          <li>
            <a>TypeScript</a>
          </li>
          <li>
            <a>HTML</a>
          </li>
          <li>
            <a>CSS</a>
          </li>
          <li>
            <a>SQL</a>
          </li>
          <li>
            <a>Python</a>
          </li>
          <li>
            <a>PHP</a>
          </li>
          <li>
            <a>SCOPE</a>
          </li>
          <li>
            <a>R</a>
          </li>
        </ul>
        <a style={{ marginTop: '2vh', fontWeight: 800 }}>Databases</a>
        <ul className={styles.columns}>
          <li>
            <a>Prisma</a>
          </li>
          <li>
            <a>Cosmos</a>
          </li>
          <li>
            <a>MySQL</a>
          </li>
          <li>
            <a>PlanetScale</a>
          </li>
          <li>
            <a>PhpMyAdmin</a>
          </li>
          <li>
            <a>Workbench</a>
          </li>
          <li>
            <a>GraphQL</a>
          </li>
          <li>
            <a>NoSQL</a>
          </li>
          <li>
            <a>AWS RDS</a>
          </li>
        </ul>
        <a style={{ marginTop: '2vh', fontWeight: 800 }}>Tools</a>
        <ul className={styles.columns}>
          <li>
            <a>GitHub</a>
          </li>
          <li>
            <a>React</a>
          </li>
          <li>
            <a>Next.js</a>
          </li>
          <li>
            <a>Durable Task</a>
          </li>
          <li>
            <a>Lambda</a>
          </li>
          <li>
            <a>EventBridge</a>
          </li>
          <li>
            <a>Vercel</a>
          </li>
          <li>
            <a>React Native</a>
          </li>
          <li>
            <a>Expo</a>
          </li>
          <li>
            <a>Figma</a>
          </li>
          <li>
            <a>Tailwind</a>
          </li>
          <li>
            <a>R-Studio</a>
          </li>
        </ul>
      </div>
    </>
  );
}
