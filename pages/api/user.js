// import { verify } from 'jsonwebtoken';
// import db from '../../lib/database';

// export const authenticated = (fn) => async (req, res) => {
//   verify(req.cookies.auth, secret, async function (err, decoded) {
//     if (err) {
//       return res.status(401).json({ message: 'Sorry you are not authenticated' });
//     }

//     req.userInfo = decoded;

//     return await fn(req, res);
//   });
// };

// export default authenticated(async function getUser(req, res) {
//   try {
//     const user = await db('SELECT * FROM users WHERE id=$1', [req.userInfo.sub]);

//     res.status(200).json(user.rows);
//   } catch (error) {}
// });
