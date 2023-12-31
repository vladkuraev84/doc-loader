## Informator

_src/informator/index.ts_

{% hint style="tip" %}
Класс **Informator** является основным в данной секции. Предназначен для фильтрации и группирования данных из **scheme and locales** согласно **[FormParams](../params-worker/PARAMSWORKERTYPES.md)**.
{% endhint %}

### Поля класса

| Название       | Префикс | Описание                                                                                                                             |
|----------------|---------|--------------------------------------------------------------------------------------------------------------------------------------|
| **urlO**       | private | поле, которому будет присвоено значение класса **[new UrlService()](URLSERVICE.md)** в конструкторе класса Informator.               |
| **downloader** | private | поле, которому будет присвоено значение класса **[new DownloaderService()](DOWNLOADERSERVICE.md)** в конструкторе класса Informator. |

### Конструктор класса

Конструктор класса **Informator** выполняется при создании экземпляра класса. Он принимает массив параметров **formParams**, представляющие ([Атрибуты](../ATTRIBUTES.md)). Внутри конструктора выполняется инициализация классов и вызовы методов. Описание действий, выполняемых в конструкторе:

| Метод / Класс               | Описание                                                                                                                                                                      |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **formParams**              | провалидированные параметры форм(ы) - [FormParams](../params-worker/PARAMSWORKERTYPES.md)                                                                                                        |
| **new UrlService()**        | класс, отвечающий за получение уникальных путей API. Более подробно смотри описание [здесь](URLSERVICE.md)                                                                    |
| **new DownloaderService()** | класс, отвечающий за получение маршрута(пути) куда пользователем будут загружены `scheme.json` и `locales.json`. Более подробно смотри описание [здесь](DOWNLOADERSERVICE.md) |

Кроме инициализации классов в конструкторе `UrlService` и `DownloaderService` так же в конструкторе выполняются вызовы методов, описанные ниже.

### Методы класса

| Название                         | Префикс        | Описание метода                                                                                                                                         |
|----------------------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| **processApi()**                 | private        | возвращает массив адреса(ов) пути **scheme.json** и **locales.json** из API клиента, если **.json**-файлы размещены на стороннем API.                   |
| **processPaths()**               | private        | возвращает массив адреса(ов) пути **scheme.json** и **locales.json**                                                                                    |
| **download()**                   | private async  | возвращает массив отфильтрованных и сгруппированных данных **scheme.json** и **locales.json** согласно уникальным [initContentPath](../params-worker/PARAMSWORKERTYPES.md) |
| **groupFilesByUrl(files, urls)** | private        | метод, который группирует данные из **scheme.json** и **locales.json** в массив объектов согласно ключу(ам) [initContentPath](../params-worker/PARAMSWORKERTYPES.md)       |


### Импорты

В начале кода есть импорты.

```ts
import {InformatorApi} from './informator-api';
import {InformatorFile} from './informator-file';
import {UrlService} from './url.service';
import {DownloaderService} from './downloader.service';
import type {FormParams} from '@/params-worker/types';
import type {Scheme} from '@/types/scheme.types';
import type {Locales} from '@/types/locales.types';
import type {FilesList, Group} from './types';
```
