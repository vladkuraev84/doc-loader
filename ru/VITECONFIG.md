# Настройка сборки Vite

Этот код используется для настройки сборки Vite для минификации кода. Он импортирует два модуля: **fileURLToPath** и **URL** из пакета **node:url**. Затем он импортирует модуль **defineConfig** из пакета vite.

```js
import {fileURLToPath, URL} from 'node:url';
import {defineConfig} from 'vite';
```

Созданный объект **minifyOptions** устанавливает значение его свойства **minify** на **'terser'**. Это означает, что будет использована библиотека Terser для минификации кода, который предоставляет меньший бандл.

```js
const minifyOptions: any = {};
minifyOptions.minify = 'terser';
```

Объект **minifyOptions** также имеет свойство **terserOptions**, которое содержит параметры, которые будут переданы библиотеке **Terser**. В этом примере следующие параметры были установлены:

- **toplevel**: **false** - не изменять имена функций и переменных в верхнем уровне, так же удаление неиспользуемых переменных и функций.
- **compress**: **{ unsafe: true }** - используется для минимизации размера бандла за счет преобразований стандартных функций и классов ECMAScript. Стандартные встроенные функции и классы ECMAScript были изменены или заменены в целях уменьшения размера бандла.
- **format**: **{ comments: false }** - не выводить комментарии в выходном файле.

```js
minifyOptions.terserOptions = {
	toplevel: false,
	compress: {
		unsafe: true,
	},
	format: {
		comments: false,
	},
};
```

### Объект **defineConfig**, который содержит конфигурацию сборки **Vite**. 

Cвойство **resolve** объекта **defineConfig** содержит параметр:

- **resolve**: содержит своство **alias** для облегчения маршрутизации экспорта/импорта файлов по проекту.

Cвойство **build** объекта **defineConfig** содержит следующие параметры:

- **rollupOptions**: **объект**, который содержит параметры сборки **Rollup**. Свойство **input** объекта **rollupOptions** содержит путь к файлу **src/index.ts**, который будет входной точкой. Свойство **output** объекта **rollupOptions** содержит параметры выходного файла. Формат выходного файла установлен на **iife**, а имя файла установлено на **widget-form-loader.min.js**.
- **...minifyOptions**: все остальные параметры конфигурации сборки **Vite**, которые будут переданы объекту **minifyOptions**.

```js
// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	build: {
		rollupOptions: {
			input: 'src/index.ts',
			output: {
				format: 'iife',
				entryFileNames: `next-form-loader.min.js`,
			},
		},
		...minifyOptions,
	},
});
```

Болле подробную документацию можно найти на официальном сайте [Vite](https://vitejs.dev/config/)