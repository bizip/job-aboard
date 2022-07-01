import renderer from 'react-test-renderer';
import Header from '../Header';
import AboutHeader from '../AboutHeader';

describe('Test for all header components', () => {
  it('It should render Header component', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('It should render About Header component', () => {
    const tree = renderer.create(<AboutHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
