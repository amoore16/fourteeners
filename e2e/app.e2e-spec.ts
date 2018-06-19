import { FourteenerAppPage } from './app.po';

describe('fourteener-app App', function() {
  let page: FourteenerAppPage;

  beforeEach(() => {
    page = new FourteenerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
