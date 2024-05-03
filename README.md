# getByRolePerfIssue

https://github.com/testing-library/dom-testing-library/issues/820

- With [jsdom](https://github.com/jsdom/jsdom) v20.0.0 (Jest v29.5.0):

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

- With jsdom v22.0.0 (Jest 30.0.0-alpha.3):

```
> jest --verbose --no-cache

 PASS  src/Form.test.tsx
  ✓ getByText() (497 ms)
  ✓ getByRole() (837 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.251 s
```

- With jsdom v24.0.0:

```
> jest --verbose --no-cache

 PASS  src/Form.test.tsx
  ✓ getByText() (500 ms)
  ✓ getByRole() (720 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.165 s
```

- With [Happy DOM](https://github.com/capricorn86/happy-dom) v9.20.3:

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

- With Happy DOM v14.7.1:

```
> jest --verbose --no-cache

 PASS  src/Form.test.tsx
  ✓ getByText() (268 ms)
  ✓ getByRole() (272 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.466 s
```
