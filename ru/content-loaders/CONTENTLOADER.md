# ContentLoader

_src/loaders/content-loader.ts_

> Класс **ContentLoader** выполняет инициализацию и процесс загрузки [HtmlLoader](html-loader/HTMLLOADER.md).

## Конструктор класса

Конструктор класса **ContentLoader** выполняется . Описание действий, выполняемых в конструкторе:

| Метод / Класс / действие             | Описание                                                                                                                                                                                                                   |
|--------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **new HtmlLoader(files).process()**  | принимает массив с сгруппированными объектами согласно ключам равные `path`(=[initContentPath](../PARAMSWORKER.md)), инициализирует [HtmlLoader](./html-loader/HTMLLOADER.md) с последующим выполнением внутреннего метода |

### Импорты

В начале кода есть импорты.

```ts
import {HtmlLoader} from '@/content-loaders/html-loader/html-loader';
import type {FormInformations} from '@/informator/types';
```