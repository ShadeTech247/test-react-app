import Calculator from "./Components/Calculator";
import MultiStepForm from "./Components/MultistepForm";
function Header() {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold text-center">Abdulsamad's Portfolio</h1>
    </header>
  );
}

function About() {
  return (
    <section className="mb-8">
      <p className="text-base leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
        mattis massa. Duis lobortis tristique libero in gravida. Aenean porta
        pharetra massa, id scelerisque quam ultrices eget. Vivamus lorem orci,
        tincidunt id quam eu, finibus sagittis augue. Duis aliquet risus sem, in
        pretium orci sollicitudin vel. Duis consectetur sapien eget lorem
        sollicitudin euismod fermentum ut turpis. Etiam et dapibus elit. Fusce
        tempus nisl quis tempor tristique. Nunc mattis, libero at rutrum
        eleifend, felis nisl accumsan nunc, nec pulvinar augue mi at felis.
        Etiam dictum, felis ac imperdiet rhoncus, justo massa dictum purus, quis
        dictum velit magna et nulla. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Quisque sit amet iaculis magna. Fusce non condimentum
        sem, eget auctor libero. Mauris ac sem hendrerit, interdum urna quis,
        placerat nulla. Phasellus consequat tempus purus, a consectetur ex
        dictum vel. Nam lorem urna, accumsan id lacus at, imperdiet luctus
        magna. Curabitur at sodales massa. Vivamus tristique ex urna, dapibus
        sodales erat iaculis id. Etiam in erat vitae ante eleifend rutrum a a
        urna. Etiam id vehicula nisl, id hendrerit purus. Quisque nec metus
        consequat, sollicitudin nunc vitae, mattis ipsum. Aliquam facilisis
        porta enim vitae hendrerit.
      </p>
    </section>
  );
}

function Skills({ skills }) {
  return (
    <div>
      <h2>My skills</h2>
      <ul className="list-disc list-inside mb-8">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function Project({ name, description }) {
  return (
    <div className="border border-solid border-gray-300 mb-8 p-3">
      <p>{name}</p>
      <p>{description}
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2 className="text-3xl mb-3 text-center">Contact Us</h2>
      <div className="flex gap-4">
        <a href="#">Linkedin</a>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </div>
  );
}
function Footer() {
  return <footer>&copy 2025</footer>;
}
function App() {
  let softwareSkills = ["HTML", "CSS", "Javascript", "Git"];

  return (
    <div className="app text-black">
      <Header />
      <About />
      <Skills skills={softwareSkills} />
      <Project name="React App" description="A portfolio website built with react" />
      <Project name="HTML App" description="A portfolio website built with HTML"/>
      <Project name="Javascript App" description="A portfolio website built with Javascript"/>
      <Contact />
      <Footer />
      <Calculator />
      
    </div>
  );
}

export default App;
