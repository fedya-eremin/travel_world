import Location from './locations.js';
import {
    event1,
    event2,
    event3,
    event4,
    event5,
    event6,
    event7,
    event8,
    event9 
} from './story.js';

const taverna = new Location(
    'Таверна "Синий пони"',
    'Здесь отдает выпивкой и древисиной, очень много сомнительных людей. Но, тем не менее, это место вы любите.',
    event1, event4
);

const outside = new Location(
    'Наружа',
    'Вокруг таверны располагается глубокий лес. Вы чувствуете осеннюю прохладу.',
    [event2, event3] 
)

const forest = new Location(
    'Лес',
    'Темный таинственный лес.',
    event4
)

const castle = new Location(
    'Замок барона',
    'Огромное полуразрушенное здание.',
    event5
)

const tavernaRest = new Location(
    'Таверна "Дикий мёд"',
    'Таверна выглядит хуже, чем та, в которой вы были.',
    event6, event7
)

const mystery_lake = new Location(
    'Таинственное озеро',
    'Здесь какой-то плотный туман.',
    event8
)


const cave_of_bear = new Location(
    'Пещера медведя',
    'Заброшенная пещера. Вокруг валяются кости.',
    event9
)

export default route = [
    taverna,
    outside,
]
