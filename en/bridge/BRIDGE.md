## Bridge

_src/bridge/index.ts_

{% hint style="tip" %}
Класс **Bridge** предназначен для перебора и отправки данных в класс **LoaderStorage**. Хранилише будет необходимо для дальнейшей работы **NextFormJs/player-a**.
{% endhint %}

### Методы класса

| Название        | Префикс | Описание метода                                                                                                                                                                                                                                                                                     |
|-----------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **send(files)** | -       | перебирает сгруппированные данные(**files**) из результата методов класса [informator](../informator/README.md) из `scheme.json`, `locales.json` и `content/htmls/*.json-s` полученные из {% include "../helpers/jsonsLink.md" %} и отправляет данные в [LoaderStorage](./storage/LOADERSTORAGE.md) |

### Импорты

В начале кода есть импорты класса и типов.

```ts
import {LoaderStorage} from './storage/loader-storage';
import type {FormInformations} from '@/informator/types';
```
