import { HandsonPage } from './app.po';

describe('handson App', () => {
  let page: HandsonPage;

  beforeEach(() => {
    page = new HandsonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app sample!!');
  });
});
