import { AuthService } from '../services';
import { unAuthorized } from '../utils';

/**
 * @class Authorization
 * @description Contains methods for user authorization
 * @exports Authorization
 */
class Authorization {
  /**
   * @method verifyUser
   * @description verifies the user token
   * @param {object} req - The Request Object
   * @param {object} _res - The Response Object
   * @param {function} next - The next function to pass control to the next middleware
   * @returns {JSON} JSON API Response
   */
  static verifyUser(req, res, next) {
    try {
      req.user = AuthService.validateToken(req.headers);
      return next();
    } catch (error) {
      console.error('Auth error: ', error);
      throw unAuthorized('Invalid or expired token');
    }
  }

  /**
   * @method verifyAdmin
   * @description verifies the admin user token
   * @param {object} req - The Request Object
   * @param {object} _res - The Response Object
   * @param {function} next - The next function to pass control to the next middleware
   * @returns {JSON} JSON API Response
   */
  static verifyAdmin(req, res, next) {
    try {
      req.user = AuthService.validateToken(req.headers);
      if (req.user.role !== 'super_admin') {
        throw unAuthorized('Unauthorized user, contact Admin!')
      } else {
        return next();
      }
    } catch (error) {
      console.error('Auth error: ', error);
      throw unAuthorized('Authorization Error');
    }
  }
}

export default Authorization;
