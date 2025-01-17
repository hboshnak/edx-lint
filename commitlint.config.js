// ***************************
// ** DO NOT EDIT THIS FILE **
// ***************************
//
// This file was generated by edx-lint: https://github.com/edx/edx-lint
//
// If you want to change this file, you must edit the central file in the
// edx-lint repo.
//
// Note: If your commitlint.config.js file is simply out-of-date relative to the latest
// commitlint.config.js in edx-lint, ensure you have the latest edx-lint installed
// and then run:
//
//       $ edx_lint write commitlint.config.js
//
//
// CENTRAL CHANGE:
//
// 1. Edit the commitlint.config.js file in the edx-lint repo at
//    https://github.com/edx/edx-lint/blob/master/edx_lint/files/commitlint.config.js
//
// 2. install the updated version of edx-lint (in edx-lint):
//
//       $ pip install .
//
// 3. Run (in edx-lint):
//
//       $ edx_lint write commitlint.config.js
//
// 4. Make a new version of edx_lint, submit and review a pull request with the
//    commitlint.config.js update, and after merging, update the edx-lint version and
//    publish the new version.
//
// 5. In your local repo, install the newer version of edx-lint.
//
// 6. Run:
//
//       $ edx_lint write commitlint.config.js
//
// 7. This will modify the local file.  Submit a pull request to get it
//    checked in so that others will benefit.
//
//
//
//
//
// STAY AWAY FROM THIS FILE!
//
//
//
//
//
// SERIOUSLY.
//
// ------------------------------
// Generated by edx-lint version: 5.1.0
// ------------------------------
module.exports = {
  extends: ['@commitlint/config-conventional'],

  helpUrl: 'https://open-edx-proposals.readthedocs.io/en/latest/oep-0051-bp-conventional-commits.html',

  rules: {
    'type-enum':
      [2, 'always', [
        'revert', 'feat', 'fix', 'perf', 'docs', 'test', 'build', 'refactor', 'style', 'chore', 'temp',
      ]],

    // Default rules we want to suppress:
    'body-leading-blank': [0, "always"],
    'body-max-line-length': [0, "always"],
    'footer-max-line-length': [0, "always"],
    'footer-leading-blank': [0, "always"],
    'subject-case': [0, "always", []],
    'subject-full-stop': [0, "never", '.'],
  },

  ignores: [
    // Allow GitHub revert messages, like:
    //    Revert "introduce a bug"
    //    Revert "introduce a bug" (#1234)
    message => /^Revert ".*"( \(#\d+\))?/.test(message),

    // BTW: commitlint has a built-in list of ignores which are also applied.
    // Those include the typical "Merged" messages, so those are implicitly ignored:
    // https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/is-ignored/src/defaults.ts
  ],
};
// 25bbb7d404b6e21bcd7fef46aa81127fed508467
