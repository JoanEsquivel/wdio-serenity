# WDIO + Serenity JS 📝

Import your existing Readme using the import button at the bottom,
or create a new Readme from scratch by typing in the editor.

Extracted from documentation: https://serenity-js.org/handbook/getting-started/serenity-js-with-webdriverio/

- Run the command: `npm init wdio . `
- Select the framework: `Mocha with Serenity/JS (https://serenity-js.org/)`
- To run your tests, execute:
  - `$ cd E:path\wdio-serenity `
  - ` $ npm run serenity`

### What is Serenity JS?

Serenity/JS is a full-stack acceptance testing framework. Its modular design enables you to create test scenarios interacting with any interface of your system while reducing the number of dependencies you need.

### Screenplay pattern

The Screenplay Pattern is an innovative, user-centred approach to writing high-quality automated acceptance tests. It steers your team towards effectively using layers of abstraction, helps your test scenarios capture the business vocabulary of your domain, and encourages good testing and software engineering habits.
More info at documentation: https://serenity-js.org/handbook/design/screenplay-pattern/

### Five elements of the Screenplay pattern

Following the Screenplay Pattern helps you capture:

1. Who the actors interacting with your system are
2. Why they interact with your system
3. What they need to do to accomplish their goals
4. How exactly they would go about that

The five building blocks of the Screenplay Pattern are:

- Actors, who represent people and external systems interacting with the system under test
- Abilities, that act as thin wrappers around any integration libraries required to interact with the system under test
- Interactions, which represent the low-level activities an actor can perform using a given interface
- Tasks, used to model sequences of activities as meaningful steps of a business workflow in your domain
- Questions, used to retrieve information from the system under test and the test execution environment
  https://serenity-js.org/handbook/design/screenplay-pattern/#the-five-elements-of-the-screenplay-pattern

### Assertions and expectations

Serenity/JS helps you model your test scenarios from the perspective of actors performing activities to accomplish their goals. Assertions follow this same consistent approach, with any assertions expressed using the interaction to Ensure.

The interaction to Ensure has two flavours:

- `Ensure.that`, which makes the actor evaluate the expectation, and fails immediately if its condition is not met,
- `Ensure.eventually`, which keeps evaluating the expectation until the condition is met, or the interaction timeout expires.

More info at: https://serenity-js.org/handbook/design/assertions/
