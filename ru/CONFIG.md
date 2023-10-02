## Config

> src/config.ts

| Ключ                 | Пример                     | Описание                                                                                                           |
|----------------------|----------------------------|--------------------------------------------------------------------------------------------------------------------|
| **serverUrl**        | `'http://localhost:3033'`  | адрес вашего сервера для отправки данных формы                                                                     |
| **widgetTag**        | `'form-widget-g'`          | название виджета, определенное проектом                                                                            |
| **bundleName**       | `'form-widget-g.js'`       | название бандла                                                                                                    |
| **filesContainerId** | `'form-widget-g-files'`    | `id` блока куда будут выгружены файлы модулей, из проекта **scheme** стили **`/main.css`** и главный `main-bundle` |

### Пример

```ts
export const config = {
	serverUrl: 'http://localhost:3033',
	widgetTag: 'form-widget-g',
	bundleName: 'form-widget-g.js',
	filesContainerId: 'form-widget-g-files',
} as const;
```