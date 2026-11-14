const skills = [
  "AI Prompting — I write clear prompts to get good results from AI tools",
  "Computer Skills — hardware, troubleshooting, and basic maintenance",
  "Basic Programming — simple websites and programs",
  "Communication — explaining things clearly to others",
  "Problem Solving — figuring things out step by step",
];

const tools = [
  "VS Code — for coding",
  "GitHub — for saving and sharing my code",
  "AI tools (ChatGPT, etc.) — for helping with projects",
  "Microsoft Office (Word, Excel, PowerPoint) — for school work",
];

export default function Skills() {
  return (
    <>
      <div className="hero">
        <h1>My Skills</h1>
        <p>Things I know how to do.</p>
      </div>
      <section>
        <h2>Skills</h2>
        <ul className="skill-list">
          {skills.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Tools I Use</h2>
        <ul className="tool-list">
          {tools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
