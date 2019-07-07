import * as React from "react";
import * as enzyme from "enzyme";
import Hello from "../StatefulHello";

it("renders the correct text when no enthusiasm level is givem", () => {
  const hello = enzyme.shallow(<Hello name="Daniel" />);
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!");
});

it("renders the correct text with an explicit enthusiasm level of 1", () => {
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1} />);
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!");
});

it("renders the correct text with an explicit enthusiasm level of 5", () => {
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!!!!!");
});

it("renders the correct text with an explicit enthusiasm level of 0", () => {
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={0} />);
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!");
});

it("throws when the enthusiasm level is negative", () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={-1} />);
  }).toThrow();
});
