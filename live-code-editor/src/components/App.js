import '../stylesheets/App.css';
import Editor from './Editor';
import { useState } from 'react';


function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");

  const srcDoc = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
    </html>
  `
  return (
    <>
      <section>
        <div className="container">
          <section className="flex between ">
            <article className="editor_section flex-48">
              <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} />
              <Editor language="css" displayName="CSS" value={css} onChange={setCss}  />
            </article>

            <article className="output_section flex-48">
              <div className=" output_top flex align_center between">
              <div className="flex">
                     <div className="dots dot_1"></div>
                     <div className="dots dot_2"></div>
                     <div className="dots dot_3"></div>
                 </div>
              <h2 className="output_heading">OUTPUT</h2>
              </div>
                <iframe src="" title="output" srcDoc={srcDoc} frameborder="0"></iframe>
            </article>
          </section>
        </div>
      </section>
    </>
  );
}

export default App;
