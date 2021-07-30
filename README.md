# Analytics JS

Use this package to report learning actions in Rhubarb Education online learning modules.

## Usage
```js
import { reportAction, clearActionData } from 'analytics-js';

// Report course action
reportAction('ID', 'ACTION', {})

// Clear local action data
clearActionData();
```

### Actions
`COMPLETE_MODULE` - The learner has finished the module.

`FINAL_SLIDE` - The learner has viewed the final slide in the module.

`NEXT_SLIDE` -  The learner has proceeded onto the next slide.

`PREVIOUS_SLIDE` - The learner has gone back to the previous slide.

`GOTO_SLIDE` - The learner has jumped to a particular slide.
