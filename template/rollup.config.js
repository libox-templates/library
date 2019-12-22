import typescript from "@rollup/plugin-typescript";

const config = {
  input: "./src/main.ts",
  plugins: [typescript()],
};

export default [
  // ESModule
  Object.assign({}, config, {
    output: {
      file: "dist/index.esm.js",
      format: "es",
    },
  }),

  // CommonJS
  Object.assign({}, config, {
    output: {
      file: "dist/index.common.js",
      format: "cjs",
      strict: false,
      exports: "named",
    },
  }),

  // UMD
  Object.assign({}, config, {
    output: {
      file: "dist/index.js",
      format: "umd",
      strict: false,
      exports: "named",
      name: "<%= libName %>",
    },
  }),
];
