import { Angular2Lesson3Page } from './app.po';

describe('angular2-lesson3 App', function() {
  let page: Angular2Lesson3Page;

  beforeEach(() => {
    page = new Angular2Lesson3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
