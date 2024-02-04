import ExploreDate from '../../e2e/Cypress - Automation Testing/pageObject/ExploreDataPage.cy';

Cypress.Commands.add("selectFutureDateRangeAndVerifyError", () => {
  ExploreDate.selectFutureDateRangeAndVerifyError();
});