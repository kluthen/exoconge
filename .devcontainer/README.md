# CONGE 2000

Créer une fonction calculJoursCongés(dateDebut, periodeDebut, datefin, periodeFin, planning, typeCalcul, typeDemande)
dateDebut / dateFin : date YYYY-MM-DD
periodeDebut / periodeFin : [‘morning’ , ‘afternoon’]
planning: Array
typeCalcul: [‘ouvre’, ‘ouvrable’]
typeDemande: [1, 2, 3, 4] avec 1 = congés payés
- Calcul du nombre de demi-journées du premier moment d'absence jusqu'au retour au travail du collaborateur
- Une entreprise peut etre en jours ouvrés (5 jours / semaine) ou jours ouvrables (6 jours par semaine)
- En jours ouvrables on a un maximum de majoration de 5 demi-journées de chaque demi-journées de la semaine par an
- Le planning d'un collaborateur est sous forme d'un tableau à double entrée: [ "day1" => ["morning" => true , "afternoon" => "true"] , "day2" => ... ]
- S'il ne s'agit pas d'une demande de congés payés et que l'entreprise compte en jours ouvrable il ne faut pas majorer
- Il ne faut jamais compter les jours fériés dans le décompte
- Une personne à temps partiel en jours ouvrés doit avoir le même décompte (définition des 10 demi-journées à retirer)
- Les jours de fériés en France sont disponibles en JSON sur le site: https://www.data.gouv.fr/datasets/jours-feries-en-france