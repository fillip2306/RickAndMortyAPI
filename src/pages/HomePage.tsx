function HomePage() {
  return (
    <div className="text-center p-8 border rounded-lg shadow-lg w-3/4 mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-blue-500">Velkommen til Rick and Morty Appen!</h2>

      <p className="text-lg mb-4">
        Denne nettsiden lar deg utforske universet til 
        <span className="font-semibold"> Rick and Morty</span> gjennom data hentet direkte fra det åpne API-et. <br></br>
        Her kan du enkelt navigere mellom ulike sider for å oppdage karakterer, steder og detaljer fra serien.
      </p>

      <p className="text-lg mb-4">
        Du kan se en komplett oversikt over alle karakterene, finne ut hvor de kommer fra, 
        og søke etter en spesifikk karakter ved hjelp av ID. 
        Målet er å gi deg en enkel og interaktiv måte å utforske serien på.
      </p>

      <p className="text-lg mb-4">
        Applikasjonen er bygget i <span className="italic">React</span> og henter informasjon med 
        <span className="italic"> Axios</span>. Navigasjonen mellom sidene gjøres med 
        <span className="italic"> React Router</span>, og alt er stilsett med 
        <span className="italic"> Tailwind CSS</span> for et moderne og responsivt uttrykk.
      </p>

      <p className="text-lg">
        Løsningen fungerer som en ren frontend-applikasjon uten egen backend eller database, 
        og henter all informasjon direkte fra API-et i sanntid.
      </p>
    </div>
  );
}

export default HomePage;
