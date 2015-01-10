# Документация
## Параметры, принимаемые модулем
Модуль принимает через GET-запросы следующие параметры:
- `newsId` - **Обязательный параметр.** ID новости для показа.
- `template` - Путь к шаблону модуля относительно текущей папки с шаблоном сайта. Если на сайте разрешена смена скина, то путь будет построен относительно активного в данный момент шаблона сайта. По умолчанию: **{THEME}/ajax/fullstory**.
- `preset` - Путь к файлу с настройками модуля. По умолчанию не используется.

## Настройки модуля
Настройки модуля хранятся в отдельном файле, это сделано для безопасной передачи настроек и уменьшения нагрузки на хостинг.
Для хранения настроек был выбран формат шаблона т.к. его можно отредактировать через админпанель.

При формировании настроек необходимо соблюдать следующий синтаксис:
- Параметры необходимо писать по одному в строке.
- Имя параметра и его значение необходимо разделять знаком равенства.

**На данный момент возможно использование следующих параметров:**
- `fields` - Поля, отбираемые из БД. Доступны следующие поля для запроса:
    - `short_story, full_story, xfields, comm_num, fixed, tags`
    - Так же можно использовать поле `all`, тогда будут отобраны все возможные поля новости из БД. Аналогичный результат будет, если не передавать в модуль переменную preset или передать пустую.
- `cachePrefix` - Префикс кеша, создаваемого модулем. По умолчанию `full`. Если вы хотите, чтобы кеш модуля автоматически не чистился - можно изменить этот параметр.

## Стилизация ошибок
Для того, чтобы стилизовать разные ошибки, выводимые модулем, в соответствии с вашими пожеланиями, необходимо использовать следующие css-классы:
- `.afs-error` - Общий стиль для всех ошибок.
- `.afs-news-error` - Стиль ошибки, если новость не найдена.
- `.afs-tpl-error` - Стиль ошибки, если не найден шаблон.
- `.afs-perm-error` - Стиль ошибки, если не достаточно прав для просмотра полной новости.