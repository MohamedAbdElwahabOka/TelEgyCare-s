'use strict';

/**
 * receptionist service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::receptionist.receptionist');
