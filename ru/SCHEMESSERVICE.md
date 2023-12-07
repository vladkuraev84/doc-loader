## SchemesService

_src/schemes.service.ts_

{% hint style="tip" %}
Класс **SchemesService** служит для получения параметров конфига(**config**) формы с [!] `scheme.json` и список доступных языков из объекта **localization** в **scheme.config**(**NextFormJs/jsons**).
{% endhint %}

[!] {% include "helpers/jsonsLink.md" %}


### Поля класса

| Название    | Префикс | Описание                                                                                        |
|-------------|---------|-------------------------------------------------------------------------------------------------|
| **config**  | static  | поле в которое записывается **config** из `scheme.json` из {% include "helpers/jsonsLink.md" %} |

### Конструктор класса

Конструктор класса **SchemesService** выполняется при создании экземпляра класса. Он принимает массив **schemes** с последующим присвоением к полю **config** результат выполнения `private` метода `getAnyConfig(schemes)` получения конфигураций из **scheme.config** из {% include "helpers/jsonsLink.md" %}.


### Методы класса

| Название                   | Префикс  | Описание метода                                                                                                    |
|----------------------------|----------|--------------------------------------------------------------------------------------------------------------------|
| **getAnyConfig(schemes)**  | private  | метод для получения конфига(**scheme.config**) из {% include "helpers/jsonsLink.md" %}.                            |
| **getAvailableLangs()**    | static   | метод возвращает массив доступных языков из **scheme.config.localization** из {% include "helpers/jsonsLink.md" %} |

### Импорты

В начале кода есть импорт типов.

```ts
import type {Scheme, Configurations} from '@/types/scheme.types';
```
