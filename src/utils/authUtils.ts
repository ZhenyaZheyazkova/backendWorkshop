import jwt from 'jsonwebtoken';

export function generateToken(payload: any): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT secret is not defined.');
  }

  const token = jwt.sign(payload, secret, {
    expiresIn: '1d'
  });

  return token;
}
