# Conker Client

Package to report learning actions in Rhubarb Education's bespoke online learning modules.

## Usage
```js
import { Conker, IConkerConfig } from 'conker-client';

const config: IConkerConfig = {
    endpoint: "https://example.test/xapi/",
    username: "username",
    password: "password",
}

Conker.init(config);

Conker.report(
    Conker.generateAnonymousAgentObject("https://example.com"), 
    Conker.verbs.COMPLETED, 
    Conker.generateCourseObject('https://example.com/course-1', 'Course 1', 'An example course.'),
);
```
