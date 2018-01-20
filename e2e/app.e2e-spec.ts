import { PropPage } from './app.po';

describe('prop App', () => {
  let page: PropPage;

  beforeEach(() => {
    page = new PropPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
