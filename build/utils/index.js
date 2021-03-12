"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverError = exports.conflict = exports.notFound = exports.unAuthorized = exports.badRequest = exports.created = exports.ok = void 0;

var _Response = _interopRequireDefault(require("./Response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  ok,
  created,
  badRequest,
  unAuthorized,
  notFound,
  conflict,
  serverError
} = _Response.default;
exports.serverError = serverError;
exports.conflict = conflict;
exports.notFound = notFound;
exports.unAuthorized = unAuthorized;
exports.badRequest = badRequest;
exports.created = created;
exports.ok = ok;