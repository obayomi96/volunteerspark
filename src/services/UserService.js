import 'dotenv/config';
import Service from './Service';
import AuthService from './AuthService';
import models from '../database/models';
import { unAuthorized } from '../utils';
const { verifyHash, hashString } = AuthService;


/**
 * @class CustomerService
 * @description Defines standard operations to be performed on User objects
 * @exports CustomerService
 */

 class UserService extends Service {
   /**
   * @description Create a UserService
   * @param {object} Customer - The customer model
   */
  constructor(Customer) {
    super(Customer);
    this.findByPhonenumber = this.findByPhonenumber.bind(this);
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }
  /**
   * @method create
   * @description Creates a new user
   * @param {object} details - The user details
   * @param {object} uniqueAttributes - an object containing unique attributes
   * @param {object} user - The initiator of the request
   * @returns {object} Returns the newly created resource
   */
  async create(details, uniqueAttributes) {
    const createdUser = await super.create(details, uniqueAttributes);
    return UserService.serialize(createdUser.dataValues);
  }

    /**
   * @method findAll
   * @description Fetches all users
   * @returns {object} Returns the found users
   */
  async findAll() {
    const customers = await this.Model.findAll();
    return customers.map((customer) => UserService.serialize(customer.dataValues));
  }

  /**
   * @method findById
   * @description Finds a user by their ID
   * @param {number} id - The ID of the user to find
   * @returns {object} Returns the found user
   */
  async findById(id) {
    const customer = await super.findById(id);
    return !customer ? null : UserService.serialize(customer.dataValues);
  }

  /**
   * @method findByPhonenumber
   * @description Finds a user with the given phonenumber
   * @param {string} phonenumber - The phonenumber of the user to find
   * @returns {object} Returns the found User
   */
  findByPhonenumber(phonenumber) {
    return this.Model.findOne({
      where: { phonenumber }
    });
  }

  /**
   * @method login
   * @description Logs in a user and returns relevant data
   * @param {object} credentials - The phonenumber and password of the user to login
   * @returns {object} Returns the logged in user details and a token
   */
  async login({ phonenumber, password }) {
    const user = await this.findByPhonenumber(phonenumber);
    if (!user) return unAuthorized();
    if (!verifyHash(password, user.password)) return unAuthorized();
    return UserService.serialize(user.dataValues);
  }

  
    /**
   * @method signup
   * @description Signs up a new user and returns relevant data
   * @param {object} credentials - The details of the user to signup
   * @returns {object} Returns the logged in user details and a token
   */
  async signup({ firstname, lastname, phonenumber, identificationNumber, gender, dob, password }) {
    try {
      await this.create(
        {
          firstname,
          lastname,
          phonenumber,
          identificationNumber,
          gender,
          password: hashString(password, 10),
          role: 'customer',
          dob,
          isActive: false,
        },
        { phonenumber },
      );

      const User = await this.findByPhonenumber(phonenumber);
      
      return UserService.serialize(user.dataValues);
    } catch (error) {
      throw unAuthorized(error.message);
    }
  }

    /**
   * @method serialize
   * @description Serializes the user object
   * @param {Object} customer - The user object to serialize (excluding password)
   * @returns {Object} Returns the serialized user object
   */
  static serialize(customer) {
    const serializedUser = customer;
    delete serializedUser.password;
    return serializedUser;
  }

  // =========== DONE
 }

 export default new UserService(models.Customer);
