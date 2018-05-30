import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Signup } from './Signup';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isClient) {
  describe('Signup', function () {

    it('should show/hide error messages', function () {
      const error = 'This is not working';
      const wrapper = shallow(<Signup createUser={() => {}}/>);

      wrapper.setState({ error });
      expect(wrapper.find('p').text()).toBe(error);

      wrapper.setState({ error: '' });
      expect(wrapper.find('p').length).toBe(0);
    });

    it('should call createUser with form data', function () {
      // const email = 'james@test.com';
      // const password = 'password123';
      // const spy = expect.createSpy();
      // const wrapper = shallow(<Signup createUser={spy}/>);
      //
      // wrapper.find('input[name="email"]').instance().value = email;
      // wrapper.find('input[name="password"]').instance().value = password;
      //
      // wrapper.find('form').simulate('submit');
      //
      // expect(spy.calls[0].arguments[0]).toEqual({ email, password });
    });

    it('should set error if short password', function () {
      // const email = 'james@test.com';
      // const password = '123          ';
      // const spy = expect.createSpy();
      // const wrapper = shallow(<Signup createUser={spy}/>);
      //
      // wrapper.find('input[name="email"]').instance().value = email;
      // wrapper.find('input[name="password"]').instance().value = password;
      //
      // wrapper.find('form').simulate('submit');
      //
      // expect(wrapper.state('error').length).toBeGreaterThan(0);
    });

    it('should set createUser callback errors', function () {
      // const password = 'password123'
      // const reason = 'This is why it failed';
      // const spy = expect.createSpy();
      // const wrapper = shallow(<Signup createUser={spy}/>);
      //
      // wrapper.find('input[name="password"]').instance().value = password;
      // wrapper.find('form').simulate('submit');
      //
      // spy.calls[0].arguments[1]({});
      // expect(wrapper.state('error').length).toNotBe(0);

      // spy.calls[0].arguments[1]({ reason });
      // expect(wrapper.state('error')).toBe(reason);
    });

  });
}
