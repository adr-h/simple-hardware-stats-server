import { app, port } from './server.ts';

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
