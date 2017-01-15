import { RxjsSamplePage } from './app.po';

describe('rxjs-sample App', function() {
  let page: RxjsSamplePage;

  beforeEach(() => {
    page = new RxjsSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
