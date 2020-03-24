import React from 'react';
import Footer from '../components/Footer';

export default function DSGVO() {
  return (
    <div className="mt-4 p-4">
      <div className="disclaimer">
        <h4 className="font-teaser my-4">Disclaimer</h4>

        <p>
          Die Webseite enthält sowohl Inhalte, die RB Leipzig zur Nutzung bereithält (nachfolgend: „eigene Inhalte“), als auch Inhalte und Angebote, die für Nutzer der Webseite nicht durch RB Leipzig, sondern ausschließlich durch Dritte bereitgehalten oder durch andere Nutzer eingestellt werden können, insb. im Bereich „Hilfe anbieten – Hilfe bekommen“ (nachfolgend jeweils: „fremde Inhalte“).
        </p>

        <br />
        <p>
          RB Leipzig übernimmt keine Verantwortung für fremde Inhalte der Webseite und macht sich fremde Inhalte der Webseite zu keinem Zeitpunkt zu eigen. Eine Überprüfung fremder Inhalte auf Vollständigkeit, Richtigkeit und Rechtmäßigkeit findet durch RB Leipzig nicht statt. Nach §§ 8 bis 10 TMG ist RB Leipzig als Diensteanbieter nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen wird RB Leipzig die betreffenden Inhalte umgehend entfernen.
        </p>

      </div>
      <Footer />
    </div>
  );
}
