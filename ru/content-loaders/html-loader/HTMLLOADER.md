# HtmlLoader

_src/loaders/html-loader.ts_

{% hint style="tip" %}
Класс **HtmlLoader** предназначен для перебора файлов **`*.jsons`**, которые расположены в **htmls** в `**.jsons`(см. "Ссылка #1" ниже) и последующей ассинхронной обработке чтобы в последующем сохранить данные в **storage**.
{% endhint %}

Ссылка #1 - {% include "../../helpers/jsonsLink.md" %}

### Поля класса

| Название   | Префикс           | Описание                                                                                                                                                                                                        |
|------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **files**  | private readonly  | массив объектов, полученный из [ContentLoader](../CONTENTLOADER.md) при инициализации класса. В данный массив присваивается сгруппированные данные, обработанные в [Informator](../../informator/INFORMATOR.md) |

## Конструктор класса

Конструктор класса **HtmlLoader** при создании экземпляра класса. Принимает массив `files` из [ContentLoader](../CONTENTLOADER.md) с последующим присвоением данных приватному полю текущего класса. Описание действий, выполняемых в конструкторе:

| Метод / Класс / действие | Описание                                                                                                      |
|--------------------------|---------------------------------------------------------------------------------------------------------------|
| **this.files**           | при инициализации класса происходит присвоение принимаемых данных(`files`) к приватному полю текущего класса. |

### Методы класса

| Название                                  | Префикс | Описание метода                                                                                                                                                                                                                                                           |
|-------------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **process()**                             | -       | после проверки на предмет наличия данных(`files`) полученных из [ContentLoader](../CONTENTLOADER.md), циклами перебирает страницы из `this.files` в поисках компонента `HtmlContainer` для последующих вызовов методов текущего класса                                    |
| **recursiveWalkAllComponents(c, prefix)** | private | рекурсивный метод вызывается в цикле метода `process()` текущего класса для перебора компонентов страницы с последующим вызовом `processComponent(c, prefix)` текущего класса                                                                                             |
| **processComponent(c, prefix)**           | private | в случае совпадения типа компонента из принимающего аргумента `c` равное `HtmlContainer` данный метод инициализирует и передает в класс [HtmlDownloader](./HTMLDOWNLOADER.md) названия файла `content/htmls/***.json` и `prefix`(=[initContentPath](../PARAMSWORKER.md))) |

### Импорты

В начале кода есть импорты.

```ts
import {HtmlDownloader} from '@/content-loaders/html-loader/html-downloader';
import type {Page, Component} from '@/types/scheme.types';
import type {FormInformations} from '@/informator/types';
```