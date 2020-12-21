import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import MenClothes from '../../../../pages/collection/men/clothes';

global.JSON.parse = jest.fn(() => {
  return [
    {
      // Mock data
      category_id: 4,
      id: 22,
      image1:
        'https://images-na.ssl-images-amazon.com/images/I/71iZLvsksPL._AC_SX679_.jpg',
      image2:
        'https://images-na.ssl-images-amazon.com/images/I/71dVI6zFlGL._AC_SX679_.jpg',
      image3:
        'https://images-na.ssl-images-amazon.com/images/I/71ygqTJYo9L._AC_SX679_.jpg',
      price: 20.09,
      product_name: "Ladies Purse, Women's Wallet",
    },
  ];
});
configure({ adapter: new Adapter() });

describe('MenClothes Component', () => {
  const wrapper = shallow(<MenClothes />);

  it('expect to render MenClothes component', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
