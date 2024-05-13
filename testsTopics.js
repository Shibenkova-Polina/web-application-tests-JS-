var testsTopics = {
    javascript: {
        title: 'Основы JavaScript',
        questions: [
            {
                text: 'Какой оператор служит для создания нового экземпляра из класса однотипных объектов?',
                answers: [
                    { text: 'this', isCorrect: false },
                    { text: 'new', isCorrect: true },
                    { text: 'prototype', isCorrect: false }
                ]
            },
            {
                text: 'Какой метод интерпретирует элементы массива как строковые литералы и сортирует массив в алфавитном порядке?',
                answers: [
                    { text: 'reverse()', isCorrect: false },
                    { text: 'sort()', isCorrect: true },
                    { text: 'join()', isCorrect: false }
                ]
            },
            {
                text: 'Какой оператор вернет тип переменной, переданной ему в качестве аргумента?',
                answers: [
                    { text: 'native', isCorrect: false },
                    { text: 'instanceof', isCorrect: false },
                    { text: 'typeof', isCorrect: true }
                ]
            },
            {
                text: 'Что означает значение undefined?',
                answers: [
                    { text: 'ошибочный результат вычислений', isCorrect: false },
                    { text: 'что значение не было присвоено', isCorrect: true },
                    { text: 'ссылка на несуществующий объект', isCorrect: false }
                ]
            },
            {
                text: 'К какому типу относится значение NaN?',
                answers: [
                    { text: 'к числовому', isCorrect: true },
                    { text: 'к строковому', isCorrect: false },
                    { text: 'к логическому', isCorrect: false }
                ]
            },
            {
                text: 'К какому типу относится значение null?',
                answers: [
                    { text: 'к символьному', isCorrect: false },
                    { text: 'к строковому', isCorrect: false },
                    { text: 'к логическому', isCorrect: false },
                    { text: 'к числовому', isCorrect: false },
                    { text: 'ни к одному из перечисленных', isCorrect: true }
                ]
            },
            {
                text: 'Чем в JavaScript является функция?',
                answers: [
                    { text: 'объектом', isCorrect: true },
                    { text: 'последовательностью', isCorrect: false },
                    { text: 'строкой', isCorrect: false }
                ]
            },
            {
                text: 'К какой типизации относится JavaScript?',
                answers: [
                    { text: 'к динамической и слабой', isCorrect: true },
                    { text: 'к сильной и статической', isCorrect: false },
                    { text: 'к явной и динамической', isCorrect: false }
                ]
            },
            {
                text: 'Существует ли в JavaScript отдельный тип данных для чисел с плавающей запятой? ',
                answers: [
                    { text: 'да, это тип float', isCorrect: false },
                    { text: 'да, это два типа float и double', isCorrect: false },
                    { text: 'нет, за целочисленные значения и числа с плавающей точкой в JavaScript отвечает тип number', isCorrect: true }
                ]
            },
            {
                text: 'Какой оператор используется для строгого равенства без приведения типов в JavaScript?',
                answers: [
                    { text: '==', isCorrect: false },
                    { text: '===', isCorrect: true },
                    { text: '=', isCorrect: false }
                ]
            },
            {
                text: 'Что вернет оператор typeof для строки "Hello"?',
                answers: [
                    { text: 'string', isCorrect: true },
                    { text: 'number', isCorrect: false },
                    { text: 'object', isCorrect: false }
                ]
            },
            {
                text: 'Как добавить элемент в конец массива в JavaScript?',
                answers: [
                    { text: 'array.add(element)', isCorrect: false },
                    { text: 'array.push(element)', isCorrect: true },
                    { text: 'array.insert(element)', isCorrect: false }
                ]
            },
            {
                text: 'Что вернет выражение 10 % 3 в JavaScript?',
                answers: [
                    { text: '1', isCorrect: true },
                    { text: '2', isCorrect: false },
                    { text: '0', isCorrect: false }
                ]
            }
        ]
    },
    html: {
        title: 'Основы HTML',
        questions: [
            {
                text: 'С помощью какого тега можно вставить рисунок?',
                answers: [
                    { text: 'img', isCorrect: true },
                    { text: 'br', isCorrect: false },
                    { text: 'p', isCorrect: false },
                    { text: 'table', isCorrect: false }
                ]
            },
            {
                text: 'HTML - это',
                answers: [
                    { text: 'приложение', isCorrect: false },
                    { text: 'язык программирования', isCorrect: false },
                    { text: 'язык разметки гипертекста ', isCorrect: true },
                    { text: 'текстовый процессор', isCorrect: false }
                ]
            },
            {
                text: 'Значение атрибута align не может быть',
                answers: [
                    { text: 'left', isCorrect: false },
                    { text: 'center', isCorrect: false },
                    { text: 'color', isCorrect: true }
                ]
            },
            {
                text: 'Для чего используется язык HTML?',
                answers: [
                    { text: 'для создания текстового документа', isCorrect: false },
                    { text: 'для создания программ', isCorrect: false },
                    { text: 'для создания Web-страниц', isCorrect: true },
                    { text: 'для создания баз данных', isCorrect: false }
                ]
            },
            {
                text: 'Выберите тег перевода строки:',
                answers: [
                    { text: 'img', isCorrect: false },
                    { text: 'tr', isCorrect: false },
                    { text: 'br', isCorrect: true },
                    { text: 'td', isCorrect: false }
                ]
            },
            {
                text: 'Тэги разметки заключаются между знаками',
                answers: [
                    { text: '/.../', isCorrect: false },
                    { text: '\.../', isCorrect: false },
                    { text: '<...>', isCorrect: true },
                    { text: 'не используются', isCorrect: false }
                ]
            },
            {
                text: 'Тело документа заключается в тэге',
                answers: [
                    { text: 'html', isCorrect: false },
                    { text: 'body', isCorrect: true },
                    { text: 'head', isCorrect: false },
                    { text: 'font', isCorrect: false }
                ]
            },
            {
                text: 'Какой тег используется для того ,чтобы сделать текст жирным?',
                answers: [
                    { text: 'br', isCorrect: false },
                    { text: 'strong', isCorrect: true },
                    { text: 'p', isCorrect: false },
                    { text: 'a', isCorrect: false }
                ]
            },
            {
                text: 'Какой тег является тегом организации заголовка таблицы?',
                answers: [
                    { text: 'caption', isCorrect: true },
                    { text: 'colspan', isCorrect: false },
                    { text: 'table', isCorrect: false },
                    { text: 'img', isCorrect: false }
                ]
            },
            {
                text: 'Как выделить текст курсивом?',
                answers: [
                    { text: 'hr', isCorrect: false },
                    { text: 'em', isCorrect: true },
                    { text: 'p', isCorrect: false },
                    { text: 'a', isCorrect: false }
                ]
            },
            {
                text: 'Сколько всего уровней заголовков',
                answers: [
                    { text: '4', isCorrect: false },
                    { text: '5', isCorrect: false },
                    { text: '6', isCorrect: true },
                    { text: '7', isCorrect: false }
                ]
            },
            {
                text: 'HTML расшифровывается как',
                answers: [
                    { text: 'HyperText Markup Language', isCorrect: true },
                    { text: 'High Too My Link', isCorrect: false },
                    { text: 'Hyperpyper Trob Meas Lock', isCorrect: false }
                ]
            },
            {
                text: 'Каким тегом задаются ячейки-заголовки в таблицах?',
                answers: [
                    { text: 'tr', isCorrect: false },
                    { text: 'head', isCorrect: false },
                    { text: 'th', isCorrect: true },
                    { text: 'td', isCorrect: false }
                ]
            }
        ]
    },
    git: {
        title: 'Основы GIT',
        questions: [
            {
                text: 'Что такое Git?',
                answers: [
                    { text: 'система управления версиями', isCorrect: true },
                    { text: 'графический редактор', isCorrect: false },
                    { text: 'программный язык', isCorrect: false }
                ]
            },
            {
                text: 'Какая команда используется для создания нового репозитория Git?',
                answers: [
                    { text: 'git create', isCorrect: false },
                    { text: 'git init', isCorrect: true },
                    { text: 'git new', isCorrect: false }
                ]
            },
            {
                text: 'Что делает команда git add?',
                answers: [
                    { text: 'начинает отслеживать указанный файл или файлы', isCorrect: true },
                    { text: 'добавляет локальный файл в удаленный репозиторий так, чтобы другие участники проекта могли его видеть', isCorrect: false },
                    { text: 'создает файл с указанным именем и сразу добавляет его в Git', isCorrect: false },
                    { text: 'это алиас/синоним команды git commit', isCorrect: false }
                ]
            },
            {
                text: 'Какая команда используется для создания новой ветки?',
                answers: [
                    { text: 'git checkout', isCorrect: false },
                    { text: 'git merge', isCorrect: false },
                    { text: 'git branch', isCorrect: true }
                ]
            },
            {
                text: 'Какая команда используется для объединения веток?',
                answers: [
                    { text: 'git checkout', isCorrect: false },
                    { text: 'git merge', isCorrect: true },
                    { text: 'git branch', isCorrect: false }
                ]
            },
            {
                text: 'Какая команда используется для отправки изменений на удаленный репозиторий?',
                answers: [
                    { text: 'git pull', isCorrect: false },
                    { text: 'git clone', isCorrect: false },
                    { text: 'git push', isCorrect: true }
                ]
            },
            {
                text: 'Какая команда используется для получения изменений с удаленного репозитория?',
                answers: [
                    { text: 'git pull', isCorrect: true },
                    { text: 'git clone', isCorrect: false },
                    { text: 'git push', isCorrect: false }
                ]
            },
            {
                text: 'Какая команда используется для просмотра истории коммитов?',
                answers: [
                    { text: 'git diff', isCorrect: false },
                    { text: 'git log', isCorrect: true },
                    { text: 'git status', isCorrect: false }
                ]
            },
            {
                text: 'Как отменить последний коммит?',
                answers: [
                    { text: 'git reset –soft HEAD 1', isCorrect: true },
                    { text: 'git checkout –', isCorrect: false },
                    { text: 'git revert HEAD', isCorrect: false }
                ]
            },
            {
                text: 'Как отобразить различия между рабочей директорией и индексом?',
                answers: [
                    { text: 'git status', isCorrect: false },
                    { text: 'git diff', isCorrect: true },
                    { text: 'git log', isCorrect: false }
                ]
            },
            {
                text: 'Что такое GitHub?',
                answers: [
                    { text: 'программа для работы с Git', isCorrect: false },
                    { text: 'веб-сервис для хостинга IT-проектов и их совместной разработки, основанный на Git', isCorrect: true },
                    { text: 'драйвер для Git', isCorrect: false },
                    { text: 'UI для работы с локальной версией Git', isCorrect: false }
                ]
            },
            {
                text: 'Что такое коммит?',
                answers: [
                    { text: 'это обобщающее название одного из статусов файла в выводе git status: untracked, new, deleted или modified', isCorrect: false },
                    { text: 'это слово ничего не означает, его ввели только для того, чтобы путать новичков', isCorrect: false },
                    { text: 'это результат вывода команды git diff', isCorrect: false },
                    { text: 'это единица состояния проекта в Git', isCorrect: true }
                ]
            },
            {
                text: 'Как отменить действие команды "git add" на файл?',
                answers: [
                    { text: 'команда git stash', isCorrect: false },
                    { text: 'команда git abort', isCorrect: false },
                    { text: 'команда git reset', isCorrect: true },
                    { text: 'команда git not-add', isCorrect: true }
                ]
            }
        ]
    }
}