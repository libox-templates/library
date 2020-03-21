const <%= libName %> = {
  message: "Hey bro! I'm <%= libName %>",
  say() {
    return this.message;
  },
};

export default <%= libName %>;
