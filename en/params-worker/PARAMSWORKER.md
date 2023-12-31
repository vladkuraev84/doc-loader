## ParamsWorker

_src/params-worker/index.ts_

{% hint style="tip" %}
Класс **ParamsWorker** предназначен для обработки, валидации и получения дата-атрибутов виджета.
{% endhint %}

### Методы класса

| Название                                                      | Префикс | Описание метода                                                                          |
|---------------------------------------------------------------|---------|------------------------------------------------------------------------------------------|
| **get(form)**                                                 | static  | Метод возвращает дата-атрибуты виджета.                                                  |
| **validate({projectId, page, initContentPath, useApi, dev})** | static  | Метод для проверки наличия заполненных атрибутов виджета.                                |
| **getAnyInitContentPath(params)**                             | static  | Метод, предназначеный для возвращения параметра [initContentPath](PARAMSWORKERTYPES.md). |
| **hasAnyDevParam(params)**                                    | static  | Метод проверки на наличие `dev` режима.                                                  |

### Импорты

В начале кода есть импорт типов.

```js
import type {FormParams} from './types';
```
