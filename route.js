import Location from "./locations.js";
import {
  event1,
  event2,
  event3,
  event4,
  event5,
  event6,
  event7,
  event8,
  event9,
  event10,
  event11,
  event12,
} from "./story.js";

const taverna = new Location(
  'Таверна "Синий пони"',
  "Здесь отдает выпивкой и древисиной, очень много сомнительных людей. Но, тем не менее, это место вы любите.",
  [event1, event12, event4],
);

const outside = new Location(
  "Наружа",
  "Вокруг таверны располагается глубокий лес. Вы чувствуете осеннюю прохладу.",
  [event2, event3],
);

const forest = new Location("Лес", "Темный таинственный лес.", [event10]);

const castle = new Location(
  "Замок барона",
  "Огромное полуразрушенное здание.",
  [event5, event6],
);

const tavernaRest = new Location(
  'Таверна "Дикий мёд"',
  "Таверна выглядит хуже, чем та, в которой вы были.",
  [event7],
);

const mysteryLake = new Location(
  "Таинственное озеро",
  "Здесь какой-то плотный туман.",
  [event11, event8]
);

const caveOfBear = new Location(
  "Пещера медведя",
  "Заброшенная пещера. Вокруг валяются кости.",
  [event9],
);

export const route = [
  taverna,
  outside,
  forest,
  castle,
  tavernaRest,
  mysteryLake,
  caveOfBear,
];

