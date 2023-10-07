import { FastifyInstance } from "fastify";

const plugin = async (fastify: FastifyInstance) => {
  const newInstance: import("fastify2").FastifyInstance = fastify;
};
