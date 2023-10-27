## Параметры формы

Данные параметры формы взяты с [Атрибутов](ATTRIBUTES.md) для упрощения дальнейшей работы в коде проекта **Loader**.
Где:

| FormParams поле     | Поле атрибута       |
|---------------------|---------------------|
| **projectId**       | = `data-project-id` |
| **page**            | = `data-page`       |
| **initContentPath** | = `data-path`       |
| **useApi**          | = `data-use-api`    |
| **dev**             | = `data-dev`        |

```ts
export interface FormParams {
  projectId: string;
  page: string;
  // using in BundleInjector as local path
  initContentPath?: string;
  // if true - use API, else - use file
  useApi?: boolean;
  dev?: boolean;
}
```