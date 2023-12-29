# DomLoader

_src/modules/loader/dom-loader.ts_

{% hint style="tip" %}
Класс **DomLoader** предназначен для динамической загрузки файлов (JavaScript и CSS) в документ HTML и управления ими. Этот класс предоставляет методы для загрузки и управления внешними ресурсами, такими как скрипты и стили. Ниже представлено описание его функциональности и методов.
{% endhint %}

### Поля класса

| Название       | Префикс          | Описание                                                                                                                   |
|----------------|------------------|----------------------------------------------------------------------------------------------------------------------------|
| **className**  | private readonly | опциональный параметр. Этот параметр задает класс элементу, который будет добавлен к элементам, создаваемым этим объектом. |

### Конструктор класса

При инициализации класса **DomLoader** конструктор выполняется и задает класс, который будет добавлен к элементам.

### Методы класса

| Название                  | Префикс | Описание метода                                                                                                                                                                                                                                                                                                |
|---------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **loadFileJS(url, cb)**   | -       | метод предназначен для загрузки JavaScript файлов (`url`) и добавления его в DOM, выполнения колбэк функции (`cb`), когда файл загрузится.                                                                                                                                                                     |
| **loadFileCSS(url)**      | -       | метод используется для загрузки CSS файлов (url).                                                                                                                                                                                                                                                              |
| **getClassName()**        | private | метод возвращает CSS-класс элемента, который будет создан при загрузке файла. Css-класс будет сгенерирован на основе переданного `className` в конструкторе                                                                                                                                                    |
| **initFilesContainer()**  | static  | метод инициализирует блок-контэйнер для файлов, который будет использоваться для добавления всех загружаемых файлов (`script` и `style`). Он создает `div` элемент с уникальным идентификатором, заданным в конфигурации [filesContainerId](../../CONFIG.md), и добавляет его в конец тела документа (`body`). |

### Импорты

В начале кода есть импорт конфига для извлечения `filesContainerId` и метода из класа `DomService`.

```ts
import {config} from '@/config';
import {DomService} from '@/injectors/dom.service';
```
