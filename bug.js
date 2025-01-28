```javascript
const query = { "$expr": { "$gt": ["$date", ISODate("2023-10-26T12:00:00Z")] } };

db.collection.find(query);
```