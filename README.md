start-frontend-project-2

## Что для этого нужно?

Установить [NodeJS](https://nodejs.org/en/)  
Плагин для редактора [Editorconfig](http://editorconfig.org)  

## Старт проекта

В консоле перейти в папку с проектом и установить зависимости

```bash
npm install
npm install -g gulp-cli (если не установлен)
```

После этого используем доступные команды

## Доступные команды

`gulp` - Запуск проекта для разработки, сервер и слежение за файлами  
`gulp build` - сборка проекта для заливки на продакшн  
`gulp sprite` - сборка спрайта
`gulp clean`  - Удаляем папку dist  

## Структура проекта

```
start-frontend-project-2/
├── /dist/                 # Результат сборки. (Никогда не редактируется).
├── /node_modules/         # Node modules. (Никогда не редактируется).
├── /app/                  # Исходные файлы.
│   ├── /css/              # Результат зборки scss файлов + style.css.map
│   ├── /sass/             # SCSS файлы проекта 
│   ├── /fonts/            # Шрифты.
│   ├── /img/              # Исходные изображения.
│   │   └── /icons/        # Изображения для спрайтов.
│   ├── /js/               # Скрипты проекта
│   ├── /index.html/       # Исходный файл index.html
└── .editorconfig          # Настройка редактора.
└── .gitignore
└── gulpfile.js            # Конфигурация для Gulp.
└── package.json           # Пакеты для NPM.
```


## Полезные ссылки

1. [Шпаргалка по работе с консолью](https://github.com/nicothin/web-development/tree/master/bash)
2. [Консоль для Windows](http://nicothin.pro/page/console-windows)
3. [Шпаргалка по Git](https://github.com/nicothin/web-development/tree/master/git)
