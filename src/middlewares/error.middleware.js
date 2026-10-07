export const notFound = (req, res) => {
  res.status(404).json({ status: 'error', message: 'Ruta no encontrada' });
};

export const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    status: 'error',
    message: err.message || 'Error interno del servidor'
  });
};
