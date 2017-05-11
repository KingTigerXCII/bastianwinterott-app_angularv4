import { BastianwinterottAppPage } from './app.po';

describe('bastianwinterott-app App', () => {
  let page: BastianwinterottAppPage;

  beforeEach(() => {
    page = new BastianwinterottAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
