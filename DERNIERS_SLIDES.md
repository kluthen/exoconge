# Derniers Slides - Gestion des Congés

## Slide 7 : Exemple Classique

### Planning d'emploi du temps
```
             Matin    Après-midi
Lundi          1         1
Mardi          1         1
Mercredi       1         1
Jeudi          1         1
Vendredi       1         1
Samedi         0         0
Dimanche       0         0
```

### Décompte des congés

| Prise de congés | Décompte ouvrable | Décompte ouvré |
|---|---|---|
| Le collaborateur prend une semaine de congés payés | 6 jours * (5 jour) | 5 jours |
| Le collaborateur prend son mercredi matin en congés payés | 0,5 jour | 0,5 jour |
| Le collaborateur prend son vendredi en congés payés | 2 jours * (1 jour) | 1 jour |
| Le collaborateur prend jeudi 23 et vendredi 24 décembre en congés payés | 2 jours | 2 jours |
| Le collaborateur prend son Jeudi 13 Juillet en congés payés | 2 jours * (1 jour) | 1 jour |
| Le collaborateur prend son Vendredi en congés sans solde | 1 jour | 1 jour |

---

## Slide 8 : Exemple Temps Partiel

### Planning d'emploi du temps
```
             Matin    Après-midi
Lundi          1         1
Mardi          1         1
Mercredi       0         0
Jeudi          1         1
Vendredi       1         1
Samedi         0         0
Dimanche       0         0
```

### Décompte des congés

| Prise de congés | Décompte ouvrable | Décompte ouvré |
|---|---|---|
| Le collaborateur prend sa semaine de congés payés | 6 jours * (5 jours / 4 jours) | 5 jours |
| Le collaborateur prend son mercredi matin en congés payés | 0,5 jour | 0,5 jour |
| Le collaborateur prend son vendredi en congés payés | 2 jours * (1 jour) | 1 jour |
| Le collaborateur prend jeudi 23 et vendredi 24 décembre en congés payés | 2 jours | 2 jours |
| Le collaborateur prend son Jeudi 13 Juillet en congés payés | 2 jours * (1 jour) | 1 jour |
| Le collaborateur prend son Vendredi en congés sans solde | 1 jour | 1 jour |

---

## Slide 9 : Exemple Planning Décalé

### Planning d'emploi du temps
```
             Matin    Après-midi
Lundi          0         1
Mardi          1         1
Mercredi       1         1
Jeudi          1         1
Vendredi       1         1
Samedi         1         0
Dimanche       0         0
```

### Décompte des congés

| Prise de congés | Décompte ouvrable | Décompte ouvré |
|---|---|---|
| Le collaborateur prend sa semaine de congés payés | 6 jours * (5 jours) | 5 jours |
| Le collaborateur prend son lundi après-midi en congés payés | 0,5 jour | 0,5 jour |
| Le collaborateur prend son samedi matin en congés payés | 1,5 jour * (1 jour / 0,5 jour) | 0,5 jour |
| Le collaborateur prend vendredi 22 et Samedi 23 décembre en congés payés | 2 jours * (1,5 jour) | 1,5 jour |
| Le collaborateur prend son vendredi 13 Juillet en congés payés | 1,5 jour * (1 jour) | 1 jour |
| Le collaborateur prend son samedi en congés sans solde | 0,5 jour | 0,5 jour |

---

## Slide 10 : Exemple Planning Fragmenté

### Planning d'emploi du temps
```
             Matin    Après-midi
Lundi          1         1
Mardi          1         1
Mercredi       0         0
Jeudi          1         1
Vendredi       1         1
Samedi         1         1
Dimanche       0         0
```

### Décompte des congés

| Prise de congés | Décompte ouvrable | Décompte ouvré |
|---|---|---|
| Le collaborateur prend sa semaine de congés payés | 6 jours * (5 jours) | 5 jours |
| Le collaborateur prend son mardi en congés payés | 2 jours * (1 jour) | 1 jour |
| Le collaborateur prend son mardi 13 Juillet en congés payés | 1 jour | 1 jour |

---

## Slide 11 : Fragmenté + Partiel

### Planning d'emploi du temps
```
             Matin    Après-midi
Lundi          0         1
Mardi          1         1
Mercredi       0         0
Jeudi          1         1
Vendredi       1         1
Samedi         1         0
Dimanche       0         0
```

### Décompte des congés

| Prise de congés | Décompte ouvrable | Décompte ouvré |
|---|---|---|
| Le collaborateur prend sa semaine de congés payés | 6 jours * (5 jours) | 5 jours |
| Le collaborateur prend son samedi matin en congés payés | 0,5 jour * (1,5 jour) | 0,5 jour |
| Le collaborateur prend son mardi en congés payés | 2 jours * (1 jour) | 2 jours * (1 jour) |
| Le collaborateur prend son vendredi 24 décembre en congés payés | 1,5 jour * (1 jour) | 1 jour |

---

**Document créé le : 18 mars 2026**
