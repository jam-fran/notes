import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Login } from './Login';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isClient) {
  describe('Login', function () {

    it('should show/hide error messages', function () {
      const error = 'This is not working';
      const wrapper = shallow(<Login loginWithPassword={() => {}}/>);

      wrapper.setState({ error });
      expect(wrapper.find('p').text()).toBe(error);

      wrapper.setState({ error: '' });
      expect(wrapper.find('p').length).toBe(0);
    });

    it('should call loginWithPassword with form data', function () {
      // const email = 'james@test.com';
      // const password = 'password123';
      // const spy = expect.createSpy();
      // const wrapper = shallow(<Login loginWithPassword={spy}/>);
      //
      // wrapper.find('input[name="email"]').instance().value = email;
      // wrapper.find('input[name="password"]').instance().value = password;
      //
      // wrapper.find('form').simulate('submit');
      //
      // expect(spy.calls[0].arguments[0]).toEqual({ email });
      // expect(spy.calls[0].arguments[1]).toBe(password);
    });

    it('should set loginWithPassword callback errors', function () {
      // const spy = expect.createSpy();
      // const wrapper = shallow(<Login loginWithPassword={spy}/>);
      //
      // wrapper.find('form').simulate('submit');
      //
      // spy.calls[0].arguments[2]({});
      // expect(wrapper.state('error').length).toNotBe(0);
    });

  });
}
