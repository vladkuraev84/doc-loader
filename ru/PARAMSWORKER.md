## ParamsWorker

_src/classes/params-worker.ts_

> Класс **ParamsWorker** предназначен для работы с [параметрами](FORMPARAMS.md) форм(ы).

### Методы класса

| Название                                                      | Префикс | Описание метода                                                             |
|---------------------------------------------------------------|---------|-----------------------------------------------------------------------------|
| **get(form)**                                                 | static  | метод для получения [параметров](FORMPARAMS.md) формы.                      |
| **validate({projectId, page, initContentPath, useApi, dev})** | static  | метод для проверки [параметров](FORMPARAMS.md) формы.                       |
| **getInitContentPath(params)**                                | static  | метод для получения `initContentPath` из [параметров](FORMPARAMS.md) формы. |
| **hasAnyDevParam(params)**                                    | static  | метод для получения режима `dev` если таков имеется.                        |

### Импорты

В начале кода есть импорт типов.

```ts
import type {FormParams} from '@/types/common.types';
```
