import { is } from "../src/utils";

describe("utils", () => {
  describe("is functions", () => {
    it("is.number return corrent value perfectly", () => {
      expect(is.number(0)).toBe(true);
      expect(is.number(10.1)).toBe(true);
      expect(is.number(NaN)).toBe(false);
      expect(is.number({})).toBe(false);
      expect(is.number(null)).toBe(false);
    });

    it("is.array return corrent value perfectly", () => {
      expect(is.array([])).toBe(true);
      expect(is.array(["", 1])).toBe(true);
      expect(is.array({})).toBe(false);
      expect(is.array(undefined)).toBe(false);
      expect(is.array(null)).toBe(false);
    });

    it("is.object return corrent value perfectly", () => {
      expect(is.object([])).toBe(false);
      expect(is.object(new Date())).toBe(false);
      expect(is.object({})).toBe(true);
      expect(is.object(null)).toBe(false);
    });
  });
});
