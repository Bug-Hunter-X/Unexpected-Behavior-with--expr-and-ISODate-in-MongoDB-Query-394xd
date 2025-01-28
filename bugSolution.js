```javascript
//The solution is to use $dateToString to ensure consistent date comparison
const query = {"$expr": {"$gt": [ {"$dateToString": {format: "%Y-%m-%dT%H:%M:%SZ", date: "$date"}}, "2023-10-26T12:00:00Z"]}};

db.collection.find(query);
```