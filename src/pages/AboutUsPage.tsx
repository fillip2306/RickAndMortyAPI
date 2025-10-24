function AboutUsPage() {
  return (
    <div className="text-center p-8 border rounded-lg shadow-lg w-3/4 mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-blue-500">Om denne nettsiden</h2>

      <p className="text-lg mb-4">
        Denne nettsiden er utviklet som en del av et læringsprosjekt med mål om å forstå hvordan man bygger 
        en <span className="font-semibold">Single Page Application (SPA)</span> i React. <br></br>
        Prosjektet tar i bruk <span className="italic">React Router</span> for navigasjon mellom ulike sider 
        og <span className="italic">Axios</span> for å hente data fra det åpne <span className="font-semibold">Rick and Morty API</span>.
      </p>

      <p className="text-lg mb-4">
        Gjennom arbeidet har fokuset vært på strukturert og modulbasert koding, der komponenter gjenbrukes 
        for å skape en ryddig og vedlikeholdbar løsning. 
        Det er også benyttet <span className="italic">React Hooks</span> som <code>useState</code> og <code>useEffect</code> 
        for å håndtere tilstand og dataflyt i applikasjonen.
      </p>

      <p className="text-lg">
        Løsningen er en ren frontend-applikasjon uten backend eller database, og henter all informasjon direkte fra API-et i sanntid. 
        Siden er stilsett med <span className="italic">Tailwind CSS</span> for et moderne, enkelt og responsivt design.
      </p>
    </div>
  );
}

export default AboutUsPage;
