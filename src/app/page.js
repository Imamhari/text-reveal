import Pharagraph from '../components/Paragraph';
import Words from '../components/Words';
import Characters from '../components/Characters';

const paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
export default function Home() {
  return (
   <main>
    <div style={{height: "100vh"}}></div>
    <Pharagraph value={paragraph}/>
    <div style={{height: "100vh"}}></div>
    <div style={{height: "100vh"}}></div>
    <Words value={paragraph}/>
    <div style={{height: "100vh"}}></div>
    <div style={{height: "100vh"}}></div>
    <Characters value={paragraph}/>
    <div style={{height: "100vh"}}></div>
   </main>
  );
}

