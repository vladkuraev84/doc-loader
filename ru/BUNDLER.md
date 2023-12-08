## Bandler

_src/bundler.ts_

{% hint style="tip" %}
Класс **Bandler** предназначен для получения URL.
{% endhint %}

### Методы класса

| Название                          | Префикс | Описание метода                                                                                                                                                                                           |
|-----------------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **getLocalUrl(initContentPath)**  | static  | `initContentPath` = `data-path="my-path"`. Возвращает путь (указанный в атрибуте `data-path` в `<next-form ...></next-form>` ) с названием файла бандла `bundleName`, указанного в [config.ts](CONFIG.md) |
| **getFallbackUrl()**              | static  | возвращает по умолчанию путь `${serverUrl}/p/client/bundles/${bundleName}`, где `serverUrl` и `bundleName` получены из [config.ts](CONFIG.md)                                                             |

### Импорты

В начале кода есть импорт конфига.

```js
import {config} from '@/config';
```
