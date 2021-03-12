"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

require("dotenv/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const jwtSecret = process.env.JWT_SECRET;
/**
 * @class AuthService
 * @description Defines standard helper methods for authentication
 * @exports AuthService
 */

class AuthService {
  /**
   * @method generateToken
   * @description Generates a json web token
   * @param {object} payload - The payload for generating the token
   * @returns {string} A string which is the token
   */
  static generateToken(payload) {
    return _jsonwebtoken.default.sign(payload, jwtSecret, {
      expiresIn: '7d'
    });
  }
  /**
   * @method verifyToken
   * @description Verifies that the token is valid
   * @param {String} token - The token to verify
   * @returns {JSON} JSON API Response
   */


  static verifyToken(token) {
    return _jsonwebtoken.default.verify(token, jwtSecret);
  }
  /**
   * @method hashString
   * @description Hashes a plain text string
   * @param {String} string - The plain text string to be hashed
   * @returns {string} The hash string
   */


  static hashString(string) {
    return _bcrypt.default.hashSync(string, 10);
  }
  /**
   * @method verifyHash
   * @description compares plain strings to hashed strings for authentication
   * @param {string} plainTextString - The plain text string to be verified
   * @param {string} hashedString - Stored hashed string to compare against
   * @returns {boolean} Booelean indicating success or failure
   */


  static verifyHash(plainTextString, hashedString) {
    return _bcrypt.default.compareSync(plainTextString, hashedString);
  }
  /**
   * @method authError
   * @description A simple authentication error
   * @returns {Error} A new error object with the auth error message
   */


  static authError() {
    return new Error('The phonenumber or password provided does not match our records. Please confirm and try again');
  }
  /**
  * @method validateToken
  * @description Ensures a valid token is provided
  * @param {object} headers - The headers Object containing (hopefully) the token to validate
  * @returns {string} returns the token
  */


  static validateToken(headers) {
    const {
      authorization
    } = headers;
    if (!authorization) return unAuthorized('Authentication header not provided');
    const splitToken = authorization.split(' ');
    if (splitToken.length !== 2) return unAuthorized('Malformed JWToken');
    return AuthService.verifyToken(splitToken[1]);
  }

}

var _default = AuthService;
exports.default = _default;