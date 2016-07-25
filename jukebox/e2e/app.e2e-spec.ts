import { JukeboxPage } from './app.po';

describe('jukebox App', function() {
  let page: JukeboxPage;

  beforeEach(() => {
    page = new JukeboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
