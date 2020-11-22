"use strict";

exports.ok = function (res, msg, data) {
  var data = {
    success: true,
    message: msg,
    data,
  };
  res.status(200).send(data);
};
exports.err = function (res, msg, error_code) {
  var data = {
    success: false,
    message: msg,
    error_code: error_code,
  };
  res.status(error_code).send(data);
};
