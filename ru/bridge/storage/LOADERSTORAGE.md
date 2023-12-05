## LoaderStorage

_src/bridge/storage/loader-storage.ts_

{% hint style="tip" %}
Класс **LoaderStorage** предназначен для инициализации объекта **storage** в глобальном объекте **window**, куда будут сохранены данные из [!]`**.jsons`.
{% endhint %}

[!] {% include "../../helpers/jsonsLink.md" %}

### Методы класса

| Название                 | Префикс | Описание метода                                                                         |
|--------------------------|---------|-----------------------------------------------------------------------------------------|
| **initStorage**          | static  | инициализирует пустой объект **storage**.                                               |
| **getAppStorage(key)**   | static  | возвращает объект из **storage** по заданному ключу.                                    |
| **saveData(key, data)**  | static  | сохраняет полученные данные(&#42;data) в **storage** по передаваемым ключам(&#42;key).  |
| **initHtmlContent(key)** | static  | сохраняет данные `content/htmls`                                                        |

&#42;data - `scheme.jsons` и `locales.jsons` из {% include "../../helpers/jsonsLink.md" %}.

&#42;key - ключ равен полю **[initContentPath](../../params-worker/PARAMSWORKERTYPES.md)** из интерфейса FormParams.

### Импорты

В начале кода есть импорт типов.

```ts
import type {AppKey, HtmlsContentContainer, StorageContainer} from './loader-storage.types';
```
