const notImplemented = (req, res) => {
  res.status(501).json({ status: 'error', message: 'No implementado' });
};

export const register = notImplemented;
export const login = notImplemented;
