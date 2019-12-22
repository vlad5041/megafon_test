#Тестовое задание Мегафон
Необходимо реализовать web-приложение (желательно одностраничное).

На сайте в шапке разместить ссылки:
- Книги;
- Авторы;
- Профиль;
- Кнопка "Войти/Выйти".

Если пользователь кликает на кнопку "Войти" или страницу профиля (и он не авторизован), показывать форму ввода логина и пароля.

Форма вхожа принимает данные:
- логин: Admin
- пароль: 123

Если введены другие данные, показывается сообщение, что введены некорректные данные.

Если данные введены корректно, показывается рофиль пользователя.

Кнопка "Войти/Выйти" меняет свое состояние. Если пользователь уже залогинился "Выйти", если нет - "Войти".

На странице книги показывать список книг.
Должен быть элемент для возможности сортировки книг по:
- Названию;
- Автору;
- Популярности.

Для авторизованного пользователя должна быть возможность оставить комментарий по книге.

На странице автора содержится элемент поиска по автору.
При поиске автора показывать все книги автора.

Данные по книгам и авторам можно хранить где угодно:
- в коде;
- в файле.
Использовать back-end не нужно.

Весь текст должен быть сверстан с подключенным шрифтом. Шрифт подключать при помощи CSS-свойства @font-face. Подключение должно быть кросс-браузерным.


#Запсук приложения
- Распаковать архив в папку
- Выполнить команду npm install
- Запустить приложение командой npm run start


- Для просмотра только визуальной части, необходимо установить расширение Web Server for Chrome и запсутить проект (папка build) 