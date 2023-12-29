# Introduction

> Welcome to the project documentation "Loader for NextFormJs"(hereafter short as: **Loader**) ! 


{% hint style="working" %}

Current project (NextFormJs/loader) is one of part **"NextFormJs"** and developed to interact with the other two projects:

1) [NextFormJs/jsons](https://docs-nextformio-scheme.netlify.app/)

2) NextFormJs/player
{% endhint %}

### Project requirements

To run this project code locally you need [Node.js](https://nodejs.org/en/download) (v. ^18*) with package manager NPM, TypeScript.
Code written on TypeScript. Used Vite build tool with these [configurations](VITECONFIG.md).

### Download the project:

{% include "helpers/copy-git.html" %}

### What is the current project for?


**Loader** needs to download data **config.modules** from {% include "helpers/jsonsLink.md" %} for further connection of the assembled bundle from the current project (NextFormJs/loader) in {% include "helpers/playerLink.md" %}, as well as module settings, including the date selection module (datepicker) for a web-page.
This documentation describes the **Loader** project code. The code is part of a larger **"NextFormJs"** project, associated with loading and initializing the `next-form` widget , which consists of:

1) {% include "helpers/jsonsLink.md" %} - description of form fields, localization.

2) NextFormJs/loader - current documentation.

3) {% include "helpers/playerLink.md" %} - takes {% include "helpers/jsonsLink.md" %} and **Loader** (current documentation), processes the data and renders the finished **html form**.

### What is he doing 

Performs basic functions:

- Uploading files: **Loader** used to load the necessary JavaScript and CSS files that are required for the operation of the **datepicker** module and other modules at the user's discretion. For [datepicker](modules/list/datepicker/DATEPICKERLOADER.md), the **datepicker-full.min.js** script file and **datepicker.min.css** style file are loaded.
- Loading localizations: **Loader** is also used to load localization files for different languages, which allow modules to be adapted to the site language.
- Integration with modules: **Loader** interacts with other modules on the page to ensure proper integration and configuration within the web application.
- Dynamic loading: **Loader** can be a useful tool for dynamically loading resources on a page, which is especially useful if certain functions or modules need to be loaded only under certain conditions or user actions.

The code also performs the following steps:

- Getting the widget's form and extracting [parameters](params-worker/PARAMSWORKERTYPES.md) from the form's [attributes] (ATTRIBUTES.md).
- Checking parameters for [validity](params-worker/PARAMSWORKERTYPES.md).
- Obtaining [schema and locale](https://docks-scheme-demo.netlify.app/) information for module implementation.
- Sending schema and locales data to a widget application ({% include "helpers/playerLink.md" %}).
- Saving the schema in [storage](bridge/BRIDGE.md) for use when initializing modules.
- Initializing a container for DOM files.
- [Loading modules](modules/loader/MODULELOADER.md).
- Implementation of [bundles of js files](injectors/BUNDLEINJECTOR.md) (packages) and [css styles](injectors/STYLEINJECTORDOM.md).
- Data processing to work with multiple forms within one HTML page. 
- This code is the entry point for loading and initializing the form widget.
