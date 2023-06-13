# getByRolePerfIssue

https://github.com/testing-library/dom-testing-library/issues/820

- With [jsdom](https://github.com/jsdom/jsdom):

```
> jest --verbose --no-cache

 PASS  src/Form.test.tsx
  ✓ getByText() (473 ms)
  ✓ getByRole() (1454 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.804 s
```

- With [Happy DOM](https://github.com/capricorn86/happy-dom):

```
> jest --verbose --no-cache

 PASS  src/Form.test.tsx
  ✓ getByText() (161 ms)
  ✓ getByRole() (150 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.834 s
```
