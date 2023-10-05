## Bandler

_src/classes/bundler.ts_

> Класс **Bandler** предназначен для получения URL.

### Методы класса

| Название                          | Префикс | Описание метода                                                                                                                                                                  |
|-----------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **getLocalUrl(initContentPath)**  | static  | `initContentPath` = `data-path="my-path"`. Возвращает путь (указанный в атрибуте виджета `data-path`) с названием файла бандла `bundleName`, указанного в [config.ts](CONFIG.md) |
| **getFallbackUrl()**              | static  | возвращает по умолчанию путь `${serverUrl}/p/client/bundles/${bundleName}`, где `serverUrl` и `bundleName` получены из [config.ts](CONFIG.md)                                    |

### Импорты

В начале кода есть импорт конфига.

```js
import {config} from '@/config';
```
