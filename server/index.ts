import express from 'express';
import apollo from 'config/apollo';
const app = express();
const port = process.env.PORT || 3001;

apollo.applyMiddleware({ app });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
