function Header() {
  return (
    <header>
      <h1>Abdulsamad's Portfolio</h1>
    </header>
  );
}

function About() {
  return (
    <section>
      <p>
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
        <ul>{skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
    )
}

function Project({ name }) {
    return (
        <div>
            <p>{name}</p>
            <p>Project Description: eget auctor libero. Mauris ac sem hendrerit, interdum urna quis,
        placerat nulla. Phasellus consequat tempus purus, a consectetur ex
        dictum vel. Nam lorem urna, accumsan id lacus at, imperdiet luctus
        magna. Curabitur at sodales massa. Vivamus tristique ex urna, dapibus
        sodales erat iaculis id</p>
        </div>
    )
}

function Contact() {
    return (
        <div>
        <h2>Contact Us</h2>
        <div className="flex gap-4 bg-red-400">
        <a href="#">Linkedin</a>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a></div>
        </div>
    )
}
function Footer() {
    return(
        <footer>&copy 2025</footer>
    )
}
function App() {
  let softwareSkills = ["HTML", "CSS", "Javascript", "Git"]

  return (
    <div className="app">
      <Header />
      <About />
      <Skills skills={softwareSkills} />
      <Project name="React App" />
      <Project name="HTML App" />
      <Project name="Javascript App" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
