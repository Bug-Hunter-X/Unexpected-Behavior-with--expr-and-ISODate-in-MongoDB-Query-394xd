# MongoDB $expr and ISODate Unexpected Behavior

This repository demonstrates an uncommon bug encountered when using the `$expr` operator with `ISODate()` in a MongoDB query. The query aims to filter documents where a date field is greater than a specific date, but returns unexpected results due to a subtle date comparison issue.

The `bug.js` file contains the erroneous query, and `bugSolution.js` provides a corrected version.