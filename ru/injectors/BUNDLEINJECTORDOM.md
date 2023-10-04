## BundleInjectorDom

_src/classes/injectors/bundle-injector-dom.ts_

> Класс **BundleInjectorDom** предназначен для добавления **script** в DOM.

### Поля класса

| Название      | Префикс | Описание                                                           |
|---------------|---------|--------------------------------------------------------------------|
| **key**       | static  | `'main-bundle'` - название ID `<script id='main-bundle'></script>` |

### Методы класса

| Название                    | Префикс | Описание метода                                                                                                                                            |
|-----------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **isLoaded()**              | static  | возвращает `Boolean` значение на проверку наличия `<script id='main-bundle'></script>` в id='[filesContainerId](../CONFIG.md)'                             |
| **append(script: Element)** | static  | добавляет `<script id='main-bundle'></script>` в id='[filesContainerId](../CONFIG.md)'                                                                     |
| **remove()**                | static  | метод для удаления скрипта. Используется в [BundleInjector](BUNDLEINJECTOR.md) при удалении дублирующих скриптов при проверке на наличие режима разработки |


### Импорты

В начале кода есть импорт конфига.

```ts
import {config} from '@/config';
```
