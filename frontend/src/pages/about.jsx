import "./about.css"
import me from "./me.jpg"
export default function About() {
  return (
    <div className="container">
        <div className="title">
          <img src={me} />
            <div className="title-header">
                <h1>Welcome to My Website</h1>
                <p>My name is James and student ID is B10902063.</p>
                <p>I'm a sophomore major in NTU CSIE.</p> 
                <p>Happy to see you guys!!!</p>
            </div>
        </div>
    </div>
  );
}
