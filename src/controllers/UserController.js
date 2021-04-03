/* eslint-disable camelcase */
import sequelize from 'sequelize';
import models from '../database/models';
import utils from '../utils/response';
import auth from '../src/utils/auth';

const { Op } = sequelize;

/**
 * @Module UserController
 * @description Controlls all the user based activity
 */
class UserController {
  /**
   * @static
   * @description Allows a user to sign up
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   * @returns {Object} object containing user data and access Token
   * @memberof UserController
   */
  static async VolunteerSignup(req, res) {
    const { email, password,  } = req.body;
    const existingUser = await models.User.findOne({
      where: {
        [Op.or]: [{ email }],
      },
    });
    if (existingUser) {
      return utils.errorStat(res, 409, 'User Already Exists');
    }
    const newUser = { ...req.body, password: auth.hashPassword(password) };
    const user = await models.User.create(newUser);
    const token = auth.generateToken({ id: user.id, email });
    return utils.successStat(res, 201, 'user', {
      id: user.id,
      token,
      email,
    });
  }

  /**
   * @static
   * @description Allows a user to sign in
   * @param {Object} req - Request object
   * @param {Object} res - Response object
   * @returns {Object} object containing user data and access Token
   * @memberof UserController
   */
  static async VolunteerLogin(req, res) {
    const { email, password } = req.body;
    const user = await models.User.findOne({ where: { email } });

    if (!user)
      return utils.errorStat(
        res,
        401,
        'User not found, check your login details',
      );
    const matchPasswords = auth.comparePassword(password, user.password);
    if (!matchPasswords) {
      return utils.errorStat(res, 401, 'Incorrect Login information');
    }
    return utils.successStat(res, 200, 'user', {
      id: user.id,
      token: await auth.generateToken({
        id: user.id,
        email: user.email,
      }),
      email: user.email,
    });
  }
}

export default UserController;
