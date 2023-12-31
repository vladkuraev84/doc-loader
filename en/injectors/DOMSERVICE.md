## DomService

_src/injectors/dom.service.ts_

{% hint style="tip" %}
Класс **DomService** предназначен для обработки процесса добавления DOM узла (`<script type="text/javascript" src="my-src" ... ></script>` / `<link type="text/css" ... />`) в HTML.
{% endhint %}

### Методы класса

| Название           | Префикс | Описание метода                                                                                                                                                                                                                                          |
|--------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **append(elem)**   | static  | метод добавления DOM узла. Место для добавления элементов берется из конфигурации [config.filesContainerId](../CONFIG.md).                                                                                                                               |
| **remove(key)**    | static  | метод удаления DOM узла.                                                                                                                                                                                                                                 |
| **isLoaded(key)**  | static  | проверка на наличие элемента DOM узла по `id`. Проверка необходима чтобы бандл при режиме `dev` не дублировался как DOM узел, а использовался из локального сервера `@vite`. Данная проверка имеет больший вес при подключении виджета в SPA приложение. |


### Импорты

В начале кода есть импорт конфига.

```ts
import {config} from '@/config';
```
