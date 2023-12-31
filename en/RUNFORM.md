## Loader виджета next-form (NextFormJs/Loader) (src/index.ts)

_src/index.ts_

{% hint style="tip" %}
Файл является частью веб-приложения и отвечает за загрузку и инициализацию виджета next-form. Является главным файлом для сбора классов.
{% endhint %}

### Импорт Модулей

Импортированные модули:

| Название                                               | Описание                                                                                                                       |
|--------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| **[StyleInjector](injectors/STYLEINJECTORDOM.md)**     | Класс, отвечающий за подключение стилей в приложение.                                                                          |
| **[FormWorker](FORMWORKER.md)**                        | Класс, предназначенный для работы с HTML-формами.                                                                              |
| **[ParamsWorker](params-worker/PARAMSWORKER.md)**      | Класс, обрабатывающий параметры форм.                                                                                          |
| **[Informator](informator/INFORMATOR.md)**             | Класс, предоставляющий информацию для приложения: адрес(URL) размещения бандла и файлы из **forms-jsons**(`scheme и locales`). |
| **[Bridge](bridge/BRIDGE.md)**                         | Класс, предназначен для сохранения данных в storage.                                                                           |
| **[BundleInjector](injectors/BUNDLEINJECTOR.md)**      | Класс, отвечающий за формирование, подключение и валидацию бандла (`script`).                                                  |
| **[ModulesController](modules/MODULESCONTROLLER.md)**  | Класс, ответственный за управление и загрузку модулей согласно схемы(`scheme`).                                                |
| **[DomLoader](modules/loader/DOMLOADER.md)**           | Класс, загружающий файлы модулей в DOM(`js и style` в `div id="`[filesContainerId](CONFIG.md)`"`).                             |
| **[SchemesService](SCHEMESSERVICE.md)**          | Класс, управляющий `scheme.json` из {% include "helpers/jsonsLink.md" %}.                                                      |
| **[ContentLoader](content-loaders/README.md)**         | Класс, предназначенный для загрузки html-контента, файла.                                                                      |

### Класс Loader виджета next-form (NFL)

Данный класс **NFL** представляет собой loader виджета next-form и содержит статический асинхронный метод **`run()`**, который выполняет следующие действия для загрузки и инициализации виджета-формы:

1. **Получение HTML-форм**: Метод **`FormWorker.getForms()`** получает все HTML-формы на странице и сохраняет их в переменной **`forms`** для дальнейшей обработке в цикле.
2. **Извлечение Параметров Форм**: Для каждой формы извлекаются параметры с использованием метода **`ParamsWorker.get(form)`**. 
3. **Проверка Параметров**: Параметры проверяются на валидность с помощью метода **`ParamsWorker.validate(params)`**. Если параметры не проходят проверку, возникающие ошибки выводятся в консоль. Полученные параметры после проверки на валидацию сохраняются в массив **`formsParams`** путем добавления с помощью метода массива **`push`** (`formsParams.push(params)`).
4. **Инициализация Информатора**: Создается экземпляр класса **`Informator`**, который инициализируется с массивом параметров **`formsParams`**.
5. **Загрузка Файлов с Информацией**: Метод **`informator.download()`** загружает необходимые файлы и информацию. Результат загрузки сохраняется в массив **`groupedFiles`**.
6. **Отправка Группированных Файлов**: Группированные файлы отправляются с помощью **`Bridge.send(groupedFiles)`** для дальнейшего сохранения в storage.
7. **Обработка контент данных**: С помощью инициализации класса и передачи группированные файлы (`groupedFiles`) в **`new ContentLoader(groupedFiles)`** происходит обработка  контента из директории **"/content"** в {% include "helpers/jsonsLink.md" %}. 
8. **Инициализация Контейнера для Файлов DOM**: Вызывается метод **`DomLoader.initFilesContainer()`** для инициализации контейнера, предназначенного для загрузки файлов **DOM** в `div id="`[config.filesContainerId](CONFIG.md)`"`.
9. **Инициализация Схем и Модулей**: Создаются экземпляры классов **`SchemesService`** и **`ModulesController`** для управления схемами и загрузкой модулей, соответственно. Схемы передаются в оба класса.
10. **Внедрение Бандлов и Стилей**: Создаются экземпляры классов **`BundleInjector`** и **`StyleInjector`**, которые инициализируются с параметрами форм.

### Запуск Loader-a (NFL)

Последняя строка кода текущего файла **`NFL.run().catch(e => console.error(e))`** вызывает метод **`run()`** класса **`NFL`**, что начинает процесс загрузки и инициализации виджета-формы. Любые ошибки, возникающие во время этого процесса, будут выведены в консоль с помощью **`console.error(e)`**.

Этот файл представляет собой центральную часть приложения для загрузки виджета-формы и включает в себя обработку форм, загрузку данных и модулей, а также подключение стилей и бандлов.

### Импорт типов

Импорты в начале кода.

```ts
import {StyleInjector} from '@/injectors/style-injector';
import {FormWorker} from '@/form-worker';
import {ParamsWorker} from '@/params-worker';
import {Informator} from '@/informator';
import {Bridge} from '@/bridge';
import {BundleInjector} from '@/injectors/bundle-injector';
import {ModulesController} from '@/modules';
import {DomLoader} from '@/modules/loader/dom-loader';
import {SchemesService} from '@/schemes.service';
import {ContentLoader} from '@/content-loaders';
import type {FormParams} from '@/params-worker/types';
import type {FormInformations, Group} from '@/informator/types';
import type {HTMLForms} from '@/form-worker';
import type {Scheme} from '@/types/scheme.types';
```