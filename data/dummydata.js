import Quiz from "../models/Quiz";

export const QUIZZES = [
  new Quiz(
    "Liverpool",
    "#1",
    [
      { playerNumber: "1", playerName: "Alisson", visible: false },
      { playerNumber: "2", playerName: "Clyne", visible: false },
      { playerNumber: "3", playerName: "Fabinho", visible: false },
      { playerNumber: "4", playerName: "Van Dijk", visible: false },
      { playerNumber: "5", playerName: "Wijnaldum", visible: false },
      { playerNumber: "6", playerName: "Lovren", visible: false },
      { playerNumber: "7", playerName: "Milner", visible: false },
      { playerNumber: "8", playerName: "Keita", visible: false },
      { playerNumber: "9", playerName: "Firmino", visible: false },
      { playerNumber: "10", playerName: "Mane", visible: false },
      { playerNumber: "11", playerName: "Salah", visible: false },
      { playerNumber: "12", playerName: "Gomez", visible: false },
      { playerNumber: "13", playerName: "Adrian", visible: false },
      { playerNumber: "14", playerName: "Henderson", visible: false },
      { playerNumber: "15", playerName: "Oxlade-Chamberlain", visible: false },
      { playerNumber: "18", playerName: "Minamino", visible: false },
      { playerNumber: "20", playerName: "Lallana", visible: false },
      { playerNumber: "22", playerName: "Lonergan", visible: false },
      { playerNumber: "23", playerName: "Shaqiri", visible: false },
      { playerNumber: "24", playerName: "Brewster", visible: false },
      { playerNumber: "26", playerName: "Robertson", visible: false },
      { playerNumber: "27", playerName: "Origi", visible: false },
      { playerNumber: "32", playerName: "Matip", visible: false },
      { playerNumber: "66", playerName: "Alexander-Arnold", visible: false }
    ],
    false,
    "http://pluspng.com/img-png/logo-liverpool-fc-png-liverpool-fc-logo-500.png"
  ),
  new Quiz(
    "Real Madrid",
    "#2",
    [
      { playerNumber: "1", playerName: "Areola", visible: false },
      { playerNumber: "2", playerName: "Carvajal", visible: false },
      { playerNumber: "3", playerName: "Militao", visible: false },
      { playerNumber: "4", playerName: "Ramos", visible: false },
      { playerNumber: "5", playerName: "Varane", visible: false },
      { playerNumber: "6", playerName: "Nacho", visible: false },
      { playerNumber: "7", playerName: "Hazard", visible: false },
      { playerNumber: "8", playerName: "Kroos", visible: false },
      { playerNumber: "9", playerName: "Benzema", visible: false },
      { playerNumber: "10", playerName: "Modric", visible: false },
      { playerNumber: "11", playerName: "Bale", visible: false },
      { playerNumber: "12", playerName: "Marcelo", visible: false },
      { playerNumber: "13", playerName: "Courtois", visible: false },
      { playerNumber: "14", playerName: "Casemiro", visible: false },
      { playerNumber: "15", playerName: "Valverde", visible: false },
      { playerNumber: "16", playerName: "James Rodriguez", visible: false },
      { playerNumber: "17", playerName: "Vazquez", visible: false },
      { playerNumber: "18", playerName: "Jovic", visible: false },
      { playerNumber: "19", playerName: "Odriozola", visible: false },
      { playerNumber: "20", playerName: "Asensio", visible: false },
      { playerNumber: "21", playerName: "Brahim", visible: false },
      { playerNumber: "22", playerName: "Isco", visible: false },
      { playerNumber: "23", playerName: "Mendy", visible: false },
      { playerNumber: "24", playerName: "Mariano", visible: false },
      { playerNumber: "25", playerName: "Vinicius", visible: false },
      { playerNumber: "27", playerName: "Rodrygo", visible: false }
    ],
    false,
    "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png"
  ),
  new Quiz(
    "Barcelona",
    "#3",
    [
      { playerNumber: "1", playerName: "Ter Stegen", visible: false },
      { playerNumber: "2", playerName: "Semedo", visible: false },
      { playerNumber: "3", playerName: "Pique", visible: false },
      { playerNumber: "4", playerName: "Rakitic", visible: false },
      { playerNumber: "5", playerName: "Busquets", visible: false },
      { playerNumber: "6", playerName: "Todibo", visible: false },
      { playerNumber: "8", playerName: "Arthur", visible: false },
      { playerNumber: "9", playerName: "Suarez", visible: false },
      { playerNumber: "10", playerName: "Messi", visible: false },
      { playerNumber: "11", playerName: "Dembele", visible: false },
      { playerNumber: "13", playerName: "Neto", visible: false },
      { playerNumber: "15", playerName: "Lenglet", visible: false },
      { playerNumber: "16", playerName: "Wague", visible: false },
      { playerNumber: "17", playerName: "Griezmann", visible: false },
      { playerNumber: "18", playerName: "Alba", visible: false },
      { playerNumber: "20", playerName: "Sergi Roberto", visible: false },
      { playerNumber: "21", playerName: "de Jong", visible: false },
      { playerNumber: "22", playerName: "Vidal", visible: false },
      { playerNumber: "23", playerName: "Umtiti", visible: false },
      { playerNumber: "24", playerName: "Firpo", visible: false }
    ],
    false,
    "https://www.stickpng.com/assets/images/584a9b3bb080d7616d298777.png"
  ),
  new Quiz(
    "Manchester City",
    "#4",
    [
      { playerNumber: "1", playerName: "Bravo", visible: false },
      { playerNumber: "2", playerName: "Walker", visible: false },
      { playerNumber: "5", playerName: "Stones", visible: false },
      { playerNumber: "7", playerName: "Sterling", visible: false },
      { playerNumber: "8", playerName: "Gundogan", visible: false },
      { playerNumber: "9", playerName: "Gabriel Jesus", visible: false },
      { playerNumber: "10", playerName: "Aguero", visible: false },
      { playerNumber: "11", playerName: "Zinchenko", visible: false },
      { playerNumber: "12", playerName: "Angelino", visible: false },
      { playerNumber: "14", playerName: "Laporte", visible: false },
      { playerNumber: "16", playerName: "Rodrigo", visible: false },
      { playerNumber: "17", playerName: "De Bruyne", visible: false },
      { playerNumber: "19", playerName: "Sane", visible: false },
      { playerNumber: "20", playerName: "Bernardo Silva", visible: false },
      { playerNumber: "21", playerName: "David Silva", visible: false },
      { playerNumber: "22", playerName: "Mendy", visible: false },
      { playerNumber: "25", playerName: "Fernandinho", visible: false },
      { playerNumber: "26", playerName: "Mahrez", visible: false },
      { playerNumber: "27", playerName: "Cancelo", visible: false },
      { playerNumber: "30", playerName: "Otamendi", visible: false },
      { playerNumber: "31", playerName: "Ederson", visible: false },
      { playerNumber: "47", playerName: "Foden", visible: false }
    ],
    false,
    "http://pluspng.com/img-png/manchester-city-png-manchester-city-2016-png-1708.png"
  ),
  new Quiz(
    "Bayern Munich",
    "#5",
    [
      { playerNumber: "1", playerName: "Neuer", visible: false },
      { playerNumber: "4", playerName: "Sule", visible: false },
      { playerNumber: "5", playerName: "Pavard", visible: false },
      { playerNumber: "6", playerName: "Thiago", visible: false },
      { playerNumber: "8", playerName: "Javi Martinez", visible: false },
      { playerNumber: "9", playerName: "Lewandowski", visible: false },
      { playerNumber: "10", playerName: "Coutinho", visible: false },
      { playerNumber: "11", playerName: "Cuisance", visible: false },
      { playerNumber: "14", playerName: "Perisic", visible: false },
      { playerNumber: "17", playerName: "Boateng", visible: false },
      { playerNumber: "18", playerName: "Goretzka", visible: false },
      { playerNumber: "19", playerName: "Davies", visible: false },
      { playerNumber: "21", playerName: "Lucas Hernandez", visible: false },
      { playerNumber: "22", playerName: "Gnabry", visible: false },
      { playerNumber: "24", playerName: "Tolisso", visible: false },
      { playerNumber: "25", playerName: "Muller", visible: false },
      { playerNumber: "26", playerName: "Ulreich", visible: false },
      { playerNumber: "27", playerName: "Alaba", visible: false },
      { playerNumber: "29", playerName: "Coman", visible: false },
      { playerNumber: "32", playerName: "Kimmich", visible: false }
    ],
    false,
    "https://www.stickpng.com/assets/images/584d8683367b6a13e54477d4.png"
  ),
  new Quiz(
    "Juventus",
    "#6",
    [
      { playerNumber: "1", playerName: "Szczesny", visible: false },
      { playerNumber: "7", playerName: "Ronaldo", visible: false }
    ],
    false,
    "https://purepng.com/public/uploads/medium/purepng.com-juventus-logojuventuslogojuventus-turin-logonew-21529676316rtsoz.png"
  ),
  new Quiz(
    "Tottenham",
    "#8",
    [
      { playerNumber: "1", playerName: "Lloris", visible: false },
      { playerNumber: "7", playerName: "Son", visible: false },
      { playerNumber: "9", playerName: "Kane", visible: false }
    ],
    false,
    "https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4ee.png"
  ),
  new Quiz(
    "PSG",
    "#7",
    [
      { playerNumber: "1", playerName: "Navas", visible: false },
      { playerNumber: "22", playerName: "Di Maria", visible: false }
    ],
    false,
    "https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4d8.png"
  )
];
