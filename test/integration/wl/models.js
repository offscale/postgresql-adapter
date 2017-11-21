'use strict';

const Waterline = require('waterline');

module.exports = {
    NormalModel: Waterline.Collection.extend({
        identity: 'normalmodel',
        connection: 'edgetests',
        dynamicFinders: false,
        associationFinders: false,

        attributes: {
            id: { type: 'number', autoIncrement: true},
            name: 'string'
        }
    }),

    NoisyModel: Waterline.Collection.extend({
        identity: 'noisymodel',
        connection: 'edgetests',
        dynamicFinders: false,
        associationFinders: false,

        // noise
        description: 'hello',
        noise: {
            foo: 'bar'
        },

        attributes: {
            id: { type: 'number', autoIncrement: true},
            name: 'string',
            identity: 'string',
            attributes: 'json',
            //noise: 'json',
            description: 'string'
        }
    })
};
