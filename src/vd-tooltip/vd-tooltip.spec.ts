import { expect } from "chai";
import "mocha";
import { VdTooltip } from "./vd-tooltip";

describe("VdTooltip", () => {

  it("should initialize class", () => {
      const vdTooltip = new VdTooltip(document.body);
      expect(vdTooltip).to.be.instanceOf(VdTooltip);
  });

  it("should append stuff to body", () => {
    const vdTooltip = new VdTooltip(document.body);
    // tslint:disable-next-line:no-unused-expression
    expect(document.querySelector("body div").classList.contains("vd-tooltip")).to.be.true;
  });

});
