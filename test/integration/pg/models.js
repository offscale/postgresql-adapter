'use strict';

const Waterline = require('waterline');

module.exports = {
    ArrayModel: Waterline.Collection.extend({
        identity: 'arraymodel',
        connection: 'edgetests',
        dynamicFinders: false,
        associationFinders: false,

        attributes: {
            id: { type: 'number', autoIncrement: true},
            list: {
                type: 'array'
            },
            listSyntaxA: {
                type: 'array',
                defaultsTo: '{}'
            },
            listOfObjects: {
                type: 'array',
                defaultsTo: []
            }
        },
        primaryKey: 'id'
    }),

    JsonModel: Waterline.Collection.extend({
        identity: 'jsonmodel',
        connection: 'edgetests',
        dynamicFinders: false,
        associationFinders: false,

        attributes: {
            id: { type: 'number', autoIncrement: true},
            json: {
                type: 'json'
            },
            jsonb: {
                type: 'json'
            },
            jsonbSyntaxA: {
                type: 'json',
                defaultsTo: '[]'
            },
            jsonbSyntaxB: {
                type: 'json',
                defaultsTo: '{}'
            }
        }
    })
};
