const SideMenu = require('./SideMenu');

const LEFT = { component: { name: 'myLeftScreen' } };
const RIGHT = { component: { name: 'myRightScreen' } };
const SIDE_MENU = { left: LEFT, right: RIGHT };

describe('SideMenu', () => {
  it('parses SideMenu', () => {
    const uut = new SideMenu(SIDE_MENU);
    expect(uut.left).toEqual(LEFT);
    expect(uut.right).toEqual(RIGHT);
  });
});