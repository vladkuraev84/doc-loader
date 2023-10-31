## SchemesController

_src/classes/schemes-controller.ts_

> Класс **SchemesController** служит для получения параметров конфига(**config**) формы с `scheme.json`(**{% include "helpers/jsonsLink.md" %}**) и список доступных языков из объекта **localization** в **scheme.config**(**NextFormJs/jsons**).

### Поля класса

| Название    | Префикс | Описание                                                |
|-------------|---------|---------------------------------------------------------|
| **config**  | static  | поле в которое записывается **config** из `scheme.json` |

### Конструктор класса

Конструктор класса **SchemesController** выполняется при создании экземпляра класса. Он принимает массив **schemes** с последующим присвоением к полю **config** результат выполнения `private` метода `getAnyConfig(schemes)` получения конфигураций из **scheme.config**.


### Методы класса

| Название                   | Префикс  | Описание метода                                                            |
|----------------------------|----------|----------------------------------------------------------------------------|
| **getAnyConfig(schemes)**  | private  | метод для получения [параметров](FORMPARAMS.md) формы.                     |
| **getAvailableLangs()**    | static   | метод возвращает массив доступных языков из **scheme.config.localization** |

### Импорты

В начале кода есть импорт типов.

```ts
import type {Scheme, Configurations} from '@/types/scheme.types';
```
