/**
 * @class Response
 * @description Contains http Response methods
 * @exports Response
 */
class Response {
  /**
   * @method ok
   * @description HTTP 200 Ok response
   * @param {object} res - The response object from express
   * @param {object} data - The data to be sent alongside the response
   * @returns {json} JSON server response
   */
  static ok(res, data) {
    return Response.success(res, 200, data);
  }

  /**
   * @method created
   * @description HTTP 201 Created response
   * @param {object} res - The response object from express
   * @param {object} data - The data to be sent alongside the response
   * @returns {json} JSON server response
   */
  static created(res, data) {
    return Response.success(res, 201, data);
  }

  /**
   * @method found
   * @description HTTP 302 Found (redirection response)
   * @param {object} res - The response object from express
   * @param {object} url - The url to redirect to
   * @returns {json} JSON server response
   */
  static foundRedirect(res, url) {
    return Response.redirect(res, 302, url);
  }

  /**
   * @method badRequest
   * @description HTTP 400 Bad Request response
   * @param {string} error - The error message to send in the response
   * @returns {json} JSON server response
   */
  static badRequest(error) {
    return Response.error(400, error);
  }

  /**
   * @method unAuthorized
   * @description HTTP 401 unauthorized response
   * @param {string} error - The error message to send in the response
   * @returns {json} JSON server response
   */
  static unAuthorized(
    error = 'The credentials provided does not match our records. Please confirm and try again',
  ) {
    return Response.error(401, error);
  }

  /**
   * @method forbidden
   * @description HTTP 403 forbidden response
   * @param {string} error - The error message to send in the response
   * @returns {json} JSON server response
   */
  static forbidden(error = 'Forbidden') {
    return Response.error(403, error);
  }

  /**
   * @method notFound
   * @description HTTP 404 Resource Not Found response
   * @param {string} error - The error message to send in the response
   * @returns {json} JSON server response
   */
  static notFound(error = 'Resource Not found') {
    return Response.error(404, error);
  }

  /**
   * @method conflict
   * @description HTTP 409 conflict response
   * @param {string} error - The error message to send in the response
   * @returns {json} JSON server response
   */
  static conflict(error) {
    return Response.error(409, error);
  }

  /**
   * @method serverError
   * @description HTTP 500 serverError response
   * @param {string} error - The error message to send in the response
   * @returns {json} JSON server response
   */
  static serverError(error) {
    return Response.error(500, error);
  }

  /**
   * @method success
   * @description A generic method to format success responses
   * @param {object} res - The response object from express
   * @param {number} status - The http status code
   * @param {object} data - The data to be formatted for the response
   * @returns {json} Formatted JSON server response
   */
  static success(res, status, data) {
    return res.status(status).json({ status, data });
  }

  /**
   * @method redirect
   * @description A generic method to format redirect responses
   * @param {object} res - The response object from express
   * @param {number} status - The http status code
   * @param {object} url - The url to redirect to
   * @returns {json} Formatted JSON server response
   */
  static redirect(res, status, url) {
    return res.status(status).redirect(url);
  }

  /**
   * @method error
   * @description A generic method to format error responses
   * @param {number} status - The http status code
   * @param {string} error - The error message to send in the response
   * @returns {json} Formatted JSON server response
   */
  static error(status, error) {
    throw new HttpError(status, error);
  }
}

export default Response;
