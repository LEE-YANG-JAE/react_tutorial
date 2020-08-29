"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./entities/Post");
const constraints_1 = require("./constraints");
const path_1 = __importDefault(require("path"));
const Users_1 = require("./entities/Users");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/
    },
    entities: [Post_1.Post, Users_1.User],
    dbName: 'lireddit',
    user: 'postgres',
    password: '1234',
    type: 'postgresql',
    debug: !constraints_1.__prod__
};
//# sourceMappingURL=mikro-orm.config.js.map