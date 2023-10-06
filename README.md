Steps to reproduce the bug:

1. clone [this](https://github.com/TMaszko/ts-bug-package.git) repository and install its dependencies and run `npm link`.
2. install main project dependencies and run `npm link ts-bug-package`.
3. notice the error in the VSCode in the `index.ts` file or run `npm run build`.
