'use strict';

/**
 * @param  { string } property - property to be required
 * @return { function } middleware - a middleware for requiring a property
 */
exports.required = property => {
  return (req, res, next) => {
    if (!req.body.hasOwnProperty(property)) {
      res.status(400).send({ error: `${property} is missed !!`});
    }
    next();
  }
};

/**
 * @param  { string } property - property length needs to be checked
 * @param  { number } expLength - expected length
 * @return { function } middleware
 */
exports.checkFieldLength = (property, expLength) => {
  return (req, res, next) => {
    if (req.body.property.length != expLength) {
      res.status(400).send({ error: `${property} length isn't valid !!`});
    }
    next();
  }
};

