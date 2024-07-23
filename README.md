- Web app - allows editing and running of JavaScript and React code and text cells (collectively known as a 'book');
- CLI - command line utility to launch the local API
- Local API - serves up local web client as well as loading and saving of files to local computer.
- Public API (TBD) - serves public web client and allows transfer of code/text books to and from local APIs.

#### Built with:

- React
- TypeScript
- axios - simplifies http request
- localForage - provides fast, simple, async storage using IndexedDB
- esbuild - in-browser bundler of JavaScript/TypeScript, CSS, modules and more
- unpkg.com - a global CDN containing every npm package. Allows loading of any file in a package - npm.com CORS policy will not allow individual file downloads
- redux for state management
- redux-thunk for async action creators
- custom esbuild plugin - fetches all files for an npm package from unpkg.com (need because by default esbuild will try to import from filesystem (which doesn't exist in browser))
- Lerna CLI to manage multi-package project

