import { FastifyInstance } from "fastify";

const plugin = async (fastify: FastifyInstance) => {
  const newInstance: import("ts-bug-package/node_modules/fastify").FastifyInstance =
    fastify;
};
