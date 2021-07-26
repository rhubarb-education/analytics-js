# Analytics JS

Use this package to report learning actions in Rhubarb Education online learning modules.

## Usage
```js
import { reportAction, clearActionData } from 'analytics-js';

// Report course completion
reportAction('ID', 'COMPLETE_MODULE', {})

// Clear local action data
clearActionData();
```