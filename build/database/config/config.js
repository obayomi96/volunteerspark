"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.production = exports.test = exports.development = void 0;

require("dotenv/config");

const development = {
  use_env_variable: 'DATABASE_URL',
  logging: false,
  dialect: 'postgres'
};
exports.development = development;
const test = {
  use_env_variable: 'TEST_DATABASE_URL',
  logging: false,
  dialect: 'postgres'
};
exports.test = test;
const production = {
  use_env_variable: 'DATABASE_URL',
  logging: false,
  dialect: 'postgres'
};
exports.production = production;