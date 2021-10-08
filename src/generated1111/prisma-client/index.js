"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Account",
    embedded: false
  },
  {
    name: "Operation",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Record",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}/${
    process.env["PRISMA_SERVICE"]
  }/${process.env["PRISMA_STAGE"]}`,
  secret: `${process.env["PRISMA_SERVICE_SECRET"]}`
});
exports.prisma = new exports.Prisma();
