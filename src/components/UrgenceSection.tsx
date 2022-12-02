const UrgenceSection = () => {
  return (
    <section className="h-fit px-8 py-24 md:h-screen" id="urgences">
      <div className="space-y-2">
        <h1 className="text-xl font-bold text-pink-500 md:text-4xl">
          URGENCE !
        </h1>
        <p className="text-lg text-gray-400">
          Je viens d’avoir un rapport à risque ! Qu’est-ce que je fais
        </p>
      </div>

      <div className="mt-8">
        <h3 className="pb-2 font-semibold">
          Qu’est-ce qu’un rapport à risque ?
        </h3>
        <p>
          C’est un rapport où les partenaires ne se sont pas protégés ou alors
          lorsque les moyens de protection n’ont pas été efficaces. Mais…les
          moyens de se protéger contre quoi ???
        </p>
      </div>

      <div className="mt-8">
        <h3 className="pb-2 font-semibold">Eh bien ça dépend !</h3>
        <div className="space-y-2">
          <ul className="list-disc">
            <li>
              Si tu ne veux pas avoir d’enfant, tu utilises un moyen de
              contraception (pilule contraceptive, stérilet…).
            </li>
            <li>
              Si tu veux te protéger toi et ton partenaire des ISR (infections
              sexuellement transmissibles), tu utilises un préservatif à chaque
              rapport.
            </li>
          </ul>
          <p>
            Et si tu ne veux ni d’enfant ni des IST ?{' '}
            <span className="font-bold">
              Tu utilises un préservatif à chaque rapport. C’est le SEUL moyen
              d’éviter une grossesse ET les IST.
            </span>
          </p>
          <p>
            Mais les accidents et les oublis arrivent…et aucun moyen de
            contraception n’est parfait. Donc, dans ces cas-là. Qu’est-ce qu’on
            fait ? Eh bien c’est pareil.
          </p>
          <p className="pb-4">
            Ça dépend ! Retrouve la situation la plus proche de la tienne dans
            le tableau ci-dessous :
          </p>

          <table className="table-auto">
            <thead>
              <tr>
                <th>Situations</th>
                <th>Conséquences/risques</th>
                <th>Réflexes à avoir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Un rapport sexuel sans préservatif (quelque soit le sexe des
                  partenaires)
                </td>
                <td>Avoir une IST ET risque de grossesse</td>
                <td>
                  Aller chez son médecin ou aux urgences le plus tôt possible
                  (pilule du lendemain + TPE)
                </td>
              </tr>
              <tr>
                <td>
                  Un rapport sexuel sous contraceptif (pilule, stérilet,
                  implant…) mais sans préservatif
                </td>
                <td>Avoir une IST</td>
                <td>
                  Aller chez son médecin ou aux urgences le plus tôt possible
                  (TPE)
                </td>
              </tr>
              <tr>
                <td>
                  Un couple qui a fait les tests pour les IST mais oubli de
                  pilule (ou diarrhées/vomissements qqs heures après la prise)
                </td>
                <td>Risque de grossesse</td>
                <td>
                  Aller en pharmacie le plus tôt possible (pilule du lendemain)
                </td>
              </tr>
            </tbody>
          </table>

          <p className="pt-4">
            Pour information :
            <ul>
              <li>
                Un{' '}
                <span className="font-bold underline">
                  test anonyme et gratuit
                </span>{' '}
                permet de savoir si l’on est porteur du VIH (Virus responsable
                du SIDA) ou non.
              </li>
              <li>
                TPE est un traitement d’urgence qui permet d’éviter d’être
                contaminé par le VIH si on a été en contact avec celui-ci sans
                le savoir.
              </li>
              <li>
                La pilule du lendemain est un médicament qui permet d’éviter une
                fécondation après un rapport sexuel. Plus elle est prise tôt,
                plus elle a des chances d’être efficace (pas besoin d’être prise
                le lendemain)
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgenceSection;
