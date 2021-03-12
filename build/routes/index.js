"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.default)();
router.get('/', (req, res) => (0, _utils.ok)(res, {
  status: res.statusCode,
  message: 'Welcome to Volunteer Spark API'
}));
var _default = router;
exports.default = _default;