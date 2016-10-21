import { RestPage } from './app.po';

describe('rest App', function() {
  let page: RestPage;

  beforeEach(() => {
    page = new RestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
