Template
==============

Инструменты
-------------
nodejs
 grunt
 bower


Использование
-------------

### Разработка

Исходные стили в `src/less/**/*.less`. Для компиляции используется Grunt. Команда `grunt watch:theme` запускает вотчер который на лету (при изменении .less файлов темы) компилирует less в css. При этом можно редактировать след. файлы:

  * theme.less 
  * theme-base.less // Общие стили
  * theme-sm.less   // Для планшета
  * theme-md.less   // Для ноутбука
  * theme-lg.less   // Для больших мониторов

### Продакшн

Для сборки билда команда `grunt build` при этом объединяются и сжимаются все .css и .js файлы. Результат попадает в папку `build`.
