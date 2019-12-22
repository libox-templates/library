import <%= libName %> from "../src/main";

describe("<%= libName %>", () => {
  it("<%= libName %> has constructor", () => {
    expect(<%= libName %>.constructor).toBeTruthy();
  });

  it("<%= libName %> has correct name", () => {
    const wrapper = new <%= libName %>();

    expect(wrapper.name).toBe("<%= libName %>");
  });
});
