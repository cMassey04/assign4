import BasicForm from "./BasicForm.js";

test("BasicForm component initializes with empty state", () => {
  const wrapper = shallow(<BasicForm />);
  expect(wrapper.state()).toEqual({
    email: "",
    phoneNumber: "",
    emailValid: true,
    phoneNumberValid: true,
    entries: [],
  });
});
