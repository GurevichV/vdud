const data = [
    {
        id: 1,
        name: 'Молочников',
        movies: [
            '"Скажи ей" - Александр Молочников',
            '"Восхождение" - Лариса Шепитько',
            '"Энни Холл" - Вуди Аллен',
            '"Лалай-Балалай" - Руслан Братов',
            '"Груз 200" -Алексей Балабанов',
            '"Хрусталев, машину!" - Алексей Герман'
        ],
        books: [
            '"Повелитель Мух" - Уильям Голдинг',
            '"Жизнь и судьба" - Василий Гроссман',
            '"История одного немца" - Себастьян Хафнер',
            '"Осень патриарха" - Габриэль Гарсиа Маркес'
        ],
    },
    {
        id: 2,
        name: 'Баунов',
        movies: [
            '"Олдбой" - Пак Чхан-ук',
            '"Игра в кальмара" - Хван Дон-хёк',
            '"Воспоминания об убийстве" - Пон Джун-хо',
            '"Поезд в Пусан" - Ён Сан-хо',
            '"Паразиты" - Пон Джун-хо'
        ],
        books: [
            '"Поэтика ранневизантийской литературы" - Сергей Аверинцев'
        ],
    },
    {
        id: 3,
        name: 'Лобков',
        movies: [
            '"Осло" - Бартлетт Шер',
        ],
        books: ['"Роковые яйца" - Михаил Афанасьевич Булгаков']
    },
    {
        id: 4,
        name: 'Noize MC',
        movies: [
            '"Сохрани мою речь навсегда" - Рома Либеров',
            '"Розыгрыш" - Андрей Кудиненко'
        ],
        books: [
            '"Воспоминания" - Надежда Мандельштам',
            '"Попытка к бегству" - Братья Стругацкие',
            '"День опричника" - Владимир Сорокин',
            '"Подстрочник" - Олег Дорман'
        ]
    },
    {
        id: 5,
        name: 'Гессен',
        books: [
            '"The Man Without A Face: The Unlikely Rise of Vladimir Putin" - Маша Гессен',
            '"The 900 Days: The Siege of Leningrad" - Harrison E. Salisbury',
            '"Сталинский нос" - Евгений Ельчин',
            '"Истоки тоталитаризма" - Ханна Арендт',
            '"Банальность зла" - Ханна Арендт',
            '"Последние дни Сталина" - Джошуа Рубинштейн'
        ]
    },
    {
        id: 6,
        name: 'Серебренников',
        movies: [
            '"Жена Чайковского" - Кирилл Серебренников',
            '"Дылда" - Кантемир Балагов',
            '"Петровы в гриппе" - Кирилл Серебренников',
            '"Ученик" - Кирилл Серебренников',
            '"Похороны сталина" - Кирилл Серебренников (спектакль)',
            '"Лето" - Кирилл Серебренников'
        ],
        books: [
            '"Чёрный монах" - Антон Павлович Чехов',
            '"Околоноля" - Владислав Сурков',
            '"Санькя" - Захар Прилепин',
            '"Обитель" - Захар Прилепин',
            '"Лимонов" - Эммануэль Каррер'
        ]
    },
    {
        id: 7,
        name: 'Яшин 2022',
        books: [
            '"Угроза национальной безопасности" - Илья Яшин',
        ]
    },
    {
        id: 8,
        name: 'Солодников',
        movies: [
            '"Птица-Гоголь" - Сергей Нурмамед, Иван Скворцов',
            '"Русский ковчег" - Александр Сокуров',
            '"Великая красота" - Паоло Соррентино',
            '"Сладкая жизнь" - Федерико Феллини',
            '"Римские приключения" - Вуди Аллен',
            '"Римские каникулы" - Уильям Уайлер',
            '"Зеркало" - Андрей Тарковский',
            '"Сталкер" - Андрей Тарковский',
            '"Духовные голоса" - Александр Сокуров',
            '"Повинность" - Александр Сокуров',
            '"Молох" - Александр Сокуров'
        ],
        books: [
            '"Победить рак" - Катерина Гордеева',
            '"Воспоминания о войне" - Николай Никулин',
            '"Прокляты и убиты" - Виктор Астафьев',
            '"Дени́скины расска́зы" - Виктор Драгунский'
        ],
    },
    {
        id: 9,
        name: 'Кватания',
        movies: [
            '"На последнем дыхании" - Жан-Люк Годар',
            '"Четыреста ударов" - Франсуа Трюффо',
            '"Нечто" - Джон Карпентер',
            '"Хардкор" - Илья Найшуллер',
            '"Счастье мое" - Сергей Лозница',
            '"Антихрист" - Ларс фон Триер',
            '"Реквием по мечте" - Даррен Аронофски',
            '"Жил певчий дрозд" - Отар Иоселиани',
            '"Казнь" - Ладо Кватания',
            '"8 с половиной" - Федерико Феллини',
            '"Сладкая жизнь" - Федерико Феллини',
            '"Дорога" - Федерико Феллини',
            '"Раба любви" - Никита Михалков',
            '"Неоконченная пьеса для механического пианино" - Никита Михалков',
            '"Андрей Рублев" - Андрей Тарковский',
            '"Иваново детство" - Андрей Тарковский',
            '"Тупой и еще тупее" - Питер Фаррелли, Бобби Фаррелли',
            '"Криминальное чтиво" - Квентин Тарантино',
            '"Подозрительные лица" - Брайан Сингер',
            '"Нефть" - Пол Томас Андерсон',
            '"Магнолия" - Пол Томас Андерсон',
            '"Воспоминания об убийстве" - Пон Джун-хо',
            '"Сочувствие госпоже Месть" - Пак Чхан-ук',
            '"Жёлтое море" - На Хон-джин',
            '"Мать" - Пон Джун-хо',
            '"Жажда" - Пак Чхан-ук',
            '"Преследователь" - На Хон-джин',
            '"Семь" - Дэвид Финчер',
            '"Олдбой" - Пак Чхан-ук',
            '"Королевская битва" - Киндзи Фукасаку',
            '"Титан" - Жюлия Дюкурно',
            '"Груз 200" -Алексей Балабанов',
        ],
    },
    {
        id: 10,
        name: 'Усачев',
        movies: [
            '"Скотт Пилигрим против всех" - Эдгар Райт',
            '"Малыш на драйве" - Эдгар Райт',
            '"Безумный Макс: Дорога ярости" - Джордж Миллер'
        ]
    },
    {
        id: 11,
        name: 'Гордон A.',
        movies: [
            '"Волчок" - Василий Сигарев',
            '"Груз 200" -Алексей Балабанов',
            '"Дядя Саша" - Александр Гордон',
            '"Не горюй!" - Георгий Данелия',
            '"Дети райка" - Марсель Карне',
            '"Таксист" - Мартин Скорсезе',
            '"Крестный отец" - Фрэнсис Форд Коппола',
            '"ЛДПР. 20 лет лицом к России" - Александр Гордон',
            '"Огни притона" - Александр Гордон'
        ],
    },
    {
        id: 12,
        name: 'Гордеева',
        movies: [
            '"Бригада" - Алексей Сидоров',
            '"Чистый четверг" - Александр Расторгуев'
        ],
        books: [
            '"Время колоть лед" - Чулпан Хаматова, Катерина Гордеева',
            '"Победить рак" - Катерина Гордеева',
            '"На дне" - Максим Горький'
        ]
    },
    {
        id: 13,
        name: 'Бортич',
        movies: [
            '"Русалка" - Анна Меликян',
            '"Про любовь" - Анна Меликян',
            '"Школа" - Валерия Гай Германика, Руслан Маликов, Наталия Мещанинова',
            '"Как меня зовут" - Нигина Сайфуллаева',
            '"Я худею" - Алексей Нужный',
            '"Духless" - Роман Прыгунов',
            '"Воздух" - Алексей Герман мл.',
            '"По соображениям совести" - Мэл Гибсон',
            '"1917" - Сэм Мендес',
            '"В этом мире я больше не чувствую себя как дома" - Мэйкон Блэр',
            '"Ультраамериканцы" - Нима Нуризаде'
        ],
        books: [
            '"Оззи. Автобиография без цензуры" - Оззи Осборн',
        ]
    },
    {
        id: 14,
        name: 'Сигарев',
        movies: [
            '"Страна ОЗ" - Василий Сигарев',
            '"Родня" - Никита Михалков',
            '"Пять вечеров" - Никита Михалков',
            '"Z" - Василий Сигарев',
            '"Список Шиндлера" - Стивен Спилберг',
            '"Майор" - Юрий Быков',
            '"Дурак" - Юрий Быков',
            '"Жить" - Василий Сигарев',
            '"1917" - Сэм Мендес',
            '"Рядом" - Яна Троянова'
        ],
        books: [
            '"Вишнёвый сад" - Антон Павлович Чехов',
            '"Кладбище домашних животных" - Стивен Кинг',
            '"Сияние" - Стивен Кинг',
            '"Тело" - Стивен Кинг'
        ]
    },
    {
        id: 15,
        name: 'Раевский',
        movies: [
            '"Олимпиада 80" - Владимир Раевский',
            '"Обыкновенный фашизм" - Михаил Ромм',
            '"Летят журавли" - Михаил Калатозов'
        ],
        books: [
            '"Восстание" - Николай Кононов',
            '"Полдень" - Наталья Горбаневская'
        ]
    },
    {
        id: 16,
        name: 'Долин',
        movies: [
            '"Москва слезам не верит" -Владимир Меньшов',
            '"Бриллиантовая рука" - Леонид Гайдай',
            '"Жертвоприношение" - Андрей Тарковский',
            '"Сталкер" - Андрей Тарковский',
            '"Солярис" - Андрей Тарковский',
            '"Зеркало" - Андрей Тарковский',
            '"Андрей Рублев" - Андрей Тарковский',
            '"Ностальгия" - Андрей Тарковский',
            '"Иваново Детство" - Андрей Тарковский',
            '"Зеркало" - Андрей Тарковский',
            '"Комиссар" - Александр Аскольдов',
            '"Звоните ДиКаприо!" - Жора Крыжовников (сериал)',
            '"Форрест Гамп" - Роберт Земекис',
            '"Спасти рядового Райана" - Стивен Спилберг',
            '"Поймай меня, если сможешь" - Стивен Спилберг',
            '"Подозрительные лица" - Брайан Сингер',
            '"Моя левая нога" - Джим Шеридан',
            '"Нефть" - Пол Томас Андерсон',
            '"Линкольн" - Стивен Спилберг',
            '"Банды Нью-Йорка" - Мартин Скорсезе',
            '"Призрачная нить" - Пол Томас Андерсон',
            '"Последний из могикан" -  Майкл Манн',
            '"Храброе сердце" - Мэл Гибсон',
            '"Догма 95" - Ларс фон Триер',
            '"Идиоты" - Ларс фон Триер',
            '"Бесславные ублюдки" - Квентин Тарантино',
            '"Омерзительная восьмёрка" - Квентин Тарантино',
            '"Убить Билла" - Квентин Тарантино',
            '"Шерлок Холмс" - Гай Ричи',
            '"Шерлок Холмс: Игра теней - Гай Ричи',
            '"Карты, деньги, два ствола" -  Гай Ричи',
            '"Криминальное чтиво" - Квентин Тарантино',
            '"Побег из Шоушенка" - Фрэнк Дарабонт',
            '"Великая красота" - Паоло Соррентино',
            '"Ограбление по-американски" - Сарик Андреасян',
            '"Оно" - Андрес Мускетти',
            '"Оно 2" - Андрес Мускетти',
            '"Магнолия" - Пол Томас Андерсон',
            '"Солдаты неудачи" - Бен Стиллер',
            '"Человек дождя" - Барри Левинсон',
            '"С широко закрытыми глазами" - Стэнли Кубрик',
            '"Любовь в большом городе" - Марюс Вайсберг',
            '"Служебный роман. Наше время" - Сарик Андреасян',
            '"Непрощённый" - Сарик Андреасян',
            '"История с ограблением" - Ричард Шепард',
            '"Красивый мальчик" - Феликс Ван Грунинген',
            '"Тайна печати дракона" - Олег Степченко',
            '"Гоморра" - Маттео Гарроне',
            '"Крестный отец" - Фрэнсис Форд Коппола',
            '"Лицо со шрамом" - Брайан Де Пальма',
            '"Восемь с половиной" - Федерико Феллини',
            '"Фауст" - Александр Сокуров',
            '"Свинья" - Майкл Сарноски',
            '"Воспоминания об убийстве" - Пон Джун-хо',
            '"Перевал Кассандры" - Джордж Косматос',
            '"39 ступеней" - Альфред Хичкок',
            '"Проверка на дорогах" - Алексей Герман',
            '"Джокер" - Тодд Филлипс',
            '"Старикам тут не место" - Джоэл Коэн, Итан Коэн',
            '"Шоа" - Клод Ланцман',
            '"Мой друг Иван Лапшин" - Алексей Герман',
            '"Касабланка" - Майкл Кёртиц',
            '"Жизнь прекрасна" - Роберто Бениньи',
            '"Новые времена" - Чарльз Чаплин',
            '"Огни большого города" - Чарльз Чаплин',
            '"Унесённые призраками" - Хаяо Миядзаки',
            '"Небесный замок Лапута" - Хаяо Миядзаки',
            '"Головоломка" - Роналдо Дель Кармен, Пит Доктер',
            '"ВАЛЛ·И" - Эндрю Стэнтон',
            '"Рататуй" - Брэд Бёрд, Ян Пинкава',
            '"Таксист" - Мартин Скорсезе',
            '"Бешеный бык" - Мартин Скорсезе',
            '"Злые улицы" - Мартин Скорсезе',
            '"Апокалипсис сегодня" - Фрэнсис Форд Коппола',
            '"Разговор" - Фрэнсис Форд Коппола',
            '"Фотоувеличение" - Микеланджело Антониони',
            '"Заводной апельсин" - Стэнли Кубрик',
            '"Забавные игры" - Михаэль Ханеке',
            '"Догвилль" - Ларс фон Триер',
            '"Танцующая в темноте" - Ларс фон Триер',
            '"Рассекая волны" - Ларс фон Триер'
        ],
        books: [
            '"Поймать большую рыбу. Медитация, осознанность, творчество" - Дэвид Линч',
            '"Горе от ума" - Александр Сергеевич Грибоедов',
            '"Мизантроп" - Жан-Батист Мольер',
            '"Процесс" - Франц Кафка',
            '"Старик Хоттабыч" - Лазарь Лагин',
            '"Поправка-22" - Джозеф Хеллер'
        ]
    },
    {
        id: 17,
        name: 'Либеров',
        movies: [
            '"Веревка" - Альфред Хичкок',
        ],
        books: [
            '"Жизнь – сапожок непарный. Книга первая" - Тамара Петкевич',
            '"Золотой теленок" - Илья Ильф, Евгений Петров',
            '"Двенадцать стульев" - Илья Ильф, Евгений Петров',
            '"Одноэтажная Америка" - Илья Ильф, Евгений Петров'
        ]
    },
    {
        id: 18,
        name: 'Марков',
        movies: [
            '"Дети Ленинградского" - Анджей Целиньски, Ханна Полак',
        ],
    },
    {
        id: 19,
        name: 'Монеточка',
        movies: [
            '"Русский ковчег" - Александр Сокуров',
        ],
    },
    {
        id: 20,
        name: 'Борисов',
        movies: [
            '"Хрусталь" - Дарья Жук',
            '"Бык" - Борис Акопов',
            '"Кислота" - Александр Горчилин',
            '"Глубокие реки" - Владимир Битоков',
            '"Дылда" - Кантемир Балагов',
            '"Мир! Дружба! Жвачка!" - Илья Аксёнов, Антон Фёдоров',
        ],
    },
    {
        id: 21,
        name: 'Глуховский',
        books: [
            '"Незнайка на Луне" - Николай Носов',
            '"Благоволительницы" - Джонатан Литтелл',
            '"Белый бим чёрное ухо" - Гавриил Троепольский',
            '"Текст" - Дмитрий Глуховский',
            '"Будущее" - Дмитрий Глуховский',
            '"Сумерки" - Дмитрий Глуховский',
        ],
        movies: [
            '"Отверженные" - Лайонел Диринг',
            '"Карточный домик" - Бо Уиллимон',
            '"Исчезнувшая" - Дэвид Финчер',
            '"Социальная сеть" - Дэвид Финчер',
            '"Метро 2033" - Егор Баранов',
            '"Чужой" - Ридли Скотт',
        ]
    },
    {
        id: 23,
        name: 'Козырев',
        movies: [
            '"Бенкси" - Элио Эспана',
            '"Винил" - Аллен Култер, Джон С. Бейрд, С. Дж. Кларксон, ...(сериал)',
            '"Благослови зверей и детей" - Стэнли Крамер',
            '"Как убили Анну" - Анна Артемьева'
        ],
        books: [
            '"Воскресение" - Лев Толстой',
            '"Му-му" - Иван Тургенев',
            '"Непослушное дитя биосферы" - Виктор Дольник',
            '"Интервенция" - Геннадий Полока',
            '"Человек и война" - Катерина Гордеева',
        ]
    },
    {
        id: 24,
        name: 'Лошак',
        movies: [
            // '"Свой последний танец" - автор неизвестен',
            '"Король тигров" - Ребекка Чайклин, Эрик Гуд',
            '"Против правил" - автор неизвестен',
            '"ГШанель" - Алексей Баталов',
            '"Путешествие из Петербурга в Москву" - Андрей Лошак',
            '"Возраст несогласия" - Андрей Лошак',
            '"Россия. Полное затмение" -Павел Бардин (сериал)',
            '"Чапаев" - Георгий Васильев, Сергей Васильев',
            '"Недорогие гости" - Андрей Лошак'
        ],
        books: [
            '"Чапаев и пустота" - Виктор Пелевин',
        ]
    },
    {
        id: 25,
        name: 'Деревянко',
        movies: [
            '"Кука" - Ярослав Чеважевский',
            '"Белый бим чёрное ухо" - Гавриил Троепольский',
            '"Холоп" - Клим Шипенко',
            '"Текст" - Клим Шипенко',
            '"Счастливый конец" - Ярослав Чеважевский',
            '"Брестская крепость" - Александр Котт',
            '"Домашний арест" - Пётр Буслов',
            '"Страх и ненависть в Лас-Вегасе" - Терри Гиллиам',
            '"Андрей Рублёв" - Андрей Тарковский',
            '"Сталкер" - Андрей Тарковский',
            '"Полное затмение" - Агнешка Холланд',
            '"Человек, который всех удивил" - Наташа Меркулова, Алексей Чупов',
            '"Вот и все" - Кенни Ортега',
        ],
        books: [
            '"Брестская крепость" - Сергей Сергеевич Смирнов'
        ]
    },
    {
        id: 26,
        name: 'Полозкова',
        movies: [
            '"Быть Астрид Линдгрен" - Пернилла Фишер Кристенсен',
            '"В лучах солнца" - Виталий Манский',
            '"Фантастические твари" - Дэвид Йейтс',
            '"Свидетели Путина" - Виталий Манский',
        ],
        books: [
            '"Седьмая щёлочь" - Полина Барскова',
            '"Живые картины" - Полина Барскова',
            '"Денискины рассказы" - Виктор Драгунский',

        ]
    },
    {
        id: 27,
        name: 'Понферов',
        movies: [
            '"Турецкий гамбит" - Джаник Файзиев',
        ]
    },
    {
        id: 29,
        name: 'Виленская',
        movies: [
            '"Космическая Одиссея" - Стэнли Кубрик',
        ]
    },
    {
        id: 30,
        name: 'Яшин 2024',
        books: [
            '"Скажи жизни да" - Виктор Франкл',
            '"Чтец" - Бернард Шлинк',
            '"Внучка" -  Бернард Шлинк',
            'Цикл "Академия"- Айзек Азимов',
            '"Бегущий за ветром" - Халед Хоссейни',
            '"Воскресенье" - Лев Толстой',
            '"Андрей Сахаров. Наука и Свобода" - Геннадий Горелик',
            '"Воспоминания" - Сахаров А. Д',
        ],
        movies: [
            '"Чтец" - Стивен Долдри'
        ]
    },
    {
        id: 31,
        name: 'Хадарковский',
        movies: [
            '"Предатели" - Мария Ревчих (сериал)',
            '"Citizen K" - 	Алекс Гибни',
        ],
        books: [
            '"Олигархи" - Дэвид Хоффман'
        ]
    },
    {
        id: 32,
        name: 'Хлебников',
        movies: [
            '"Не любовь" - Андрей Звягинцев',
            '"Аритми́я" - Борис Хлебников',
            '"Коллектор" - Алексей Красовский',
            '"Хороший мальчик" - Оксана Карас',
            '"Долгая счастливая жизнь" - Геннадий Шпаликов',
        ]
    },
    {
        id: 33,
        name: 'Роднянский',
        movies: [
            '"Притяжение" - Фёдор Бондарчук',
            '"Дивергент" - Нил Бёргер',
            '"Елена" - Андрей Звягинцев',
            '"Дуэлянт" - Алексей Мизгирёв',
            '"Не любовь" - Андрей Звягинцев',
            '"44 минуты" - автор неизвестен',
            '"Арго" - Бен Афлек',
            '"Мачете убивает" - Роберт Родригес',
            '"Гладиатор" - Ридли Скотт',
            '"Властелин колец: Возвращение короля" - Питер Джексон',
            '"Титаник" - Джеймс Кэмерон',
            '"Храброе сердце" - Мэл Гибсон',
            '"Декстер" - Джон Дал, Стив Шилл, Кит Гордон, ... (сериал)',
            '"Игра престолов" - Дэвид Наттер, Алан Тейлор, Алекс Грейвз, ... (сериал)',
            '"Во все тяжкие" - Брайан Крэнстон, Винс Гиллиган, Фил Абрахам ... (сериал)',
            '"Квадрат" - Рубен Эстлунд',
            '"120 ударов в минуту" - Робен Кампийо'
        ],
        books: [
            '"Выходит продюсер" - Александр Роднянский',
            '"Лезвие бритвы" - Иван Ефремов',
        ],
    },
    {
        id: 34,
        name: 'Баста',
        movies: [
            '"Республика ШКИД" - Геннадий Полока',
            '"Облако-рай" - Николай Досталь',
        ]
    },
    {
        id: 35,
        name: 'Ильич',
        books: [
            '"Хребты безумия" - Говард Лавкрафт',
        ],
        movies: [
            '"На грани" - Тим Роббинс, Джей Роуч, Джон Полл ... (сериал) ',
        ]
    },
    {
        id: 36,
        name: 'Найшуллер',
        movies: [
            '"Хардкор" - Илья Найшуллер',
            '"Последний бойскаут" - Тони Скотт',
            '"Плен" - Евгений Мичков',
            '"Свободный штат Джонса" -  Гэри Росс',
            '"Темный рыцарь" - Кристофер Нолан',
            '"Чёрное море" - Кевин Макдональд',
            '"Как меня зовут" - Нигина Сайфуллаева',
            '"Проверка на дорогах" - Алексей Герман',
            '"Славные парни" - Мартин Скорсезе',
            '"Убрать из друзей" - Леван Габриадзе',
            '"На игле" - Дэнни Бойл',
            '"Арго" - Бен Афлек',
            '"Ла-Ла Ленд" - Дэмьен Шазелл',
            '"В центре внимания" - Том Маккарти',
            '"Криминальное чтиво" - Квентин Тарантино',
            '"Бесславные ублюдки" - Квентин Тарантино',
            '"Танго и Кэш" - Андрей Кончаловский, Альберт Магноли',
        ]
    }
]


export { data };
