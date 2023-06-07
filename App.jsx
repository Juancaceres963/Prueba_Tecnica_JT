import { useEffect, useState } from "react/cjs/react.production.min";

export default function App() {
  useEffect(() => {
    const [fact, setFact] = useState();

    fetch("https://catfact.ninja/fact")
      .them((res) => res.json())
      .them((data) => setFact(data.fact));
  }, []);

  return (
    <main>
      <h1>Pagina web de Gatos</h1>
    </main>
  );
}
