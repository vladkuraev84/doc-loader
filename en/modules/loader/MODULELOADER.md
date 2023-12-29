# ModuleLoader

_src/modules/loader/module-loader.ts_

{% hint style="tip" %}
Класс **ModuleLoader** в конструкторе инициализирует модули по названиям.
{% endhint %}

### Конструктор класса

Конструктор класса **ModuleLoader** выполняется при создании экземпляра класса. Принимает название модуля из **schemes** для дальнейшей обработки и инициализации по необходимости.

### Импорты

В начале кода есть импорты.

```ts
import {DatepickerLoader} from '@/classes/modules/list/datipicker';
import type {Module} from '@/types/scheme.types';
```

