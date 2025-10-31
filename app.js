import express from 'express';
import turnosRoutes from './src/routes/turnos.route.js';

const app = express();

app.use(express.json());
app.use('/api/turnos', turnosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
