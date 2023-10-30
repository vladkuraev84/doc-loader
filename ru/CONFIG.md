## Config

_src/config.ts_

| Ключ                 | Пример                     | Описание                                                                                                           |
|----------------------|----------------------------|--------------------------------------------------------------------------------------------------------------------|
| **serverUrl**        | `'http://localhost:3033'`  | адрес вашего сервера для отправки данных формы                                                                     |
| **widgetTag**        | `'next-form'`              | название виджета, определенное проектом                                                                            |
| **bundleName**       | `'next-form'`              | название бандла                                                                                                    |
| **filesContainerId** | `'next-form-files'`        | `id` блока куда будут выгружены файлы модулей, из проекта **scheme** стили **`/main.css`** и главный `main-bundle` |

### Пример

```ts
export const config = {
  serverUrl: 'http://localhost:3033',
  widgetTag: 'next-form',
  bundleName: 'next-form.js',
  filesContainerId: 'next-form-files',
} as const;
```