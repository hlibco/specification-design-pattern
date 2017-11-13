# Specification Design Pattern

"In computer programming, the **specification pattern** is a particular software design pattern, whereby business rules can be recombined by chaining the business rules together using boolean logic. The pattern is frequently used in the context of domain-driven design." - Wikipedia

https://en.wikipedia.org/wiki/Specification_pattern


### Commands

`yarn scripts` to list all scripts available

| yarn     | Description                                                               |
|----------|---------------------------------------------------------------------------|
| build    | (Trash and re)build the library                                           |
| cov      | Run tests and generate coverage report                                    |
| cov:html | Run tests, generate the HTML coverage report, and open it in a browser    |
| lint     | Lint all typescript source files                                           |
| tdd      | Watch source files, rebuild library on changes and run tests on watch mode |
| test     | Test source files without compiling                                        |
| unit     | Build the library, tests and run unit tests                               |


### Tests

`yarn test` to run all unit tests


### Debug
To debug TS files, on **VSCode** press **F5** and select `TS Source File` (this task is declared on `.vscode/launch.json`).
